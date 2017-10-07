(ns api-test.handler
  (:require  [api-test.db.core :as db]
             [api-test.config :refer [environment]]
             [buddy.auth.backends :as backends]
             [buddy.auth :refer [authenticated? throw-unauthorized]]
             [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
             [buddy.sign.jwt :as jwt]
             [clj-time.core :as clj-time]
             (clj-time [format :as timef] [coerce :as timec])
             [compojure.core :refer :all]
             [compojure.handler :as compojure-handler] 
             [compojure.route :as route]
             [hiccup.core :as hiccup]
             [hiccup.form :refer [form-to text-field password-field submit-button]]
             [selmer.parser :refer [render-file]]
             [mount.core :as mount]
             [ring.middleware.defaults :refer :all]
             [ring.middleware.json :as json-middleware]
             [ring.middleware.resource :refer :all]
             [ring.util.response :refer :all]
  ))

(mount/start)

(defn redirect-with-token [token]
  (assoc (redirect "/") :cookies {"token" {:value token :http-only true}})) ; make ":secure true" when I've got SSL.

(defn sign-jwt-token [{:keys [id username]}]
  (jwt/sign {:id id :username username} (environment :secret-key)))

(defroutes app-routes
  (GET "/" request 
    (if (authenticated? request) 
      (render-file "templates/index.html" {})
      (redirect "/login")))

  (GET "/data" request
    (if (authenticated? request)
      {:status 200 :body {:data (get request :identity)}}
      {:status 401 }))

  (GET "/chats" request 
    (let [person-id ((get request :identity) :id)
          chats (db/get-chats {:person-id person-id})
          contact-chats (filter #(not= (:person-id %) person-id) (db/get-contact-chats {:person-id person-id}))
          self-chat (db/get-self-chat {:person-id person-id}) 
          all-contact-chats (conj contact-chats self-chat) 
          any-contact-chats?  (< 0 (count (filter some? all-contact-chats))) ]

      {:status 200 :body {:chats chats :contact-chats (if any-contact-chats? all-contact-chats [])  }}))

  (POST "/chats" request
    (let [{:keys [name is-private]} (:body request)
          person-id ((get request :identity) :id)
          chat-id (:id (db/add-chat! {:name name :is-private is-private :is-self-chat false}))]

      (db/add-chat-permission! {:chat-id chat-id :person-id person-id})

      {:status 201 :body {:chat {:chat-id chat-id :name name :is-private is-private}}}))

  (POST "/people/:contact-id/chats" request
        (let [person-id ((get request :identity) :id)
              contact-id (Integer/parseInt (get-in request [:route-params :contact-id]))
              is-self-chat (= person-id contact-id)]

          (println "contact-id " contact-id)
          (println "is-self-chat " is-self-chat)
          (println "person-id " person-id)

          (if is-self-chat 
            (let [self-chat-exists? (db/self-chat-exists? {:person-id person-id})]
              (if (some? self-chat-exists?)
                  {:status 400 }
                (do 
                  (let [chat-id (:id (db/add-chat! {:organisation-id 1 :name "" :is-private true :is-self-chat is-self-chat :is-direct-message true :is-group-direct-message false}))
                        username ((get request :identity) :username) ]

                    (db/add-chat-permission! {:chat-id chat-id :person-id person-id}) 
                    {:status 201 :body {:chat {:chat-id chat-id :is-self-chat is-self-chat :person-id person-id :username username  }}}))))

            (let [contact-chat-exists? (db/contact-chat-exists? {:person-id person-id :contact-id contact-id})]
              (if (some? contact-chat-exists?)
                {:status 400 }

                (let [chat-id (:id (db/add-chat! {:organisation-id 1 :name "" :is-private true :is-self-chat is-self-chat :is-direct-message true :is-group-direct-message false}))
                      contact-username (:username (db/get-person-by-id {:person-id contact-id}))]

                  (db/add-chat-permission! {:chat-id chat-id :person-id person-id})
                  (db/add-chat-permission! {:chat-id chat-id :person-id contact-id})
                  

                  {:status 201 :body {:chat {:chat-id chat-id :username contact-username :person-id contact-id :is-self-chat is-self-chat }} }))))))

  (POST "/users" request
    (let [username (get-in request [:params :username])
          password (get-in request [:params :password])]
          
      (if (some? (db/get-person-by-username {:username username} ))
        {:status 400 :body {:error "A user with that username exists already"}}
        (do
          (let [user (db/add-person! {:username (clojure.string/trim username) :password password})]
            (db/add-person-to-organisation! {:organisation-id 1 :person-id (:id user)})
            (redirect-with-token (sign-jwt-token user)))))))


  (GET "/chats/:chat-id/messages" request
    (when (authenticated? request)
      (let [person-id (get-in request [:identity :id])
           chat-id (Integer/parseInt (get-in request [:route-params :chat-id]))
           messages (into [] (db/get-messages-by-chat {:chat-id chat-id :person-id person-id} ))]

      {:status 200 :body {:chat-id chat-id :messages messages }})))

  (GET "/contacts" request
    (when (authenticated? request)
      (let [person-id (get-in request [:identity :id])
        contacts (db/get-contacts-by-organisation {:organisation-id 1})]  ; hard-code "1" as org for now.

        {:status 200 :body {:contacts contacts }})))

  (POST "/chats/:chat-id/messages" request
    (when (authenticated? request)
      (let [message (get-in request [:body :message])
            person-id (get-in request [:identity :id])
            chat-id (Integer/parseInt (get-in request [:route-params :chat-id]))
            timestamp (timec/to-timestamp (clj-time/now))
            id (:id (db/add-message! {:chat-id chat-id :person-id person-id :message message :timestamp timestamp})) ] ; need to add a check that the user actually is authorised to post to this chat.

        {:status 201 :body {:message {:id id :message message :chat-id chat-id :username (get-in request [:identity :username]) :timestamp timestamp } }})))

  (POST "/login" request
        (let [username (get-in request [:params :username])
              password (get-in request [:params :password])
              get-password (db/get-person-password-by-username {:username username})
              found-password (and get-password (get-password :password))
              person (db/get-person-by-username {:username username})]

           (if (and (some? found-password) (= password found-password))
             (redirect-with-token (sign-jwt-token person))
             {:status 401 :body {:desc "wrong password"}})))

  (GET "/login" request
    (if (authenticated? request)
        (redirect "/")
     (hiccup/html 
       (form-to [:post "/login"]
          [:h2 "Sign in"]
          (text-field {:placeholder "username"} "username")
          (password-field {:placeholder "password"} "password")
          (submit-button "login"))

       (form-to [:post "/users"]
          [:h2 "Sign up"]
          (text-field {:placeholder "username"} "username")
          (password-field {:placeholder "password"} "password")
          (submit-button "signup")))
    ))

  (route/not-found "Not Found"))

(defn set-authorisation-header-from-cookie [handler] ; this must check expiry timestamp of JWT token at some point.
  (fn [request]
    (if-let [token (get-in request [:cookies "token" :value])]
      (handler (assoc-in request [:headers "authorization"] (str "Token " token)))
      (handler request))))

(defn my-unauthorized-handler [request metadata] {:status 403})

(def jwt-token-backend (backends/jws 
  {:secret (environment :secret-key) :unauthorized-handler my-unauthorized-handler}))

(defn print-identity-in-request [handler] ; debug
  (fn [request]
    (println "identity: " (get request :identity))
    (handler request)))

(def app
  (-> app-routes
    (print-identity-in-request)
    (wrap-authentication jwt-token-backend)
    (wrap-authorization jwt-token-backend)
    (set-authorisation-header-from-cookie)
    (compojure-handler/site)
    (wrap-resource "public")
    (json-middleware/wrap-json-body {:keywords? true})
    json-middleware/wrap-json-response))


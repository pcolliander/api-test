(ns api-test.handler
  (:require  [api-test.db.core :as db]
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
             [selmer.parser :refer [render-file]]
             [mount.core :as mount]
             [ring.middleware.defaults :refer :all]
             [ring.middleware.json :as json-middleware]
             [ring.middleware.resource :refer :all]
             [ring.util.response :refer :all]
  ))

(use 'hiccup.form)
(def secret "mysecret")

(mount/start)

(defn redirect-with-token [token]
  (assoc (redirect "/") :cookies {"token" {:value token :http-only true}})) ; make ":secure true" when I've got SSL.

(defn sign-jwt-token [{:keys [id username]}]
  (jwt/sign {:id id :username username } secret))

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
    (let [user-id ((get request :identity) :id)
          chats (db/get-chats {:user_id user-id})]
       
    {:status 200 :body {:chats chats}}))

  (POST "/chats" request
    (let [{:keys [name is-private]} (:body request)
          user-id ((get request :identity) :id)
          chat-id (:id (db/add-chat! {:name name :is-private is-private}))]

      (db/add-chat-permission! {:chat_id chat-id :user_id user-id})
      {:status 201 :body {:chat {:chat-id chat-id :name name :is-private is-private}}}))

  (POST "/users" request
    (let [username (get-in request [:params :username])
          password (get-in request [:params :password])]
          
      (if (some? (db/get-user-by-username {:username username} ))
        {:status 400 :body {:error "A user with that username exists already"}}
        (do
          (db/create-user! {:username (clojure.string/trim username) :password password})
          (let [user (db/get-user-by-username {:username username})]
            (redirect-with-token (sign-jwt-token user)))))))


  (GET "/chats/:chat-id/messages" request
    (if (authenticated? request)
      (let [user-id (get-in request [:identity :id])
           chat-id (Integer/parseInt (get-in request [:route-params :chat-id]))
           messages (into [] (db/get-messages-by-chat {:chat-id chat-id :user-id user-id} ))]

      {:status 200 :body {:chat-id chat-id :messages messages }}
  )))

  (GET "/contacts" request
    (if (authenticated? request)
      (let [user-id (get-in request [:identity :id])
        contacts (db/get-contacts-by-chat-permissions {:user-id user-id})]
        {:status 200 :body {:contacts contacts }})))

  (POST "/chats/:chat-id/messages" request
    (if (authenticated? request)
      (let [message (get-in request [:body :message])
            user-id (get-in request [:identity :id])
            chat-id (Integer/parseInt (get-in request [:route-params :chat-id]))
            timestamp (timec/to-timestamp (clj-time/now))
            id (:id (db/add-message! {:chat-id chat-id :user-id user-id :message message :timestamp timestamp})) ]

        {:status 201 :body {:message {:id id :message message :chat-id chat-id :username (get-in request [:identity :username]) :timestamp timestamp } }})))

  (POST "/login" request
        (let [username (get-in request [:params :username])
              password (get-in request [:params :password])
              get-password (db/get-user-password-by-username {:username username})
              found-password (and get-password (get-password :password))
              user (db/get-user-by-username {:username username})]

           (if (and (some? found-password) (= password found-password))
             (redirect-with-token (sign-jwt-token user))
             {:status 401 :body {:desc "wrong password"}}
           )))

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

; this must check expiry timestamp of JWT token at some point.
(defn set-authorisation-header-from-cookie [handler]
  (fn [request]
    (if-let [token (get-in request [:cookies "token" :value])]
      (handler (assoc-in request [:headers "authorization"] (str "Token " token)))
      (handler request))))

(defn my-unauthorized-handler [request metadata] {:status 403})

(def jwt-token-backend (backends/jws 
  {:secret secret :unauthorized-handler my-unauthorized-handler}))

(def app
  (-> app-routes
    (wrap-authentication jwt-token-backend)
    (wrap-authorization jwt-token-backend)
    (set-authorisation-header-from-cookie)
    (compojure-handler/site)
    (wrap-resource "public")
    (json-middleware/wrap-json-body {:keywords? true})
    json-middleware/wrap-json-response))


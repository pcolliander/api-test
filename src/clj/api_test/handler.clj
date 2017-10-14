(ns api-test.handler
  (:require  [api-test.config :refer [environment]]
             [api-test.services.auth :refer [sign-jwt-token]]
             [api-test.services.chat :as chat-service]
             [api-test.services.contact :as contact-service]
             [api-test.services.message :as message-service]
             [api-test.services.people :as people-service]
             [buddy.auth.backends :as backends]
             [buddy.auth :refer [authenticated? throw-unauthorized]]
             [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
             [buddy.sign.jwt :as jwt]
             [clj-time.core :as time]
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
             [ring.util.response :refer :all]))

(mount/start)

(defn- redirect-with-token [token]
  (assoc (redirect "/") :cookies {"token" {:value token :http-only true}})) ; make ":secure true" when I've got SSL.

(defroutes app-routes
  (GET "/" request
    (if (authenticated? request)
      (render-file "templates/index.html" {})
      (redirect "/login")))

  (GET "/self" request
    (if (authenticated? request)
      {:status 200 :body {:data (get request :identity)}}
      {:status 401 }))

  (GET "/chats" request
    (if (authenticated? request)
      (let [person (:identity request)
       {:keys [chats contact-chats self-chat]} (chat-service/get-all person)]

      {:status 200 :body {:chats chats :contact-chats contact-chats :self-chat self-chat }})))

  (POST "/chats" request
    (if (authenticated? request)
      (let [{:keys [name is-private]} (:body request)
            person (:identity request)
            chat-id (chat-service/add-chat person is-private name)]

        {:status 201 :body {:chat {:chat-id chat-id :name name :is-private is-private}}})))

  (POST "/contacts/:contact-id/chats" request
        (let [person (:identity request)
              contact-id (Integer/parseInt (get-in request [:route-params :contact-id]))
              organisation-id 1
              {:keys [ok? error-message chat-id username person-id is-self-chat]} (chat-service/add-contact-chat person contact-id organisation-id)]

    (if ok?
      {:status 201 :body {:chat {:chat-id chat-id :username username :person-id contact-id :is-self-chat is-self-chat }}}
      {:status 400 :body {:error error-message}})))


  (GET "/chats/:chat-id/messages" request
    (when (authenticated? request)
      (let [person (:identity request)
            chat-id (Integer/parseInt (get-in request [:route-params :chat-id]))
            messages (message-service/get-by-chat chat-id person)]

      {:status 200 :body {:chat-id chat-id :messages messages }})))

  (GET "/contacts" request
    (when (authenticated? request)
      (let [person (:identity request)
            contacts (contact-service/get-all person)]

        {:status 200 :body {:contacts contacts}})))

  (POST "/chats/:chat-id/messages" request
    (when (authenticated? request)
      (let [message (get-in request [:body :message])
            person (:identity request)
            chat-id (Integer/parseInt (get-in request [:route-params :chat-id]))  ; can this be done simpler?
            {:keys [id timestamp]} (message-service/add-one person chat-id  message)]

        {:status 201 :body {:message {:id id :message message :chat-id chat-id :username (:username person) :timestamp timestamp } }})))

  ; LOGIN / SIGNUP
  (POST "/signup" [username password]
    (let [organisation-id 1 ; hard-coded for now.
         {:keys [ok? person error-message]} (people-service/signup username password organisation-id)]

      (if ok?
        (redirect-with-token (sign-jwt-token (assoc person :organisation-id organisation-id)))
        {:status 400 :body {:error error-message}} )))

  (POST "/login" [username password]
    (let [{:keys [ok? person error-message]} (people-service/login username password)]

      (if ok?
        (redirect-with-token (sign-jwt-token person))
        {:status 401 :body {:error error-message}})))

  (GET "/login" request
    (if (authenticated? request)
        (redirect "/")
     (hiccup/html
       (form-to [:post "/login"]
          [:h2 "Sign in"]
          (text-field {:placeholder "username"} "username")
          (password-field {:placeholder "password"} "password")
          (submit-button "login"))

       (form-to [:post "/signup"]
          [:h2 "Sign up"]
          (text-field {:placeholder "username"} "username")
          (password-field {:placeholder "password"} "password")
          (submit-button "signup")))
    ))

  (route/not-found "Not Found"))

(defn- set-authorisation-header-from-cookie [handler]
  (fn [request]
    (if-let [token (get-in request [:cookies "token" :value])]
      (handler (assoc-in request [:headers "authorization"] (str "Token " token)))
      (handler request))))

(defn- my-unauthorized-handler [request metadata] {:status 403})

(def jwt-token-backend (backends/jws
  {:secret (environment :secret-key) :unauthorized-handler my-unauthorized-handler}))

(defn- print-identity-in-request [handler] ; debug
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


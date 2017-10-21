(ns api-test.handler
  (:require  [api-test.config :refer [environment]]
             [api-test.routes.chat :refer [chat-routes]]
             [api-test.routes.contact :refer [contact-routes]]
             [api-test.routes.message :refer [message-routes]]
             [api-test.routes.self :refer [self-routes]]
             [api-test.routes.public :refer [public-routes]]
             [api-test.routes.websockets :refer [websocket-routes]]

             [buddy.auth :refer [authenticated?]]
             [buddy.auth.accessrules :refer [restrict]]
             [buddy.auth.backends :as backends]
             [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]

             [compojure.core :refer [defroutes wrap-routes routes]]
             [compojure.route :as route]

             [immutant.web :as web]
             [immutant.web.middleware :refer [wrap-development]]
             [mount.core :as mount]
             [ring.middleware.params :refer [wrap-params]]
             [ring.middleware.cookies :refer [wrap-cookies]]
             [ring.middleware.json :as json-middleware]
             [ring.middleware.resource :refer [wrap-resource]] ))

(mount/start)

(defn- print-identity [handler] ; debug
  (fn [request]
    (println)
    (println "identity: " (:identity request))
    (println "authenticated? " (authenticated? request))
    ;; (println "req " request)
    (println)
    (handler request)))

(defn- set-authorisation-header-from-cookie [handler]
  (fn [request]
    (if-let [token (get-in request [:cookies "token" :value])]
      (handler (assoc-in request [:headers "authorization"] (str "Token " token)))
      (handler request))))

(defn- my-unauthorized-handler [request metadata] 
  {:status 401})

(defn- wrap-restricted [handler]
  (restrict handler {:handler authenticated?
                     :on-error my-unauthorized-handler}))

(def jwt-token-backend (backends/jws {:secret (environment :secret-key) }))

(defroutes secured-routes
  chat-routes contact-routes message-routes self-routes)

(defroutes app-routes 
  public-routes
  (-> (routes secured-routes websocket-routes)
    (wrap-routes wrap-restricted))
  (route/not-found "Not Found"))

(def app
  (-> app-routes
    (wrap-development)
    ;; (print-identity)

    (wrap-authentication jwt-token-backend)
    (set-authorisation-header-from-cookie)
    (wrap-cookies)
    (wrap-params)
    (wrap-resource "public")
    (json-middleware/wrap-json-body {:keywords? true})
    (json-middleware/wrap-json-response) ))

(defn start []
  (web/run app))


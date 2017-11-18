(ns api-test.handler
  (:require  [api-test.config :refer [environment]]
             [api-test.routes.chat :refer [chat-routes]]
             [api-test.routes.contact :refer [contact-routes]]
             [api-test.routes.message :refer [message-routes]]
             [api-test.routes.self :refer [self-routes]]
             [api-test.routes.public :refer [public-routes]]
             [api-test.routes.websockets :refer [websocket-routes]]

             [buddy.auth :refer [authenticated? throw-unauthorized]]
             [buddy.auth.accessrules :refer [restrict]]
             [buddy.auth.backends :as backends]
             [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]

             [compojure.core :refer [defroutes wrap-routes routes]]
             [compojure.route :as route]


             [taoensso.carmine :as car :refer (wcar)]

             [immutant.web :as web]
             [immutant.web.middleware :refer [wrap-development]]
             [mount.core :as mount]
             [ring.middleware.params :refer [wrap-params]]
             [ring.middleware.cookies :refer [wrap-cookies]]
             [ring.middleware.json :as json-middleware]
             [ring.middleware.resource :refer [wrap-resource]] ))

(mount/start)


; Redis
; ----------
(def server1-conn {:pool {} :spec {:uri "redis://localhost:6379"}})
(defmacro wcar* [& body] `(car/wcar server1-conn ~@body))
; ----------

(defn- print-identity [handler] ; debug
  (fn [request]
    ;; (println)
    ;; (println "identity: " (:identity request))
    ;; (println "authenticated? " (authenticated? request))
    ;; (println "req " request)


    ; REDIS
    ;; (wcar* (car/sadd "feature-flags" 5 12 2))
    ;; (println "sismember 2 " (wcar* (car/sismember "feature-flags" 2 )))
    ;; (println "sismember 3 " (wcar* (car/sismember "feature-flags" 3 )))

    ;; (println (wcar* (car/smembers "feature-flags")))
    (println (wcar*(car/ping)))
    ; -----------

    (handler request)))

(defn- verify-requested-with-header-present [handler]
  (fn [request]
    (let [requested-with-header (get-in request [:headers "x-requested-with"]) ]

      (if (= requested-with-header "XMLHttpRequest")
          (handler request)
          (throw-unauthorized {:message "x-requested-with: XMLHttpRequest not in header."}) ))))

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
  (-> (routes chat-routes contact-routes message-routes self-routes)
    (wrap-routes verify-requested-with-header-present)))

(defroutes app-routes
  public-routes
  (-> (routes #'secured-routes #'websocket-routes)
    (wrap-routes wrap-restricted))
  (route/not-found "Not Found"))

(def app
  (-> #'app-routes
    (print-identity)
    (wrap-development)

    (wrap-authentication jwt-token-backend)
    (set-authorisation-header-from-cookie)
    (wrap-cookies)
    (wrap-params)
    (wrap-resource "public")
    (json-middleware/wrap-json-body {:keywords? true})
    (json-middleware/wrap-json-response) ))

(defn start []
  (web/run #'app))


(ns api-test.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :as compojure-handler]
            [ring.middleware.json :as json-middleware]
            [ring.middleware.defaults :refer :all]
            [ring.middleware.session :refer [wrap-session]]

            [buddy.sign.jwt :as jwt]
            [cheshire.core :as json]
            [buddy.auth.backends :as backends]
            [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
            [buddy.auth.backends.session :refer [session-backend]]
            [buddy.auth.accessrules :refer [restrict]]
            [buddy.auth :refer [authenticated? throw-unauthorized]]
            [compojure.route :as route]))

(def credentials 
  {:admin "pw" })

(def secret "mysecret")

; TOKENS (JWS)
(defroutes app-routes-token
  (GET "/" request
       (if (authenticated? request) 
           {:status 200}
           (throw-unauthorized {:message "Not authorized"})))

  (POST "/login" request
        (let [username (get-in request [:params :username])
              password (get-in request [:params :password])
              found-password (credentials (keyword username))
              token (jwt/sign {:user username} secret) ]

          (println) 
          (println "username: "  username)
          (println "password: "  password)
          (println "found password "  found-password)
          (println "token: " token)

           (if (and found-password (= password found-password))
             {:status 200 :body {:token token}}
             {:status 401 :body {:desc "wrong password"}}
           )
        ))
  (route/not-found "Not Found"))


(defn wrap-content-type [handler content-type]
  (fn [request]
    (let [response (handler request)]
      (assoc-in response [:headers "Content-Type"] content-type))))

(defn my-unauthorized-handler [request metadata]
  (println "metadata: " metadata)
  {:status 403})

(def jwt-token-backend (backends/jws 
                         {:secret secret
                          :unauthorized-handler my-unauthorized-handler}))

(def app
  (-> app-routes-token
    (wrap-content-type "application/json")
    (wrap-authentication jwt-token-backend)
    (wrap-authorization jwt-token-backend)
    (compojure-handler/site)
    (json-middleware/wrap-json-body {:keywords? true})
    json-middleware/wrap-json-response))

; TESTING
;; curl -c cookies.txt -X POST -F 'username=admin' -F 'password=pw' "http://localhost:3000/login"
;; curl -vi -b cookies.txt "http://localhost:3000/protected"


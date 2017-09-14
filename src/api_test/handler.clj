(ns api-test.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :as compojure-handler]
            [ring.middleware.json :as json-middleware]
            [ring.middleware.defaults :refer :all]
            [ring.middleware.session :refer [wrap-session]]

            [mount.core :as mount]

            [buddy.sign.jwt :as jwt]
            [cheshire.core :as json]
            [buddy.auth.backends :as backends]
            [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
            [buddy.auth.backends.session :refer [session-backend]]
            [buddy.auth.accessrules :refer [restrict]]
            [buddy.auth :refer [authenticated? throw-unauthorized]]
            [compojure.route :as route]
            [api-test.db.core :as db]
            ))

(use 'ring.middleware.session)
(set! *warn-on-reflection* true)


(def secret "mysecret")

(mount/start)

; TOKENS (JWS)
(defroutes app-routes-token
  (GET "/" request
     (if (authenticated? request) 
       {:status 200}
       (throw-unauthorized {:message "Not authorized"}))))

(defroutes app-routes
   (GET "/" request 
        (println)
        (println request)
        (println (authenticated? request))
        (println)

        (println (:session request))
        (let [count (or ((:session request) :count) 0)
              identity (or ((:session request) :identity) "anonymous") ]
          )
    )

   (POST "/create-user" request
        (let [username (get-in request [:params :username])
              password (get-in request [:params :password])]
              
          (if (some? (db/get-user-by-username {:username username} ))
            {:status 400 :body {:error "A user with that username exists already"}}
            (do
              (db/create-user! {:username username :password password})
              {:status 201 }))
        )
    )

   (GET "/ts" request
      (println "the db function returned: "  (db/get-users))
    )

  (POST "/login" request
        (let [username (get-in request [:params :username])
              password (get-in request [:params :password])
              found-password (db/get-user-password-by-username {:username username})
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

;; (defn wrap-content-type [handler content-type]
  ;; (fn [request]
  ;;   (let [response (handler request)]
  ;;     (assoc-in response [:headers "Content-Type"] content-type))))

(defn my-unauthorized-handler [request metadata]
  (println "metadata: " metadata)
  {:status 403})

(def jwt-token-backend (backends/jws 
                         {:secret secret
                          :unauthorized-handler my-unauthorized-handler}))

(def app
  (-> app-routes
    ;; (wrap-content-type "application/json")
    (wrap-authentication jwt-token-backend)
    (wrap-authorization jwt-token-backend)
    (compojure-handler/site)
    (json-middleware/wrap-json-body {:keywords? true})
    json-middleware/wrap-json-response))

; TESTING
;; curl -c cookies.txt -X POST -F 'username=admin' -F 'password=pw' "http://localhost:3000/login"
;; curl -vi -b cookies.txt "http://localhost:3000/protected"


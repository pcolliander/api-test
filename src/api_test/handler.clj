(ns api-test.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :as compojure-handler]
            [ring.middleware.json :as json-middleware]
            [ring.middleware.defaults :refer :all]
            [ring.middleware.session :refer [wrap-session]]

            [buddy.auth.backends :as backends]
            [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
            [buddy.auth.backends.session :refer [session-backend]]
            [buddy.auth.accessrules :refer [restrict]]
            [buddy.auth :refer [authenticated? throw-unauthorized]]
            [compojure.route :as route]
            ))

(use 'ring.middleware.session)
(set! *warn-on-reflection* true)

(def credentials 
  {:admin "pw" })


(defroutes app-routes
   (GET "/" request 
        (println)
        (println request)
        (println (authenticated? request))
        (println)

        (println (:session request))
        (let [count (or ((:session request) :count) 0)
              identity (or ((:session request) :identity) "anonymous") ]

        {:status 200 :session {:identity identity :count (inc count)}}))

   (POST "/login" request 
         (let [username (get-in request [:params :username])
               password (get-in request [:params :password])
               session (:session request)
               found-password (credentials (keyword username))]

           (println)
           (println request)
           (println)
           (println "username: " username )
           (println "password: " password )
           (println "found-password " found-password)

           (if (and found-password (= password found-password))
             {:status 200 :session (assoc (get-in request [:session]) :identity (keyword username)) :body {:desc (str "welcome "  username)}}
             {:status 401 :body {:desc "you are not authorised"}})))
  (GET "/logout" request
       {:status 200 :session nil })

   (GET "/protected" request
        (println)
      (println "REQUEST: " request)
        (println)
      (println (authenticated? request))
      (println "boolean (:session request) " (boolean (:session request) ))
      ;; (println ":identity (:session request) " (:identity (:session request)))
        (println ":session request " (:session request))
        (println)
      (if (authenticated? (:session request))
        {:status 200 :body {:accounts [1 2 3] } }
        {:status 401 }
      ))

  (route/not-found "Not Found"))

(defn wrap-content-type [handler content-type]
  (println "yoddliho")
  (fn [request]
    (let [response (handler request)]
      (assoc-in response [:headers "Content-Type"] content-type))))

(def backend (session-backend))

(def app
  (-> app-routes
    (wrap-content-type "application/json")
    (wrap-authentication backend)
    ;; (wrap-authorization backend)
    (compojure-handler/site)
    (json-middleware/wrap-json-body {:keywords? true})
    json-middleware/wrap-json-response))

; TESTING
;; curl -c cookies.txt -X POST -F 'username=admin' -F 'password=pw' "http://localhost:3000/login"
;; curl -b cookies.txt -I "http://localhost:3000/protected"


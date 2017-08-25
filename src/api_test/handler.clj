(ns api-test.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [ring.middleware.json :as middleware]
            [buddy.auth.backends :as backends]
            [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
            [buddy.auth.backends.session :refer [session-backend]]
            [buddy.auth.accessrules :refer [restrict]]
            [buddy.auth :refer [authenticated? throw-unauthorized]]
            [compojure.route :as route]
            )
 )

(use 'ring.middleware.session)
(set! *warn-on-reflection* true)

(def credentials 
  {:admin "pw" })

(def backend (backends/session))
(defroutes app-routes
   (GET "/" request 
        (println)
        (println request)
        (println (authenticated? request))
        (println)

        (println (:session request))

        {:status 200 })

   (POST "/login" request 
         (let [username (get-in request [:params :username])
               password (get-in request [:params :password])
               session (:session request)
               updated-session (assoc session :identity (keyword username))]

           (println updated-session)
           (println)
           (println request)
           (println)
           (println "username: " username )
           (println "password: " password )

           (if (= password (credentials (keyword username)))
             {:status 200 :session (assoc request :session updated-session) :body {:desc (str "welcome "  username)}}
             {:status 401 :body {:desc "you are not authorised"}})))

   (GET "/protected" request
        (println)
      (println request)
        (println)
      (println authenticated? request)
        (println)
      (if (authenticated? request)
        {:status 200 } 
        {:status 401 }
      ))

  (route/not-found "Not Found"))

(def app
  (-> 
    (handler/site app-routes)
    ;; (wrap-session {:cookie-attrs {:max-age 3600 :secure true}})
    (wrap-authentication backend)
    (wrap-authorization backend)
    (middleware/wrap-json-body {:keywords? true})
    middleware/wrap-json-response))

;; curl -c cookies.txt -X POST -F 'username=admin' -F 'password=pw' "http://localhost:3000/login"
;; curl -b cookies.txt -I "http://localhost:3000/protected"

;; (use 'ring.middleware.session
;;           'ring.util.response)
;; (use 'ring.middleware.cookies)
;;
;; (defn handler [request]
;;   (let [session [:session request]]
;;     (println request)
;;     {:status 200 :cookies {"session_id" {:max-age 3600 :http-only true :value "session-id-hashbrownie"}}}))
;;
;; (def app
;;     (wrap-cookies handler))




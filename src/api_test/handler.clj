(ns api-test.handler
  (:require  [api-test.db.core :as db]
             [buddy.auth.backends :as backends]
             [buddy.auth :refer [authenticated? throw-unauthorized]]
             [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
             [buddy.sign.jwt :as jwt]
             [compojure.core :refer :all]
             [compojure.handler :as compojure-handler] 
             [compojure.route :as route]
             [selmer.parser :refer [render-file]]
             [hiccup.core :as hiccup]
             [mount.core :as mount]
             [ring.middleware.json :as json-middleware]
             [ring.middleware.resource :refer :all]
             [ring.middleware.defaults :refer :all]
             [ring.middleware.session :refer [wrap-session]]
             [ring.util.response :refer :all]
  ))

(use 'hiccup.form)
(set! *warn-on-reflection* true)

(def secret "mysecret")

(mount/start)


(defroutes auth-routes ;; later, add group related routes.
  )

(defroutes app-routes
  (GET "/" request 
     ;; (if (authenticated? request) 
     (render-file "templates/index.html" {})
      ;; (hiccup/html 
        ;; [:div {:id "app"}]

        ;; [:script {:src "js/api-test.js"}]
)
       ;; (redirect "/login")))

  (POST "/create-user" request
        (let [username (get-in request [:params :username])
              password (get-in request [:params :password])]
              
          (if (some? (db/get-user-by-username {:username username} ))
            {:status 400 :body {:error "A user with that username exists already"}}
            (do
              (db/create-user! {:username username :password password})
              {:status 201 :body {:desc "You have successfully signed up" }}))
  ))

  (POST "/login" request
        (let [username (get-in request [:params :username])
              password (get-in request [:params :password])
              get-password (db/get-user-password-by-username {:username username})
              found-password (and get-password (get-password :password))
              token (jwt/sign {:user username} secret) ]

           (if (and (some? found-password) (= password found-password))
             {:status 200 :body {:token token :desc "you logged in"}}
             {:status 401 :body {:desc "wrong password"}}
           )))

  (GET "/login" request
     (hiccup/html 
       (form-to [:post "/login"]
          [:h2 "Sign in"]
          (text-field {:placeholder "username"} "username")
          (password-field {:placeholder "password"} "password")
          (submit-button "login"))

       (form-to [:post "/create-user"]
          [:h2 "Sign up"]
          (text-field {:placeholder "username"} "username")
          (password-field {:placeholder "password"} "password")
          (submit-button "signup"))
    ))

  (route/not-found "Not Found"))

;; (defn wrap-content-type [handler content-type]
  ;; (fn [request]
  ;;   (let [response (handler request)]
  ;;     (assoc-in response [:headers "Content-Type"] content-type))))

(defn my-unauthorized-handler [request metadata]
  (println "metadata: " metadata) {:status 403})

(def jwt-token-backend (backends/jws 
  {:secret secret :unauthorized-handler my-unauthorized-handler}))

(def app
  (-> app-routes
    ;; (wrap-content-type "application/json")
    (wrap-authentication jwt-token-backend)
    (wrap-authorization jwt-token-backend)
    (compojure-handler/site)
    (wrap-resource "public")
    (json-middleware/wrap-json-body {:keywords? true})
      json-middleware/wrap-json-response))


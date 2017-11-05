(ns api-test.routes.public
  (:require 
            [api-test.services.auth :refer [sign-jwt-token]]
            [api-test.services.person :as person-service]
            [api-test.services.organisation :as organisation-service]
            [buddy.auth :refer [authenticated?]]
            [compojure.core :refer [defroutes GET POST]]
            [hiccup.core :as hiccup]
            [hiccup.form :refer [form-to password-field submit-button text-field]]
            [ring.util.response :refer [redirect]]
            [selmer.parser :refer [render-file]] ))

(defn- redirect-with-token [token]
  (assoc (redirect "/") :cookies {"token" {:value token :http-only true}})) ; make ":secure true" when I've got SSL.

(defroutes public-routes
  (GET "/" request
    (if (authenticated? request)
      (render-file "templates/index.html" {})
      (redirect "/login")))


  (POST "/organisation" [name]
        (println "organisation-name " name)
        (organisation-service/add-organisation name)
        
        {:status 200}
  )

  (POST "/signup" [username password]
    (let [organisation-id 1 ; hard-coded for now.
         {:keys [ok? person error-message]} (person-service/signup username password organisation-id)]

      (if ok?
        (redirect-with-token (sign-jwt-token (assoc person :organisation-id organisation-id)))
        {:status 400 :body {:error error-message}} )))

  (POST "/login" [username password]
    (let [{:keys [ok? person error-message]} (person-service/login username password)]

      (if ok?
        (redirect-with-token (sign-jwt-token person))
        {:status 400 :body {:error error-message}})))

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
          (submit-button "signup"))

       (form-to [:post "/organisation"]
          [:h2 "Add Organisation"]
          (text-field {:placeholder "organisation name"} "name")
          (submit-button "Create"))
       
       ))))



(ns api-test.routes.contact
  (:require [api-test.services.contact :as contact-service]
            [compojure.core :refer [defroutes GET]]))


(defroutes contact-routes
  (GET "/contacts" request
    (let [person (:identity request)
          contacts (contact-service/get-all person)]

      {:status 200 :body {:contacts contacts}}))
)


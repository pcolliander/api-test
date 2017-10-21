(ns api-test.routes.contact
  (:require [api-test.services.contact :as contact-service]
            [compojure.core :refer [defroutes GET]]))


(defroutes contact-routes
  (GET "/contacts" request
    (let [person (:identity request)
          contacts (contact-service/get-all person)
          conv-contacts (into {} (map (juxt :id identity) contacts))]

      ;; (println "conv-contacts " conv-contacts)

      {:status 200 :body {:contacts contacts :conv-contacts conv-contacts}}))
)


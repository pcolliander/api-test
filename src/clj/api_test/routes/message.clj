(ns api-test.routes.message
  (:require [api-test.services.message :as message-service]
            [compojure.core :refer [defroutes POST]]))


(defroutes message-routes 
  (POST "/chats/:chat-id/messages" request
    (let [message (get-in request [:body :message])
          person (:identity request)
          chat-id (Integer/parseInt (get-in request [:route-params :chat-id]))  ; can this be done simpler?
          {:keys [id timestamp]} (message-service/add-one person chat-id  message)]

      {:status 201 :body {:message {:id id :message message :chat-id chat-id :username (:username person) :timestamp timestamp } }}))
)


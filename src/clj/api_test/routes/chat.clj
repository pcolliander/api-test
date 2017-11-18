(ns api-test.routes.chat
  (:require [api-test.services.chat :as chat-service]
            [api-test.services.message :as message-service]
            [compojure.core :refer [defroutes GET POST]]))

(defroutes chat-routes
  (GET "/chats" request
    (let [person (:identity request)
          {:keys [chats contact-chats self-chat]} (chat-service/get-all person)]

      {:status 200 :body {:chats chats :contact-chats contact-chats :self-chat self-chat }}))

  (POST "/chats" request
    (let [{:keys [name is-private]} (:body request)
          person (:identity request)
          chat-id (chat-service/add-chat person is-private name)]

      {:status 201 :body {:chat {:chat-id chat-id :name name :is-private is-private}}}))
  
  (POST "/contacts/:contact-id/chats" request
    (let [person (:identity request)
          contact-id (Integer/parseInt (get-in request [:route-params :contact-id]))
          organisation-id 1
          {:keys [ok? error-message chat-id username person-id is-self-chat]} (chat-service/add-contact-chat person contact-id organisation-id)]

      (if ok?
        {:status 201 :body {:chat {:chat-id chat-id :username username :person-id contact-id :is-self-chat is-self-chat }}}
        {:status 400 :body {:error error-message}})))
  
  (GET "/chats/:chat-id/messages" request
    (let [person (:identity request)
          chat-id (Integer/parseInt (get-in request [:route-params :chat-id]))
          messages (message-service/get-by-chat chat-id person)]
    {:status 200 :body {:chat-id chat-id :messages messages }}))
)

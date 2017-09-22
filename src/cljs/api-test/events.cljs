(ns api-test.events
  (:require [api-test.db :refer [default-db]]
            ;; [ajax.core :refer [GET POST]]
            [cljs-http.client :as http-client]
            [re-frame.core :refer [reg-event-db reg-event-fx inject-cofx path trim-v after debug]]
            [cljs.core.async :refer [<! >!]] 
            [re-frame.core :refer [subscribe dispatch]])
  (:require-macros [cljs.core.async.macros :refer [go]] ))

(reg-event-db
  :init-db
  (fn [_ _]
    {
     :active-chat 1 
     :contacts [{:id 1 :chat-id 4 :username "Gretchen" :is-online true} {:id 2 :chat-id 5 :username "Auntie Abdil" :is-online false}]
     :logged-in-user {:id nil :username ""} 
     :messages [{:chat-id 1 :value "a message" :user "Pontus" :timestamp "some time"} 
                {:chat-id 2 :value "a message" :user "Pontus" :timestamp "some time"}
                {:chat-id 3 :value "a message" :user "Pontus" :timestamp "some time"}
                {:chat-id 1 :value "another message" :user "Pontus" :timestamp "some time"}]}))

(reg-event-db
  :add-message
  (fn [db [action payload]]
    (update-in db [:messages] conj payload)))

(reg-event-db 
  :insert-user-meta-data
  (fn [db [action payload]]
    (update-in db [:logged-in-user] conj payload ))) ;only username for now.

(reg-event-db
  :change-active-chat
  (fn [db [action id]]
    (assoc db :active-chat id)))


(reg-event-db 
  :get-chats-success
  (fn [db [action payload]]
    (prn "payload " payload)
      (update-in db [:chats] concat payload)))

(reg-event-fx
  :get-chats
  (fn [db [action]]
    (go (let [response (<! (http-client/get "http://localhost:3000/chats"))
              chats (:chats (:body response))]

          (dispatch [:get-chats-success chats])
  ))))


(reg-event-db
  :add-chat-success
  (fn [db [action payload]]
    
    (update-in db [:chats] conj payload)
  ))

(reg-event-fx
  :add-chat
  (fn [db [action name]]
    (go (let [response (<! (http-client/post "http://localhost:3000/chats" {:json-params {:name name :is-private false}}))
              chat-id (:chat-id (:body response))]
      (dispatch [:add-chat-success {:id chat-id :name name :is-private false}])
))))

(reg-event-db
  :get-user-meta-data
  (fn [db [action]]
    (go (let [response (<! (http-client/get "http://localhost:3000/data"))
              username (:username (:data (:body response)))
              id (:id (:data (:body response)))]

      (update-in db [:logged-in-user] conj {:id id :username (clojure.string/capitalize username)})
  ))))


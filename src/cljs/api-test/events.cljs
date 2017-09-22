(ns api-test.events
  (:require [api-test.db :refer [default-db]]
            [re-frame.core :refer [reg-event-db reg-event-fx inject-cofx path trim-v after debug]]))

; I should do ID-generation on the server, so I don't need to care about this here.
(defn get-next-id [chats]
  (fnil inc 0) (+ (count chats) 1))

(reg-event-db
  :init-db
  (fn [_ _]
    {:active-chat 1 
     :chats [{:id 1 :name "Dreamteam"} {:id 2 :name "Security Team  2"} {:id 3 :name "The Loser Club"}]
     :contacts [{:id 1 :chat-id 4 :username "Gretchen" :is-online true} {:id 2 :chat-id 5 :username "Auntie Abdil" :is-online false}]
     :messages [{:chat-id 1 :value "a message" :user "Pontus" :timestamp "some time"} 
                     {:chat-id 2 :value "a message" :user "Pontus" :timestamp "some time"}
                     {:chat-id 3 :value "a message" :user "Pontus" :timestamp "some time"}
                     {:chat-id 1 :value "another message" :user "Pontus" :timestamp "some time"}
               ]}))

(reg-event-db
  :add-message
  (fn [db [action payload]]
    (update-in db [:messages] conj payload)))

(reg-event-db
  :change-active-chat
  (fn [db [action id]]
    (assoc db :active-chat id)))

(reg-event-db
  :add-chat
  (fn [db [action id]]
    (update-in db [:chats] conj {:id (get-next-id (:chats db)) :name "new chat"} )))


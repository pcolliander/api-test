(ns api-test.services.chat
  (:require [api-test.db.core :refer [*db*] :as db]
            [conman.core :as conman]))

(defn add-chat [person is-private name]
  (conman/with-transaction [*db*]
    (let [chat-id (:id (db/add-chat! {:is-private is-private
                                      :is-direct-message false
                                      :is-group-direct-message false
                                      :is-self-chat false
                                      :name name
                                      :organisation-id (:org-id person) }))]

        (db/add-chat-permission! {:chat-id chat-id :person-id (:id person)})
        chat-id)))

(defn get-all [person]
  (let [chats (db/get-chats {:person-id (:id person)})
        contact-chats (db/get-contact-chats {:person-id (:id person)})
        self-chat (db/get-self-chat {:person-id (:id person)})]

    {:chats chats :contact-chats contact-chats :self-chat self-chat}))


(ns api-test.services.chat
  (:require [api-test.db.core :refer [*db*] :as db]
            [api-test.macros :refer [if-some?]]
            [conman.core :as conman]))

(defn add-chat [person is-private name]
  (conman/with-transaction [*db*]
    (let [chat-id (:id (db/add-chat! {:is-private is-private
                                      :is-direct-message false
                                      :is-group-direct-message false
                                      :is-self-chat false
                                      :name name
                                      :organisation-id (:organisation-id person) }))]

        (db/add-chat-permission! {:chat-id chat-id :person-id (:id person)})
        chat-id)))

(defn get-all [person]
  (let [chats (db/get-chats {:person-id (:id person)})
        contact-chats (db/get-contact-chats {:person-id (:id person)})
        self-chat (db/get-self-chat {:person-id (:id person)})]

    {:chats chats :contact-chats contact-chats :self-chat self-chat}))

(defn- add-self-chat [person organisation-id]
  (if-some? (db/get-self-chat {:person-id (:id person)})
    {:ok? false :error-message "Self chat exists already."}
    (conman/with-transaction [*db*]
      (let [chat-id (:id (db/add-chat! {:organisation-id 1 :name "" :is-private true :is-self-chat true :is-direct-message true :is-group-direct-message false}))]

        (db/add-chat-permission! {:chat-id chat-id :person-id (:id person)})

        {:ok? true :chat-id chat-id :is-self-chat true :person-id (:id person) :username (:username person)}))))

(defn add-contact-chat [person contact-id organisation-id]
  (if (= (:id person) contact-id)
    (add-self-chat person organisation-id)
    (if-some? (db/get-contact-chat {:person-id (:id person) :contact-id contact-id})
      {:ok? false :error-message "A chat with this contact exists already."}
      (conman/with-transaction [*db*]
        (let [contact (db/get-person-by-id {:person-id contact-id})
              chat-id (:id (db/add-chat! {:organisation-id organisation-id
                                          :name ""
                                          :is-private true
                                          :is-self-chat false
                                          :is-direct-message true
                                          :is-group-direct-message false}))]

          (db/add-chat-permission! {:chat-id chat-id :person-id (:id person)})
          (db/add-chat-permission! {:chat-id chat-id :person-id (:id contact)})

          {:ok? true :chat-id chat-id :username (:username contact) :person-id (:id contact) :is-self-chat false })))))


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


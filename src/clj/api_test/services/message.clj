(ns api-test.services.message
  (:require [api-test.db.core :as db]
            [clj-time.core :as time]
            (clj-time [format :as timef] [coerce :as timec])
            [conman.core :as conman]))

(defn get-by-chat [chat-id person]
  (into [] (db/get-messages-by-chat {:chat-id chat-id :person-id (:id person)} )) )

 ; need to add a check that the user actually is authorised to post to this chat.
(defn add-one [person chat-id message]
  (let [timestamp (timec/to-timestamp (time/now))
        id (:id (db/add-message! {:chat-id chat-id :person-id (:id person) :message message :timestamp timestamp}))]

    {:id id :timestamp timestamp}))


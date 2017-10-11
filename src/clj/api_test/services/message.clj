(ns api-test.services.message
  (:require [api-test.db.core :as db]
            [conman.core :as conman]))

(defn get-by-chat [chat-id person]
  (into [] (db/get-messages-by-chat {:chat-id chat-id :person-id (:id person)} )) )


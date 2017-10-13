(ns api-test.services.people
  (:require [api-test.db.core :refer [*db*] :as db]
            [buddy.hashers :as hashers]
            [conman.core :as conman]))

(defn login [username password]
  (let [get-password (db/get-person-password-by-username {:username username})
        found-password (and get-password (:password get-password))
        person (db/get-person-by-username {:username username})]

    (if (and found-password (hashers/check password found-password))
      {:ok? true :person person}
      {:ok? false })))


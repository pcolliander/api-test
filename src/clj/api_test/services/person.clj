(ns api-test.services.person
  (:require [api-test.db.core :refer [*db*] :as db]
            [api-test.macros :refer [if-some?]]
            [buddy.hashers :as hashers]
            [conman.core :as conman]))

(defn login [username password]
  (let [get-password (db/get-person-password-by-username {:username username})
        found-password (and get-password (:password get-password))]
  
    (if-let [person (db/get-person-by-username {:username username})]
      (if (and found-password (hashers/check password found-password))
        {:ok? true :person person}
        {:ok? false :error-message "Wrong password!"})
      {:ok? false :error-message "No such user exists."})))

(defn signup [username password organisation-id]
  (if-some? (db/get-person-by-username {:username username} )
    {:ok? false :error-message "A user with that username exists already"}

    (conman/with-transaction [*db*]
      (let [person (db/add-person! {:username (clojure.string/trim username) :password (hashers/derive password)})]
        (db/add-person-to-organisation! {:organisation-id organisation-id :person-id (:id person)})

        {:ok? true :person person} ))))


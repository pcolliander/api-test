(ns api-test.services.contact
  (:require [api-test.db.core :refer [*db*] :as db] 
            [conman.core :as conman]

))

(defn get-all [person]
  (prn person)
  (db/get-contacts-by-organisation {:organisation-id (:org-id person)}))


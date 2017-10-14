(ns api-test.services.organisation
  (:require [api-test.db.core :as db]
            [conman.core :as conman]))

(defn add-organisation [name]
  (db/add-organisation! {:name name}))


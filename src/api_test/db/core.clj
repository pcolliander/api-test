(ns api-test.db.core
  (:require
    [conman.core :as conman]
    [mount.core :refer [defstate]]))
    ;; [api-test.config :refer [env]])) ;; do I have this?


(defstate ^:dynamic *db*
  :start (conman/connect! {:jdbc-url "postgresql://localhost:5432/chat-service?user=pcolliander" })
         :stop (conman/disconnect! *db*))
                           
(conman/bind-connection *db* "sql/queries.sql") ; what exactly does this do?


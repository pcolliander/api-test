(ns api-test.db.core
  (:require
    [camel-snake-kebab.extras :refer [transform-keys]]
    [camel-snake-kebab.core :refer [->kebab-case-keyword]]
    [conman.core :as conman]
    [mount.core :refer [defstate]]
    [api-test.config :refer [environment]]))

(defn result-one-snake->kebab
    [this result options]
      (->> (hugsql.adapter/result-one this result options)
                  (transform-keys ->kebab-case-keyword)))

(defn result-many-snake->kebab
    [this result options]
      (->> (hugsql.adapter/result-many this result options)
                  (map #(transform-keys ->kebab-case-keyword %))))

(defmethod hugsql.core/hugsql-result-fn :1 [sym]
    'api-test.db.core/result-one-snake->kebab)

(defmethod hugsql.core/hugsql-result-fn :one [sym]
    'api-test.db.core/result-one-snake->kebab)

(defmethod hugsql.core/hugsql-result-fn :* [sym]
    'api-test.db.core/result-many-snake->kebab)

(defmethod hugsql.core/hugsql-result-fn :many [sym]
    'api-test.db.core/result-many-snake->kebab)


(defstate ^:dynamic *db*
  :start (conman/connect! {:jdbc-url (environment :database-url)})
         :stop (conman/disconnect! *db*))

(conman/bind-connection *db* "sql/contact.sql" "sql/chat.sql" "sql/person.sql" "sql/message.sql")


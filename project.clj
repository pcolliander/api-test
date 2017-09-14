(defproject api-test "0.1.0-SNAPSHOT"
  :description "FIXME: write description"

  :url "http://example.com/FIXME"

  :min-lein-version "2.0.0"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [migratus "1.0.0"]
                 [conman "0.6.8"] ;wraps the connection in the sql functions (so they've got access)
                 [mount "0.1.11"] ; deals with the lifetime (of e.g. the db connection).
                 [postgresql/postgresql "9.3-1102.jdbc41"]
                 [compojure "1.5.1"]
                 [ring/ring-json "0.3.1"]
                 [buddy/buddy-auth "2.0.0"]
                 [ring/ring-defaults "0.2.1"]]

  :migratus {:store :database
             :db "postgresql://localhost:5432/chat-service?user=pcolliander" }
             ;; :db (or ~(get (System/getenv) "DATABASE_URL") "postgresql://localhost:5432/chat-service?user=pcolliander") }
             ;; :db {:classname "com.mysql.jdbc.Driver"
             ;;      :subprotocol "mysql"
             ;;      :subname "//localhost/migratus"
             ;;      :user "root"
             ;;      :password ""}}


  :plugins [[lein-ring "0.9.7"]
            [migratus-lein "0.5.2"]]

  :ring {:handler api-test.handler/app}

  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}})

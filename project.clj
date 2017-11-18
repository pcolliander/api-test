(defproject api-test "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"

  :dependencies [
                 ; server-side
                 [buddy "2.0.0"]
                 [clj-time "0.14.0"]
                 [compojure "1.5.1"]
                 [com.cemerick/piggieback "0.2.2"]
                 [conman "0.6.8"]
                 [camel-snake-kebab "0.4.0"]
                 [environ "1.1.0"]
                 [hiccup "1.0.5"]
                 [migratus "1.0.0"]
                 [mount "0.1.11"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/clojure "1.9.0-alpha16"] ; spec
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/tools.nrepl "0.2.13"]
                 [org.immutant/immutant "2.1.9"]
                 [postgresql/postgresql "9.3-1102.jdbc41"]
                 [ring/ring-core "1.6.2"]
                 [ring/ring-devel "1.6.2"] 
                 [ring/ring-json "0.3.1"]
                 [ring/ring-defaults "0.2.1"]
                 [selmer "1.10.0"]

                 [com.taoensso/carmine "2.16.0"] ; redis

                 ; client-side
                 [org.clojure/clojurescript "1.9.908" :scope "provided"]
                 [org.webjars/font-awesome "4.6.3"]
                 [cljs-http "0.1.39"]
                 [cljs-ajax "0.7.2"]
                 [reagent "0.7.0"]
                 [re-frame "0.9.4"]]

  :plugins [[lein-ring "0.9.7"]
            [migratus-lein "0.5.2"]
            [lein-cljsbuild "1.1.5"]
            [lein-environ "1.1.0"]
            [lein-figwheel "0.5.13"]]

  :migratus {:store :database :db ~(get (System/getenv) "DATABASE_URL")}
  :jvm-opts ["-server" "-Dconf=.lein-env"]

  :resource-paths ["resources" "target/cljsbuild"]
  :source-paths ["src/clj" "src/cljc"]
  :target-path "target/%s/"

  :main api-test.handler/start

  :figwheel {
             :http-server-root "public"
             :nrepl-port 7002
             :css-dirs ["resources/public/css"]
             :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

  :clean-targets [:target-path "out"]
  :cljsbuild {
              :builds [{
                        :id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel {:on-jsload "api-test.core/mount-root"}
                        :compiler {
                                   :main             "api-test.core"
                                   :asset-path       "/js/out"
                                   :closure-defines  {"re_frame.trace.trace_enabled_QMARK_" true}
                                   :output-to        "target/cljsbuild/public/js/app.js"
                                   :output-dir       "target/cljsbuild/public/js/out"
                                   :optimizations    :none
                                   :preloads         [day8.re-frame.trace.preload]
                                   :source-map       true}}]}

  :profiles
  {:dev {:dependencies[[javax.servlet/servlet-api "2.5"]
                       [ring/ring-mock "0.3.0"]
                       [day8.re-frame/trace "0.1.11"]
                       [re-frisk "0.5.0"]
                       [org.clojure/test.check "0.9.0"] ]}

   :uberjar { :prep-tasks ["compile" ["cljsbuild" "once" "min"]]} })


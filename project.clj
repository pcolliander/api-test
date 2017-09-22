(defproject api-test "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"

  :dependencies [
                 ; server-side
                 [org.clojure/clojure "1.8.0"]
                 [buddy/buddy-auth "2.0.0"]
                 [compojure "1.5.1"]
                 [cprop "0.1.9"]
                 [conman "0.6.8"]
                 [hiccup "1.0.5"]
                 [migratus "1.0.0"]
                 [mount "0.1.11"]
                 [postgresql/postgresql "9.3-1102.jdbc41"]
                 [selmer "1.10.0"]
                 [ring/ring-json "0.3.1"]
                 [org.clojure/tools.nrepl "0.2.13"]
                 [com.cemerick/piggieback "0.2.2"]
                 [ring/ring-defaults "0.2.1"]

                 ;; [com.fzakaria/slf4j-timbre "0.2"]

                 ; client-side
                 [org.clojure/clojurescript "1.9.908" :scope "provided"]
                 [org.webjars/font-awesome "4.6.3"]
                 ;; [cljs-http "0.1.39"]
                 [cljs-ajax "0.7.2"]
                 [com.andrewmcveigh/cljs-time "0.5.0"]
                 [reagent "0.7.0"]
                 [re-frame "0.9.4"]]

  :plugins [[lein-ring "0.9.7"]
            [migratus-lein "0.5.2"]
            [lein-cljsbuild "1.1.5"]
            [lein-figwheel "0.5.13"]]

  ;; :migratus {:store :database :db ~(get (System/getenv) "DATABASE_URL)}
  :migratus {:store :database :db "postgresql://localhost:5432/chat-service?user=pcolliander"}
  :jvm-opts ["-server" "-Dconf=.lein-env"]

  :resource-paths ["resources" "target/cljsbuild"]
  :target-path "target/%s/"

  :ring {:handler api-test.handler/app}

  :figwheel
		{:http-server-root "public"
		 :nrepl-port 7002
		 :css-dirs ["resources/public/css"]
		 :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

  :clean-targets [:target-path "out"]
	:cljsbuild
	{:builds
		 {:app
			{:source-paths ["src/cljs/api-test"]
       ;; :figwheel true; {:on-jsload "api-test.core/mount-root"}
       :figwheel {:on-jsload "api-test.core/mount-root"}
			 :compiler
										 {:main          "api-test.core"
											:asset-path    "/js/out"
                      :preloads [re-frisk.preload]
											:output-to     "target/cljsbuild/public/js/app.js"
											:output-dir    "target/cljsbuild/public/js/out"
											:optimizations :none
											:source-map    true}}
			:min
			{:source-paths ["src/cljs"]
			 :compiler
										 {:output-to     "target/cljsbuild/public/js/app.js"
                      :preloads [re-frisk.preload]
											:output-dir    "target/uberjar"
											:externs       ["react/externs/react.js"]
											:optimizations :none}}}}

  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]
                        [re-frisk "0.5.0"]
                        ]}

   :uberjar { :prep-tasks ["compile" ["cljsbuild" "once" "min"]]}
   })


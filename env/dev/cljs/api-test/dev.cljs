(ns ^:figwheel-no-load transparent-music-streaming.dev
    (:require
                  [transparent-music-streaming.core :as core]
                      [devtools.core :as devtools]))
(devtools/install!)

(enable-console-print!)

(core/init!)

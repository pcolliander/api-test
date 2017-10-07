(ns api-test.config                             
  (:require [environ.core :refer [env]] 
            [mount.core :refer [args defstate]]))

(defstate environment :start env)


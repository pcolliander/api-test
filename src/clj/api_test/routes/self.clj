(ns api-test.routes.self
  (:require [compojure.core :refer [defroutes GET]]))

(defroutes self-routes 
  (GET "/self" request
    {:status 200 :body {:data (:identity request)}}))


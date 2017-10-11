(ns api-test.services.auth
  (:require 
             [api-test.config :refer [environment]]
             [clj-time.core :as time]
             (clj-time [format :as timef] [coerce :as timec])
             [buddy.sign.jwt :as jwt]))


(defn sign-jwt-token [{:keys [id username]}]
  (jwt/sign {:id id
             :username username
             :exp (timec/to-timestamp (time/plus (time/now ) (time/hours 1)))}
          (environment :secret-key)))

(ns api-test.services.auth
  (:require [api-test.config :refer [environment]]
            [buddy.sign.jwt :as jwt]
            [clj-time.core :as time]
            (clj-time [coerce :as timec])))

(defn sign-jwt-token [{:keys [id username]}]
  (jwt/sign {:id id
             :org-id 1
             :username username
             :exp (timec/to-timestamp (time/plus (time/now ) (time/hours 1)))}
    (environment :secret-key)))


(ns api-test.services.auth
  (:require [api-test.config :refer [environment]]
            [buddy.sign.jwt :as jwt]
            [clj-time.core :as time]
            (clj-time [coerce :as timec])))

(defn sign-jwt-token [{:keys [id username organisation-id]}]
  (jwt/sign {:id id
             :organisation-id organisation-id
             :username username
             :exp (timec/to-timestamp (time/plus (time/now ) (time/hours 3)))}
    (environment :secret-key)))


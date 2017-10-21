(ns api-test.helpers
  (:require [re-frame.core :refer [dispatch]]))
  

(defn- add-message [message]
  (dispatch [:ws-add-message message]))

(defn- update-online-status [response]
  (prn "calling update-online-status " response)
  (dispatch [:ws-update-online-status response]))

 ; if-some? macro 
(defn determine-response [response]
  (println "response " response)
  (if (some? (:message response))
    (add-message response)
    (update-online-status response)))

(ns api-test.helpers
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >! put! chan alts! timeout]] 
            [re-frame.core :refer [dispatch]]))

(defonce typing-chan (chan))

(defn user-typing-async []
  (go
    (let [payload (<! typing-chan)]
      (println "payload in user-typing-async" payload)

      (dispatch [:user-typing payload])
      (println "send value to the server that the user is typing")
      (loop []
        (let [[value channel] (alts! [typing-chan (timeout 500)])]
            (cond 
              (nil? value) (do (println "send value to the server that the user stopped typing. start from the beginning") (dispatch [:user-stopped-typing payload]) (user-typing-async)) 
              (some? value) (do (println "start from the loop []") (recur))))))))
       
;; (event-handling)
(defn determine-response [response]
  (case (:action response)
    "user-typing" (dispatch [:set-user-is-typing response])
    "user-stopped-typing" (dispatch [:set-user-stopped-typing response])
    "online-status" (dispatch [:ws-update-online-status response])
    "new-chat-message" (dispatch [:ws-add-message response])))
    

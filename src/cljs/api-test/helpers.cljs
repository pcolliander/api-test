(ns api-test.helpers
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >! put! chan alts! timeout]] 
            [re-frame.core :refer [dispatch]]))

(defonce typing-chan (chan))

(defn user-typing-async []
  (go
    (let [payload (<! typing-chan)]
      (dispatch [:user-typing payload]) ; send value over websocket to the server that the user is typing.
      (loop []
        (let [[v c] (alts! [typing-chan (timeout 1300)])]
            (cond
              (nil? v) (do 
                         (dispatch [:user-stopped-typing payload]) ;  send value to the server that the user stopped typing.   
                         (user-typing-async)) ; start from the beginning of the function with a blocking take. 
              :else ; try again to see if there's a value on the typing channel before 1300ms has passed. (Starts from the loop [].)
                (recur)))))))
       
(defn determine-response [response]
  (case (:action response)
    "user-typing" (dispatch [:set-user-is-typing response])
    "user-stopped-typing" (dispatch [:set-user-stopped-typing response])
    "online-status" (dispatch [:ws-update-online-status response])
    "new-chat-message" (dispatch [:ws-add-message response])))
    

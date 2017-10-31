(ns api-test.helpers
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<! >! put! chan alts! timeout]] 
            [re-frame.core :refer [dispatch subscribe]]))

(defonce typing-chan (chan))
(defonce just-send-a-message-chan (chan))

(defn user-typing-async []
  (go
    (let [payload (<! typing-chan)]
      (dispatch [:user-typing payload]) ; send value over websocket to the server that the user is typing.
      (loop []
        (let [[v c] (alts! [just-send-a-message-chan typing-chan (timeout 1300)])]
            (cond
              (= c typing-chan) ; means a value was placed on it, don't do anyhting.
                (recur)

              (= c just-send-a-message-chan) (do
                 (dispatch [:user-stopped-typing v]) ;  send value to the server that the user stopped typing.   
                 (user-typing-async)) ; start from the beginning of the function with a blocking take. 

              :else ; try again to see if there's a value on the typing channel before 1300ms has passed. (Starts from the loop [].)
                (do 
                 (dispatch [:user-stopped-typing payload])
                 (user-typing-async))))))))
       

(defn- ws-add-message [response]
  (let [active-chat @(subscribe [:active-chat])
        chat-id-in-response (:chat-id (:payload response ))]

    (if (= chat-id-in-response active-chat)
      (dispatch [:ws-add-message response])
      (dispatch [:ws-new-message-in-different-chat chat-id-in-response]))))

(defn determine-response [response]
  ;; (println (:action response))
  (case (:action response)
    "user-typing" (dispatch [:set-user-is-typing response])
    "user-stopped-typing" (dispatch [:set-user-stopped-typing response])
    "online-status" (dispatch [:ws-update-online-status response])
    "new-chat-message" (ws-add-message response)))
    

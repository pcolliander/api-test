(ns api-test.chat-icon
  (:require [re-frame.core :refer [dispatch subscribe]]))

(defn- active-chat? [chat-id]
  (let [active-chat @(subscribe [:active-chat])]
    (and active-chat (= chat-id active-chat))))

(defn component [{:keys [id name] }] 
  (let [active-chat? (active-chat? id)]
    [:span {
        :style {
          :background (when active-chat? "#6698c8")
          :color (when active-chat? "white") 
          :cursor "pointer"
          :user-select "none" } 
        :on-click  #(dispatch [:change-active-chat id])
       } name ]))


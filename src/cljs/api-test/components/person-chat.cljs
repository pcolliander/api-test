(ns api-test.person-chat
  (:require [api-test.chat-icon :as chat-icon]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]))

(defn- online? [id]
  (let [online-user-ids @(subscribe [:online-users])]
    (some? (some #{id} online-user-ids))))

(defn- current-user? [id]
  (let [logged-in-user-id (:id @(subscribe [:logged-in-user]))]
    (= id logged-in-user-id) ))

(defn- active-chat? [chat-id]
  (let [active-chat @(subscribe [:active-chat])]
    (and active-chat (= chat-id active-chat))))

(defn- get-contact-chat [person-id]
  (let [contact-chats @(subscribe [:contact-chats])]
    (some #(when (= person-id (:person-id %)) %) contact-chats)))

(defn component [{:keys [id person-id username chat-id]}]
  (let [person-id (or id person-id)
        is-current-user (current-user? person-id) 
        is-online (online? person-id)
        is-active-chat (active-chat? chat-id)
        contact-chat (get-contact-chat person-id)]

    (println "chat-id in person-chat " chat-id)
    [:span {
       :style {
         :background (when is-active-chat "#6698c8")
         :color (when is-active-chat "white")
         :cursor "pointer"
         :user-select "none" }
       :on-click #(if (some? chat-id) ; if-some? macro
                    (dispatch [:change-active-chat chat-id])
                    (if (some? contact-chat)
                      (dispatch [:change-active-chat (:chat-id contact-chat)]) 
                      (dispatch [:add-chat-with-contact person-id]))) }

      [:i {:class (if is-online "fa fa-circle" "fa fa-circle-o" )
        :style {
          :color (when is-online "#1db91d")
          :font-size "small"
          :margin-right "0.4rem"}}]  

     username (when is-current-user " (you)")]))


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

(defn- unseen-messages-in-chat [chat-id]
  (let [unseen-chats @(subscribe [:new-messages-in-other-chat])]
    (count (filter #{chat-id} unseen-chats))))


(defn component [{:keys [id person-id username chat-id]}]
  (let [person-id (or id person-id)
        current-user? (current-user? person-id)
        online? (online? person-id)
        active-chat? (active-chat? chat-id)
        contact-chat (get-contact-chat person-id)
        unseen-messages-in-chat (unseen-messages-in-chat chat-id)
        unseen-messages? (< 0 unseen-messages-in-chat) ]

    [:span {
       :style {
         :background (when active-chat? "#6698c8")
         :color (when unseen-messages? "white")
         :cursor "pointer"
         :user-select "none" }
       :on-click #(if (some? chat-id) ; if-some? macro
                    (do
                      (dispatch [:change-active-chat chat-id])
                      (dispatch [:clear-new-messages-in-other-chat chat-id]))

                    (if (some? contact-chat)
                      (dispatch [:change-active-chat (:chat-id contact-chat)])
                      (dispatch [:add-chat-with-contact person-id]))) }

      [:i {:class (if online? "fa fa-circle" "fa fa-circle-o" )
        :style {
          :color (when online? "#1db91d")
          :font-size "small"
          :margin-right "0.4rem"}}]

     username (when current-user? " (you)")

     (when unseen-messages? (str " (" unseen-messages-in-chat ")")) ]))




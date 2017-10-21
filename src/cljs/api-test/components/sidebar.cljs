(ns api-test.sidebar
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]))
  
(defn- online? [id online-user-ids]
  (some? (some #{id} online-user-ids)))

(defn chat-view [{:keys [id name] }] 
  (let [active-chat @(subscribe [:active-chat])]
    [:span {
        :style {
          :background (when (= id active-chat) "#6698c8")
          :color (when (= id active-chat) "white") :cursor "pointer"
          :user-select "none" } 
        :on-click  #(dispatch [:change-active-chat id])
       } name ]))

(defn contact-user [{:keys [id username chat-id]}]
  (let [active-chat @(subscribe [:active-chat])
        online-user-ids @(subscribe [:online-users])
        logged-in-user-id (:id @(subscribe [:logged-in-user]))
        is-current-user (= id logged-in-user-id)
        is-online (online? id online-user-ids)
        contact-has-chat (some #(when (= id (:person-id %)) %) @(subscribe [:contact-chats]))]

    [:span {
       :style {
         :background (when (and active-chat (= chat-id active-chat)) "#6698c8")
         :color (when (and active-chat (= chat-id active-chat)) "white")
         :cursor "pointer"
         :user-select "none" }
       :on-click #(if (some? chat-id) ; if-some? macro
                    (dispatch [:change-active-chat chat-id])
                    (if (some? contact-has-chat)  ; if-some? macro 
                      (dispatch [:change-active-chat (:chat-id contact-has-chat)]) 
                      (dispatch [:add-chat-with-contact id]))) }
      [:i {:class (if is-online "fa fa-circle" "fa fa-circle-o" )
        :style {
          :color (when is-online "#1db91d")
          :font-size "small"
          :margin-right "0.4rem"}}]  

     (or username "user-chat")
     (when is-current-user " (you)")]))

(defn direct-message-user [{:keys [user-id username chat-id]}]
  (let [active-chat @(subscribe [:active-chat])
        logged-in-user-id (:id @(subscribe [:logged-in-user]))
        is-current-user (= user-id logged-in-user-id)
        is-online (or is-current-user is-online)
        contact-has-chat (some #(when (= user-id (:person-id %)) %) @(subscribe [:contact-chats]))]

    [:span {
       :style {
         :background (when (and active-chat (= chat-id active-chat)) "#6698c8")
         :color (when (and active-chat (= chat-id active-chat)) "white")
         :cursor "pointer"
         :user-select "none" }
       :on-click #(if (some? chat-id) ; if-some? macro
                    (dispatch [:change-active-chat chat-id])
                    (if (some? contact-has-chat)  ; if-some? macro 
                      (dispatch [:change-active-chat (:chat-id contact-has-chat)]) 
                      (dispatch [:add-chat-with-contact user-id]))) }
      [:i {:class (if is-online "fa fa-circle" "fa fa-circle-o" )
        :style {
          :color (when is-online "#1db91d")
          :font-size "small"
          :margin-right "0.4rem"}}]  

     (or username "user-chat")
     (when is-current-user " (you)")]))


(defn component []
  (let [value (r/atom "")]
    [:div {:style { 
             :background "#303E4D"
             :color "#c1c5ca"
             :display "flex"
             :flex-direction "column"
             :justify-content "space-evenly"
             :width "18%" }} 

     [:div {:style {
              :display "flex"
              :flex-direction "column"
              :margin-left "1.5rem" }} 

       [:h2 "Contact List"]

       (for [[id contact] @(subscribe [:contacts])]
         [contact-user contact])]

       [:div {:style {
                :display "flex"
                :flex-direction "column"
                :margin-left "1.5rem" }}
         [:h2 "Direct Messages"]
         (->> @(subscribe [:contact-chats])
             (map direct-message-user))]

       [:div {:style {
                      :flex-direction "column"
                      :display "flex" 
                      :margin-left "1.5rem"
                      } } 

         [:div {:style {:align-items "center" :display "flex" }} 
          [:h2 "Chats"] 
          [:span {:style {
                    :color "white"
                    :cursor "pointer" 
                    :font-weight "bold" 
                    :font-size "xx-large"  
                    :user-select "none"
                    :margin-left "0.3rem" }
                  :on-click #(dispatch [:add-chat @value])
                 } "+"] 
           [:input {:style {:margin-left "0.5rem"} :placeholder "chat name" :on-change #(reset! value (-> % .-target .-value ))}] 
         ]
          (into [:idv {:style {:display "flex" :flex-direction "column" }}] (map chat-view @(subscribe [:chats])))
          ]]
       )
   )

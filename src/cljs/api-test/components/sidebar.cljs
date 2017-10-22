(ns api-test.sidebar
  (:require [api-test.chat-icon :as chat-icon]
            [api-test.person-chat :as person-chat]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]))

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
         [person-chat/component contact])]

       [:div {:style {
                :display "flex"
                :flex-direction "column"
                :margin-left "1.5rem" }}
         [:h2 "Direct Messages"]
         (doall 
         (->> @(subscribe [:contact-chats])
             (map person-chat/component)))]

       [:div {:style {:display "flex"
                      :flex-direction "column"
                      :margin-left "1.5rem" }}

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
          (into [:idv {:style {:display "flex" :flex-direction "column" }}] (map chat-icon/component @(subscribe [:chats]))) ]]))


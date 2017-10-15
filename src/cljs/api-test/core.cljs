(ns api-test.core
  (:require [api-test.events]
            [api-test.websockets :as ws]
            [api-test.subs]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]))

(declare update-messages!)
(enable-console-print!)

(defn chat-view [{:keys [id name] }] 
  (let [active-chat @(subscribe [:active-chat])]
    [:span {
        :style {
          :background (when (= id active-chat) "#6698c8")
          :color (when (= id active-chat) "white") :cursor "pointer"
          :user-select "none" } 
        :on-click  #(dispatch [:change-active-chat id])
       } name ]))

(defn user-view [id username is-online chat-id]
  (let [active-chat @(subscribe [:active-chat])
        logged-in-user-id (:id @(subscribe [:logged-in-user]))
        is-current-user (= id logged-in-user-id)
        is-online (or is-current-user is-online)
        contact-has-chat (some #(when (= id (:person-id %)) %) @(subscribe [:contact-chats]))]

    [:span {
       :style {
         :background (when (and active-chat (= chat-id active-chat)) "#6698c8")
         :color (when (and active-chat (= chat-id active-chat)) "white")
         :cursor "pointer"
         :user-select "none" }
       :on-click #(if (some? chat-id)
                    (dispatch [:change-active-chat chat-id])
                    (if (some? contact-has-chat) 
                      (dispatch [:change-active-chat (:chat-id contact-has-chat)]) 
                      (dispatch [:add-chat-with-contact id]))) }
      [:i {:class (if is-online "fa fa-circle" "fa fa-circle-o" )
        :style {
          :color (when is-online "#1db91d")
          :font-size "small"
          :margin-right "0.4rem"}}]  

     (or username "user-chat")
     (when is-current-user " (you)")]))
  

(defn sidebar []
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
       ;[:button {:on-click #(ws/make-websocket! (str "ws://" (.-host js/location) "/ws") update-messages!)} "Create ws-connection"]

       (for [contact @(subscribe [:contacts])]
         [user-view (:id contact) (:username contact) (:is-online contact)])]

       [:div {:style {
                :display "flex"
                :flex-direction "column"
                :margin-left "1.5rem" }}
         [:h2 "Direct Messages"]
           (for [contact @(subscribe [:contact-chats] )]
             [user-view (:user-id contact) (:username contact) false (:chat-id contact)])]

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

(defn message-view [{:keys [message username timestamp]}]
  [:div {:style {:margin "0.5rem"}}
    [:span {:style {:color "#463636" :font-weight "bold" }} (and username (-> username clojure.string/capitalize))] 
    [:span {:style {:font-style "italic" }} " " timestamp]
    [:span {:style {:display "block" :padding "0.1rem" }} message] ])
    
(defonce messages (r/atom []))

(defn update-messages! [message]
  ;; (println "arg in update-messages! " arg))
  ;; (swap! messages #(vec (take 10 (conj % message)))))
  (swap! messages conj message))

(defn main-page []
  (let [value (r/atom "")
        add-message #(if-not (-> % .-shiftKey)
                        (let [passed-value (-> % .-target .-value clojure.string/trim)]
                          (dispatch [:add-message {:message  passed-value :chat-id @(subscribe [:active-chat])}])
                          (reset! value "")))]
    (fn []
      [:div {:style {
               :display "flex"
               :flex-direction "column"
               :width "100%" 
            }}

          [:div {:style {
                 :border-bottom "1px solid #e3e3e3"
                 :padding "1rem"
               }}

             [:span (or (:name (some #(when (= @(subscribe [:active-chat]) (:id %)) %) @(subscribe [:chats])))
                        (:username (some #(when (= @(subscribe [:active-chat]) (:chat-id %)) %) @(subscribe [:contacts])))) ]]

          (into [:div 
                   {:style {
                     :color "gray"
                     :height "100vh"
                     :overflow-y "scroll"
                     :margin "1rem" }}]

                 (->> (concat @(subscribe [:messages-by-chat]) @messages) ; currently appends all the messages-by-chat with the ws-messages. The ws-messages needs to be by chat-id.
                   (map message-view)))

          (when @(subscribe [:active-chat]) 
            [:input {:style {
                     :padding "1rem"
                     :width "100%" }
                   :on-change #(reset! value (-> % .-target .-value))
                   :on-key-down #(case (.-which %) 
                                   13  (add-message %)
                                   nil)
                   :placeholder "Write your message here." 
                   :value @value }])]
      )))

(defn main []
  (dispatch-sync [:get-chats]) 
  (dispatch-sync [:get-contacts]) 
  (dispatch [:get-user-meta-data])
  (fn []
    [:div {:style {:display "flex" :height "100vh"}}
      [sidebar]
      [main-page]])
)

(defn mount-root []
  (ws/make-websocket! (str "ws://" (.-host js/location) "/ws") update-messages!)
  (r/render [main] (.getElementById js/document "app")))

(mount-root)


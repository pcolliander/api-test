(ns api-test.core
  (:require 
      [api-test.events]
      [api-test.subs]
      [reagent.core :as r]
      [re-frame.core :refer [subscribe dispatch dispatch-sync]]))

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

; How should I treat a direct-message chat? I think it should be a chat just like any other (so it can share logic) but perhaps separated/identified by an attribute (in the db, sent to the client).
; Maybe it should be initiated on the client as a user-action, and then sent to the server as a new "chat." 
; So I keep using the GET /contacts endpoint to the all the available contacts; then a user can initiate a chat which actually creates a chat with the user.
; then it's sent along with other chats in the GET /chats, but filtered on the client to appear under "Direct Messages."

(defn user-view [{:keys [username is-online chat-id] } is-current-user]
  (println "username " username)
  (println "is-online " is-online)
  (println "chat-id " chat-id)
  (println "is-current-user " is-current-user)

  (let [active-chat @(subscribe [:active-chat])]
    [:span {
       :style {
         :background (when (= chat-id active-chat) "#6698c8")
         :color (when (= chat-id active-chat) "white")
         :cursor "pointer"
         :user-select "none" }
       :on-click #(dispatch [:change-active-chat chat-id])
      }
      [:i {:class (if is-online "fa fa-circle" "fa fa-circle-o" )
      :style {
       :color (when is-online "#1db91d")
       :font-size "small"
       :margin-right "0.4rem"
      }}]  

     username 
     (when is-current-user " (you)")]))

(defn sidebar []
  (let [value (r/atom "")]
    [:div {:style { 
             :background "#303E4D"
             :color "#c1c5ca"
             :display "flex"
             :flex-direction "column"
             :justify-content "space-evenly"
             :width "18%" } } 

       [:div {:style {
                :display "flex"
                :flex-direction "column"
                :margin-left "1.5rem"
                      }}
          [:h2 "Direct Messages"]

          ;; [user-view {:id 3 :username (@(subscribe [:logged-in-user]) :username) :chat-id 6 :is-online true} true]
          ; the logged-in user should just be treated as a normal user, then I can render them all below. Compare the ids to know it's the logged in user.
          (map user-view @(subscribe [:contacts]))]

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

(defn message-view [{:keys [username timestamp message]}]
  [:div {:style {:margin "0.5rem"}}
    [:span {:style {:color "#463636" :font-weight "bold" }} username] 
    [:span {:style {:font-style "italic" }} " " timestamp]
    [:span {:style {:display "block" :padding "0.1rem" }} message]
  ])
    

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

                 (->> @(subscribe [:messages-by-chat])
                   (map message-view)))

          [:input {:style {
                     :padding "1rem"
                     :width "100%" }
                   :on-change #(reset! value (-> % .-target .-value))
                   :on-key-down #(case (.-which %) 
                                   13 (add-message %)
                                   nil)
                   :placeholder "Write your message here." 
                   :value @value
                   } ]]
      )))

(defn main []
  (dispatch-sync [:init-db])
  (dispatch-sync [:get-chats]) 
  (dispatch-sync [:get-contacts]) 
  (dispatch [:get-user-meta-data])
  (fn []
    [:div {:style {:display "flex" :height "100vh"}}
      [sidebar]
      [main-page]])
)

(defn mount-root []
  (r/render [main] (.getElementById js/document "app")))

(mount-root)


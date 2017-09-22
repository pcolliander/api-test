(ns api-test.core
  (:require [api-test.events]
    [api-test.subs]
    [reagent.core :as r]
            [cljs.core.async :refer [<! >!]] 
            [cljs-http.client :as http-client]
            [re-frame.core :refer [subscribe dispatch]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(def username (r/atom ""))

(defn get-username []
  (go (let [response (<! (http-client/get "http://localhost:3000/data"))]
    (reset! username (-> (:user (:data (:body response))) clojure.string/capitalize)))))


(defn chat-view [{:keys [id name] }] 
  (let [active-chat @(subscribe [:active-chat])]
    [:span {
        :style {
          :background (when (= id active-chat) "#6698c8")
          :color (when (= id active-chat) "white")
          :cursor "pointer"
          :user-select "none" } 
        :on-click  #(dispatch [:change-active-chat id])
       } name ]))


(defn user-view [{:keys [username is-online chat-id] } is-current-user]
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
  (get-username)
  (fn []
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
          [user-view {:id 3 :username @username :chat-id 6 :is-online true} true]
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
                  :on-click #(dispatch [:add-chat])
                 } "+"] 
         ]
       
          (into [:idv {:style {:display "flex" :flex-direction "column" }}] (map chat-view @(subscribe [:chats])))
          ]
     ]))

(defn message-view [{:keys [user timestamp value]} message]
    [:div {:style {:margin "0.5rem"}}
      [:span {:style {:color "#463636" :font-weight "bold" }} user] 
      [:span {:style {:font-style "italic" }} " " timestamp]
      [:span {:style {:display "block" :padding "0.1rem" }} value]
    ])

(defn main-page []
  (let [value (r/atom "")
        add-message #(if-not (-> % .-shiftKey)
                        (let [passed-value (-> % .-target .-value clojure.string/trim)]
                          (dispatch [:add-message {:value  passed-value :chat-id @(subscribe [:active-chat]) :user @username :timestamp (.getTime (js/Date.))}])
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

                 (->> @(subscribe [:messages])
                   (filter #(= (:chat-id %) @(subscribe [:active-chat])))
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
      )
  )
)

(defn main []
  (dispatch [:init-db])
  (fn []
    [:div {:style {:display "flex" :height "100vh"}}
      [sidebar]
      [main-page]])
)

(defn mount-root []
  (r/render [main] (.getElementById js/document "app")))

(mount-root)


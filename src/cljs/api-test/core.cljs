(ns api-test.core
  (:require [reagent.core :as r]
            [cljs.core.async :refer [<! >!]] 
            [cljs-http.client :as http-client]
            [re-frame.core :refer [subscribe dispatch]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(def username (r/atom ""))

(defn get-username []
  (go (let [response (<! (http-client/get "http://localhost:3000/data"))]
    (reset! username (-> (:user (:data (:body response))) clojure.string/capitalize))
  ))
)

(def chats (r/atom [{:id 1 :name "Dreamteam"} {:id 2 :name "Security Team  2"} {:id 3 :name "The Loser Club"}]))
(def active-chat (r/atom 1)) ; switch to re-frame


(defn chat-view [{:keys [id name] }] 
  [:span {
          :style {:cursor "pointer"} 
          :on-click  #(reset! active-chat id)
         } name ])

(def contacts (r/atom [{:id 1 :username "Gretchen" :is-online true} {:id 2 :username "Auntie Abdil" :is-online false}]))

(defn user-view [{:keys [username is-online] } is-current-user]
    [:span [:i {:class (if is-online "fa fa-circle" "fa fa-circle-o" )
                :style {
                 :color (when is-online "#1db91d")
                 :font-size "small"
                 :margin-right "0.4rem"
                }}]  
   username 
   (when is-current-user " (you)")])

(defn sidebar []
  (get-username) ; instead of a component-did-mount
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
          [user-view {:username @username :is-online true} true]
          (map user-view @contacts)]

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
                  :on-click #(swap! chats conj "new chat")
                 } "+"] 
         ]
       

       [:div {:style {:display "flex" :flex-direction "column" }}
        (map chat-view @chats)
       ]]
     ]))

(def messages (r/atom [{:chat-id 1 :value "a message" :user "Pontus" :timestamp "some time"} 
                     {:chat-id 2 :value "a message" :user "Pontus" :timestamp "some time"}
                     {:chat-id 3 :value "a message" :user "Pontus" :timestamp "some time"}
                     {:chat-id 1 :value "another message" :user "Pontus" :timestamp "some time"}
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
                          (swap! messages conj {:value passed-value :chat-id @active-chat :user @username :timestamp (.getTime (js/Date.))} )
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
             "Meta data about the current chat; settings; searchbox." ]

          [:div {:style {
                 :color "gray"
                 :height "100vh"
                 :overflow-y "scroll"
                 :margin "1rem" }}

           (->> @messages 
               (filter #(= (:chat-id %) @active-chat))
               (map message-view))
          ]

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
  [:div {:style {:display "flex" :height "100vh"}}
    [sidebar]
    [main-page]]
)

(defn mount-root []
  (r/render [main] (.getElementById js/document "app")))

(mount-root)


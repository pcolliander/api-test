(ns api-test.chat-window
  (:require 
    [api-test.message-view :as message-view]
    [reagent.core :as r]
    [re-frame.core :refer [subscribe dispatch]]))

(defn component []
  (let [value (r/atom "")
        add-message #(if-not (-> % .-shiftKey)
                        (let [passed-value (-> % .-target .-value clojure.string/trim)]
                          (dispatch [:add-message {:message passed-value :chat-id @(subscribe [:active-chat])}])
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

             ; find macro 
             [:span (or (:name (some #(when (= @(subscribe [:active-chat]) (:id %)) %) @(subscribe [:chats])))
                        (:username (some #(when (= @(subscribe [:active-chat]) (:chat-id %)) %) @(subscribe [:contacts])))) ]]

          (into [:div 
                   {:style {
                     :color "gray"
                     :height "100vh"
                     :overflow-y "scroll"
                     :margin "1rem" }}]

                 (->> @(subscribe [:messages-by-chat])
                   (map message-view/component)))

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

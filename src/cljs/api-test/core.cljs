(ns api-test.core
  (:require [api-test.chat-window :as chat-window]
            [api-test.helpers :refer [determine-response]]
            [api-test.sidebar :as sidebar]
            [api-test.websockets :as ws]
            [api-test.events]
            [api-test.subs]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]))

(enable-console-print!)

(defn main []
  (dispatch-sync [:get-chats]) 
  (dispatch-sync [:get-contacts]) 
  (dispatch [:get-user-meta-data])
  (fn []
    [:div {:style {:display "flex" :height "100vh"}}
      [sidebar/component]
      [chat-window/component]]))

(defn mount-root []
  (ws/make-websocket! (str "ws://" (.-host js/location) "/ws") determine-response))
  (r/render [main] (.getElementById js/document "app"))

(mount-root)


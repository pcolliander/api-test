(ns api-test.message-view
  (:require [clojure.string :as str]))

(defn component [{:keys [message username timestamp]}]
  [:div {:style {:margin "0.5rem"}}
    [:span {:style {:color "#463636" :font-weight "bold" }} (and username (-> username str/capitalize))] 
    [:span {:style {:font-style "italic" }} " " timestamp]
    [:span {:style {:display "block" :padding "0.1rem" }} message] ])


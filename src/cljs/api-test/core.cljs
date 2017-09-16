(ns api-test.core
  (:require [reagent.core :as r :refer [atom]]
            [cljs.core.async :refer [<! >!]] 
            [cljs-http.client :as http]
            )
  (:require-macros [cljs.core.async.macros :refer [go]])
  )


(defn get-data []
  (go (let [response (<! (http/get "http://localhost:3000/data"))]
    (prn (:status response))
    (prn  response)
  ))
)

(defn sidebar []
  [:div {:style { :align-items "center"
           :background "#303E4D"
           :color "#c1c5ca"
           :display "flex"
           :flex-direction "column"
           :justify-content "space-evenly"
           :width "18%" }
        } 

     [:div "[Username]"]
     [:div "Chats"]
     [:div "Direct Messages"]
     [:button {:style {
                 :border "none"
                 :border-radius "6%"
                 :background "aliceblue" }
               :on-click get-data
              } 
       "Create new chat"]
  ])

(defn main-page []
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
             :margin "auto"}}
                     "main chat window"]

      [:input {:style {
                 :padding "1rem"
                 :width "100%" }
               :placeholder "Write your message here." 
               :on-change #()
               
               } ]
      
])

(defn main []
  [:div {:style {:display "flex" :flex-direction "column"}}

   [:div {:style {:display "flex" :height "100vh"}}
    (sidebar)
    (main-page)
   ]]
)

(defn mount-root []
  (r/render [main] (.getElementById js/document "app")))

(mount-root)


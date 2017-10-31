(ns api-test.websockets)

(defonce ws-chan (atom nil))

(defn receive-transit-msg! [update-fn]
  (fn [msg]
    (update-fn
     (js->clj (.parse js/JSON (-> msg .-data)) :keywordize-keys true ))))

(defn send-transit-msg! [msg]
  ;; (println "msg in send-transit-msg! " msg)
  (let [json (.stringify js/JSON (clj->js msg))]
    (if @ws-chan
      (.send @ws-chan json)
      (throw (js/Error "websocket is not available")))))

(defn make-websocket! [url receive-handler]
  ;; (println "attempting to connect websocket")
  (if-not @ws-chan  ; otherwise it opens multiple when saving, non-reloadable code (figwheel).
    (if-let [chan (js/WebSocket. url)]
      (do
        (set! (.-onmessage chan) (receive-transit-msg! receive-handler))
        (reset! ws-chan chan)
        (println "Websocket connection established with: " url))
      (throw (js/Error. "Websocket connection failed!")))
    (println "already a connection open")))



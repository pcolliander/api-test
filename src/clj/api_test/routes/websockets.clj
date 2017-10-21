(ns api-test.routes.websockets
  (:require [api-test.services.chat :as chat-service]
            [api-test.services.message :as message-service]
            [clojure.data.json :as json]
            [compojure.core :refer [defroutes GET]]
            [immutant.web.async :as async] ))

(defonce channels (atom #{}))

(extend-type java.sql.Timestamp
    json/JSONWriter
      (-write [date out]
          (json/-write (str date) out)))

(defn- get-person [channel]
  (:identity (async/originating-request channel)))

(defn- get-online-users []
 (map #(:id (get-person %)) @channels))

(defn connect! [channel]
  (swap! channels conj channel)

  (let [online-users get-online-users]

  (println "connecting to websocket!")
  (println "online-users " online-users)

  (println "json " (json/write-str (online-users)))

  (doseq [channel @channels]
    (async/send! channel (json/write-str (online-users))))))

(defn disconnect! [channel {:keys [code reason]}]
  (swap! channels #(remove #{channel} %))
  (let [online-users get-online-users]

  (doseq [channel @channels]
    (async/send! channel (json/write-str (online-users))))))


(defn notify-clients! [channel msg]
  (let [person (get-person channel)
        {:keys [chat-id message]} (:message (json/read-str msg :key-fn keyword))
        {:keys [id timestamp]} (message-service/add-one person chat-id message)
        response (json/write-str {:message message :id id :timestamp timestamp :chat-id chat-id :username (:username person) :person-id (:id person) })]

  (doseq [channel @channels]
    (async/send! channel response))))

(def websocket-callbacks
  {:on-open connect!
   :on-close disconnect!
   :on-message notify-clients!})

(defn ws-handler [request]
  (async/as-channel request websocket-callbacks))

(defroutes websocket-routes
  (GET "/ws" [] ws-handler))


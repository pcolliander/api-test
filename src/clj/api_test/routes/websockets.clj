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
  ;; (println "connecting to websocket!")

  (let [online-users get-online-users]
    (doseq [channel @channels]
      (async/send! channel (json/write-str {:action "online-status" :payload {:users-ids (online-users)}})))))

(defn disconnect! [channel {:keys [code reason]}]
  (swap! channels #(remove #{channel} %))
  (let [online-users get-online-users]

  (doseq [channel @channels]
    (async/send! channel (json/write-str {:action "online-status" :payload {:users-ids (online-users)}})))))

(defn- send-new-chat-message [person {:keys [action payload]}]
  (let [{:keys [chat-id message]} payload
        {:keys [id timestamp]} (message-service/add-one person chat-id message)
        response (json/write-str {:action action
                                  :payload {:chat-id chat-id
                                            :id id
                                            :message message
                                            :person-id (:id person)
                                            :timestamp timestamp
                                            :username (:username person)}})]

  (doseq [channel @channels]
    (async/send! channel response))))

(defn- update-user-is-typing [person {:keys [action payload]}]
  (let [{:keys [chat-id]} payload
        response (json/write-str {:action action
                                  :payload {:chat-id chat-id
                                            :person-id (:id person)
                                            :username (:username person)}})]

  (doseq [channel @channels]
    (async/send! channel response))))


(defn notify-clients! [channel msg]
  (let [person (get-person channel)
        msg (json/read-str msg :key-fn keyword)
        {:keys [action]} msg]

  (case action
    "user-typing" (update-user-is-typing person msg)
    "user-stopped-typing" (update-user-is-typing person msg)
    "new-chat-message" (send-new-chat-message person msg))))

(def websocket-callbacks
  {:on-open connect!
   :on-close disconnect!
   :on-message notify-clients!})

(defn ws-handler [request]
  (async/as-channel request websocket-callbacks))

(defroutes websocket-routes
  (GET "/ws" request ws-handler))


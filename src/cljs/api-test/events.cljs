(ns api-test.events
  (:require [api-test.db :refer [default-db]]
            [api-test.websockets :as ws]
            [cljs-http.client :as http-client]
            [cljs.spec.alpha :as s]
            [re-frame.core :refer [reg-event-db reg-event-fx reg-fx inject-cofx path trim-v after debug]]
            [cljs.core.async :refer [<! >!]]
            [re-frame.core :refer [subscribe dispatch]])
  (:require-macros [cljs.core.async.macros :refer [go]] ))

(defn check-and-throw
    "Throws an exception if `db` doesn't match the Spec `a-spec`."
      [a-spec db]
        (when-not (s/valid? a-spec db)
              (println)
              (println (s/explain-str a-spec db))
              (println)
              (throw (ex-info (str "spec check failed: " (s/explain-str a-spec db)) {}))))

(def check-spec-interceptor (after (partial check-and-throw :api-test.db/db)))
(def chat-interceptors [check-spec-interceptor])

; own effects handler
; -------------------
(reg-fx
  :http-client-get

  (fn [{:keys [url success-handler]}]
    (go (let [response (<! (http-client/get url))]
      (dispatch (conj success-handler (:body response)))
    ))))

(reg-fx
  :http-client-post
  (fn [{:keys [url params success-handler]}]
    (go (let [response (<! (http-client/post url params))]
      (dispatch (conj success-handler (:body response)))
    ))))

(reg-fx
  :ws-send-message
  (fn [message]
    (ws/send-transit-msg! message)))

; websocket events
; -------------------
(reg-event-fx
  :user-typing
  (fn [cofx [action payload]]
    {:ws-send-message payload }))

(reg-event-fx
  :user-stopped-typing
  (fn [cofx [action payload]]
    (let [chat-id (:payload payload)]

    {:ws-send-message {:action "user-stopped-typing"
                       :payload {:chat-id chat-id }}})))

(reg-event-db
  :set-user-is-typing
  (fn [db [action {:keys [payload]}]]
    (assoc-in db [:users-typing] (conj (:users-typing db) payload))))


(reg-event-db
  :set-user-stopped-typing
  (fn [db [action response]]
    (dissoc db :users-typing )))  ; needs to only dissoc the actual user, not the whole list.

(reg-event-fx
  :add-message
  (fn [cofx [action {:keys [chat-message chat-id]}]]
    {:ws-send-message {:action "new-chat-message"
                       :payload {:chat-id chat-id
                                :message chat-message }}}))

(reg-event-db
  :ws-add-message
  chat-interceptors
  (fn [db [action message]]
    (let [{:keys [chat-id]} message]
      ;; (println "db " db)
      (println "message " message)
      (assoc-in db [:messages chat-id] (conj ((:messages db) chat-id) message)))))

(reg-event-db
  :ws-update-online-status
  chat-interceptors
  (fn [db [action {:keys [payload]}]]
    (let [user-ids (:users-ids payload)]
      (assoc db :online-users user-ids))))

; event handlers
; -------------------

;--------------------
(reg-event-fx
  :add-chat-with-contact
  chat-interceptors
  (fn [cofx [action id]]
    {:http-client-post {:url (str "http://localhost:8080/contacts/"id"/chats")
                        :params {:json-params {:contact-user-id id}}
                        :success-handler [:add-chat-with-contact-success]} }))

(reg-event-db
  :add-chat-with-contact-success
  (fn [db [action response-body]]
    (let [chat (:chat response-body)]
      (update-in db [:all-chats :contact-chats] conj chat))))

(reg-event-fx
  :change-active-chat
  chat-interceptors
  (fn [{db :db} [action id]]
    (println "db " db)
    {:dispatch [:get-messages id]
     :db (assoc db :active-chat id) }))

(reg-event-fx
  :get-messages
  (fn [cofx [action chat-id]]
    {:http-client-get {:url (str "http://localhost:8080/chats/" chat-id "/messages")
                       :success-handler [:get-messages-success] }}))

(reg-event-db
  :get-messages-success
  chat-interceptors
  (fn [db [action response-body]]
    (let [messages (:messages response-body)
          chat-id  (:chat-id response-body) ]

      (assoc-in db [:messages chat-id] messages))))

; ----------
(reg-event-fx
  :get-chats
  chat-interceptors
  (fn [cofx action]
    {:http-client-get {:url "http://localhost:8080/chats"
                       :success-handler [:get-chats-success] }}))

(reg-event-db
  :get-chats-success
  chat-interceptors
  (fn [db [action response-body]]
    (let [chats (:chats response-body)
          contact-chats (:contact-chats response-body)
          self-chat (:self-chat response-body) ]

      (assoc db :all-chats {:contact-chats contact-chats :chats chats :self-chat self-chat} ))))

; ----------
(reg-event-fx
  :get-contacts
  (fn [cofx action]
    {:http-client-get {:url "http://localhost:8080/contacts"
                       :success-handler [:get-contacts-success] }}))

(reg-event-db
  :get-contacts-success
  chat-interceptors
  (fn [db [action response-body]]
    (let [contacts (:conv-contacts response-body)]
      (assoc db :contacts contacts))))

; ----------
(reg-event-db
  :insert-user-meta-data
  chat-interceptors
  (fn [db [action response-body]]
    (let [username (:username (:data response-body))
          id (:id (:data response-body))]
      (assoc-in db [:logged-in-user] {:id id :username (clojure.string/capitalize username)}))))

(reg-event-fx
  :get-user-meta-data
  (fn [db [action]]
    {:http-client-get {:url "http://localhost:8080/self"
                       :success-handler [:insert-user-meta-data] }}))

; ----------
(reg-event-fx
  :add-chat
  chat-interceptors
  (fn [cofx [action name]]
    {:http-client-post {:url "http://localhost:8080/chats"
                        :params {:json-params {:name name :is-private false}}
                        :success-handler [:add-chat-success] }}))
(reg-event-db
  :add-chat-success
  chat-interceptors
  (fn [db [action response-body]]
    (let [chat (:chat response-body)
          {:keys [chat-id name is-private]} chat ]
      (update-in db [:chats] conj {:id chat-id :name name :is-private is-private}))))


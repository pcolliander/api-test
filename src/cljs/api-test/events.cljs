(ns api-test.events
  (:require [api-test.db :refer [default-db]]
            ;; [ajax.core :refer [GET POST]]
            [cljs-http.client :as http-client]
            [re-frame.core :refer [reg-event-db reg-event-fx reg-fx inject-cofx path trim-v after debug]]
            [cljs.core.async :refer [<! >!]] 
            [re-frame.core :refer [subscribe dispatch]])
  (:require-macros [cljs.core.async.macros :refer [go]] ))

(reg-event-db
  :init-db
  (fn [_ _]
    {
     :contacts [{:id 1 :chat-id 4 :username "Gretchen" :is-online true} {:id 2 :chat-id 5 :username "Auntie Abdil" :is-online false}]
     :logged-in-user {:id nil :username ""}} ))

; own effects handler
; -------------------
(reg-fx
  :http-client-get
  (fn [{:keys [url success-handler]}]
    (go (let [response (<! (http-client/get url))]
      (dispatch (conj success-handler response))
    ))))

(reg-fx
  :http-client-post
  (fn [{:keys [url params success-handler]}]
    (go (let [response (<! (http-client/post url params))]
      (dispatch (conj success-handler response))
    ))))



; event handlers
; -------------------

(reg-event-fx
  :change-active-chat
  (fn [{db :db} [action id]]
    {:dispatch [:get-messages id]
     :db (assoc db :active-chat id)
    }
    ))

(reg-event-fx
  :get-messages
  (fn [cofx [action chat-id]]
    {:http-client-get {:url (str "http://localhost:3000/chats/"chat-id "/messages")
                       :success-handler [:get-messages-success] }}
    ))

(reg-event-db
  :get-messages-success
  (fn [db [action response]]
    (let [messages (:messages (:body response))
          chat-id  (:chat-id (:body response)) ]
    
      ; Per messages I need: username (who posted it), chat-id (where it was posted), timestamp (when it was posted).
      (update-in db [:messages] merge messages))))

(reg-event-fx
  :get-chats
  (fn [cofx action]
    {:http-client-get {:url "http://localhost:3000/chats" 
                       :success-handler [:get-chats-success]
                       }}))
(reg-event-db 
  :get-chats-success
  (fn [db [action response]]
    (let [chats (:chats (:body response))]
      (update-in db [:chats] concat chats))))

(reg-event-db 
  :insert-user-meta-data
  (fn [db [action response]]
    (let [username (:username (:data (:body response)))
          id (:id (:data (:body response)))]
      (update-in db [:logged-in-user] conj {:id id :username (clojure.string/capitalize username)}))))


(reg-event-fx
  :get-user-meta-data
  (fn [db [action]]
    {:http-client-get {:url "http://localhost:3000/data" 
                       :success-handler [:insert-user-meta-data]
                 }}))

(reg-event-fx
  :add-chat
  (fn [cofx [action name]]
    {:http-client-post {:url "http://localhost:3000/chats"
                        :params {:json-params {:name name :is-private false}}
                        :success-handler [:add-chat-success]
                        }}))
(reg-event-fx
  :add-message
  (fn [cofx [action {:keys [message chat-id]}]]
    {:http-client-post {:url (str "http://localhost:3000/chats/"chat-id"/messages")
                        :params {:json-params {:message message } }}}))

(reg-event-db
  :add-chat-success
  (fn [db [action response]]
    (let [chat (:chat (:body response))
          {:keys [chat-id name is-private]} chat ]
      (update-in db [:chats] conj {:id chat-id :name name :is-private is-private}))))




(ns api-test.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))

(reg-sub
  :active-chat
  (fn [db] 
    (:active-chat db)))

(reg-sub
  :chats
  (fn [db]
    (->> (:chats (:all-chats db))
      (sort-by :id ))))

(reg-sub
  :contacts
  (fn [db]
    (:contacts db)))

(reg-sub
  :users-typing
  (fn [db]
    (:users-typing db)))

(reg-sub
  :users-typing-by-active-chat
  (fn [_ _]
    [(subscribe [:active-chat])
     (subscribe [:users-typing])
     (subscribe [:logged-in-user]) ])

  (fn [[active-chat users-typing logged-in-user]]
    (doall
      (->> users-typing
         (distinct)
         (filter #(= (:chat-id %) active-chat))
         (filter #(not= (:person-id %) (:id logged-in-user)))))))

(reg-sub 
  :contact-chats
  (fn [db]
    (let [contact-chats (:contact-chats (:all-chats db))
          self-chat (:self-chat (:all-chats db))]

      (conj contact-chats self-chat))))

(reg-sub
  :messages
  (fn [db]
    (:messages db)))

(reg-sub
  :ws-messages
  (fn [db]
    (:ws-messages db)))

(reg-sub
  :online-users
  (fn [db]
    (:online-users db)))

(reg-sub
  :messages-by-chat
  (fn [_ _]
    [(subscribe [:active-chat])
     (subscribe [:messages])])

  (fn [[active-chat messages] _]
      (get messages active-chat)))

(reg-sub
  :logged-in-user
  (fn [db]
    (:logged-in-user db)))


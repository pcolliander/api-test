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
  :contact-chats
  (fn [db]
    (:contact-chats (:all-chats db))))

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


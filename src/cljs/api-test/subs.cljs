(ns api-test.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))

(reg-sub
  :active-chat
  (fn [db] 
    (:active-chat db)))

(reg-sub
  :chats
  (fn [db]
    (sort-by :id (:chats db))))

(reg-sub
  :contacts
  (fn [db]
    (:contacts db)))

(reg-sub
  :messages
  (fn [db]
    (:messages db)))

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


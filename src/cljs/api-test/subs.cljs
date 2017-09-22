(ns api-test.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))

(reg-sub
  :active-chat
  (fn [db] 
    (:active-chat db)))

(reg-sub
  :chats
  (fn [db]
    (:chats db)))

(reg-sub
  :contacts
  (fn [db]
    (:contacts db)))

(reg-sub
  :messages
  (fn [db]
    (:messages db)))

(reg-sub
  :logged-in-user
  (fn [db]
    (:logged-in-user db)))


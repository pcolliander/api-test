(ns api-test.db
  (:require [re-frame.core :as re-frame] 
            [cljs.spec.alpha :as s] ))

(s/def ::id (s/and int? #(> % 0) ))
(s/def ::username string?)
(s/def ::logged-in-user (s/keys :req-un [::id ::username]))

(s/def ::is-private boolean?)
(s/def ::chat (s/keys :req-un [::id ::username ::is-private]))

(s/def ::chat-id (s/and int? #(> % 0)))
(s/def ::person-id (s/and int? #(> % 0)))
(s/def ::is-self-chat boolean?)
(s/def ::contact-chat (s/keys :req-un [::chat-id ::person-id ::is-self-chat]))

(s/def ::all-chats (s/keys :req-un [::contact-chats ::chats]))
(s/def ::active-chat (s/and int? #(> % 0)))

(s/def ::db (s/keys :opt-un [ ::active-chat ::all-chats ::contacts ::logged-in-user ] ))
  
(def default-db { })


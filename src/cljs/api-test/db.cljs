(ns api-test.db
  (:require [re-frame.core :as re-frame] 
            [cljs.spec.alpha :as s] ))

(s/def ::id nat-int?)
(s/def ::username string?)
(s/def ::logged-in-user (s/keys :req-un [::id ::username]))

(s/def ::is-private boolean?)
(s/def ::chat (s/keys :req-un [::id ::username ::is-private]))

(s/def ::chat-id nat-int?)
(s/def ::person-id nat-int?)
(s/def ::is-self-chat boolean?)
(s/def ::contact-chat (s/keys :req-un [::chat-id ::person-id ::is-self-chat]))

(s/def ::all-chats (s/keys :req-un [::contact-chats ::chats]))
(s/def ::active-chat nat-int?)

(s/def ::db (s/keys :opt-un [ ::active-chat ::all-chats ::contacts ::logged-in-user ] ))
  
(def default-db { })


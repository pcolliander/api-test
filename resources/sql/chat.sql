
-- :name add-chat! :<! :n
-- :doc adds a new chat.
INSERT INTO chat 
(organisation_id, name, is_private, is_self_chat, is_direct_message, is_group_direct_message)
VALUES (:organisation-id, :name, :is-private, :is-self-chat, :is-direct-message, :is-group-direct-message)
RETURNING id

-- :name add-chat-permission! :!
-- :doc adds user permission for a user to the given chat.
INSERT INTO chat_permission
(chat_id, person_id)
VALUES (:chat-id, :person-id)

-- :name get-contact-chat :? :n
 SELECT cp2.person_id FROM chat
 INNER JOIN chat_permission cp1 ON chat.id = cp1.chat_id
 LEFT JOIN chat_permission cp2 ON chat.id = cp2.chat_id
 WHERE is_direct_message = TRUE AND is_group_direct_message = FALSE
 AND cp1.person_id = :contact-id
 AND cp2.person_id = :person-id

-- :name get-chats :? :*
-- :doc gets all the public chats the user has access to.
SELECT id, name, is_private FROM chat
INNER JOIN chat_permission ON chat.id = chat_permission.chat_id
WHERE person_id = :person-id

-- :name get-contact-chats :? :*
-- :doc gets all the contact chats the user has initiated/been initiated.
SELECT chat_id, username, person_id, is_self_chat FROM chat
 INNER JOIN chat_permission ON chat_permission.chat_id=chat.id
 INNER JOIN person ON chat_permission.person_id = person.id
WHERE is_direct_message = true AND is_self_chat = FALSE AND person_id != :person-id
AND chat_id in
  (select id from chat 
      INNER JOIN chat_permission on chat.id = chat_permission.chat_id
        AND person_id = :person-id)

-- :name get-self-chat :? :1
SELECT chat_id, username, person_id, is_self_chat FROM chat 
INNER JOIN chat_permission ON chat_permission.chat_id=chat.id 
INNER JOIN person ON person_id=person.id WHERE chat_permission.person_id = :person-id AND is_self_chat = TRUE


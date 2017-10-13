-- :name add-chat! :<! :n
-- :doc adds a new chat.
INSERT INTO chat 
(organisation_id, name, is_private, is_self_chat, is_direct_message, is_group_direct_message)
VALUES (:organisation-id, :name, :is-private, :is-self-chat, :is-direct-message, :is-group-direct-message)
RETURNING id

-- :name contact-chat-exists? :? :n
-- :doc checks whether a contact chat exists already
 SELECT cp2.person_id FROM chat
 INNER JOIN chat_permission cp1 ON chat.id = cp1.chat_id
 LEFT JOIN chat_permission cp2 ON chat.id = cp2.chat_id
 WHERE is_direct_message = TRUE AND is_group_direct_message = FALSE
 AND cp1.person_id = :contact-id
 AND cp2.person_id = :person-id

-- :name get-messages-by-chat :? :*
-- :doc gets all the message by a given chat.
SELECT message.id, message.chat_id, message, timestamp, username FROM message
INNER JOIN chat_permission on message.chat_id = chat_permission.chat_id
INNER JOIN person on message.person_id = person.id
WHERE message.chat_id = :chat-id AND chat_permission.person_id = :person-id

-- :name get-contacts-by-organisation :? :*
-- :doc gets all the person also part of the same chats as the given user.
SELECT person.id, username FROM person 
INNER JOIN organisation_permission ON person.id = organisation_permission.person_id
WHERE organisation_permission.organisation_id = :organisation-id

-- :name add-message! :<! :n
-- :doc adds a new message to the given chat-id.
INSERT INTO message
(chat_id, person_id, message, timestamp)
VALUES (:chat-id, :person-id, :message, :timestamp)
RETURNING id

-- :name add-chat-permission! :!
-- :doc adds user permission for a user to the given chat.
INSERT INTO chat_permission
(chat_id, person_id)
VALUES (:chat-id, :person-id)

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

-- :name self-chat-exists? :? :n
-- :doc checks whether a contact chat exists already
SELECT id FROM chat
INNER JOIN chat_permission ON chat.id = chat_permission.chat_id
WHERE is_self_chat = true
AND chat_permission.person_id = :person-id

-- :name get-self-chat :? :1
-- :doc gets all the contact chats the user has initiated/been initiated.
SELECT chat_id, username, person_id, is_self_chat FROM chat 
INNER JOIN chat_permission ON chat_permission.chat_id=chat.id 
INNER JOIN person ON person_id=person.id WHERE chat_permission.person_id = :person-id AND is_self_chat = TRUE

-- :name add-person! :<! :n
-- :doc creates a new user record
INSERT INTO person
(username, password)
VALUES (:username, :password)
RETURNING id, username

-- :name add-person-to-organisation! :! :n
-- :doc adds a person to an organisation
INSERT INTO organisation_permission
(organisation_id, person_id)
VALUES (:organisation-id, :person-id)

-- :name get-person-by-username :? :1
-- :doc retrieve a user given the username.
SELECT id, username, organisation_id FROM person
INNER JOIN organisation_permission ON person.id=organisation_permission.person_id
WHERE username = :username

-- :name get-person-by-id :? :1
-- :doc retrieve a username given the id
SELECT username, id, organisation_id FROM person
INNER JOIN organisation_permission ON person.id = organisation_permission.person_id
WHERE person.id = :person-id

-- :name get-person-password-by-username :? :1
-- :doc retrieve a user password given the username.
SELECT password FROM person
WHERE username = :username


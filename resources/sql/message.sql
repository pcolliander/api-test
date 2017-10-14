-- :name add-message! :<! :n
-- :doc adds a new message to the given chat-id.
INSERT INTO message
(chat_id, person_id, message, timestamp)
VALUES (:chat-id, :person-id, :message, :timestamp)
RETURNING id

-- :name get-messages-by-chat :? :*
-- :doc gets all the message by a given chat.
SELECT message.id, message.chat_id, message, timestamp, username FROM message
INNER JOIN chat_permission on message.chat_id = chat_permission.chat_id
INNER JOIN person on message.person_id = person.id
WHERE message.chat_id = :chat-id AND chat_permission.person_id = :person-id

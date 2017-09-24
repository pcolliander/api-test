
-- :name create-user! :! :n
-- :doc creates a new user record
INSERT INTO users
(username, password)
VALUES (:username, :password)

-- :name add-chat! :<! :n
-- :doc adds a new chat.
INSERT INTO chats
(name, is_private)
VALUES (:name, :is-private)
RETURNING id


-- :name get-messages-by-chat :? :*
-- :doc gets all the messages by a given chat.
SELECT messages.id, messages.chat_id, message, timestamp, username FROM messages
INNER JOIN chats_permissions on messages.chat_id = chats_permissions.chat_id
INNER JOIN users on messages.user_id = users.id
WHERE messages.chat_id = :chat-id AND chats_permissions.user_id = :user-id

-- :name add-message! :! :n
-- :doc adds a new message to the given chat-id.
INSERT INTO messages
(chat_id, user_id, message, timestamp)
VALUES (:chat-id, :user-id, :message, :timestamp)

-- :name add-chat-permission! :!
-- :doc adds user permission for a user to the given chat.
INSERT INTO chats_permissions
(chat_id, user_id)
VALUES (:chat_id, :user_id)

-- :name get-chats :? :*
-- :doc gets all the chats the user has access to.
SELECT id, name, is_private FROM chats
INNER JOIN chats_permissions ON chats.id = chats_permissions.chat_id
WHERE user_id = :user_id

-- :name get-user :? :1
-- :doc retrieve a user given the id.
SELECT * FROM users
WHERE id = :id

-- :name get-user-by-username :? :1
-- :doc retrieve a user given the username.
SELECT id, username FROM users
WHERE username = :username

-- :name get-user-password-by-username :? :1
-- :doc retrieve a user password given the username.
SELECT password FROM users
WHERE username = :username


-- :name get-users :? :n
-- :doc retrieves all users
SELECT * FROM users



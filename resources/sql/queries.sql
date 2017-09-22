
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



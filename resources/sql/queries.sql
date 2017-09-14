-- :name create-user! :! :n
-- :doc creates a new user record
INSERT INTO users
(username, password)
VALUES (:username, :password)

-- :name get-user :? :1
-- :doc retrieve a user given the id.
SELECT * FROM users
WHERE id = :id

-- :name get-user-by-username :? :1
-- :doc retrieve a user given the username.
SELECT username FROM users
WHERE username = :username

-- :name get-user-password-by-username :? :1
-- :doc retrieve a user password given the username.
SELECT password FROM users
WHERE username = :username


-- :name get-users :? :n
-- :doc retrieves all users
SELECT * FROM users



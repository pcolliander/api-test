
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

-- :name get-person-by-id :? :1
-- :doc retrieve a username given the id
SELECT username, id, organisation_id FROM person
INNER JOIN organisation_permission ON person.id = organisation_permission.person_id
WHERE person.id = :person-id

-- :name get-person-by-username :? :1
-- :doc retrieve a user given the username.
SELECT id, username, organisation_id FROM person
INNER JOIN organisation_permission ON person.id=organisation_permission.person_id
WHERE username = :username

-- :name get-person-password-by-username :? :1
-- :doc retrieve a user password given the username.
SELECT password FROM person
WHERE username = :username



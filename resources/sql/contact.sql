

-- :name get-contacts-by-organisation :? :*
-- :doc gets all the person also part of the same chats as the given user.
SELECT person.id, username FROM person 
INNER JOIN organisation_permission ON person.id = organisation_permission.person_id
WHERE organisation_permission.organisation_id = :organisation-id


-- :name add-organisation! :<! :n
-- :doc creates a new organisation
INSERT INTO organisation 
(name) 
VALUES (:name)
RETURNING id, name


CREATE TABLE IF NOT EXISTS organisation_permission
(
  organisation_id SERIAL REFERENCES organisation(id) ON DELETE CASCADE,
  person_id SERIAL REFERENCES person(id)
);

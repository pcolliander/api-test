CREATE TABLE IF NOT EXISTS chat_permission
(
  chat_id SERIAL REFERENCES chat(id) ON DELETE CASCADE,
  person_id SERIAL REFERENCES person(id)
);

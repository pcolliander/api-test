CREATE TABLE IF NOT EXISTS chat_permission
(
  chat_id SERIAL REFERENCES chat(id),
  person_id SERIAL REFERENCES person(id)
);

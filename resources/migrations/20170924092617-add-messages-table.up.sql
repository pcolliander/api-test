CREATE TABLE IF NOT EXISTS message
(
  id serial PRIMARY KEY,
  chat_id serial REFERENCES chat(id),
  person_id serial REFERENCES person(id),
  message VARCHAR (3000),
  timestamp TIMESTAMP WITH TIME ZONE
);

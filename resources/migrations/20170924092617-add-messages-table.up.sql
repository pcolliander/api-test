CREATE TABLE IF NOT EXISTS messages
(
  id serial PRIMARY KEY,
  chat_id serial REFERENCES chats(id),
  user_id serial REFERENCES users(id),
  message VARCHAR (3000),
  timestamp TIMESTAMP WITH TIME ZONE
);

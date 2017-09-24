CREATE TABLE IF NOT EXISTS chats_permissions
(
  chat_id serial REFERENCES chats(id),
  user_id serial REFERENCES users(id)
);

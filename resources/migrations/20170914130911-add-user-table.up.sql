CREATE TABLE IF NOT EXISTS person
(
  id serial PRIMARY KEY, 
  username VARCHAR(30) UNIQUE, 
  password VARCHAR(300)
);

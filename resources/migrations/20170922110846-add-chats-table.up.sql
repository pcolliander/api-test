
-- need a way to easily distinguish
  -- a private chat with yourself (what you get when you click on yourself in the contact list).
    -- WHERE is_self_chat=true and user_id=:id

  -- a private chat between TWO people (what you get when you click on a person in a contact list).
    -- WHERE is_direct_message = true AND is_group_dm = false

  -- a private chat between TWO OR MORE people (what you get if you create a private chat and target one or more people, which name would be: Pontus,Bianca,Christian
    -- WHERE is_direct_message=true AND is_group_dm = true

  -- Private channel with a name (different to a private chat with two or more people, 

  -- public channel within the same organisation (all should immidiately see this in their chats view). (Just search for the organisation ID.)
    -- WHERE organisation.id = :id and is_private = false

CREATE TABLE IF NOT EXISTS chat 
(
  id SERIAL PRIMARY KEY, 
  organisation_id SERIAL REFERENCES organisation(id),
  name VARCHAR (200), 
  is_private BOOLEAN,
  is_self_chat BOOLEAN,
  is_direct_message BOOLEAN,
  is_group_direct_message BOOLEAN
); 

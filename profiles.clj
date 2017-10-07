{
 :dev  {:env {:database-url "postgresql://localhost:5432/chat-service?user=pcolliander"
              :secret-key "my secret" }}
 
 :test {:env {:database-url "postgresql://localhost:5432/chat-service?user=pcolliander" 
              :secret-key "test secret key" }} 
}

CREATE DATABASE oteken;
CREATE TABLE oteken.users
(
     id MEDIUMINT AUTO_INCREMENT,
     email VARCHAR (100) NOT NULL UNIQUE,
     password VARCHAR (100) NOT NULL,
     user_name VARCHAR (100),
     created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
     PRIMARY KEY (id)
);

USE oteken;
-- 本番ではemailとpasswordは直接保存しちゃ駄目だぞ。
INSERT INTO users VALUES (DEFAULT, 'example@example.com', 'example', 'ログイン試す君', CURRENT_TIMESTAMP);
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

CREATE TABLE oteken.weathers
(
     id MEDIUMINT AUTO_INCREMENT,
     weather_date DATE NOT NULL UNIQUE,
     weather_code TINYINT(6),
     created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
     PRIMARY KEY (id)
);

USE oteken;
-- 本番ではemailとpasswordは直接保存しちゃ駄目だぞ。
INSERT INTO users VALUES (DEFAULT, 'example@example.com', 'example', 'ログイン試す君', CURRENT_TIMESTAMP);

INSERT INTO weathers (id, weather_date, weather_code, created_at)
VALUES
  (DEFAULT, '2022-05-01', 0, CURRENT_TIMESTAMP),
  (DEFAULT, '2022-05-02', 1, CURRENT_TIMESTAMP),
  (DEFAULT, '2022-05-20', 2, CURRENT_TIMESTAMP),
  (DEFAULT, '2022-06-10', 2, CURRENT_TIMESTAMP)
;

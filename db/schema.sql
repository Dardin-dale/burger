DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENTS,
    burger_name VARCHAR(60),
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);
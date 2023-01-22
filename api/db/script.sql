CREATE DATABASE IF NOT EXISTS programadorabordo;

USE programadorabordo;

DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    price DECIMAL(10,2)
);

INSERT INTO products (name, price) VALUES( 'Curso Front-end especialista',2500);

INSERT INTO products (name, price) VALUES('Curso JS Full Stack',900);
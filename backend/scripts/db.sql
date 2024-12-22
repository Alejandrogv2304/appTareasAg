CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT,
    title VARCHAR(123) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);

INSERT INTO tasks (title, description) VALUES
('Tarea1','Alguna descripción bacana'),
('Tarea2','Alguna descripción');

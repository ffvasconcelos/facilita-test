CREATE DATABASE desafio_facilita;

CREATE TABLE cliente (
	codigo SERIAL PRIMARY KEY,
	email VARCHAR(50) NOT NULL,
	nome VARCHAR(50) NOT NULL,
	telefone VARCHAR(13) NOT NULL,
	cord_x INT NOT NULL,
	cord_y INT NOT NULL
);
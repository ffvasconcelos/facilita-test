import express from "express";
import cors from "cors";
import morgan from "morgan";

import pg from "pg";

import pathFinder from "./services/pathFinder.js";

// Alterar configurações do banco.
const client = new pg.Client({
	host: "localhost",
	port: 5432,
	database: "desafio_facilita",
	user: "user",
	password: "password",
});

await client.connect();

const app = express("");
const port = 9000;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/client", async ({ query }, res) => {
	try {
		const result = await client.query(
			`SELECT * FROM cliente WHERE nome LIKE '%${
				query.nome ?? ""
			}%' AND email LIKE '%${query.email ?? ""}%' AND telefone LIKE '%${
				query.telefone ?? ""
			}%'`
		);

		res.status(200).send(result.rows);
	} catch (error) {
		res.status(500).send();
	}
});

app.post("/client", async ({ body }, res) => {
	try {
		await client.query(`
      INSERT INTO cliente (nome, email, telefone, cord_x, cord_y) VALUES ('${body.nome}', '${body.email}', '${body.telefone}', ${body.cordX}, ${body.cordY})
    `);

		res.status(201).send("Cliente criado");
	} catch (error) {
		res.status(500).send();
	}
});

app.get("/path", async (req, res) => {
	try {
		const response = await client.query(`
      SELECT codigo, nome, email, cord_x, cord_y FROM cliente ORDER BY codigo ASC
    `);

		const path = pathFinder([{ cord_x: 0, cord_y: 0 }, ...response.rows]);

		res.status(200).send(path.bestPath.map((el) => response.rows[el - 1]));
	} catch (error) {
		console.log(error);
		res.status(500).send();
	}
});

app.listen(port, () => {
	console.log(`Server on port ${port}`);
});

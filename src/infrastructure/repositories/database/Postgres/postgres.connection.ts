import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();


export const connectionToPostgres = async () => {
	const user = process.env.POSTGRES_USER;
	const password = process.env.POSTGRES_PASSWORD;
	const server = process.env.POSTGRES_HOST;

	const url = `postgres://${user}:${password}@${server}/${user}`;
	const client = new Client({
		user,
		password,
		host: server,
		database: user,
		port: 5432,
		connectionString: url,
	});

	try {
		await client.connect();
		console.log("Connected to Postgres");
		const query = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL
            );`;
		await client.query(query);
		console.log("Created table users");
	} catch (err) {
		console.log(err);
	}
};

connectionToPostgres();

import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import knex from "knex";
import createUser from "./endpoints/createUser";

dotenv.config()

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express()

app.use(express.json())
app.use(cors())

app.put('/user', createUser)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`O servidor está rodando na porta http://localhost:${address.port}`)
    } else {
        console.log(`Erro ao procurar servidor`)
    }
})
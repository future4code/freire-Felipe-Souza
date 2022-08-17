import express from "express"
import cors from "cors"
import { send } from "process"
import {todos} from './data'

const app = express()
app.use(express.json())
app.use(cors())

/*app.get('/ping', (req, res) => {
    res.send('pong')
})*/


/*const tarefas: object = todos.map(userId => {
    return userId.title
})
console.table(tarefas)*/


/*
const tarefasIncompletas: object = todos.filter(userId => {
    return userId.completed === false
})
console.table(tarefasIncompletas)*/

/*
const addTarefa = todos.push({
    "userId": 11,
    "id": 201,
    "title": "plantar bananeira",
    "completed": false
})
*/

/*app.get('/users', (req, res) => {
    if (req.headers.chave === "chave") {
        res.send('Bateu no endpoint')
    } else {
        res.send('Valor não encontrado')
    }
})*/

/*app.listen(3003, () => {
    console.log('Server rodando na porta 3003: http://localhost:3003')
})

NÃO CONSEGUI DESENVOLVER A MANIPULAÇÃO DE API

*/
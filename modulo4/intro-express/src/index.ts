import express from 'express';
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())

app.get('https://jsonplaceholder.typicode.com/users', (req, res) => {
    if (req.headers.Accept === "*/*") {
        res.send("Chave vale: valor")
    } else {
    res.send("A chave não vale valor")
    }
})

app.listen(3003, () => {
    console.log(`Servidor aberto em http://localhost:3003`)
})

/* não consegui desenvolver o exercício. Preciso rever todo material de API desde o postman */
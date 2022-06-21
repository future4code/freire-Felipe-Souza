/*

- Interpretação -


# Questão 1 #

a.  undefined
b.  null
c.  11
d.  3
e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f.  9

# Questão 2 #

SUBI NUM ÔNIBUS EM MIRROCOS 27

- Escrita - 

# Questão 1 #

const nome = prompt(`Digite seu nome`)
const email = prompt(`Digite seu e-mail`)

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem vindo(a) ${nome}!`)


# Questão 2 #

let minhaComida = [`Tulipas de frango, 
pizza, 
pudim, 
churrasco, 
purê`]

console.log(`Minhas comidas preferidas são:
${minhaComida}`)

let listaComida = ["Tulipas de frango","pizza","pudim","churrasco","purê"]
console.log(listaComida.length)
const comidaUsuario = prompt("Qual sua comida preferida?")
let item = 0
listaComida[item+1] = comidaUsuario
console.log(listaComida)


# Questão 3 #

const Tarefa1 = prompt('Digite uma tarefa diária')
const Tarefa2 = prompt('Digite outra tarefa diária')
const Tarefa3 = prompt('Digite mais uma tarefa diária')
let listaDeTarefas = [Tarefa1, Tarefa2, Tarefa3]

console.log(listaDeTarefas)

let tarefaUsuario = prompt('Qual das tarefas já foi realizada? (0, 1 ou 2)')
let i = tarefaUsuario
listaDeTarefas.splice(i, 1)

console.log(listaDeTarefas)

*/
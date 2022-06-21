/*
------- Leitura de código --------

# Questão 1 #

a. 10, 15
b. Mostra erro por estar fora do escopo

# Questão 2 #

a. Funções anônimas, outra forma de declarar funções

b. 
i true
ii false
iii false

-------- Escrita de Código --------

# Questão 1 a #

function info() {
    nome = `Felipe`
    idade = `28`
    cidade = `Jussari`
    souEstudante = `sou`
}
info()
console.log(`Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e ${souEstudante} estudante`)

# Questão 1 b #

function info(nome, idade, endereco, profissao) {
    nome = `Felipe`
    idade = `28`
    endereco = `Pres Medice 22`
    profissao = `Freelancer`
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`
}
let resinfo = info()
console.log(resinfo)

# Questão 2 a #

function soma(n1, n2) {
    n1 = 38
    n2 = 62
    return n1 + n2
}
let res = soma()
console.log(res)

# Questão 2 b #

function igualMaior (n1, n2) {
    n1 = 12
    n2 = 8
    return n1 >= 8
}
let res = igualMaior()
console.log(res)

# Questão 2 c #

function parimpar(num) {
    num = 9
    return num%2==0
}
let res = parimpar()
console.log(res)

# Questão 2 d #

function frase(texto) {
    texto = `Aprendi funções`
    const min = texto.toLowerCase()
    const tam = texto.length 
    return min + tam
}
let res = frase()
console.log(res)

# Questão 3 #

function soma(n1, n2) {
    return n1 + n2
}
function sub(n1, n2) {
    return n1 - n2
}
function mult(n1, n2) {
    return n1 * n2
}
function div(n1, n2) {
    return n1 / n2
}
let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite outro número"))

let resSoma = soma(num1, num2)
let resSub = sub(num1, num2)
let resMult = mult(num1, num2)
let resDiv = div(num1, num2)

console.log(`Os números escolhidos foram ${num1} e ${num2}
soma: ${resSoma}
subtração: ${resSub}
multiplicação: ${resMult}
divisão: ${resDiv}`)

*/
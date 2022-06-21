/*

# Questão 1

a. false
b. false
c. true
d. booleans

# Questão 2

O amigo deve atribuir o tipo de variável, mudando de string para número.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)


# Questão 3.1

const idade = Number(prompt("Qual a sua idade?"))
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))
let comp = idade >= idadeAmigo
console.log("Sua idade é maior do que a do seu amigo?",comp)
let dif = idade - idadeAmigo
console.log('A diferença de idade entre vocês é de',dif,'anos') 


# Questão 3.2

const num = Number(prompt('Digite um número par'))
let resto = num % 2
console.log('O resto da divisão entre',num,'e 2 é:', resto)

// Todo resto de divisão entre um número par e 2 será sempre igual a 0
// Caso o número seja ímpar, o programa mostrará o resto da divisão


# Questão 3.3

const idade = Number(prompt('Digite a sua idade'))
let meses = idade * 12
let dias = idade * 365
let horas = dias * 24
console.log('Sua idade tem',meses,'meses,',dias,'dias e',horas,'horas!')


# Questão 3.4

const num1 = Number(prompt('Digite o primeiro valor'))
const num2 = Number(prompt('Digite o segundo valor'))

let var1 = num1 > num2

let var2 = num1 === num2

let var3 = num1 % num2

let var4 = num2 % num1

let resto = var3 === 0

let resto2 = var4 === 0

console.log('O primeiro numero é maior que segundo?',var1)
console.log('O primeiro numero é igual ao segundo?',var2)
console.log('O primeiro numero é divisível pelo segundo?',resto)
console.log('O segundo numero é divisível pelo primeiro?',resto2)

*/
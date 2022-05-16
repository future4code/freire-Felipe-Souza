/* 
========================= LEITURA DE CÓDIGO =============================== 

# Questão 1 #

a.
Matheus Nachtergaele
Virginia Cavendish
Canal Brasil, 19h

# Questão 2 #

a.
nome: Juca, 
idade: 3, 
raca: SRD

nome: Juba, 
idade: 3, 
raca: SRD

nome: Jubo, 
idade: 3, 
raca: SRD

b.
Copia as informações da variável 

# Questão 3 #

a.
false

b.
O valor beckender foi atribuído à propriedade da função chamada

====================== ESCRITA DE CÓDIGO =============================

# Questão 1 #

a.
const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

b.
const novaPessoa = {
    ...pessoa,
    apelidos: ["Mandona", "Manda", "Mandoca"]
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]} ou ${novaPessoa.apelidos[2]}`)

# Questão 2 #

const pessoa = {
    nome: "Douglas",
    idade: 22,
    profissao: "Servente"
}

function imprimePessoa () {
    compNome = pessoa.nome.length
    compProf = pessoa.profissao.length
    pessoaArray = [`${pessoa.nome}, ${compNome}, ${pessoa.idade}, ${pessoa.profissao}, ${compProf}`]
    return pessoaArray 
}
console.log(imprimePessoa(pessoa))

const pessoa1 = {
    nome: "Átila",
    idade: 21,
    profissao: "Freelancer"
}

function imprimePessoa1 () {
    compNome = pessoa1.nome.length
    compProf = pessoa1.profissao.length
    pessoaArray = [`${pessoa1.nome}, ${compNome}, ${pessoa1.idade}, ${pessoa1.profissao}, ${compProf}`]
    return pessoaArray
}
console.log(imprimePessoa1(pessoa1))

# Questão 3 #

let sacolao = {
    carrinho: [],
}
const laranja = {
    nome: "Laranja",
    disponibilidade: true
}
const morango = {
    nome: "Morango",
    disponibilidade: true
}
const uva = {
    nome: "Uva",
    disponibilidade: true
}
function compra(laranja, morango, uva) {

    compraLaranja = sacolao.carrinho.push(laranja.nome)
    compraMorango = sacolao.carrinho.push(morango.nome)
    compraUva = sacolao.carrinho.push(uva.nome)
    compraFrutas = (compraLaranja, compraMorango, compraUva)
    return sacolao.carrinho
}
console.log(compra(laranja, morango, uva))
*/
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
    carrinho: []
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


=======================================================
DESAFIO 1
=======================================================

function pessoa (nome, idade, profissao) {
    nome = prompt(`Informe seu nome`)
    idade = prompt(`Informe sua idade`)
    profissao = prompt(`Informe sua profissão`)
        res = {
            Nome: nome, 
            Idade: idade, 
            Profissao: profissao
        }
    return console.log(res, typeof(res))
}
pessoa()


=====================================================
DESAFIO 2
=====================================================

function filmes(filme1, filme2) {
    filme1 = { 
        nome: "Interestelar",
        ano: 2014
    }
    filme2 = {
        nome: "Planeta dos Macacos",
        ano: 1968
    }

    anoAtual = 2022

    idade1 = anoAtual - filme1.ano
    idade2 = anoAtual - filme2.ano

    res1 = idade1 > idade2
    res2 = idade1 === idade2

    return console.log(`O primeiro filme foi lançado antes do segundo? ${res1}
    O primeiro filme foi lançado no mesmo ano do segundo? ${res2}`)
}
console.log(filmes())


=======================================================================
DESAFIO 3
=======================================================================

let sacolao = {
    carrinho: []
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

function disponibilidade(Laranja) {
    Laranja = laranja.nome
    temLaranja = sacolao.carrinho.includes("Laranja")
    naoTemLaranja = sacolao.carrinho.includes("Maçã")
    return temLaranja && naoTemLaranja
}
console.log(disponibilidade())
*/
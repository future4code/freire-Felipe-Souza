/*
============================= EXERCICIOS DE INTERPRETAÇÃO ===========================

# Questão 1 #

a. Três novas arrays com item e indices da array original

# Questão 2 #

a. Uma nova array com os nomes da array original

# Questão 3 #

a. Uma nova array com os nomes e apelidos da array original exceto o item que contenha o apelido "Chijo"

============================== EXERCICIO DE ESCRITA ================================

# Questão 1 #

a.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

const novaPets = pets.map((item, index, array) => {
    return item.nome
})
console.log(novaPets)
 

b.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

const novaPets = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
        
})
console.log(novaPets)

c.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

const novaPets = pets.filter((item, index, array) => {
    if (item.raca === "Poodle") {
        return console.log(`Você ganhou um cupom de 10% de desconto para tosar o ${item.nome}`)
    }
})

# Questão 2 #

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

a.
const nomeProdutos = produtos.map((item, index, array) => {
    return item.nome
})
console.log(nomeProdutos)

b. 
const novaProdutos = produtos.map((item, index, array) => {
    return (item.preco - (item.preco * 0.05)).toFixed(1)
})
console.log(novaProdutos)

c.
const bebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})
console.log(bebidas)

d.
const nomeYpe = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})
console.log(nomeYpe)

e.
const precoYpe = produtos.filter((item, index, array) => {
    if (item.nome.includes("Ypê")) {
        return console.log(`Compre ${item.nome} por ${item.preco}`)
    }
})

================================= DESAFIOS =======================================

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

1.
const ordemAlfPokemons = pokemons.map((item, index, array) => {
    return item.nome
})
console.log(ordemAlfPokemons.sort())

2.
const tipos = pokemons.map((item, index, array) => {
    return item.tipo
})
console.log(tipos)

const filtroTipos = tipos.filter((item, index, array) => {
    return tipos.indexOf(item) === index
})
console.log(filtroTipos)
*/
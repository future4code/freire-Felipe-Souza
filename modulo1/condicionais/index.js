/*
================= Exercício Interpretação =======================

# Questão 1 #

a. Saber se o número é par ou ímpar
b. Números pares
c. Números ímpares

# Questão 2 #

a. Atribuir preço às frutas
b. 2.25
c. Nenhuma mensagem

# Questão 3 #

a. Atribuindo valor à constante número com uma pergunta ao usuário
b. "Esse número passou no teste", caso contrário não haveria resposta
c. Sim, a variável mensagem faz parte do escopo if e portanto não seria executada fora dele

================== Exercício de escrita ===========================


# Questão 1 #

let idade = Number(prompt(`Informe a sua idade`))
if (idade >= 18) {
    console.log(`Você pode dirigir`)
}
else {
    console.log(`Você não pode dirigir`)
}

# Questão 2 #

let turno = prompt(`Qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno`).toLocaleUpperCase()

if (turno === "M") {
    console.log(`Bom dia!`)
}
else if (turno === "V") {
    console.log(`Boa tarde!`)
}
else {
    console.log(`Boa noite!`)
}

# Questão 3 #

let turno = prompt(`Qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno`).toLocaleUpperCase()
switch (turno) {
    case "M":
        console.log(`Bom dia!`)
    break;
    case "V":
        console.log(`Boa tarde!`)
    break;
    case "N":
        console.log(`Boa noite!`)
    break;
    default: 
        console.log(`Valor inválido! Leia o enunciado com atenção e tente novamente`)
    break;    
}

# Questão 4 #

let generoFilme = prompt(`Informe o gênero do filme`)
let precoIngresso = Number(prompt(`Informe o valor do ingresso`))
if (generoFilme === "fantasia" && precoIngresso <= 15) {
    console.log(`Bom filme!`)
}
else {
    console.log(`Escolha outro filme :(`)
}

====================== DESAFIOS =================================

# Desafio 1 #

let generoFilme = prompt(`Informe o gênero do filme`)
let precoIngresso = Number(prompt(`Informe o valor do ingresso`))
let lanche = prompt(`Informe o lanche desejado`)
if (generoFilme === "fantasia" && precoIngresso <= 15) {
    console.log(`Bom filme! Aproveite bem o seu ${lanche}!`)
}
else {
    console.log(`Escolha outro filme :(`)
}

# Desafio 2 #

*/
let nome = prompt(`Informe seu nome completo`)
let tipo = prompt(`Informe o tipo do jogo (DO) Doméstico ou (IN) Internacional`)
let etapa = prompt(`Informe a etapa desejada (SF) semi-final, (DT) terceiro lugar ou (F) final`)
let categoria = prompt(`Informe a categoria (1, 2, 3 ou 4)`)
let quantidade = prompt(`Informe a quantidade de ingressos`)

let valorSF1 = 1320.00
let valorSF2 = 880.00
let valorSF3 = 550.00
let valorSF4 = 220.00

let valorDT1 = 660.00
let valorDT2 = 440.00
let valorDT3 = 330.00
let valorDT4 = 170.00

let valorF1 = 1980.00
let valorF2 = 1320.00
let valorF3 = 880.00
let valorF4 = 330.00

let dolar = 4.10

function dados (nome, tipo, etapa, categoria, quantidade) {
    if (tipo === "DO" && etapa === "SF" && categoria === "1") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: R$ ${valorSF1}
        Valor Total: R$`, valorSF1 * quantidade)
    }
    if (tipo === "DO" && etapa === "SF" && categoria === "2") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: R$ ${valorSF2}
        Valor Total: R$`, valorSF2 * quantidade)
    }
    if (tipo === "DO" && etapa === "SF" && categoria === "3") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: R$ ${valorSF3}
        Valor Total: R$`, valorSF3 * quantidade)
    }
    if (tipo === "DO" && etapa === "SF" && categoria === "4") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: R$ ${valorSF4}
        Valor Total: R$`, valorSF4 * quantidade)
    }
    if (tipo === "DO" && etapa === "DT" && categoria === "1") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: R$ ${valorDT1}
        Valor Total: R$`, valorDT1 * quantidade)
    }
    if (tipo === "DO" && etapa === "DT" && categoria === "2") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: R$ ${valorDT2}
        Valor Total: R$`, valorDT2 * quantidade)
    }
    if (tipo === "DO" && etapa === "DT" && categoria === "3") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: R$ ${valorDT3}
        Valor Total: R$`, valorDT3 * quantidade)
    }
    if (tipo === "DO" && etapa === "DT" && categoria === "4") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: R$ ${valorDT4}
        Valor Total: R$`, valorDT4 * quantidade)
    }
    if (tipo === "DO" && etapa === "F" && categoria === "1") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: R$ ${valorF1}
        Valor Total: R$`, valorF1 * quantidade)
    }
    if (tipo === "DO" && etapa === "F" && categoria === "2") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: R$ ${valorF2}
        Valor Total: R$`, valorF2 * quantidade)
    }
    if (tipo === "DO" && etapa === "F" && categoria === "3") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: R$ ${valorF3}
        Valor Total: R$`, valorF3 * quantidade)
    }
    if (tipo === "DO" && etapa === "F" && categoria === "4") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: R$ ${valorF4}
        Valor Total: R$`, valorF4 * quantidade)
    }
    if (tipo === "IN" && etapa === "SF" && categoria === "1") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: U$ ${(valorSF1 * dolar).toFixed(2)}
        Valor Total: U$`, ((valorSF1 * quantidade) * dolar).toFixed(2))
    }
    if (tipo === "IN" && etapa === "SF" && categoria === "2") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: U$ ${(valorSF2 * dolar).toFixed(2)}
        Valor Total: U$`, ((valorSF2 * quantidade) * dolar).toFixed(2))
    }
    if (tipo === "IN" && etapa === "SF" && categoria === "3") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: U$ ${(valorSF3 * dolar).toFixed(2)}
        Valor Total: U$`, ((valorSF3 * quantidade) * dolar).toFixed(2))
    }
    if (tipo === "IN" && etapa === "SF" && categoria === "4") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: U$ ${(valorSF4 * dolar).toFixed(2)}
        Valor Total: U$`, ((valorSF4 * quantidade) * dolar).toFixed(2))
    }
    if (tipo === "IN" && etapa === "DT" && categoria === "1") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: U$ ${(valorDT1 * dolar).toFixed(2)}
        Valor Total: U$`, ((valorDT1 * quantidade) * dolar).toFixed(2))
    }
    if (tipo === "IN" && etapa === "DT" && categoria === "2") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: U$ ${(valorDT2 * dolar).toFixed(2)}
        Valor Total: U$`, ((valorDT2 * quantidade) * dolar).toFixed(2))
    }
    if (tipo === "IN" && etapa === "DT" && categoria === "3") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: U$ ${(valorDT3 * dolar).toFixed(2)}
        Valor Total: U$`, ((valorDT3 * quantidade) * dolar).toFixed(2))
    }
    if (tipo === "IN" && etapa === "DT" && categoria === "4") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: U$ ${(valorDT4 * dolar).toFixed(2)}
        Valor Total: U$`, ((valorDT4 * quantidade) * dolar).toFixed(2))
    }
    if (tipo === "IN" && etapa === "F" && categoria === "1") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: U$ ${(valorF1 * dolar).toFixed(2)}
        Valor Total: U$`, ((valorF1 * quantidade) * dolar).toFixed(2))
    }
    if (tipo === "IN" && etapa === "F" && categoria === "2") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: U$ ${(valorF2 * dolar).toFixed(2)}
        Valor Total: U$`, ((valorF2 * quantidade) * dolar).toFixed(2))
    }
    if (tipo === "IN" && etapa === "F" && categoria === "3") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: U$ ${(valorF3 * dolar).toFixed(2)}
        Valor Total: U$`, ((valorF3 * quantidade) * dolar).toFixed(2))
    }
    if (tipo === "IN" && etapa === "F" && categoria === "4") {
        console.log(`
        ---- Dados da Compra ----
        Nome do cliente: ${nome}
        Tipo de jogo: ${tipo}
        Etapa do jogo: ${etapa}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidade}
        ---- Valores ----
        Valor do ingresso: U$ ${(valorF4 * dolar).toFixed(2)}
        Valor Total: U$`, ((valorF4 * quantidade) * dolar).toFixed(2))
    }
}
dados(nome, tipo, etapa, categoria, quantidade)
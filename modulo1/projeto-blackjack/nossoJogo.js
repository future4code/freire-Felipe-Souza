function comprarCarta() {
   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
   const naipes = ["♦️", "♥️", "♣️", "♠️"]
   const numero = cartas[Math.floor(Math.random() * 13)]
   const naipe = naipes[Math.floor(Math.random() * 4)]
    
   let valor    
   if (numero === "A") {
      valor = 11
   } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10
   } else {
      valor = Number(numero)
   }

   const carta = {
      texto: numero + naipe,
      valor: valor
   }
    
   return carta
}

const userCarta1 = comprarCarta()
const userCarta1Texto = userCarta1.texto
const userCarta1Numero = userCarta1.valor

const userCarta2 = comprarCarta()
const userCarta2Texto = userCarta1.texto
const userCarta2Numero = userCarta1.valor

const comCarta1 = comprarCarta()
const comCarta1Texto = comCarta1.texto
const comCarta1Numero = comCarta1.valor

const comCarta2 = comprarCarta()
const comCarta2Texto = comCarta2.texto
const comCarta2Numero = comCarta2.valor

const somaUser = userCarta1Numero + userCarta2Numero
const somaCom = comCarta1Numero + comCarta2Numero

console.log(`Bem vindo ao jogo de BlackJack!`)

if (confirm(`Deseja começar uma nova rodada?`)) {
   console.log(`Usuário - cartas: ${userCarta1Texto} ${userCarta2Texto} - ${somaUser}`)
   console.log(`Computador - cartas: ${comCarta1Texto} ${comCarta2Texto} - ${somaCom}`)
}
else {
   console.log(`O jogo acabou!`)
}

function vencedor () {
   if (somaUser > somaCom && somaUser <= 21 || somaCom > 21) {
      console.log(`O usuário venceu!`)
   }
   if (somaCom > somaUser && somaCom <= 21 || somaUser > 21) {
      console.log(`O computador venceu!`)
   }
   if (somaUser === somaCom) {
      console.log(`Houve empate!`)
   }
}
vencedor()
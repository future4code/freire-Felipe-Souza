// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
/*
// EXERCÍCIO 0A
function soma(num1, num2) {
 let num1 = 1
 let num2 = 2
  return num1 + num2
}


// EXERCÍCIO 0B
function imprimeMensagem() {
  
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
*/
// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const x = Number(prompt('Informe a altura do retângulo'))
  const y = Number(prompt('Informe a largura do retângulo'))
  const r = (x * y)
  console.log(r)
}

// EXERCÍCIO 02

function imprimeIdade() {
  let aa = Number(prompt("Informe o ano atual"))
  let an = Number(prompt("Informe seu ano de nascimento"))
  let res = aa - an
  console.log(res)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso / (altura * altura)
  return imc.toFixed(1)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  nome = prompt("Informe seu nome")
  idade = prompt("Informe sua idade")
  email = prompt("informe seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Informe a primeira cor favorita")
  const cor2 = prompt("Informe a segunda cor favorita")
  const cor3 = prompt("Informe a terceira cor favorita")
  const fav = [cor1, cor2, cor3]
  console.log(fav)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = string.toUpperCase()
  return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  string1 = string1.length
  string2 = string2.length
  return string1 === string2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  array = array.pop()
  return array
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const tam = array.length
  inicio = array[0]
  fim = tam -1
  array[0] = array[fim]
  array[fim] = inicio
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()
  return string1 === string2
}
/*
// EXERCÍCIO 13
function checaRenovacaoRG() {
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
*/
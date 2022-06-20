// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

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

// EXERCÍCIO 13
function checaRenovacaoRG() {
    const anoAtual = Number(prompt("Informe o ano atual"))
    const anoNascimento = Number(prompt("Informe o ano de nascimento"))
    const anoExpedicao = Number(prompt("Informe o ano de expedição do RG"))

    let idade = anoAtual - anoNascimento
    let validade = anoAtual - anoExpedicao

    let menor = idade <=20 && validade >=5      
    let medio = idade > 20 && idade <= 50 && validade >= 10
    let maior = idade > 50 && validade >= 15 

    console.log(menor || medio || maior)
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  
  const bisx1 = ano % 400 === 0
  const bisx2 = ano % 4 === 0 && ano % 100 !== 0
  return bisx1 || bisx2
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maior = prompt('Você é maior de 18 anos?')
  const ensino = prompt('Você possui ensino médio?')
  const disp = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  let res = maior === "sim" && ensino === "sim" && disp === "sim"
  
  console.log(res)
}

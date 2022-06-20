// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length 
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    newArray = array.filter((item) => {
      return item % 2 === 0
    })
    return newArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    newArray = array.filter((item) => {
        return item % 2 === 0
      })
    newArrayPot = newArray.map((item) => {
        return item * item
    })
    return newArrayPot
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
maior = -Infinity
for(i = 0; i < array.length; i++) {
  if(array[i] > maior) {
    maior = array[i]
  }
}
return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numeros = [num1, num2]
    let maiorNumero = -Infinity
    let menorNumero = Infinity
    for(i = 0; i < numeros.length; i++) {
        if(numeros[i] > maiorNumero) {
        maiorNumero = numeros[i]
        }
    }
    for(i = 0; i < numeros.length; i++) {
        if(numeros[i] < menorNumero) {
        menorNumero = numeros[i]
        }
    }
    let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    let diferenca = maiorNumero - menorNumero
    let objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i += 2) {
        numerosPares.push(i);
    }
return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return ("Equilátero")
    }
    else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        return ("Isósceles")
    }
    else {
        return ("Escaleno")
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
array.sort((a, b) => a - b)
console.log(array)
segundoMenor = array[1]
segundoMaior = array [array.length-2]
novaArray = [segundoMaior, segundoMenor]
return novaArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
pessoa.nome = "ANÔNIMO"
return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
let autorizadas = pessoas.filter((item, indice, array) => {
    return item.idade > 14 && item.idade < 60 && item.altura >= 1.5
})
return autorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
let naoAutorizadas = pessoas.filter((item, indice, array) => {
    return item.idade <= 14 || item.idade > 60 || item.altura < 1.5
})
return naoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
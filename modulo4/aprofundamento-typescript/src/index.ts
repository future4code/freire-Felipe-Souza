/*
 Exercicio 1

a) 
const minhaString: string = exercicio (nao aceita valores numericos ao definir como string)

b)
const meuNumero: number | string = "felipe"

c)
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const felipe: pessoa = {
    nome: Felipe,
    idade: 29,
    corFavorita: ArcoIris.AZUL
}

const pam: pessoa = {
    nome: Pam,
    idade: 8,
    corFavorita: ArcoIris.LILÁS
}

const silvania: pessoa = {
    nome: Silvania,
    idade: 50,
    corFavorita: ArcoIris.AMARELO
}

enum ArcoIris {
    AMARELO: "amarelo",
    VERDE: "verde",
    AZUL: "azul",
    VERMELHO: "vermelho",
    LARANJA: "laranja",
    LILÁS: "lilás"
}

Exercicio 2

a)

function obterEstatisticas(numeros: number): number {

    const numerosOrdenados: number = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media: number} =
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

c)

type idade = {
    numeros: number,
    obterEstatisticas: number
}

const amostraDeIdades: idade = {

		numeros: [21, 18, 65, 44, 15, 18],

		obterEstatisticas: (numeros) => {...}
}

Exercicio 3

a)

type pessoa = {
    autor: string,
    texto: string
}

const posts: pessoa = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

b) 

function buscarPostsPorAutor(posts: string, autorInformado: string): string {
  return posts.filter(
    (post) => {
      return post.autor === autorInformado
    }
  )
}

Exercicio 5

Vários comentários excluídos mas principalmente o Emascript alterado de es5 para es6
*/
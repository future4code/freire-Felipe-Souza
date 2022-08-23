# Exercício Introdução ao SQL
### Questão 1
##### a) 
Caracteres e o número limite, data e formato de data e descrição do id.
##### b)
Mostra informações do usuário e schema, mostra tabelas do usuário.
##### c)
Mostra informações detalhadas sobre a tabela citada.

### Questão 2
##### b)
Entrada de dados duplicadas (chave primária).
##### c)
Entrada de dados sem parâmetros especificados.
##### d)
Entrada 'nome' sem valor definido.
##### e)
Entrada escrita como não string (sem aspas).

### Questão 3
##### a)
SELECT id, name from Actor WHERE gender = "female"
##### b)
SELECT id, salary from Actor WHERE name = "Tony Ramos"
##### c)
Nenhum resultado encontrado.
##### d)
SELECT id, name from Actor WHERE salary =- "500000"
##### e)
Valor name não foi definido.

### Questão 4
##### a)
A query irá selecionar primeiro os elementos que iniciam como A e J, depois os elementos com salário maior do que 300.000.
##### b)
SELECT * FROM Actor
WHERE (name NOT LIKE "A%" OR name LIKE "J%") AND salary > 300000
##### c)
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%"
##### d)
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%") AND (name LIKE "%G%" OR name LIKE "%g%") AND salary >= 350000 OR salary <= 900000

### Questão 6
##### a)
SELECT id, name from Filme WHERE id = "001"
##### b)
SELECT id, id from Filme WHERE name = "Se eu fosse você"
##### c)
SELECT id, name, sinopse
FROM Filme 
WHERE avaliacao = 7

### Questão 7
##### a)
SELECT id, name, avaliacao
FROM Filme 
WHERE id = "001"
##### b)
SELECT * 
FROM Filme
WHERE name LIKE "%Dona%" OR
sinopse LIKE "%animada%"
##### c)
SELECT * FROM Filme
WHERE lanca_date < "2022-08-22"
##### d)
SELECT * FROM Filme
WHERE lanca_date < "2022-08-22" AND 
      (name LIKE "%Dona%" OR
      sinopse LIKE "%animada%") AND avaliacao > 7
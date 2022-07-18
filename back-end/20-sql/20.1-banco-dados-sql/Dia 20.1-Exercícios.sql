-- Exercício 1: Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench.
USE sakila;
SHOW TABLES;

-- Exercício 2: Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.
CREATE TABLE tabela.exemplo;

-- Exercício 3: Feito isso, crie uma tabela com as seguintes restrições:
-- Nome da tabela: filme
-- Colunas:
-- filme_id - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
-- descricao - não permite nulos, tipo texto (varchar(100));
-- ano_lancamento - não permite nulos, tipo int;
-- nota - permite nulos, tipo int;
CREATE TABLE filme (
	filme_id SMALLINT AUTO_INCREMENT PRIMARY KEY,
    descrição VARCHAR(100) NOT NULL,
    ano_lançamento INT NOT NULL,
    nota INT NOT NULL
);

-- Exercício 4: Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
SELECT * FROM sakila.city;
-- Faz referência à tabela country.

-- Exercício 5: Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country?
-- Muitos para um

-- Exercício 6: Qual tipo de relacionamento a tabela country faz com a tabela city?
-- Um para muitos

-- Exercício 7: Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.
-- contry, city e film, language
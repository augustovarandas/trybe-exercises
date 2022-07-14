SELECT * FROM sakila.city;

SELECT first_name, last_name FROM sakila.customer;

SELECT * FROM sakila.rental;

SELECT * FROM sakila.film;

SELECT title, description, release_year FROM sakila.film;

SELECT * FROM sakila;

SELECT * FROM sakila.actor;

SELECT CONCAT(first_name, last_name) FROM sakila.actor;

SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor;

SELECT CONCAT(first_name, ' ', last_name) AS 'nome_completo' FROM sakila.actor;

SELECT CONCAT(title, ' ', release_year) AS lançamento_do_filme FROM sakila.film;

SELECT CONCAT(title, ' ', rating) AS classificação FROM sakila.film;

SELECT * FROM sakila.address;

SELECT CONCAT(address, ' ', district) AS endereço FROM sakila.address;
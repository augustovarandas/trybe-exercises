//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

//BabySteps:

//1. Desenvolva uma HOF;
//2. A HOF deve gerar um número aleatório entre 1 e 5;
//3. Os parâmetros da HOF são o número apostado e uma função;
//4. A função que vai servir de parâmetro deve checar se o número apostado é igual ao sorteado;
//5. O retorno da HOF deve ser uma string "Tente novamente" ou "Parabéns você ganhou".
const checkNumber = (myNumber, number) => myNumber === number;

// Referência para gerar um número aleatório: http://devfuria.com.br/javascript/numeros-aleatorios/#:~:text=n%C3%BAmero%20pseudo%2Daleat%C3%B3rio.-,Math.,dimensionar%20para%20o%20intervalo%20desejado.

const lottery = (myNumber, callback) => {
  const number = Math.floor(Math.random() * 5 + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try again!';
};

console.log(lottery(4, checkNumber));

//1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

//BabySteps
//1. Cirar uma função;
//2. A função deve retornar o objeto no formato { nomeCompleto, email };
//3. A função será usada como parâmetro da HOF newEmployees;
//4. A minha função deve receber como parâmetro o nome completo da pessoa
//5. A função deve gerar um email automaticamente no formato nome_da_pessoa@trybe.com

const newEmployees = (createEmail) => {
  const employees = {
    id1: createEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// Referência de busca para substituir espaço por "_" na string: https://stackoverflow.com/questions/441018/replacing-spaces-with-underscores-in-javascript
function createEmail (nome) {
  const email = nome.replace(/ /g,"_");
  const emailToLowerCase = email.toLowerCase();
  return {nome, email: `${emailToLowerCase}@trybe.com` };
};

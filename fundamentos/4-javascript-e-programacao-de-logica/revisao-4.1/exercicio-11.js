const salarioBruto = 3000;

let aliquotaINSS;
let aliquotaIR;

if (salarioBruto < 1556.95) {
    aliquotaINSS = (0.08 * salarioBruto).toFixed(2);
} else if (salarioBruto > 1556.94 && salarioBruto < 2594.93) {
    aliquotaINSS = (0.09 * salarioBruto).toFixed(2);
} else if (salarioBruto > 2594.93 && salarioBruto < 5189.82) {
    aliquotaINSS = (0.11 * salarioBruto).toFixed(2);
} else if (salarioBruto > 5189.82) {
    aliquotaINSS = 570.88
}

let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase < 1903.99) {
    parcelaDeducaoIR = 0.00;
} else if (salarioBase > 1903.98 && salarioBase < 2826.66) {
    aliquotaIR = '7,5 %';
    parcelaDeducaoIR = 142.80;
    valorIR = ((0.075 * salarioBase) - parcelaDeducaoIR).toFixed(2);
} else if (salarioBase > 2826.66 && salarioBase < 3751.06) {
    aliquotaIR = '15 %';
    parcelaDeducaoIR = 354.80;
    valorIR = ((0.15 * salarioBase) - parcelaDeducaoIR).toFixed(2);
} else if (salarioBase > 3751.06 && salarioBase < 4664.69) {
    aliquotaIR = '22,5 %';
    parcelaDeducaoIR = 636.13;
    valorIR = ((0.25 * salarioBase) - parcelaDeducaoIR).toFixed(2);
} else if (salarioBase > 4664.68) {
    aliquotaIR = '27,5 %';
    parcelaDeducaoIR = 869.36;
    valorIR = ((0.275 * salarioBase) - parcelaDeducaoIR).toFixed(2);
}

let salarioLiquido = salarioBase - valorIR;

console.log('A alíquota do INSS é de ' + aliquotaINSS);
console.log('A alíquota do IR é de ' + aliquotaIR + ' e o valor a ser deduzido é de ' + valorIR);
console.log('Seu salário líquido é de ' + salarioLiquido);
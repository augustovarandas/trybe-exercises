let salarioBruto = 3000;
let descontoINSS;
let descontoIR;


if (salarioBruto <= 1556.94) {
    descontoINSS = salarioBruto * 0.08;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    descontoINSS = salarioBruto * 0.09;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    descontoINSS = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
    descontoINSS = salarioBruto - 570.88;
}

let salarioBase = salarioBruto - descontoINSS;

if (salarioBase <= 1903.98) {
    descontoIR = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    descontoIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    descontoIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase > 3751.05 && sa
    <= 4664.68) {
    descontoIR = (salarioBase * 0.225) - 636.13;
} else if (salarioBase > 4664.68) {
    descontoIR = (salarioBase * 0.275) - 869.36;
}

console.log ("Salário líquido: " + (salarioBruto - descontoIR - descontoINSS));

const custo = 7.54;
const venda = 21.99;
const imposto = 1.20;
const lucro = (venda - (custo * imposto));
const lucroFinal = lucro.toFixed(2);

if (custo < 0 || venda < 0) {
    console.log('Erro! Os valores devem ser positivos.');
} else {
    console.log('Seu lucro é de ' + lucroFinal);
}
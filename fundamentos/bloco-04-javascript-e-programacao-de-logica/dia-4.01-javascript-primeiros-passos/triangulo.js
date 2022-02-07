const a = 90;
const b = 45;
const c = -5;
const somaDosAngulos = a + b + c;

if (somaDosAngulos == 180) {
    console.log ("É um triângulo");
} else if (somaDosAngulos !== 180 && a > 0 && b > 0 && c > 0) {
    console.log ("Não é um triângulo")
} else if (a < 0 || b < 0 || c < 0) {
    console.log ("Entrada(s) inválida(s)")
}
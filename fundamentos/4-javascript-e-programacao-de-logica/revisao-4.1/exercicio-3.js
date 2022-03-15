const a = 7;
const b = 2;
const c = 9;

if (a > b && a > c) {
    console.log(a + ' é o maior número');
} else if (b > a && b > c) {
    console.log(b + ' é o maior número');
} else if (c > a && c > b) {
    console.log(c + ' é o maior número');
} else {
    console.log('Os números são iguais!');
}
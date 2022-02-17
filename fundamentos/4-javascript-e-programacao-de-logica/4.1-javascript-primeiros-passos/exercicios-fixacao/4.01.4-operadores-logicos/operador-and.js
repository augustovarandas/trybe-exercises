const currentHour = 20;
let message = [];

if (currentHour >= 22) {
    console.log ("Não deveríamos comer nada, é hora de dormir");
} else if (18 <= currentHour < 22) {
    console.log ("Rango da noite, vamos jantar :D");
} else if (14 <= currentHour < 18) {
    console.log ("Vamos fazer um bolo pro café da tarde?");
} else if (11 < currentHour < 14) {
    console.log ("Hora do almoço!!!");
} else if (4 < currentHour < 11) {
    console.log ("Hmmm, cheiro de café recém passado");
}

console.log (message)

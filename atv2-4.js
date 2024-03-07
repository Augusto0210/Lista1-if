console.clear();
var teclado = require("prompt-sync")();
var num1 = parseFloat(teclado("Digite Numero 1"));
var num2 = parseFloat(teclado("Digite Numero 2"));
var num3 = parseFloat(teclado("Digite Numero 3"));
if (num1 <= num2 && num1 <= num3) {
    if (num2 <= num3) {
        console.log("Numeros em ordem crescente: " + num1 + ", " + num2 + ", " + num3);
    }
    else {
        console.log("Numeros em ordem crescente: " + num1 + ", " + num3 + ", " + num2);
    }
}
else if (num2 <= num1 && num2 <= num3) {
    if (num1 <= num3) {
        console.log("Numeros em ordem crescente: " + num2 + ", " + num1 + ", " + num3);
    }
    else {
        console.log("Numeros em ordem crescente: " + num2 + ", " + num3 + ", " + num1);
    }
}
else {
    if (num1 <= num2) {
        console.log("Numeros em ordem crescente: " + num3 + ", " + num1 + ", " + num2);
    }
    else {
        console.log("Numeros em ordem crescente: " + num3 + ", " + num2 + ", " + num1);
    }
}

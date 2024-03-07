console.clear();

const teclado = require(`prompt-sync`)();

let num1: number = parseFloat(teclado(`Digite Numero 1`));
let num2: number = parseFloat(teclado(`Digite Numero 2`));
let num3: number = parseFloat(teclado(`Digite Numero 3`));

if (num1 <= num2 && num1 <= num3) {
    if (num2 <= num3) {
        console.log("Numeros em ordem crescente: " + num1 + ", " + num2 + ", " + num3);
    }
    else {
        console.log("Numeros em ordem crescente: " + num1 + ", " + num3 + ", " + num2);
    }
} else if (num2 <= num1 && num2 <= num3) {
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
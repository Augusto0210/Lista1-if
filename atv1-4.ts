//4//

console.clear(); //Limpar o prompt command

let teclado = require("prompt-sync")(); // Teclado //
let fahrenheit: number = parseFloat(teclado("Digite um numero\u00E7\u00E3o: "));

function fahrenheitparacelsius (fahrenheit) {
    let celsius = 5/9 * (fahrenheit - 32);
    return celsius;

}
let valorConvertido: number = fahrenheitparacelsius(fahrenheit);
console.log(valorConvertido);

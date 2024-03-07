//3//

console.clear(); //Limpar o prompt command

let teclado = require("prompt-sync")(); // Teclado //
let celsius: number = parseFloat(teclado("Digite um numero\u00E7\u00E3o: "));

function celsiusparafahrenheit (celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;

}
let valorConvertido: number = celsiusparafahrenheit(celsius)
console.log(valorConvertido);
//4//
console.clear(); //Limpar o prompt command
var teclado = require("prompt-sync")(); // Teclado //
var fahrenheit = parseFloat(teclado("Digite um numero\u00E7\u00E3o: "));
function fahrenheitparacelsius(fahrenheit) {
    var celsius = 5 / 9 * (fahrenheit - 32);
    return celsius;
}
var valorConvertido = fahrenheitparacelsius(fahrenheit);
console.log(valorConvertido);

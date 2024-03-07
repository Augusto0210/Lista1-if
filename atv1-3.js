//3//
console.clear(); //Limpar o prompt command
var teclado = require("prompt-sync")(); // Teclado //
var celsius = parseFloat(teclado("Digite um numero\u00E7\u00E3o: "));
function celsiusparafahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
var valorConvertido = celsiusparafahrenheit(celsius);
console.log(valorConvertido);

console.clear();
var teclado = require("prompt-sync")();
var pi = 3.14159;
var raio = parseFloat(teclado("Digite o Raio"));
var altura = parseFloat(teclado("Digite a Altura"));
var volume = (pi * (raio * raio) * altura);
console.log("O Volume ser\u00E1 \u00E9 ".concat(volume));

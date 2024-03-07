console.clear();
var teclado = require("prompt-sync")();
var quantidade = parseFloat(teclado("Digita quantidades de ma\u00E7\u00E3s"));
var precoPadrao = 0;
if (quantidade < 12) {
    precoPadrao = 0.3;
}
else {
    precoPadrao = 0.25;
}
var total = quantidade * precoPadrao;
console.log(" O Valor das ma\u00E7\u00E3s foram ".concat(total));

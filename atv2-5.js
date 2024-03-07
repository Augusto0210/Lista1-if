console.clear();
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("Digite Numero Um"));
var n2 = parseFloat(teclado("Digite Numero Dois"));
if (n1 < n2) {
    console.log("Numero ".concat(n2, " \u00E9 maior que ").concat(n1));
}
else if (n1 = n2) {
    console.log("Numero ".concat(n1, " \u00E9 igual a ").concat(n2));
}
else {
    console.log("}Numero ".concat(n1, " \u00E9 maior que ").concat(n2));
}

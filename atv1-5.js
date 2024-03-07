var teclado = require("prompt-sync")();
var idade = parseFloat(teclado("Digite sua idade"));
if (idade >= 18) {
    console.log("Maior de Idade");
}
else {
    console.log("Menor de Idade");
}

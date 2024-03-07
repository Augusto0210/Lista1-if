console.clear();
var teclado = require("prompt-sync")();
var idade = parseFloat(teclado("Digite a idade da pessoa"));
var peso = parseFloat(teclado("Digite o Peso da pessoa"));
if (idade >= 18 && idade <= 67) {
    if (peso >= 60) {
        console.log("Voc\u00EA podera doar sangue, v\u00E1 para sala Azul, ao final do corredor e ajude mais uma pessoa necessitada");
    }
    else {
        console.log("Voc\u00EA n\u00E3o pode doar sangue porque seu peso \u00E9 inferior a 60 Kg");
    }
}
else if (idade < 18 && peso < 60) {
    console.log("Voc\u00CA n\u00E3o atende a nenhum requisito");
}
else {
    console.log("Voc\u00EA n\u00E3o pode doar sangue porque sua idade est\u00E1 fora do intervalo permitido 18 a 67 anos");
}

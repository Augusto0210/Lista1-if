console.clear();
var teclado = require("prompt-sync")();
var nota1Bimestre = parseFloat(teclado("Digite Numero 1"));
var nota2Bimestre = parseFloat(teclado("Digite Numero 2"));
var media = (nota1Bimestre + nota2Bimestre) / 2;
var notas;
if (media >= 8.5 && nota1Bimestre >= 0 && nota1Bimestre <= 10 && nota2Bimestre >= 0 && nota2Bimestre <= 10) {
    notas = 'A';
}
else if (media >= 7 && media < 8.5) {
    notas = 'B';
}
else if (media >= 5 && media < 7) {
    notas = 'C';
}
else if (media >= 3 && media < 5) {
    notas = 'D';
}
else if (media < 3 && nota1Bimestre >= 0 && nota1Bimestre <= 10 && nota2Bimestre >= 0 && nota2Bimestre <= 10) {
    notas = 'E';
}
else {
    notas = 'Nota inválida';
}
console.log("A M\u00E9dia das notas ser\u00E3o ".concat(media, " e sua nota \u00E9 ").concat(notas));

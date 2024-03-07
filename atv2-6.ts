console.clear();

const teclado = require(`prompt-sync`)();

let nota1Bimestre: number = parseFloat(teclado(`Digite Numero 1`));
let nota2Bimestre: number = parseFloat(teclado(`Digite Numero 2`));

let media   = (nota1Bimestre + nota2Bimestre)/2;

let notas;
if (media >= 8.5 && nota1Bimestre >= 0 && nota1Bimestre <= 10 && nota2Bimestre >= 0 && nota2Bimestre <= 10){
    notas = 'A';
} else if (media >= 7 && media < 8.5){
    notas = 'B';
} else if (media >= 5 && media < 7){
    notas = 'C';
} else if (media >= 3 && media < 5){
    notas = 'D';
} else if (media < 3 && nota1Bimestre >= 0 && nota1Bimestre <= 10 && nota2Bimestre >= 0 && nota2Bimestre <= 10){
    notas = 'E';
} else {
    notas = 'Nota inválida';
}

console.log(`A Média das notas serão ${media} e sua nota é ${notas}`);
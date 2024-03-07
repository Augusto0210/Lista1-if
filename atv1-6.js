var teclado = require("prompt-sync")();
var idade = 0; //parseFloat(teclado(`Digite sua idade`));
var salario = 0; //parseFloat(teclado(`Digite seu Salario`));
var num_Pess = 0; //parseFloat(teclado(`Digite numero de pessoas`));
var tot_Pess = 0; //parseFloat(teclado(`Digite total de pessoas`));
//idade = parseInt(teclado(`Digite a Idade do funcionario`));
//salario = parseFloat(teclado(`Digite o salario do funcionario`));
while (num_Pess <= 4) {
    idade = parseInt(teclado("Digite a Idade do funcionario ".concat(tot_Pess)));
    salario = parseFloat(teclado("Digite o salario do funcionario ".concat(tot_Pess)));
    console.log("");
    if (idade < 30 && salario > 3000) {
        num_Pess++;
        tot_Pess++;
    }
    else {
        tot_Pess++;
    }
}
console.log("O total de pessoas que atendem ao requisito ".concat(num_Pess));

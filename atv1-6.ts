const teclado = require (`prompt-sync`)();

    let idade: number = 0 //parseFloat(teclado(`Digite sua idade`));
    let salario: number = 0 //parseFloat(teclado(`Digite seu Salario`));
    let num_Pess: number = 0 //parseFloat(teclado(`Digite numero de pessoas`));
    let tot_Pess: number = 0 //parseFloat(teclado(`Digite total de pessoas`));

//idade = parseInt(teclado(`Digite a Idade do funcionario`));
//salario = parseFloat(teclado(`Digite o salario do funcionario`));

while(num_Pess <= 4){

    idade = parseInt(teclado(`Digite a Idade do funcionario ${tot_Pess}`));
    salario = parseFloat(teclado(`Digite o salario do funcionario ${tot_Pess}`));
    console.log(``);

    if (idade < 30 && salario > 3000){
    num_Pess++;
    tot_Pess++;
  }
    else{
    tot_Pess++;
  }
}
console.log(`O total de pessoas que atendem ao requisito ${num_Pess}`);

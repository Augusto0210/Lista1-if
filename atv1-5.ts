const teclado = require (`prompt-sync`)();

    let idade: number = parseFloat(teclado(`Digite sua idade`));

if (idade >= 18){
    console.log(`Maior de Idade`);

}
else{
    console.log(`Menor de Idade`);
}


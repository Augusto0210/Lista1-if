console.clear();

const teclado = require(`prompt-sync`)();

let idade= parseFloat(teclado(`Digite a idade da pessoa`));
let peso= parseFloat(teclado(`Digite o Peso da pessoa`));

if (idade >= 18 && idade <= 67){
  if (peso >= 60){
    console.log(`Você podera doar sangue, vá para sala Azul, ao final do corredor e ajude mais uma pessoa necessitada`);
  }
  else{
    console.log(`Você não pode doar sangue porque seu peso é inferior a 60 Kg`);
  }
}
  else if(idade < 18 && peso < 60){
    console.log(`VocÊ não atende a nenhum requisito`);
  }
  else{
    console.log(`Você não pode doar sangue porque sua idade está fora do intervalo permitido 18 a 67 anos`)
  }

console.clear();

const teclado = require(`prompt-sync`)();

let angulo1= parseFloat(teclado(`Digite o Angulo`));
let angulo2= parseFloat(teclado(`Digite o Angulo`));
let angulo3= parseFloat(teclado(`Digite o Angulo`));

let somaAngulos = (angulo1) + (angulo2) + (angulo3);
      
if (somaAngulos == 180) {
  if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
    console.log('Triângulo Retângulo');
  } else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
    console.log('Triângulo Obtusângulo');
  } else {
    console.log('Triângulo Acutângulo');
  }
} else {
  console.log('Os ângulos informados não formam um triângulo válido.');
}
 
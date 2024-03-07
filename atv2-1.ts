console.clear();
const teclado = require (`prompt-sync`)();

const pi: number = 3.14159;
let raio: number = parseFloat(teclado(`Digite o Raio`));
let altura: number = parseFloat(teclado(`Digite a Altura`));

let volume: number = (pi * (raio * raio) * altura);
console.log(`O Volume será é ${volume}`);

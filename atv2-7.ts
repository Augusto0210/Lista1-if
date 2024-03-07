console.clear();

const teclado = require(`prompt-sync`)();

let quantidade = parseFloat(teclado(`Digita quantidades de maçãs`));
let precoPadrao: number = 0;

if (quantidade < 12) {
  precoPadrao = 0.3;
} else {
  precoPadrao = 0.25;
}

let total = quantidade * precoPadrao;
console.log(` O Valor das maçãs foram ${total}`);
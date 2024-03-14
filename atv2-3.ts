console.clear();

const teclado = require(`prompt-sync`)();

let letra: string = (teclado(`Digite uma letra`));

let vogala: string = `a`
let vogale: string = `e`
let vogali: string = `i`
let vogalo: string = `o`
let vogalu: string = `u`
let vogalA: string = `A`
let vogalE: string = `E`
let vogalI: string = `I`
let vogalO: string = `O`
let vogalU: string = `U`


if (letra == vogala || letra == vogale || letra == vogali || letra == vogalo || letra == vogalu || letra == vogalA || letra == vogalE || letra == vogalI || letra == vogalO || letra == vogalU) {
    console.log(`A letra é uma vogal`);
} else {
    console.log(`A letra é uma consoante`);
}

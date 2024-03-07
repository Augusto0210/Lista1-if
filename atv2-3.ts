console.clear();

const teclado = require(`prompt-sync`)();

let letra: string = (teclado(`Digite uma letra`));

let vogalA: string = `a`
let vogalE: string = `e`
let vogalI: string = `i`
let vogalO: string = `o`
let vogalU: string = `u`


if (letra == vogalA || letra == vogalE || letra == vogalI || letra == vogalO || letra == vogalU) {
    console.log(`A letra é uma vogal`);
} else {
    console.log(`A letra é uma consoante`);
}
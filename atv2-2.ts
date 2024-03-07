console.clear();
const teclado = require (`prompt-sync`)();
let x: number = parseFloat(teclado(`Digite um numero para x`));
let y: number = parseFloat(teclado(`Digite um numero para y`));
let z: number = 0


console.log(` O Valor de X é ${x} e Y é ${y}`);
z = x;
x = y;
y = z;
console.log(`Bhamm !!! Agora X é ${x} e Y é ${y}`);

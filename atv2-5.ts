console.clear();

const teclado = require(`prompt-sync`)();

let n1: number = parseFloat(teclado(`Digite Numero Um`));
let n2: number = parseFloat(teclado(`Digite Numero Dois`));

if (n1 < n2){
    console.log(`Numero ${n2} é maior que ${n1}`)
}
else if( n1 = n2){
    console.log(`Numero ${n1} é igual a ${n2}`)
}
else {
    console.log(`}Numero ${n1} é maior que ${n2}`)
}
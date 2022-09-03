//Como trocar o valor de duas variáveis
//Basicamente a lógica por traz disso é, guardar o valor de uma variável
//Já estabelcida criando uma terceira... vamos ver na prática

let a = 10;
let b = 5;

let m = a;
a = b;
b = m;

//outra forma de fazer a troca é ... [a, b] = [b, a]

console.log(a);
console.log(b);
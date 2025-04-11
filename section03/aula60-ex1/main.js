/*
    criar uma funcao ao qual compara dois valores aleatorios e retorna qual o maior entre eles;
*/
let min = 1;
let max = 100;
const compLogic = (min, max) => {
    let a = Math.floor(Math.random() * (max - min) + min);
    let b = Math.floor(Math.random() * (max - min) + min);
    return a > b ? `option 1: ${a} maior que ${b}` : `option 2: ${b} maior que ${a}`;
}
console.log(compLogic(min, max));


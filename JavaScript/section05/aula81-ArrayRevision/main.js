//REVISION ARRAY;

//forma tradicional de criar array;
const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[1] = 'Jose';

//nova forma, porem pouco utilizada;
const num = new Array(1, 2, 4, 10, 12);

//ATRIBUTOS POR REFERENCIAS PODEM SER MANIPULADOS E REFLETEM EXATAMANETE NA REFERENCIA;
const remove = nomes.pop();
console.log(nomes, remove);

nomes.push(remove);

console.log(nomes, remove);

nomes.unshift('marcos');

console.log(nomes, remove); 
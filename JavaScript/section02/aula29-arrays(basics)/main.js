const alunos = ['guilherme', 'Ester'];
//adicona um elemento no final do array;
alunos[alunos.length] = 'MariaDB';
//adiciona um elemento no inicio do array;
alunos.unshift('Ana');

//uma variavel que guarda o elemento que foi removido do array alunos: mariaDB;
const removido = alunos.pop();

const removidoInicio = alunos.shift();

console.log(removido);
console.log(removidoInicio);
console.log(alunos);

const car = ['honda', 'chevy', 'KIA', 'Subaru', 'Toyota'];
console.log(car);
//.slice(posiciao, a partir da posicao quantos elementos sera eleminado);
const carcopia = car.slice(0 , -3);

//verifica se a instancia is do tipo array;
console.log(typeof car);
console.log(car instanceof Array);


const x = (x=2,y=2) => x + y;
console.log(x());


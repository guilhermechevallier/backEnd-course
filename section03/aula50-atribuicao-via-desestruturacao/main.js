//atribuicao via desestruturacao (Arrays);
//primeiro ocorre uma atribuicao no array de valores em suas respectivas funcoes;
//dps, é feita uma desestruturacao do array e reatribuindo os valores;
const num = [1, 2, 3];
[a, b, c] = num;
// a = 1; b = 2; c = 3;
console.log(a, b, c);

const cadastro = ["guilherme", 21, "M"];
//criando variaveis e reatribuindo do array cadastro;
const [n, age, s] = cadastro;

console.log(n);
console.log(age);
console.log(s);

console.log('=======')

//essa desestruturacao facilitar pegar o valor de uma array e alocá-la em uma variavel;

const numbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
// ...rest quando quer pegar o resto;
//...spread quando quer espalhar;
const [um, dois, tres, ...resto] = numbers;
console.log(um, dois, tres);
console.log(resto);

//quando necessita pular a ordem do array que esta sendo desestruturado;
const [n1, , n3, , n4] = numbers;
console.log(n1, n3, n4);

//desestruturacao de um array dentro de outro array;
const car = [
    ['ferrari', 'porsche'],
    ['fusca', 'caminhonete']
];

const [car21, car22] = car[1];
console.log(car21, car22);

//indice do array numeros1
//indice dos arrays dentro do array
//                    0           1          2
//                 0  1  2     0  1  2    0  1  2
const numeros1 = [[1, 2, 3,], [4, 5, 6], [7, 8, 9]];
const [,[,,seis]] = numeros1;

//se for alguns tudo bem, mas quando ha uma quantidade enorme, ai fica dificil ter que atribiuir os valores;
let seix = numeros1[1][2];

console.log(seis, seix);
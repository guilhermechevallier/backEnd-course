const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//nomes.splice(indice, delete, element1, element2, element3);
//nomes.pop(); -> remove o útlimo.

const removed = nomes.splice(-1, 1);
console.log(nomes, removed);

//nomes.splice(indice, Number.MAX_VALUE); -> remove a partir do indice até o numero máximo dentro do array de indices;
//nomes.splice(indice, delete, adicionaValue);

//readicionando os valores excluidos do array;

//inserindo valores no indice selecionado, depois desse indice sera empurrado os valores dos indices;
nomes.splice(-1, 1, 'Guilherme');

console.log(nomes, removed);

//simulando o push();
//mas nesse caso é muito melhor usar o push(); mesmo.
const n1 = 'Ana';
nomes.splice(nomes.length, 0, n1);
console.log(nomes);

//simulado o unshift();
nomes.splice(0, 0, 'Joabe');
// se voce quer mexer no meio do array, usar o splice se torna util.


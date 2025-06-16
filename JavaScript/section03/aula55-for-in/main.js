//mais um tipo de for;

const fruta = ['Pera', 'Maçã', 'Uva'];

//iterar com for;
for (let i = 0; i < fruta.length; i++){
    console.log(fruta[i]);
}

//for in -> ler os indices ou chaves do objeto;
//ta lendo o indice ou seja 2 indices, 0, 1, 2;
for (let i in fruta){
    console.log(i);
}

//lendo os valores dos indices;
for (let i in fruta){
    console.log(fruta[i]);
}

//objeto;
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

//vai ler os indices, nesse caso: nome, sobrenome e idade;
for (let chave in pessoa) {
    console.log(pessoa[chave]);
}


//for of;
console.log('=======================')

const person = 'Gengibre San';

for(let i = 0; i < person.length; i++){
    console.log(person[i]);
}
//for in j = retorna apenas os indices da iteracao;
for (let j in person){
    console.log(j);
}

// for of ler os indices e retorna apenas o valor;
for (let i of person){
    console.log(i);
}

//funciona com array;
// ler os indices do array e retorna o valor;
for (let k of fruta){
    console.log(k);
}
//valores primitivos (imutaveis), string, number, boolean, underfined, null (bigint, symbol);

let nome = 'Ester';
nome[0] = 'A';
console.log(nome[0], nome);



//basicamente esta fazendo uma copia;
let a = 2;
let b = a;
b++;
console.log(a, b);


//nesse caso está sendo feita uma linkagem direta de C para D;
//pelo fato de ser uma referencia, elas vao apontar para a mesma alocacao de memoria;
let c = [1, 2, 4, 5];
let d = c;
console.log(d);

//fazendo a copia de uma referencia;
let obj = [1, 2, 3, 4];
let x = [...obj];

x[4] = 21;
x.shift();
console.log(x, obj);


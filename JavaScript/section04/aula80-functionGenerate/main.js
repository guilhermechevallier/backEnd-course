/*
    function generate;
*/

function* generate () {
    //codigos de execuao;
    //na primeira vez que for chamada;
    yield 'valor 1';

    //na segunda vez que for chamada;
    yield 'valor 2';

    //na terceira vez que for chamada;
    yield 'valor 3';
}
const g1 = generate();


//Para ver o yield, utiliza-se o .next();
//Para ver o valor do yield, utiliza-se o .next().value;

// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// //depois disso, torna-se inacessivel olhar o valor;

// console.log(g1.next().value);

// pode utilizar a iteracao para funcoes geradoras;
for(let i of g1){
    console.log(i);
}



function* geradora1 (){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora2 (){
    yield* geradora1();
    yield 3;
    yield 4;
    yield 5;
}

function* geradora3(){
    yield* geradora2();
    yield 6;
}

const g3 = geradora3();
for (let j of g3){
    console.log(j);
}

//QUANDO TENHO FUNCTIONS QUE PRECISAM SEREM CHAMADAS NA ORDEM, O USO DE FUNCTION GENERATE TORNA SE UTIL PARA ESTA TAREFA;
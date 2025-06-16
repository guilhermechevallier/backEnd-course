//return de uma funcao retorna um valor;
//return termina a funcao;
let batata;
function soma (a = 0, b = 0){
    return [a, b];
}

//existem funcoes de return ou sem return;

//duas formas de criar a mesma coisa, porém com a funcao fica mais legivel e reutilizavel;
function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaPessoa('luiz', 'Otavio');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
}
console.log(typeof p1);
console.log(typeof p2);


// ;

function talkPhrase (start){
    function talkRest (rest){
        return start + ' ' + rest;
    }
    //return talkRest, porém sem executar ela.
    return talkRest;
}

const olaMundo  = talkPhrase('olá');

console.log(olaMundo('mundo!')); 

//usando a funcao para criar outra funcao ao qual retorna um valor;
function duplica (n, m){
    return n * m;
}


function triplica (n){
    return n * 3;
}
function quadruplica (n){
    return n * 4;
}

//function multiplicador 
function multiplicador (mult){
    return function (n){
        return n * mult;
    }
}

const duplica = multiplicador(2);

console.log(duplica(5));
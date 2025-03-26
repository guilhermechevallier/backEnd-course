//let e var são diferentes, pois let não pode receber um novo valor com a variavel utilizada;
//var pode ser atualizada;



let name = 'guilherme'; //criando;
//let name1 = 'João' isso dar erro porque você está redefinindo;

var name2 = 'Matheus';
var name2 = 'João'; //isso é aceitável, pois ela pode redeclarar;

//let tem escopo de bloco {... bloco};
//var só tem escopo de função;
const verdadeira = true;

//temos o escopo global que envolve tudo;
//o primeiro if é outro escopo entre as {} chaves
if (verdadeira){
    let name = 'Avião' //criando; 
    console.log(name, name2);

    //segundo escopo entre {} chaves;
    if(verdadeira){
        let nome = 'rua acesso'
        console.log(nome);
    }
}

//portanto os escopos podem criar a mesma let;

/*
    let game = 'round six';

    ...{
        let game = 'cs2';
    };
        let game = 'crab game';
    {
        let game = 'minecraft';
        console.log(game);
    }

    caso a saida não encontre a let game naquele respectivo bloco, ela irá procurar no outro bloco;
*/
console.log('===========');

const statu = true;
//bloco global;
let game = 'round six';
console.log(game);

if (statu){
    //primeiro bloco;
    let game = 'crab game';
    console.log(game);
    if(statu){
        //segundo bloco;
        let game = 'CS2';
        console.log(game);
    }
    if(statu){
        //segundo segundo bloco
        //exibira o primeiro bloco, pois os dois escopos do if estao na mesma hierarquia;
        console.log(game);
    }
}

//let utilizará a declaração de mesmo escopo ou do escopo anterior;
//var utilizará a redeclaração anterior idependende do escopo;

console.log('========');
//bloco global e primeira declaração;

const ola = () =>{
    var plan = 'aviao';
    if (statu){
        //primeiro bloco e primeira redeclaração;
        var plan = 'b2';
        if (statu){
            //segundo bloco e segunda redeclaração;
            var plan = 'bmw';
        }
    }
    console.log(plan);
}
//chamara o ultimo bloco e ultima declaração idenpendemente da hierarquia de escopo;
// a var não respeita a hierarquia de escopos de blocos, somente se for funcao;
// como a var foi declarada dentro da funcao, ela nao pode puxar de fora do escopo da funcao;
ola();


//ocorre underfined, isso ocorre com as var ou funcoes criadas com function, chamada de elevacao;
console.log(sobrenome);

var sobrenome = 'Miranda';
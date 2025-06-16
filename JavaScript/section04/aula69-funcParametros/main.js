//paremetros de funcoes;
let total = 0;

function funcao (){
    for (let argument of arguments){
        total += argument;
    }
    console.log(total);
}

funcao(1, 2, 4, 5, 6,);


const cad = function cadastro (nome, idade, cidade = 'Goiânia'){
    const usuario = {
        nome: nome,
        idade: idade,
        cidade: cidade
    }

    try {
        for (let i in usuario){
            console.log(usuario[i]);
        }
        
    } catch (error) {
        console.log(error.message);
    }
}

function cad2 (){
    return {
        nome: 'Lucas', 
        idade: 21,
        cidade: 'Senador Canedo'
    }
}


function user ({nome, idade, cidade} ){
    console.log(nome, idade, cidade);
}

user(cad2());

//rest operator, ele recebe os parametros restantes dentro de um array;

function conta(operador, acomulador, ...numeros){
    for (let numero of numeros){

        //if (operador == "+") acomulador = 1; = acomulador + numero[20, 30, 40, 50];
        if(operador == "+") acomulador += numero;
        if(operador == "-") acomulador -= numero;
        if(operador == "/") acomulador /= numero;
        if(operador == "*") acomulador *= numero;
    }
    console.log(acomulador);
};

conta("+", 1, 20, 30, 40, 50);
conta("-", 100, 10, 20, 30, 40);
conta("*", 1, 2, 3, 4, 5);
conta("/", 100, 10, 2, 5, 2);


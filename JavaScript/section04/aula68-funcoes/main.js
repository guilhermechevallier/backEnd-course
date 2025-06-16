//declaracao de funcoes hosting;
/*
    qunado declaramos uma funcao hosting, mesmo que ela esteja abaixo da chamada, ela ira executar normalmente. isso acontece porque o js faz o carregamento do arquivo e coloca as funcoes no topo do arquivo.
*/
olamundo();

function olamundo () {
    console.log('ola mundo');
}


/*
    function is first-class object (objetos de primeira classe);
    function expression (expressao de funcao);
*/

const dataFunc = function () {
    console.log('Sou um dado');
}

function exec (funcao) {
    funcao();
}
exec(dataFunc);


//arrow function

const namoral = () => {
    console.log('sou uma arrow function');
}
namoral();

//funcao dentro de um objeto

const obj = {
    falar(){
        console.log('Estou falando...');
    }
}

obj.falar();
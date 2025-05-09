//escopo global;


//closure é habilidade uma funcao em acessar a diversos escopos;
function returnFunction (){
    const nome = 'luiz';
    return function() {
        return nome;
    };
}

const funcao = returnFunction();
console.log(funcao());
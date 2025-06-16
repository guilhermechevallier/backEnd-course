//IIFE - Immediately Invoked Function Expression;
/*
    Ela não toca o escopo global, e é executada imediatamente;
    1. Isolar
    2. nao ter conflitos com o escopo global de outras variaveis;
*/

(function(age, weight, height){
    const lastName = 'Silva';
    function makeName(nome){
        return `${nome} ${lastName}`
    }

    function sayName(){
        console.log(makeName('Guilherme'));
    }

    sayName();

    console.log(age, weight, height);

})(21, 58, 1.78);

//Erro porque esta variavel não esta definida nos escopos;
// console.log(nome);


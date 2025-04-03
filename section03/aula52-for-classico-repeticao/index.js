//for classico 
/*
    for (variavel de controle; condicional; incrementracao ou decrementacao){...}
    variavel de controle
        let i = 0;
    condicional;
        i <= 10; i >10; i <= e.length;
    incrementacao ou decrementacao;
        i++ ou i--;
*/
for (let i = 1; i <= 2; i++){
    console.log(i + ". I love you ♡");
}


for (let j = 0; j <= 1; j++){
    const par = j % 2 === 0 ? 'par' : 'impar';
    console.log(j, par);
}

const fruta = ['Uva', 'Maçã', 'Pêra', 'Limão', 'Tomate'];
for (let k = 0; k < fruta.length; k++){
    console.log('----------------');
    console.log(fruta[k]);
}
//while e Do While;
//variavel de controle;

/*  let i = 0;
    //condicional;
    while (i <= 10){
        console.log(i);
        //incrementeção;
        i++;
    }
    console.log('======');
    let j = 0;
    //não é muito recomendavel utilizar while para isso;
    const nome = 'luiz';
    while (j < nome.length){
        console.log(nome[j]);
        j++;
    }
*/
//situcao real;

//function de um numero aleatorio entre min e max;
//math.floor() para nao retornar um numero fracionario;
function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

//variavel que armazena a funcao com os parametros 1,50;
let rand = random (1, 50);

const min = 1;
const max = 50;

//while enquanto for diferente de 10, vai reiniciar o numero aleatorio e dar console.log no rand para verificar
//se o numero é ou nao == 10;
while (rand !== 10){
    //parecido com uma incremetacao;
    rand = random(min, max);
    console.log(rand);
}
console.log(rand!== 10);
console.log('agora sim!');
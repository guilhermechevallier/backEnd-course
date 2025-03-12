//operadores lógicos;
/*
    && -> AND -> E = todas devem ser verdadeiras;
    || -> OR -> OU = pelo menos uma deve ser verdadeira;
    ! -> NOT -> NAO = oposto;
*/
// nesse caso precisa verificar duas expressoes;
const expressAND = true && true && true;
let a = 10;
console.log(a === 10 && 5 < 10);

// 20 + 30 === 50 e a === 10;
// as duas sao falsas
const expressOR = true || false;
console.log((20 + 30) === 150 || a < 7);

// ! nao;
console.log(!a !== 10);
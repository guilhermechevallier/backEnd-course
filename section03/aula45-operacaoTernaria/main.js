const pointUsers = 1999;

//estrutura condicional if else padrao;
// if (pointUsers >= 1000){
//     console.log('Usuario VIP');
// } else {
//     console.log('Usuario Normal')
// }

//estrutura condicional de operacao ternaria;
// (condicional) ? ... true : ... false;
const levelUser = pointUsers >= 1000 ? 'Usuraio VIP' : 'Usuario Normal';
console.log(levelUser)

//falback;
const corUsers = 'null';
const corPadrao = corUsers || 'black';
console.log(corPadrao);
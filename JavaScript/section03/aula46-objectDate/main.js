//01/01/1970 timestamp unix ou época unix;
// se quiser uma data anterior a isso, use negativo;
const tresHoras = 60 * 60 * 3 * 1000;
const oneDay = 60 * 60 * 24 * 3 * 1000;
//quando se tem somente um parametro, ele entende como milissegundos;
//ordem de parametros new Date(year, month, day, hours, minutes, seconds, ms)
//quando os outros parametros sao omitido entt ele zera, dia 1, 00:00:00 horas;
// mes = 0 - 11;
//dataString  passando parametro no formato string: 'ano-mes-dia hora:minutos:segundos.ms'
const data = new Date();


console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // janeiro comeca com zero entt acrescente + 1;
console.log('Ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milissegundos', data.getMilliseconds());
console.log('dia na semana', data.getDay() + 1) // domingo comeca com 0 - sabado = 6, entt add + 1;
console.log(data.toString());

console.log('=========================================');

//formatando datas;
const zeroAEsquerda = (num) =>{
    return num >= 10 ? num : `0${num}`;
}

const formataData = () =>{
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

console.log(formataData());
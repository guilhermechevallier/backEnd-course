//seleciona o texto;
let timer = document.querySelector('#timer');

//uma funcao que cria a instancia da funcao nativa de data;
//retorna os valores como numero da semana, dia, mes, ano, hora, minutos e segundos como um objeto;

const getTime = () =>{
    const data = new Date();
    const dateDay = data.getDay();// 0 a 6 na semana, começa domingo com 0;
    const dateNDay = data.getDate();// 24;
    const dateMonth = data.getMonth(); // mes 1 == 0 comeca no 0 ate 11;
    const dateFullYear = data.getFullYear(); 
    const dataTime = data.getHours();
    const dataMinutes = data.getMinutes();
    const dataSeconds = data.getSeconds();
    return {
        dateDay,
        dateNDay,
        dateMonth,
        dateFullYear,
        dataTime,
        dataMinutes,
        dataSeconds
    }
}
/*
    uma funcao que é executada a cada 1s, faz a desconstrução do getTime() para pegar as propriedades do objeto e usa-las no conteudo de texto ao qual o usuario deverá ver como dia da semana, dia, mes, ano, hora atual;
*/ 
setInterval(() => {
    const {dateDay, dateNDay, dateMonth, dateFullYear, dataTime, dataMinutes, dataSeconds} = getTime();
    
    timer.textContent = `${getDayName(dateDay)}, ${dateNDay} de ${getMonthName(dateMonth)} de ${dateFullYear}, ${getZeroLeft(dataTime)}:${getZeroLeft(dataMinutes)}:${getZeroLeft(dataSeconds)} `;

}, 1000)

//funcao que pega o valor do numero da semana e retorna em um texto referente aquele dia 0 sendo domingo, 1 == segunda-feira e assim por diante;
const getDayName = (x) =>{
    switch (x){
        case 0: return `domingo`;
        case 1: return `Segunda-Feira`;
        case 2: return `Terça-Feira`;
        case 3: return `Quarta-Feira`;
        case 4: return `Quinta-Feira`;
        case 5: return `Sexta-Feira`;
        case 6: return `Sábado`;
        default: return x;
    }
}
//funcao que pega o valor do mes em uma estrurura switch e retorna o retorna o nome do mes 0 == janeiro, 1 == fevereiro ...;
const getMonthName = (y) =>{
    switch (y){
        case 0: return `Janeiro`;
        case 1: return `Fevereiro`;
        case 2: return `Março`;
        case 3: return `Abril`;
        case 4: return `Maio`;
        case 5: return `Junho`;
        case 6: return `Julho`;
        case 7: return `Agosto`;
        case 8: return `Setembro`;
        case 9: return `Outubro`;
        case 10: return `Novembro`;
        case 11: return `Dezembro`;
    }
}
//funcao que retorna uma condicao ternaria, se o numero maior ou igual a 10 retorna o proprio numero, se nao, retorna um 0 na frente 01 p. ex.;
const getZeroLeft = (num) =>{
    return num >= 10 ? num : `0${num}`;
} 

//modo short ou curto;
const text2 = document.querySelector('#timer2');
const data2 = new Date();
text2.innerHTML = data2.toLocaleDateString('pt-BR', { dateStyle: 'full'})+ ', ' + data2.toLocaleTimeString('pt-BR', { timeStyle: 'short '});

//data2.toLocaleDateString('pt-BR', {dateStyle: 'full'}); mostra a data no pt-br inteira quarta-feira, 21 de janeiro de 2025;

//data2.toLocaleTimeString('pt-BR', {dateStyle: 'short'}); mostra a hora atual de brasilia;

/* opcional isso;
    const opcoes = {
        dataStyle: 'full', // mostrar a data no br;
        timeStyle: 'short' //or 'full'; // mostrar a hora br;
    };
    text2.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
*/
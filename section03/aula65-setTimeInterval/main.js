//Aula setInterval e setTimeout;
function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

console.log(mostraHora());

//setInterval() quando queremos executar algo que precise ser feito a determinado tempo;

//setInterval(function(){}, time em ms);
const timer = setInterval(function(){
    let data1 = new Date();

    return console.log(
        data1.toLocaleTimeString('pt-BR', {
            hour12: false
        })
    );
},1000);


//SetTimeout();

setTimeout(function(){
    clearInterval(timer);
}, 3000);

setTimeout(function(){
    console.log('olá!');
}, 4000);

setInterval(function(){
    return console.log('error');
}, 1000);


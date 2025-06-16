function relogio(){
    //selececao do elemento texto do relogio;
    const timer = document.querySelector('#timerPrint');
    //formatacao do relogio;
    let tempo;
    let seg = 0;
    
    //funcao que cria a instancia do relogio e formata;
    const getHourInSecond = (segundos) =>{
        const data1 = new Date(segundos * 1000);
        
        return data1.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    //funcao executa a cada 1 seg, incrementa o seg e chama a funcao no timer;
    function startTimer() {
        tempo = setInterval (() =>{
            seg++;
            timer.innerHTML = getHourInSecond(seg);
        },1000);
    }

    //o documento escuta o evento de click e executa a funcao correspondente ao click;
    //start, pause e reset;
    //start: inicia o relogio, pause: pausa o relogio, reset: reseta o relogio;
    //clearInterval: limpa o intevalo do relogio;
    //classList: adiciona ou remove uma classe do elemento;
    document.addEventListener('click', (e) => {
        const el = e.target;
        if (el.classList.contains('start')){
            timer.classList.remove('pause');
            clearInterval(tempo);
            startTimer();
        }
        if (el.classList.contains('pause')){
            clearInterval(tempo);
            timer.classList.add('pause');
        }
        if (el.classList.contains('reset')){
            timer.classList.remove('pause');
            clearInterval(tempo);
            timer.innerHTML = '00:00:00';
            seg = 0;
        }
    })
    
}
relogio();

console.log('cala boca seu bosta');
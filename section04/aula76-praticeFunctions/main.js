
function calculadora (){

    return {
        // a propriedade display é um elemento do DOM;
        display: document.querySelector('.display'),
        
        inicia () {
            //aqui o this se refere ao objeto calculadora;
            //a funcao ira iniciar e chamar as outras funcoes;
            this.cliqueBtn();
            
        },
        
        cliqueBtn () {
            // this se refere ao objeto calculadora;
            document.addEventListener('click', function (e){
                //aqui o this se refere ao objeto window.document;
                const el = e.target;
                
                if (el.classList.contains("btn-num")){
                    // sendo o elemento clicado um botao com a classe btn-num;
                    // o valor do botao vai ser passado para a funcao btnForDisplay;
                    this.btnForDisplay(el.innerText);
                }
                
                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                
                if(el.classList.contains('btn-del')){
                    this.clearOneDisplay();
                }

                if (el.classList.contains('btn-equal')){

                    //adiciona um evento de escuta ao qual registra o enter;
                    this.display.addEventListener('keyup', e => {
                        if (e.keyCode === 13) {
                            this.resolveCount();
                        }
                    })    

                }

            }.bind(this));
        },
        
        btnForDisplay (valor) {
            // a propriedade display vai receber o valor que a funcao btnForDisplay receber;
            this.display.value += valor;
        },

        clearDisplay () {
            // basicamente a propriedade display vai receber uma string vazia;
            this.display.value = '';
        },
        
        clearOneDisplay () {
            // basicamente o slice remove o ultimo caracter da string;
            // 0 para a posicao inicial e -1 para a posição final;
            this.display.value = this.display.value.slice(0, -1);
        },

        resolveCount () {
            let conta = this.display.value;

            try{
                conta = eval(conta);
                if (!conta){
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('conta invalida');
                return;
            }

        }

    }
}
//
const calc = calculadora();
calc.inicia();
console.log(calc.display);


//CRIANDO UM OBJETO COM FUNCAO CONSTRUTORA;


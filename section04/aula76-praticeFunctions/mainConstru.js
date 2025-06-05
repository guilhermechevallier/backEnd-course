//FUNCTION CONSTRUCTOR;
class calc {
    constructor() {
        //atributo publico;
        this.display = document.querySelector('.display');

        this.inicia = () => {
            this.captureClicks();
            this.captureEnter();
        };

        this.captureEnter = () => {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) return;
                this.equa();
            });
        };

        this.captureClicks = () => {
            document.addEventListener('click', (e) => {
                const el = e.target;
                console.log(el);

                if (el.classList.contains("btn-num")) this.addNumDisplay(el);
                if (el.classList.contains("btn-clear")) this.clear();
                if (el.classList.contains("btn-del")) this.del();
                if (el.classList.contains("btn-equal")) this.equa();


            });
        };

        this.addNumDisplay = el => {
            this.display.value += el.innerText;
            this.display.focus();
        };

        this.clear = el => {
            //limpa tudo e deixa em branco;
            this.display.value = '';
        };

        this.del = el => {
            //0 para posicao inicial, -1 a posicao final para remover;
            this.display.value = this.display.value.slice(0, -1);
        };

        this.equa = el => {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    this.clear();

                    alert('conta invalida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('conta invalida');
                this.clear();
                return;
            }
        };


    }
}
 

const calculadora = new calc();
calculadora.inicia();
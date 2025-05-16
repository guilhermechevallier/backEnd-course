//funcoes fabricas;
/*
    1. quando uma funcao está dentro de um objeto, chamamos de método;
    2. factory function;
*/

function makePerson (nome, lastName, p, a){
    return {
        nome,
        lastName,
        //getter
        get nomeCompleto () {
            return `${this.nome} ${this.lastName}`
        },

        //setter;
        //voce pode manipular o valor antes de ser armazenado;
        set nomeCompleto (valor) {
            // the very space will be done a division inside array;
            valor = valor.split(' '); 
            //retorna o valor para essa variavel e depois irá remover;
            this.nome = valor.shift();
            this.lastName = valor.join(' ');
            console.log(valor);

        },
        //peso nao esta definido no escopo da funcao;
        //entt usamos o this para fazer a referencia;
        fala : function (assunto){
            return `${this.name} está falando sobre ${assunto}`;
        },

        peso : p,

        altura : a,

        //quando utilizamos o get na frente de uma funcao no objeto
        //ela passa a ser um atributo.
        //getter
        get imc(){
            //this usa a referencia dos atributos no mesmo nivel de objeto.
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}


const p1 = makePerson('Guilherme', 'Silva', 59.82, 1.83);
p1.nomeCompleto = 'Maria Fernanda Oliveira'
console.log(p1.nomeCompleto);

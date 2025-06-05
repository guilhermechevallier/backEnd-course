//function constructor -> objetos;
// funcao fabrica de objetos;

function Pessoa(nome, sobrenome){
    // ATRIBUTOS OU METODOS PRIVADOS;
    const ID = 123456;
    const metodoInterno = function() {

    };

    //ATRIBUTOS OU METODOS PUBLICOS;
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1.metodo());
console.log(p2.metodo());

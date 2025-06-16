//atribuicao via desestruturcao de um objeto;
const pessoa = {
    nome: '',
    sobrenome: 'miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
//a atribuicao via desestruturcao funciona da mesma forma que o array; 
//cria uma variavel com o nome daquela desestrutucao nome = 'luiz';
//caso uma variavel desestruturada nao tenha valor, ela recebera undefined;
//para resolver isso; const { nome = 'não existe'} = pessoa;
const { nome = 'não existe', sobrenome, idade } = pessoa;

//caso queria mudar o nome da variavael na desestruturacao => const {nome: nome1, ...}
//nome se chamara nome1;

const { nome: nome1 = '', sobrenome: lastname} = pessoa;
console.log(nome1, lastname);

// como tem um objeto dentro de um objeto, nao e possivel desestrutura da maneira convencional;
// const {endereco: {rua, numero}} = pessoa;
//desestruturacao dentro de outra desestruturacao ao qual renomeamos uma variavel e adicionamos um valor caso nao tenha nenhum definido;
const {endereco: {rua: r = '123', numero}} = pessoa;
//estamos utilizando o endereco pra fazer outra desestruturacao;
console.log(rua, numero);


//uma desestruturcao e armazenamento de dados no rest = resto;
const alimento = {
    fruta: 'uva',
    verdura: 'batata',
    cereais: 'trigo'
}
const {fruta: f1, ...resto} = alimento;
console.log(f1, resto);


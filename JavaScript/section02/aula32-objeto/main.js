//funcao com objeto de return;
const pessoaCAD = () =>{
    return{
        firstName: 'guilherme',
        lastName: 'silva',
        age: 21
    }
}
//array com objeto;
const car = [
    {
        marca: 'toyota',
        carro: 'supra'
    },
    {
        marca: 'chevy',
        carro: 'camaro SS8'
    }
]

const print = () => {

    const {marca, carro} = car[1];
    console.log(marca);
    console.log(carro);
}


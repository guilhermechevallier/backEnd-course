// exemplo de tratamentos de erros try, catch e throw;
// o throw é usado para lançar um erro, e o catch para capturar o erro;
// o try é usado para tentar executar um bloco de código, e se ocorrer um erro, o catch irá capturá-lo;
// o finally é usado para executar um bloco de código, independentemente de ocorrer um erro ou não;
// o finally é opcional e pode ser omitido;


const soma = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number'){
        // throw new Error('x and y must be numbers'); // lança um erro, e o catch irá capturá-lo;
        // throw new RefenceError('x and y must be numbers'); // lança um erro de referência, e o catch irá capturá-lo;
        throw new Error('x and y must be numbers');       
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma(1, '2'));
} catch (err){
    //alguma coisa mais amigavel quando ocorrer um erro;
    console.log('An error occurred: ', err);
}

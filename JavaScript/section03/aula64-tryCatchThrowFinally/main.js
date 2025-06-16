//aula sobre try/catch/finally/throw;

try{
    //executa o codigo normalmente;
    // console.log(a);
    console.log('abri um arquivo');
    console.log('Manipulei o arquivo e gerei erro');
    console.log('fechei o arquivo');

    try{
        console.log(b);
    } catch (err){
        console.log('tratando o erro interno');
    }


} catch (err){
    //executa quando ocorre um erro;
    console.log('tratando o erro')
} finally{
    //executa sempre, independente de erro ou não;
    console.log('FINALLY eu sempre sou executado');
}


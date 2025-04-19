

function returnHora (data){
    if ( data && !(data instanceof Date)){
        console.log('Não é uma data');
        throw new TypeError('Esperando uma instância de Date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }); 
    
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = returnHora();
    console.log(hora);
} catch (e){
    //tratar error
} finally {
    console.log('tenha um ótimo dia');
}




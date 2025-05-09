//funcoes de callback
/*
    sao funcoes quando uma ação ocorre;
*/
function rand (min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

console.log(rand());


function f1 (callback){
    setTimeout(function(){
        console.log('F1');
        if (callback) callback();
    }, rand());    
}

function f2 (callback){
    setTimeout(function(){
        console.log('F2');
        if (callback) callback();
    }, rand());
}

function f3 (callback){
    setTimeout(function(){
        console.log('F3');
        if (callback) callback();
    }, rand());
}

// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('Olá mundo!');
//         });
//     });
// });

// f1(f1callback);

// function f1callback(){
//     f2(f2callback);
// }
// function f2callback(){
//     f3(f3callback);
// }
// function f3callback(){
//     console.log('Ola mundo');
// }


function saudacao (callback){
    const nombre = 'luiz';

    if (callback) callback(nombre);
}
function hello (nombre){
    return console.log(`olá ${nombre}`);
}

saudacao(hello);
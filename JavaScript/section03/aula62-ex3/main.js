/*
    1. escreva um funcao que recebe o numero
    2. retorna:
    3. numero divisivel por 3 = fizz;
    4. numero divisivel por 5 = buzz;
    5. numero divisivel por 3 e 5 = fizzBuzz;
    6. numero NAO divisivel 3 e 5 = retorna o numero;
    7. checar se o numero é realmente um numero;
    8. use a funcao com numero de 0 a 100;
*/
const num = 1;
const getNumberDivisible = () =>{
    for(let i = 1; i <= 100; i++){
        if ( i % 3 && i % 5 !== 0 && typeof i === "number"){
            console.log(`not ${i}`);
        } else if (i % 3 && i % 5 === 0 && typeof i === "number"){
            console.log(`fizzBuzz 3 and 5: ${i}`);
        } else if (i % 5 === 0){
            console.log(`buzz 5: ${i}`);
        } else if (i % 3 === 0){
            console.log(`fizz 3: ${i} `);
        } else {
            console.log('nem é numero tlgd?')
        }
    }
}
getNumberDivisible();
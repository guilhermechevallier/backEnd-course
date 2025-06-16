//basicamente se resume em retornar uma funcao de maneira recorrente;
//ressalvo que deve conter incrementacao para nao ficar em um loop infinito;
function recursiva (max){
    let x = max;
    console.log(x);
    
    if (max >= 3) return;
    max++;
    recursiva(max);
}

recursiva (1);


/*
    Estrutura com base em minha percepcao;

    1. Execucao;
    2. condicional para parar ou nao;
    3. incremetacao;
    4. callback;

*/

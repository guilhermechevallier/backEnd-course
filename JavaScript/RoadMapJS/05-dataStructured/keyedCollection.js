/*
    Keyed collection é uma estrutura de dados que associa chaves a valores valores
    permitindo armazenar, acessar e manipular dados com base nessas chaves.

    As principais keyed collections em JavaScript

    1.Map
    2.WeakMap
    3.Set

    1.map 
        1.1 - Permite manipular qualquer tipo de valor com chave (incluse objetos).
        1.2 - Mantém a ordem de inserção.
        1.3 - É iterável.
*/

    const mapa = new Map();
    mapa.set('nome', 'Ana');
    mapa.set(123, 'numero');
    mapa.set({id: 1}, 'objeto');

    console.log(mapa.get('nome')); //'Ana'
    console.log(mapa.size); //3

    /*
        2.weakMap;
        2.1 - Apenas objeto como chaves;
        2.2 - Não é iteravel;
        2.3 - chaves são fracas (podem ser coletadas pelo garbage collector)
    */
    const wm = new WeakMap();
    const obj = {};

    wm.set(obj, 'valor secreto');
    console.log(wm.get(obj));


    /*
        3. Set;
        3.1 - colecao de valores  únicos, sem chaves explícitas (mas internamente usa como chave o próprio valor).
        3.2 - iteravel 
    */
    const conjunto = new Set();
    conjunto.add(1);
    conjunto.add(2);
    conjunto.add(2); // Ignorado

    console.log(conjunto.has(2)); // true


//     4. WeakSet
// Como Set, mas apenas com objetos.

// Não iterável.

// Referências fracas.

js
Copiar
Editar
const ws = new WeakSet();
const obj1 = {};

ws.add(obj1);
console.log(ws.has(obj1)); // true
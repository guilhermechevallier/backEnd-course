function main () {
    document.addEventListener('click', (e) =>{
        const el = e.target;

        const texts = document.querySelector('.main-tela');
        const texto = texts.querySelector('#texto');
        const text1 = texts.querySelector('.add1');
        const text2 = texts.querySelector('.add2');


        const Ayy = [];

        if (el.classList.contains('btn')){
            const t1 = text1.value;
            const t2 = text2.value;
            
            appendTXTArray(Ayy, t1, t2);
        }

    })

}

function appendTXT (texto1, texto2) {
    const texts = document.querySelector('.main-tela');
    const texto = texts.querySelector('#texto');

    const p = document.createElement('p');
    p.innerHTML = texto1.trim() +' '+ texto2.trim();

    return texto.appendChild(p);
}

function appendTXTArray (array, texto1, texto2) {

    const p1 = texto1.trim();
    const p2 = texto2.trim();

    array = [... p1, p2];

    console.log(array);
}

main();
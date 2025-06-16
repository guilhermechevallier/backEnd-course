
const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser'},
    {tag: 'h2', texto: 'Qualquer texto que você quiser'},
    {tag: 'section', texto: 'Qualquer texto que você quiser'},
    {tag: 'footer', texto: 'Qualquer texto que você quiser'}
]
/*
    1. selecionar o container
    2. cria uma constante div que cria uma div;
    3. estrutura de repeticao
        3.1 desestrutura o array elementos criando e atribuindo tag, texto;
        3.2 cria uma const element que cria um elemento baseado no valor da tag, da estrutura: p, div, section e footer;
        3.3 dentro de element sera colocado dentro do conteudo o valor de texto;
        3.4 a div é atribuida um elemento filho element, que no caso vai criar as tags;
    4. container é atribuida um elemento filho chamando div, que contem as tags com os textos;
*/
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    const {tag, texto} = elementos[i];
    let element = document.createElement(tag);
    //.innerText e mais seguro pois tem apenas textos;
    //element.innerText = texto;
    const newTexts = document.createTextNode(texto);
    div.appendChild(newTexts);
}

container.appendChild(div);
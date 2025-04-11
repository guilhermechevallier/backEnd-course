/*
    Escreva uma função chamada ePaisagem que 
    recebe dois argumentos. largura e altura de uma imagem (number).
    Retorne true se a imagem estiver no modo
    paisagem ou retrato;
*/
const width = 260;
const height = 400;
const ePaisagem = (width, height) =>{
    return width > height ? `Modo paisagem` : `Modo retrato`;
}

console.log(ePaisagem(width, height));


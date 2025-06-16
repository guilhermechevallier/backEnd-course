// const numero = Number(prompt("Digite um número: "));

// console.log(numero);

// const numeroTitu = document.querySelector('#texto1');
// const number2 = document.querySelector('#texto2');

// numeroTitu.innerHTML = numero;
// number2.innerHTML = `<p> seu numero: ${numero}</p>`;

const alunos = ["João", "Maria", "José", "Ana", "Pedro"];

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i] === "Pedro"){
        console.log(alunos[i], "posicao do array: " + i );
    }
}

const form = document.querySelector('#form1');
const resultado = document.querySelector('#result');
const clean = document.querySelector('#limp');

form.addEventListener('submit', function(e){
    e.preventDefault();
    weigth = Number.parseFloat(e.target.querySelector('#peso').value);
    height = Number.parseFloat(e.target.querySelector('#altura').value);

    logic (weigth, height);
})

clean.addEventListener('click', function(e){
    e.preventDefault();
    peso.value = '';
    altura.value = '';

    resultado.textContent = "..."
})
const data = [
    {
        result: "Abaixo do peso."
    },
    {
        result: "Peso normal."
    },
    {
        result: "Sobrepeso."
    },
    {
        result: "Obesidade grau 1."
    }
    ,
    {
        result: "Obesidade grau 2."
    }
    ,
    {
        result: "Obesidade grau 3."
    },
    {
        result: "informe seu dados corretamente!!!"
    }
]


const logic = (x, y) => {
    imc = x / (y * y);

    if (imc < 18.5) return resultado.textContent = `Seu IMC: ${imc.toFixed(2)}, ${data[0].result}`;
    if (imc >= 18.5) return resultado.textContent = `Seu IMC: ${imc.toFixed(2)}, ${data[1].result}`;
    if (imc >= 25) return resultado.textContent = `Seu IMC: ${imc.toFixed(2)}, ${data[2].result}`;
    if (imc >= 30) return resultado.textContent = `Seu IMC: ${imc.toFixed(2)}, ${data[3].result}`;
    if (imc >= 35) return resultado.textContent = `Seu IMC: ${imc.toFixed(2)}, ${data[4].result}`;
    if (imc >= 40) return resultado.textContent = `Seu IMC: ${imc.toFixed(2)}, ${data[5].result}`;
}


//para dar console em uma funcao que tem um retorno de um array com obj dentro  


let nome = document.querySelector('#name');
let sobrenome = document.querySelector('#sobrenome');
let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');
let btn = document.querySelector('#enviar');

btn.addEventListener('click', function(){
    let firstName = nome.value;
    let lastName = sobrenome.value;
    let weight = parseFloat(peso.value);
    let hight = parseFloat(altura.value);
    
    const dbPessoas = [];
    dbPessoas.push({firstName, lastName, weight, hight})
    console.log(dbPessoas);
})
const cadPessoa = (firstName, lastName, weight, hight) =>{
    dbPessoas.push({
        firstName,
        lastName,
        weight,
        hight
    });
    
    console.log(dbPessoas);   
}

//selecting the div paragrafos
const paragraph = document.querySelector('.paragrafos');
//selecting all the p inside of paragrafos;
const pText = paragraph.querySelectorAll('p');
//taking styles of browser;
const styleBody = getComputedStyle(document.body);
//taking the bg-color of browser
const backgroudColorBody = styleBody.backgroundColor;
console.log(backgroudColorBody);

for (let i of pText){
    i.style.backgroundColor = backgroudColorBody;
    i.style.color = 'rgba(255, 255, 255)';
};
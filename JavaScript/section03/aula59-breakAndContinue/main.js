const num = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i of num){

    if (i === 2 || i === 5){
        continue;
    }
    console.log(i);
}

for (let j of num){
    if (j === 7){
        console.log(j);
        break;
    }
}
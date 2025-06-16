const timer = () =>{
    const data = new Date();
    const hour = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    return {
        hour: hour,
        min: min,
        seg: seg
    }
}


setInterval(function(){
    const {hour, min, seg} = timer();

    const verify = (x) => x < 10 ? `0${x}` : x;

    console.log(`${verify(hour)}:${verify(min)}:0${verify(seg)}`);
},1000);
const secondHand=document.querySelector(".second-hand");
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    const now = new Date();
    const seconds=now.getSeconds();
    console.log(typeof(seconds));
    var secondsDegree;
    if(seconds===0 | seconds===360){
        secondHand.style.transition='none';
        secondsDegree='90';
    }else{
        secondsDegree=((seconds/60)*360)+90;
        
    }
    secondHand.style.transform =`rotate(${secondsDegree}deg)`;
    console.log(seconds);
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    const hour= now.getHours();
    const hourDegrees=((mins/12)*360)+90;
    hourHand.style.transform=`rotate(${hourDegrees})`;
    

}
setInterval(setDate,1000);

setDate()
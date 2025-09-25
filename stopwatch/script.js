let hrs=0;
let mins=0;
let secs=0;
let timer;
let run=false;

const stopWatch=document.getElementById("clock");
const start=document.getElementById("start");
const pause=document.getElementById("pause");
const reset=document.getElementById("reset");

start.addEventListener("click",()=>{
    if(!run){
        run=true;
        timer=setInterval(updateWatch,1000);
    }
});
pause.addEventListener("click",()=>{
    run=false;
    clearInterval(timer);
});
reset.addEventListener("click",()=>{
    run=false;
    clearInterval(timer);
    hrs=0;
    mins=0;
    secs=0;
    updateDisplay();
});

function updateDisplay(){
    let hr=hrs<10?"0"+hrs:hrs;
     let mn=mins<10?"0"+mins:mins;
      let sc=secs<10?"0"+secs:secs;

    stopWatch.innerText=`${hr}:${mn}:${sc}`;
}
function updateWatch(){
    secs++;
    if(secs===60){
        secs=0;
        mins++;
    }
    if(mins===60){
        mins=0;
        hrs++;
    }
    updateDisplay();
};
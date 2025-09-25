function updateClock(){
    let now=new Date();
    let hours=now.getHours();
    let mins=now.getMinutes();
    let secs=now.getSeconds();

    hours=String(hours).padStart(2,"0");
    mins=String(mins).padStart(2,"0");
    secs=String(secs).padStart(2,"0");

    const timeStr=`${hours}:${mins}:${secs}`;
    document.getElementById("clock").textContent=timeStr;
    setTimeout(()=>{
        updateClock(),1000
    });
}
updateClock();

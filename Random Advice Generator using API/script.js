let advice=document.getElementById("advice");
let btn=document.getElementById("btn");
btn.addEventListener("click",getAdvice);

function getAdvice(){
    fetch("https://api.adviceslip.com/advice?"+ new Date().getTime())
    .then(response=>response.json())
    .then(data =>{
        advice.innerText=`"${data.slip.advice}"`;
    }).catch(error =>{
        advice.innerText="Oops!could not fetch the data";
        console.error(error);
    });
}
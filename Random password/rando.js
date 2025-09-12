const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numberCase="1234567890";
const symbols="~!@#$567890-=+";

const upperIp=document.getElementById("upper-case");
const lowerIp=document.getElementById("lower-case");
const numberIp=document.getElementById("numbers");
const symbolsIp=document.getElementById("symbols");
const total_char=document.getElementById("total-char");
const display=document.getElementById("pass-box");

const getRandomSet=(dataset) =>{
    return dataset[Math.floor(Math.random()*dataset.length)];
}

const generatePs=(password="")=>{
    if(upperIp.checked) password+=getRandomSet(upperCase);
    if(lowerIp.checked) password+=getRandomSet(lowerCase);
    if(numberIp.checked) password+=getRandomSet(numberCase);
    if(symbolsIp.checked) password+=getRandomSet(symbols);
    if(password.length<total_char.value){
        return generatePs(password);
    }
    display.innerText=truncateStr(password,total_char.value);
}
generatePs();

function truncateStr(str,total_len){
    if(str.length>total_len){
        let substr=str.substring(0,total_len);
        return str;
    }
    else{
        return str;
    }
}
document.getElementById("btn").addEventListener("click", function(){
    generatePs();
} );
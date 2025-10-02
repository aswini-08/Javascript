function calculateBMI(height,weight){
    return weight/(height*height);
}
function getBMI(bmi){
    if(bmi<18.5) return "Under Weight";
    else if(bmi<25) return "Normal Weight";
    else if(bmi<30) return "Over Weight";
    else return "Obese";

}

function displayBMI(bmi,category){
    let res=document.getElementById("res");
    res.innerHTML=`Your BMI IS ${bmi.toFixed(2)} and you are <strong>${category}</strong>`;
}
function calculateBtn(){
    const height=parseFloat(document.getElementById("height").value)/100;
    const weight=parseFloat(document.getElementById("weight").value);

    if(!height||!weight){
        alert("Enter height and weight");
        return;
    }

    let bmi=calculateBMI(height,weight);
    let category=getBMI(bmi);
    let display=displayBMI(bmi,category);
}

function reset(){
    document.getElementById("weight").value="";
    document.getElementById("height").value="";
    document.getElementById("res").innerHTML="";
}

document.getElementById("cal").addEventListener("click",calculateBtn);
document.getElementById("clear").addEventListener("click",reset);
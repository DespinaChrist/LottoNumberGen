const number1 = document.getElementById("n1");
const number2 = document.getElementById("n2");
const number3 = document.getElementById("n3");
const number4 = document.getElementById("n4");
const number5 = document.getElementById("n5");
const number6 = document.getElementById("n6");
const bonusNumber = document.getElementById("bn");
const btn = document.getElementById("genButton");

function RandomNumberGen(number){
    let getRandom = Math.floor( (Math.random() * (49 - 1) ) + 1 );
    retunr = getRandom;
}

function handler(){
    number1.textContent = RandomNumberGen(number1);
    number2.textContent = RandomNumberGen(number2);
    number3.textContent = RandomNumberGen(number3);
    number4.textContent = RandomNumberGen(number4);
    number5.textContent = RandomNumberGen(number5);
    number6.textContent = RandomNumberGen(number6);
    bonusNumber.textContent = RandomNumberGen(bonusNumber);
}

btn.addEventListener("click", handler);

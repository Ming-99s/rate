const displayblock=document.getElementById("ratebox");
const btnsub=document.getElementById("submitbtn");
const ratenum1=document.getElementById("num1");
const ratenum2=document.getElementById("num2");
const ratenum3=document.getElementById("num3");
const ratenum4=document.getElementById("num4");
const ratenum5=document.getElementById("num5");
const textchange=document.getElementById("p1");
const displayopen=document.getElementById("afterbtn");

ratenum1.onclick=function(){
    textchange.textContent=("You selected 1 out of 5");
}
ratenum2.onclick=function(){
    textchange.textContent=("You selected 2 out of 5");
}
ratenum3.onclick=function(){
    textchange.textContent=("You selected 3 out of 5");
}
ratenum4.onclick=function(){
    textchange.textContent=("You selected 4 out of 5");
}
ratenum5.onclick=function(){
    textchange.textContent=("You selected 5 out of 5");
}
btnsub.onclick=function(){
    displayblock.style.display="none";
    displayopen.style.display="flex";
}
var sayac=33;
setInterval("say()",2000);
function say(){
document.getElementById("kutu").innerHTML=sayac
sayac--
}
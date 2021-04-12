function kontrol(){
var sifreal=document.getElementById("sifre").value;
if(sifreal=="12345"){
document.getElementById("sifre").style.backgroundColor="#0f0";
document.getElementById("uyari").innerHTML="";
}
else{
document.getElementById("uyari").innerHTML="yanlış şifre girdiniz!!!!!";
document.getElementById("uyari").style.color="#F00";
document.getElementById("sifre").style.backgroundColor="#F00";
document.getElementById("sifre").style.color="#fFF";
document.getElementById("sifre").style.border="1px solid #a00";
}

}
day = new Date();
miVisit = day.getTime();
function clock() {
dayTwo = new Date();
hrNow = dayTwo.getHours();
mnNow = dayTwo.getMinutes(); 
scNow = dayTwo.getSeconds();
miNow = dayTwo.getTime();
if (hrNow == 0) {
hour = 12;
ap = " AM";
} else if(hrNow <= 11) {
ap = " ";
hour = hrNow;
} else if(hrNow == 12) {
ap = " ";
hour = 12;
} else if (hrNow >= 13) {
hour = (hrNow);
ap = " ";
}
if (hrNow >= 13) {
hour = hrNow;
}
if (mnNow <= 9) {
min = "0" + mnNow;
}
else (min = mnNow)
if (scNow <= 9) {
secs = "0" + scNow;
} else {
secs = scNow;
}

time = hour + ":" + min + ":" + secs + ap;
document.form.button.value = time;

document.querySelector(".saat").textContent=time;
self.status = time;
setTimeout('clock()', 1000);
}

document.write("<form name=\"form\">"
+ "<input type=button"
+ " name=button class=\"saat btn btn-primary d-flex justify-content-center\" ></form>");
onError = null;
clock();


let sayi1=document.querySelector(".sayi1");
let sayi2=document.querySelector(".sayi2");
let topla=document.querySelector(".topla");
let cikar=document.querySelector(".cikar");
let carp=document.querySelector(".carp");
let bol=document.querySelector(".bol");
let hesapla=document.querySelector(".hesapla");
let sonuc=document.querySelector(".sonuc");

document.querySelector(".hesapla").onclick=function(){
    let cevap,s1,s2;
   
s1=Number(sayi1.value);
s2=Number(sayi2.value);

if(document.querySelector(".topla").checked){
    cevap=s1+s2;
    sonuc.textContent=cevap;
}else if(cikar.checked) {
   cevap=s1-s2;
    sonuc.textContent=cevap;
}else if(carp.checked){
   cevap=s1*s2;
    sonuc.textContent=cevap;
}else if(bol.checked){
   cevap=s1/s2;
    sonuc.textContent=cevap;
}

}


;

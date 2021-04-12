function divolustur(){
document.getElementById("kutu").style.width=document.getElementById("genislik").value+"px";
document.getElementById("kutu").style.height=document.getElementById("yukseklik").value+"px";
document.getElementById("kutu").style.borderWidth=document.getElementById("kenkal").value;
document.getElementById("kutu").style.borderStyle=document.getElementById("kentip").value;
document.getElementById("kutu").style.borderColor=document.getElementById("kenrenk").value;
document.getElementById("kutu").style.backgroundColor=document.getElementById("arkaplan").value;
document.getElementById("kutu").style.borderRadius=document.getElementById("ovallik").value;
}
function sil(){
document.getElementById("genislik").value="";
document.getElementById("yukseklik").value="";
document.getElementById("kenkal").value="hidden";
document.getElementById("kentip").value="hidden";
document.getElementById("kenrenk").value="hidden";
document.getElementById("arkaplan").value="hidden";
document.getElementById("ovallik").value="hidden";
}
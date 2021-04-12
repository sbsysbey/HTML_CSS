function koduret(){
  var kodlar="";
  for(var i=1;i<=6;i++){
    if((Math.round(Math.random()))==1){
  kodlar=kodlar+String.fromCharCode(65+25*Math.random());

  }else{
  
 kodlar=kodlar+String.fromCharCode(48+9*Math.random());
}  }
  document.getElementById("kod").innerHTML=kodlar;
}
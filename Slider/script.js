var zaman;
var resimler=new  Array("","url(images/1.jpg","url(images/2.jpg","url(images/3.jpg)","url(images/4.jpg)","url(images/5.jpg)","url(images/6.jpg)","url(images/7.jpg)","url(images/8.jpg)","url(images/9.jpg)","url(images/10.jpg)");

var linkler=new  Array("","https://www.youtube.com/watch?v=3ecV0uI6bOU","url(images/2.jpg","url(images/3.jpg)","url(images/4.jpg)","url(images/5.jpg)","url(images/6.jpg)","url(images/7.jpg)","url(images/8.jpg)","url(images/9.jpg)","url(images/10.jpg)");



function degis(x){
  window.clearInterval(zaman);
  for(var i=1;i<=10;i++){
if(x==i){
  document.getElementById("sayi"+i).style.background="red";
document.getElementById("siliderust").style.background=resimler[x];

document.getElementById("siliderust"). setAttribute("onclick","window.location.href='https://www.youtube.com/watch?v=3ecV0uI6bOU'");

}else{ document.getElementById("sayi"+i).style.background="black";

}
}

}
function basla(z){
  if(z==1){
 document.getElementById("siliderust").style.background=resimler[0];
  document.getElementById("sayi1").style.background="red";
  }
zaman=window.setInterval(function(){
  document.getElementById("siliderust").style.background=resimler[z];
for(var i=1;i<=10;i++){
if(z==i){
  document.getElementById("sayi"+i).style.background="red";
}else{ document.getElementById("sayi"+i).style.background="black";
}
}

  z++;
  if(z==11){ z=1  }
}
      ,2000)
}





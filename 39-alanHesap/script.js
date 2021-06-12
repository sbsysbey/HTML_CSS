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
        ap = "";
    } else if (hrNow <= 11) {
        ap = " ";
        hour = hrNow;
    } else if (hrNow == 12) {
        ap = " ";
        hour = 12;
    } else if (hrNow >= 13) {
        hour = (hrNow);
        ap = " ";
    }
    // if (hrNow >= 13) {
    // hour = hrNow;
    // }
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

    document.querySelector(".saat").textContent = time;
    self.status = time;
    setTimeout('clock()', 1000);
}

document.write("<form name=\"form\">"
    + "<input type=button"
    + " name=button class=\"saat btn btn-primary d-flex justify-content-center\" ></form>");
onError = null;
clock();



let sayi1 = document.querySelector(".sayi1");
let sayi2 = document.querySelector(".sayi2");
let sayi3 = document.querySelector(".sayi3");
let dortgen = document.querySelector(".dortgen");
let ucgen = document.querySelector(".ucgen");
let daire = document.querySelector(".daire");
let kare = document.querySelector(".kare");
let hesapla = document.querySelector(".hesapla");
let sonuc = document.querySelector(".sonuc");
let deger1 = document.querySelector(".deger1");
let deger2 = document.querySelector(".deger2");
let deger3 = document.querySelector(".deger3");
let alan = document.querySelector(".alan");
let hacim = document.querySelector(".hacim");



 document.querySelector(".alan").onclick=function() {
        deger1.textContent = "ilk kenarı giriniz";
        deger2.textContent = "ikinci kenarı giriniz : ";
        deger3.textContent = "";
        sayi3.value = "";
        sayi2.value = "";


   

    document.querySelector(".ucgen").onclick = function () {
       
        deger2.textContent = "Taban Yükseklik giriniz: ";
         
    }

    document.querySelector(".daire").onclick = function () {
        deger1.textContent = "Yarıçapı giriniz : ";
        deger2.textContent = "Pi Sayısı : ";
        sayi2.value = 3.14;
        
    }

    document.querySelector(".kare").onclick = function () {
        deger1.textContent = "Kenar uzunluğu giriniz: ";
        deger2.textContent = "";
        deger3.textContent = "";
        sayi2.value = "";
      
   
        // sayi2.value = sayi1.value;
    }

}

 document.querySelector(".hacim").onclick=function() {

     deger1.textContent = "ilk kenarı giriniz";
        deger2.textContent = "ikinci kenarı giriniz : ";
        deger3.textContent = "Yükseklik giriniz";
        sayi3.value = "";
        sayi2.value = "";
    

    document.querySelector(".ucgen").onclick = function () {
       
        deger2.textContent = "Taban yükseklik giriniz: ";
        deger3.textContent = "Yükseklik giriniz";
        sayi3.value = "";
        sayi2.value = "";
    }

    document.querySelector(".daire").onclick = function () {
        deger1.textContent = "Yarıçapı giriniz : ";
        deger2.textContent = "Pi Sayısı : ";
        deger3.textContent = "Yükseklik giriniz ";
        sayi3.value = "";
        sayi2.value = 3.14;
        
    }

    document.querySelector(".kare").onclick = function () {
        deger1.textContent = "Kenar uzunluğu giriniz: ";
        deger2.textContent = "İkinci kenar";
        deger3.textContent = "Yükseklik";
        sayi2.value = "";
      
        sayi3.value = "";
        // sayi2.value = sayi1.value;
    }

}



document.querySelector(".hesapla").onclick = function () {
    let cevap, s1, s2, s3;

    s1 = Number(sayi1.value);
    s2 = Number(sayi2.value);
    s3 = Number(sayi3.value);


    if (alan.checked) {
        if (dortgen.checked) {
            cevap = s1 * s2;

        } else if (ucgen.checked) {
            cevap = (s1 * s2 )/2;

        } else if (daire.checked) {
            cevap = s1 * Math.PI * s1;

        } else if (kare.checked) {
            cevap = s1 * s1;

        }
}
        if (hacim.checked) {
            if (dortgen.checked) {
                cevap = s1 * s2*s3;

            } else if (ucgen.checked) {
                cevap = ((s1 * s2)/2) * s3;

            } else if (daire.checked) {
                cevap = s1*s1 * Math.PI * s3;

            } else if (kare.checked) {
                cevap = s1 * s1 * s1;

            }

        }
        function yuvarla(sayi,basamak)
    {
        basamak=Math.pow(10,basamak);
        return Math.round(sayi*basamak)/basamak;  
    }
                        
    var sayi=10/3;
    console.log(sayi); 
 
    cevap=yuvarla(cevap,2);
// cevap=cevap.toFixed(2);
        sonuc.textContent = cevap;
    }

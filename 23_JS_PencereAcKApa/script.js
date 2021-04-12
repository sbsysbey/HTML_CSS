
var pencere;
function pencereac(){
pencere=window.open("","pencere","width=400,height=300,top=200,left=200,scrollbars=yes");
pencere.document.write("<html><head><title>Yeni Pencere</title></head><body bgColor='ffffc1' text='#ce4300'>");
pencere.document.write("<center><h3>Merhaba</h3></center></body></html>")


}
function pencerekapat(){

  pencere.close();
}
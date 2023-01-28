var list=document.getElementById('list')
var AE=document.getElementById('AñadirElemento');

function añadir(){
    list.innerHTML=list.innerHTML+'<li>'+AE.value+'</li>';
    AE.value="";
}
function borrarP(){
    var item = list.querySelectorAll( "li" )[0] ;
    list.removeChild(item);
}
function borrarU(){
    var item = list.querySelectorAll( "li" )[list.querySelectorAll("li").length-1];
    list.removeChild(item);
}
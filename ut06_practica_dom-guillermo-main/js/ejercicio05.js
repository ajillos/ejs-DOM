var infoGM=document.getElementById('infoGM')
var infoGS=document.getElementById('infoGS')
var infoGMT=document.getElementById('infoGMT')
var infoGST=document.getElementById('infoGST')

function mostrarGM(){
    displays(infoGM)
}
function mostrarGS(){
    displays(infoGS)
}
function mostrarGMT(){
    displays(infoGMT)
}
function mostrarGST(){
    displays(infoGST)
}


function displays(info){
    if(info.style.display=="block"){
        info.style.display="none";
    }else{
        info.style.display="block";
    }
}
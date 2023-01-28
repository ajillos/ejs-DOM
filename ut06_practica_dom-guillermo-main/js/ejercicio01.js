var texto=document.getElementById('texto');
var col=document.getElementById('col');
var tag = col.tagName;
function cambCol(){
    texto.style.color=col.value;
    console.log(tag);
}
var p1=document.getElementById('p1');
var p2=document.getElementById('p2');
var p3=document.getElementById('p3');
var p4=document.getElementById('p4');
var but=document.getElementById('but');
var cja=document.getElementById('cja');

function inverso(){
    if(cja.style.background=='black'){
        cja.style.background='white';
        p1.style.color='black';
        p2.style.color='black';
        p3.style.color='black';
        p4.style.color='black';
    }else{
        cja.style.background='black';
        p1.style.color='white';
        p2.style.color='white';
        p3.style.color='white';
        p4.style.color='white';
    }
}
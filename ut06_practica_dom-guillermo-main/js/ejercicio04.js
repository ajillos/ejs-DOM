const ul = document.getElementsByTagName('ul');
const botonAñadir = document.querySelector('.BotonAñadir');
const borrarPrimero = document.querySelector('.borrarPrimero');
const borrarUltimo = document.querySelector('.borrarUltimo');

botonAñadir.addEventListener('click',()=>{
	let li = document.createElement('li');
	let elementoNuevo = document.querySelector('.AñadirElemento');
	li.innerText = `${elementoNuevo.value}`;

	ul[0].appendChild(li);
});

borrarPrimero.addEventListener('click',()=>{
	console.log(ul[0].firstElementChild);
	ul[0].removeChild(ul[0].firstElementChild);
});

borrarUltimo.addEventListener('click',()=>{
	console.log(ul[0].lastElementChild);
	ul[0].removeChild(ul[0].lastElementChild);
});

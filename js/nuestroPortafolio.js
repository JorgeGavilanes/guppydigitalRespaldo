const btn = document.querySelectorAll(".categoriasNP button");
const product = document.querySelectorAll(".itemBox");

btn.forEach(item => {
	item.addEventListener("click", function(){
		for (let i = 0; i < btn.length; i++){
			btn[i].classList.remove("active");
		}
		item.classList.add("active");


		//show products
		product.forEach(show => {
			show.style.display = "none";
			let products = item.textContent.toLowerCase();
			if(show.getAttribute("data-categoria") === products || products === "todos"){
				show.style.display = "block";
			}
		})
	})
})

// Agregamos listener para las imagenes
const overlay = document.getElementById('overlay');
document.querySelectorAll('.gridNP .itemBox img').forEach((elemento) => {
	elemento.addEventListener('click', () => {
		const ruta = elemento.getAttribute('src');
		const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

		overlay.classList.add('activoNP');
		document.querySelector('#overlay img').src = ruta;
		document.querySelector('#overlay .descripcion').innerHTML = descripcion;
	});
});

// Eventlistener del boton de cerrar
document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
	overlay.classList.remove('activoNP');
});

// Eventlistener del overlay
overlay.addEventListener('click', (evento) => {
	evento.target.id === 'overlay' ? overlay.classList.remove('activoNP') : '';
});


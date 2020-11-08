const gridNP = new Muuri('.gridNP', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	gridNP.refreshItems().layout();
	document.getElementById('gridNP').classList.add('imagenes-cargadas');

	// Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categoriasNP a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activoNP'));
			evento.target.classList.add('activoNP');

			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'todos' ? gridNP.filter('[data-categoria]') : gridNP.filter(`[data-categoria="${categoria}"]`);
		});
	});


	// Agregamos listener para las imagenes
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.gridNP .item img').forEach((elemento) => {
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
});
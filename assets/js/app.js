$(document).ready(function() {
	$('.collage-container').hide();
	$('#log-in').click(function() {
	  var mail = $('#mail').val();
	  var pass = $('#pass').val();
	  if (mail.length !== 0 && pass.length >= 6 && pass !== '123456') {
	    $('.sign').fadeOut();
	    $('.collage-container').fadeIn();
	  } else {
	    alert('Ingresa un nombre de usuario o una contraseña con más de 6 dígitos.');
	  }
	});
	function drag(ev) {
		console.log(ev.target.src);
		ev.dataTransfer.setData('text', ev.target.id);
	}

	/**
	 * permitiendo drag
	 */
	function permitirDrop(ev){
		ev.preventDefault();
	}

	/**
	 * qué pasa al soltar el elemento
	 */
	function drop(ev) {
		ev.preventDefault();
		var id_foto = ev.dataTransfer.getData('text');
		ev.target.appendChild(document.getElementById(id_foto));
		ev.target.style.border = 'none';
	}
})



//LOCAL STORAGE
//OBJETO USUARIO
const nombreRegistro = document.getElementById("nombre2").val;
const emailRegistro = document.getElementById("email2").val;

const cliente = {
    nombreRegistro: nombreRegistro,
    emailRegistro: emailRegistro,
    servSeleccionado: []
}

$('#siguiente2').click(function() {
    validaServicios();
    cliente.nombreRegistro = nombre.toUpperCase();
    cliente.emailRegistro = email;
    cliente.servSeleccionado = carrito;
    
    localStorage.setItem('cliente', JSON.stringify(cliente));
});

//SCROLL DEL SITIO (flecha del final)
  $('#irTop').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 'slow');
});
//ANIMACION DE FRASE POST PORTADA
$("#fraseA").prepend(`<h2 id="frase1" class="col-9 py-3 text-center" style="display:none;">"El <i>verdadero viaje</i> del descubrimiento no consiste en buscar nuevos territorios sino en tener nuevos ojos".<span class="text-secondary"><br> —Marcel Proust</b></span></h2>`);
$("#frase1").toggle(3000);

$("#fraseB").prepend(`<h2 id="frase2" class="col-9 py-3 text-center" style="display:none;">"El marketing ya no es cuestión de lo que sabes producir, sino <i>de qué historias sabes contar</i>".<span class="text-secondary"><br> —Seth Godin</b></span></h2>`);
$("#frase2").toggle(3000);

//ANIMACION TITULO PRINCIPAL
$(window).scroll(function(){
    if(($(this).scrollTop() > 30) && ($(this).scrollTop() < 40)){
        $("#reemplazar").fadeOut(3000, function(){
            let palabra = document.getElementById("reemplazar")
            //palabra.style.setProperty("display", "")
            palabra.innerHTML = "<i>sueño</i>"
            $("#reemplazar").toggle("slow")
        })
    }
})


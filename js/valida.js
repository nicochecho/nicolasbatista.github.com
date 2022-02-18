let nombre = ""
let email = ""

//VALIDAR PRIMER FORM
const validar = document.getElementById("siguiente");
validar.onclick = () => {
    validarFormulario()
};

const priForm = document.getElementById("formTitulo");
const segForm = document.getElementById("contenedorCards");
const pasoFinal = document.getElementById("carrito");

function validarFormulario() {
    
    nombre = document.getElementById("nombre2").value;
    email = document.getElementById("email2").value;
    
        if (nombre == "") {
            var resultado = "<p class='text-white bg-danger p-2'>Complete correctamente el campo nombre.</p>";
            document.getElementById("resultado").innerHTML = resultado;
            return false;
        } else if (email == "") {
            var resultado = "<p class='text-white bg-danger p-2'>Complete correctamente el campo email.</p>";
            document.getElementById("resultado").innerHTML = resultado;
            return false;
        } else if (!validaEmail(email)) {
            var resultado = "<p class='text-white bg-danger p-2'>Coloque un email válido.</p>";
            document.getElementById("resultado").innerHTML = resultado;
            return false;
        }  
        else {
        //CLICK ENVIAR FORM
            Swal.fire(
                '¡Muchas gracias!',
                'Es momento de elegir qué servicios vas a contratar.',
            )
            document.getElementById("resultado").innerHTML = "";
            segForm.classList.remove("d-none");
            priForm.classList.add("d-none");
        return true
        }
} 

//VALIDACION DE INPUT EMAIL
const validaEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


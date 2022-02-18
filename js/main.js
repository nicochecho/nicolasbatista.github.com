const contenedorCards = document.getElementById("contenedorCards") // PARA IMPRIMIR CARDS EN EL DOM

//RECORRO OBJETOS Y LOS IMPRIMO EN PANTALLA.
function cards(){
const contenido = document.getElementById('contenedorCards');
    
for (let serviciosListos of servicios) {
const div = document.createElement('div');
div.className = "col-4 d-flex flex-wrap";
div.id = `${serviciosListos.id}`;
div.innerHTML = `
            <div class="cartita my-4 container-fluid p-4 text-white">
                <h3 class="card-title my-2"><i>${serviciosListos.nombre}</i></h3>
                <p class="card-text my-3">${serviciosListos.descripcion}</p>
                <p class="fw-bold">Precio: $${serviciosListos.precio}</p>
                <div class="d-flex flex-row justify-content-end">
                <button class="d-flex me-3 btn btn-light p-1" id="agregar${serviciosListos.id}">Agregar</button>
                <button class="d-flex me-3 btn btn-light p-1" id="borrar${serviciosListos.id}">Borrar</button>
                </div>
            </div>
            `
contenido.prepend(div);

//BOTONES 'AGREGAR' 'BORRAR' DE PASO 2
    const agregar = document.getElementById(`agregar${serviciosListos.id}`);
    const borrar = document.getElementById(`borrar${serviciosListos.id}`)
    agregar.addEventListener('click', () => {
        lista(serviciosListos.id)
    })
    borrar.addEventListener('click', () => {
        borrarCarrito(serviciosListos.id)
    })
}}
cards();

/*================================================================================================*/

// FORMA CON EL ARCHIVO JSON. TUVE PROBLEMAS CON EL CORS. POR ESO LO ENTREGO RECORRIENDO EL ARCHIVO objetos.js 
/* function cards(){
    $.ajax({
        method: "GET",
        url:  "js/datos.json",
        success: function(respuesta) {
            const contenido = document.getElementById('contenedorCards');
        
            for (let serviciosListos of servicios) {
            const div = document.createElement('div');
            div.className = "col-4 d-flex flex-wrap";
            div.id = `${serviciosListos.id}`;
            div.innerHTML = `
                        <div class="cartita my-4 container-fluid p-4 text-white">
                            <h3 class="card-title my-2"><i>${serviciosListos.nombre}</i></h3>
                            <p class="card-text my-3">${serviciosListos.descripcion}</p>
                            <p class="fw-bold">Precio: $${serviciosListos.precio}</p>
                            <div class="d-flex flex-row justify-content-end">
                            <button class="d-flex me-3 btn btn-light p-1" id="agregar${serviciosListos.id}">Agregar</button>
                            <button class="d-flex me-3 btn btn-light p-1" id="borrar${serviciosListos.id}">Borrar</button>
                            </div>
                        </div>
                        `
            contenido.prepend(div);
            
            //BOTONES 'AGREGAR' 'BORRAR' DE PASO 2
                const agregar = document.getElementById(`agregar${serviciosListos.id}`);
                const borrar = document.getElementById(`borrar${serviciosListos.id}`)
                agregar.addEventListener('click', () => {
                    lista(serviciosListos.id)
                })
                borrar.addEventListener('click', () => {
                    borrarCarrito(serviciosListos.id)
                })
            }
        },
        error: function(respuesta) {
            $("#contenedorCards").append(`<div>Hubo un error. No se pudieron enviar los datos!</div>`);
        }
    });
}
cards() */

/*================================================================================================*/

//BOTON 'ATRAS' (CONTRATAR SERVICIOS) (ULTIMO PASO)
const atras1 = document.getElementById("atrasPrimero");

atras1.onclick = () => {
segForm.classList.add("d-none");
priForm.classList.remove("d-none");
};

const atras2 = document.getElementById("atrasFinal");

atras2.onclick = () => {
pasoFinal.classList.add("d-none");
segForm.classList.remove("d-none");
};

//BOTON 'ULTIMO PASO' (ELEGIR SERVICIOS)
const paso1 = document.getElementById("siguiente2");

paso1.onclick = () => {
segForm.classList.add("d-none");
pasoFinal.classList.remove("d-none");
};

//BOTON CONFIRMAR CONTRATACION
const ultimoPaso = document.getElementById("contrataFinal");


ultimoPaso.onclick = () => {
    Swal.fire({
        icon: 'success',
        title: 'Gran trabajo! Pronto nos contactaremos contigo.',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }).then(function(){
        localStorage.removeItem('cliente');
        window.location = "index.html";
    })
};
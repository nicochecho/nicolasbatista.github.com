//CARRITO

const carrito = []; // Array de servicios agregados
let totalValor = 0; // Variable para almacenar valor total
const serviciosSalida = document.getElementById("servSeleccionado"); // Variable para mostrar Servicios en DOM
let lugarTotal = document.getElementById("precioTotal"); // Variale para mostrar el precio final en DOM

//VALIDACION Y ALERTS DE SERVICIOS AGREGADOS. 
const lista = (idServicio) => {
    const item = servicios.find((serv) => serv.id === idServicio);
  
    if (carrito.includes(item)) {
        Swal.fire({
            icon: 'error',
            title: 'Atención!',
            text: 'El servicio ya está agregado!',
            showConfirmButton: false,
            timer: 2000
          })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Servicio agregado exitosamente!',
            showConfirmButton: false,
            timer: 2000
        });
        carrito.push(item);
    }
  }

//VALIDACION DE SERVICIOS AGREGADOS
const validar2 = document.getElementById("siguiente2");
validar2.onclick = () => {
    validaServicios();
    cartelFinal();
};

function validaServicios() {
    if (carrito.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Esperá!',
            text: 'Tienes que seleccionar algún servicio para continuar.',
            confirmButtonText: 'OK'
          })
    } else {
        segForm.classList.add("d-none");
        pasoFinal.classList.remove("d-none");
    }
}

//BOTON 'BORRAR'
const borrarCarrito = (servId) => {
    const item = carrito.find((serv) => serv.id === servId)
    const indice = carrito.indexOf(item)
    if (carrito.includes(item)) {
        Swal.fire(
            'El servicio fue borrado',
            'Clic para continuar!',
            'success'
          )
      // Splice utiliza el indice de la constante de arriba, correspondiente al item a borrar. 
      carrito.splice(indice, 1)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Esperá!',
            text: 'El servicio que quieres borrar no fue seleccionado todavía.',
            confirmButtonText: 'OK'
          })
    }
  }

// MOSTRAR DATOS Y SERVICIOS SELECCIONADOS
// USUARIO ALMACENADO
function cartelFinal() {
serviciosSalida.innerHTML = ""

const clienteDatos = JSON.parse(localStorage.getItem('cliente'));
const carrito = clienteDatos.servSeleccionado;
// ELEMENTOS DEL DOM DONDE VAN LOS DATOS
const nombreInfo = document.getElementById('infoNombre');
const emailInfo = document.getElementById('infoEmail');

nombreInfo.innerText = clienteDatos.nombreRegistro;
emailInfo.innerText = clienteDatos.emailRegistro;

//RECORRO ARRAY DE SERVICIOS SELECCIONADOS Y LOS MUESTRO EN EL DOM 
    carrito.forEach((servicios) => {

        const servSeleccionado = document.createElement('div');
        servSeleccionado.classList.add('row', 'p-2', 'rounded', 'border', 'd-flex', 'justify-content-between')
        servSeleccionado.innerHTML = `
                                    <h4 class="col-3 my-2 fs-5">${servicios.nombre}</h4>
                                    <p class="col-3 my-auto text-end"> Precio: <span class="fw-bold"> $ ${servicios.precio} </span></p>
                                    `
    serviciosSalida.appendChild(servSeleccionado);
    })
    totalValor = Object.values(carrito).reduce((acc, {precio}) => acc + precio, 0);
    lugarTotal.innerHTML = `$ ${totalValor}`;
}

/*================================================================================================*/
//FUNCION PARA GUARDAR DATOS DE USUARIO POR SI ABANDONA CARRITO.
function vaciarLocal(){
    localStorage.clear();
}

window.onload = () => {
    const cliente = JSON.parse(localStorage.getItem('cliente'))
    
    
    if ((!cliente.nombreRegistro == "") && (!cliente.emailRegistro == "") && (!cliente.servSeleccionado == [])) {
        Swal.fire({
            title: '¡Volviste, buenísimo!',
            text: '¡Te fuiste sin confirmar la contratación! Tenemos todo listo para que puedas trabajar con nosotros. ¡Adelante!',
            icon: 'info',
            confirmButtonText: 'Genial!'
        })
    
        priForm.classList.add("d-none")
        pasoFinal.classList.remove("d-none")
        cartelFinal()
    } 
    }
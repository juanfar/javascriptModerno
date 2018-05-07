// variables

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#enviar');
const formEnviar = document.querySelector('#enviar-mail');
const resetBtn = document.querySelector('#resetBtn');

// EventListeners
eventListeners();

function eventListeners() {
    // inicio de la app y desabilitar boton
    document.addEventListener('DOMContentLoaded', inicioApp);

    // validar que los campos tenga algo escrito
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    btnEnviar.addEventListener('blur', validarCampo);

    // Submit
    formEnviar.addEventListener('submit', enviarEmail);

    // Reset formulario
    resetBtn.addEventListener('click', resetFormulario);
}

// Funciones

// Desabilitar el boton enviar
function inicioApp () {
    btnEnviar.disabled = true;
}

// validar que los campos tenga algo escrito
function validarCampo () {
    // Se valida la long del texto y que no este vacio
    validarLongitud(this);

    // Validar email
    if (this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

// Resetear formulario
function resetFormulario (e) {
    formEnviar.reset();
    e.preventDefault();
}

function validarLongitud (campo) {
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function enviarEmail (e) {
    // Desabilitar boton reset
    resetBtn.disabled = true;
    
    // Mostrar spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    // Gif que envia el email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';

    // Ocultar spinner y mostrar mail enviado
    setTimeout(() => {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        enviado.style.display = 'block';
        setTimeout(() => {
            enviado.style.display = 'none';
            formEnviar.reset();
        }, 5000)
    },3000)

    e.preventDefault();
}
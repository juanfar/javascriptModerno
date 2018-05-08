// Constructor para seguro
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

// Todo lo que se muestra
function Interfaz() {}

// Mensaje que se imprime en el HTML
Interfaz.prototype.mostrarError = (mensaje, tipo) => {
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add('mensaje', 'correcto');
    }

    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(() => {
        document.querySelector('.mensaje').remove();
    }, 4000)
}

// eventListeners
const formulario = document.querySelector('#cotizar-seguro');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Leer la marca seleccionada del select
    const marca = document.querySelector('#marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    // Leer el año seleccionado del select
    const anio = document.querySelector('#anio');
    const anioSeleccionada = anio.options[anio.selectedIndex].value;

    // Leer el valor del radioButton
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    // crear instancio de interfaz
    const interfaz = new Interfaz();

    // Revisamos que los campos no esten vacios
    if (marcaSeleccionada == '' || anioSeleccionada == '' || tipo == '') {
        // interfaz imprimiendo un error
        interfaz.mostrarError('Faltan datos, revisa el formulario y prueba de nuevo', 'error');
    } else {
        // instanciar seguro y mostrar interfaz
        console.log('Todo Correcto');
    }
})

const max = new Date().getFullYear(),
      min = max -20;

const selectAnios = document.querySelector('#anio')
for (let i = max; i >= min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}
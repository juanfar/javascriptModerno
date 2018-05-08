// Object literal

const cliente = {
    nombre: 'Juan',
    saldo: 200,
    tipoCliente: () => {
        let tipo;

        if(this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }

        return tipo;
    }
}

console.log(cliente.tipoCliente());

// Metodo Alternativo

function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente2 = () => {
        let tipo;

        if(this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }

        return tipo;
    }
}

const persona = new Cliente('Pedro', 20000);

console.log(persona);
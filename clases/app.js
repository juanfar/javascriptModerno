class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo =  saldo;
    }

    imprimirSaldo() {
        return `hola ${this.nombre}, tu saldo es ${this.saldo}`
    }

    static bienvenida() {
        return `Bienvenido al cajero para Clientes`;
    }

}

const cliente = new Cliente('Pedro', 10000);
console.log(cliente.imprimirSaldo);

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        // Va hacia constructor padre
        super(nombre, saldo);

        this.telefono = telefono;
        this.tipo = tipo; 

    }

    static bienvenida() {
        return `Bienvenido al cajero para Empresas`;
    }
}

const empresa = new Empresa('Empresa 1', 10000, 123456, 'Construccion');

console.log(empresa);

console.log(Empresa.bienvenida());
console.log(Cliente.bienvenida());
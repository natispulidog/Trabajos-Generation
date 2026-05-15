// usuario.js

class Usuario {
    constructor(nombre, email, rol = "cliente") {
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;
    }

    saludo() {
        return `Hola, soy ${this.nombre} y soy ${this.rol}.`;
    }

    desactivar() {
        this.activo = false;
        return `El usuario ${this.nombre} ha sido desactivado.`;
    }

    resumen() {
        return `Usuario: ${this.nombre} | Email: ${this.email} | Rol: ${this.rol} | Estado: ${this.activo ? "Activo" : "Inactivo"}`;
    }
}

class UsuarioVIP extends Usuario {
    constructor(nombre, email, membresia) {
        super(nombre, email, "cliente VIP");
        this.membresia = membresia;
    }

    saludo() {
        return `Hola, soy ${this.nombre}, cliente VIP con membresía ${this.membresia}.`;
    }

    beneficios() {
        return `La membresía ${this.membresia} incluye beneficios especiales y atención prioritaria.`;
    }
}

module.exports = { Usuario, UsuarioVIP };
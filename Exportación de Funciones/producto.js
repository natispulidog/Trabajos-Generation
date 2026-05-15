// producto.js

class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    calcularTotal() {
        return this.precio * 1.19; // IVA 19%
    }

    aplicarDescuento(porcentaje) {
        return this.precio * (1 - porcentaje / 100);
    }

    resumen() {
        return `Producto: ${this.nombre} | Categoría: ${this.categoria} | Precio base: $${this.precio}`;
    }

    tarjeta() {
        return `${this.nombre} | Categoría: ${this.categoria} | Precio (IVA incl.): $${this.calcularTotal()}`;
    }
}

class ProductoDigital extends Producto {
    constructor(nombre, precio, licencia) {
        super(nombre, precio, "digital");
        this.licencia = licencia;
    }

    calcularTotal() {
        return this.precio; // Sin IVA en productos digitales
    }

    tarjeta() {
        return `${this.nombre} | Licencia: ${this.licencia} | Precio final: $${this.precio}`;
    }
}

module.exports = { Producto, ProductoDigital };
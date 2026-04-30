package com.generation;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CarritoTest {

    @Test
    void carritoRecienCreadoEstaVacio() {
        Carrito carrito = new Carrito();

        assertTrue(carrito.estaVacio());
    }

    @Test
    void agregarUnProductoIncrementaCantidadAUno() {
        Carrito carrito = new Carrito();
        Producto producto = new Producto("Cuaderno", 5000, 10);

        carrito.agregar(producto);

        assertEquals(1, carrito.cantidadDeProductos());
    }

    @Test
    void totalConDosProductosEsLaSumaDeSusPrecios() {
        Carrito carrito = new Carrito();
        Producto p1 = new Producto("Libro", 100.0, 5);
        Producto p2 = new Producto("Agenda", 200.0, 3);

        carrito.agregar(p1);
        carrito.agregar(p2);

        assertEquals(300.0, carrito.calcularTotal());
    }

    @Test
    void carritoConProductosNoEstaVacio() {
        Carrito carrito = new Carrito();
        carrito.agregar(new Producto("Lapicero", 1500, 2));

        assertFalse(carrito.estaVacio());
    }

    @Test
    void totalDeCarritoVacioEsCero() {
        Carrito carrito = new Carrito();

        assertEquals(0.0, carrito.calcularTotal());
    }
}
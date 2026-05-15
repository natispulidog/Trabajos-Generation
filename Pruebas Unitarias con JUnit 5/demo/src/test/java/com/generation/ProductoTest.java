package com.generation;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class ProductoTest {

    @Test
    void elPrecioDebeSerElAsignadoEnElConstructor() {
        // Organizar
        Producto producto = new Producto("Cuaderno", 5000, 10);

        // Actuar
        double precio = producto.getPrecio();

        // Afirmar
        assertEquals(5000, precio);
    }

    @Test
    void productoConStockMayorACeroEstaDisponible() {
        Producto producto = new Producto("Lápiz", 1000, 5);

        assertTrue(producto.estaDisponible());
    }

    @Test
    void productoConStockCeroNoEstaDisponible() {
        Producto producto = new Producto("Borrador", 800, 0);

        assertFalse(producto.estaDisponible());
    }

    @Test
    void reducirStockValidoDisminuyeCorrectamente() {
        Producto producto = new Producto("Cartuchera", 12000, 10);

        producto.reducirStock(3);

        assertEquals(7, producto.getStock());
    }

    @Test
    void reducirStockMayorAlDisponibleLanzaExcepcion() {
        Producto producto = new Producto("Marcador", 2000, 2);

        assertThrows(IllegalArgumentException.class, () -> {
            producto.reducirStock(5);
        });
    }

    @Test
    void crearProductoConPrecioNegativoLanzaExcepcion() {
        assertThrows(IllegalArgumentException.class, () -> {
            new Producto("Regla", -1000, 5);
        });
    }
}

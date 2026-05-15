package com.generation;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class pruebaLibre {

    @Test
    void crearProductoConStockNegativoLanzaExcepcion() {
        // Se prueba que el constructor no permita stock negativo
        assertThrows(IllegalArgumentException.class, () -> {
            new Producto("Cuaderno", 3000, -1);
        });
    }
}
package com.generation;

import java.util.ArrayList;
import java.util.List;

public class Carrito {

    private List<Producto> productos = new ArrayList<>();

    public void agregar(Producto p) {
        productos.add(p);
    }

    public int cantidadDeProductos() {
        return productos.size();
    }

    public double calcularTotal() {
        double total = 0;
        for (Producto p : productos) {
            total += p.getPrecio();
        }
        return total;
    }

    public boolean estaVacio() {
        return productos.isEmpty();
    }
}
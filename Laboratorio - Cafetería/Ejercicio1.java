public class Ejercicio1 {
    public static void main(String[] args) {
        String nombreProducto = "Café americano";
        double precioUnitario = 3500.50;
        int cantidadInventario = 20;
        boolean disponibleHoy = true;
        char codigoProducto = 'A';

        System.out.println(String.format("Producto: %s", nombreProducto));
        System.out.println(String.format("Precio: %.2f", precioUnitario));
        System.out.println(String.format("Inventario: %d", cantidadInventario));
        System.out.println(String.format("Disponible hoy: %b", disponibleHoy));
        System.out.println(String.format("Código: %c", codigoProducto));
    }
}

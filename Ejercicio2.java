public class Ejercicio2 {
    public static void main(String[] args) {
        double subtotal = 42500;
        boolean aplicaDescuento = subtotal > 30000;
        double descuento = aplicaDescuento ? subtotal * 0.15 : 0;
        double total = subtotal - descuento;

        System.out.printf("Descuento: %.2f%n", descuento);
        System.out.printf("Total a pagar: %.2f%n", total);
        System.out.printf("¿Aplica descuento?: %b%n", aplicaDescuento);
    }
}
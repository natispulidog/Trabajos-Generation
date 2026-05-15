public class Ejercicio6 {
    public static void main(String[] args) {
        String[] productos = {
            "Café americano", "Capuchino", "Jugo de naranja", "Tostada", "Brownie"
        };
        double[] precios = {3500, 5000, 4000, 4500, 6000};
        double suma = 0;

        for (int i = 0; i < productos.length; i++) {
            System.out.println((i + 1) + ". " + productos[i] + " - $" + precios[i]);
            suma += precios[i];
        }

        System.out.println("Precio promedio: " + (suma / productos.length));
    }
}
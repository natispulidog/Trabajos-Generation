public class Ejercicio5 {
    public static void main(String[] args) {
        double montoApertura;
        int intento = 0;

        do {
            montoApertura = intento == 0 ? -5000 : 20000;
            intento++;
            System.out.println("Monto ingresado: " + montoApertura);
        } while (montoApertura <= 0);
    }
}
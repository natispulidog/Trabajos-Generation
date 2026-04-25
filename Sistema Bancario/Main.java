public class Main {
    public static void main(String[] args) {

        CuentaBancaria cuenta1 = new CuentaAhorros(
                "AH-001", "Ana", 800000, 1.2, 500000);

        CuentaBancaria cuenta2 = new CuentaCorriente(
                "CC-002", "Empresa XYZ", 200000, 15000, 500000);

        CuentaBancaria cuenta3 = new CuentaInversion(
                "INV-003", "Carlos", 1000000, 8.5, 12, 50000);

        System.out.println(cuenta1.describir());
        System.out.println(cuenta2.describir());
        System.out.println(cuenta3.describir());

        System.out.println(cuenta1.calcularComision());
        System.out.println(cuenta2.calcularComision());
        System.out.println(cuenta3.calcularComision());

        cuenta1.realizarRetiro(500000);
        cuenta2.realizarRetiro(500000);
        cuenta3.realizarRetiro(500000);

        System.out.println(cuenta1.getSaldo());
        System.out.println(cuenta2.getSaldo());
        System.out.println(cuenta3.getSaldo());

        /*
         ¿Por qué usar CuentaBancaria como tipo?
         Porque permite manejar distintos tipos de cuentas de forma uniforme.
         Gracias al polimorfismo, Java ejecuta el método correcto según
         el tipo real del objeto, sin que Main tenga que saberlo.
        */
    }
}
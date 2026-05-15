import java.util.HashMap;

public class DirectorioTrabajadores {

    static HashMap<String, Double> trabajadores = new HashMap<>();

    public static void agregarTrabajador(String nombre, double salario) {
        trabajadores.put(nombre, salario);
        System.out.println("Trabajador agregado: " + nombre);
    }

    public static void mostrarTrabajadores() {
        System.out.println("Listado de trabajadores:");
        for (String nombre : trabajadores.keySet()) {
            System.out.println(nombre + " - $" + trabajadores.get(nombre));
        }
    }

    public static void actualizarSalario(String nombre, double nuevoSalario) {
        if (trabajadores.containsKey(nombre)) {
            trabajadores.put(nombre, nuevoSalario);
            System.out.println("Salario actualizado");
        } else {
            System.out.println("Trabajador no encontrado");
        }
    }

    public static void salarioPromedio() {
        double suma = 0;
        for (double salario : trabajadores.values()) {
            suma += salario;
        }
        System.out.println("Salario promedio: $" + (suma / trabajadores.size()));
    }

    public static void main(String[] args) {
        agregarTrabajador("Ana", 2000);
        agregarTrabajador("Luis", 2500);
        mostrarTrabajadores();
        actualizarSalario("Ana", 2200);
        salarioPromedio();
    }
}
import java.util.ArrayList;

public class ListaTareas {

    static ArrayList<String> tareas = new ArrayList<>();

    public static void agregarTarea(String tarea) {
        tareas.add(tarea);
        System.out.println("Tarea agregada: " + tarea);
    }

    public static void mostrarTareas() {
        System.out.println("Listado de tareas:");
        for (int i = 0; i < tareas.size(); i++) {
            System.out.println((i + 1) + ". " + tareas.get(i));
        }
    }

    public static void completarTarea(int indice) {
        if (indice >= 0 && indice < tareas.size()) {
            System.out.println("Tarea completada: " + tareas.remove(indice));
        } else {
            System.out.println("Índice inválido");
        }
    }

    public static void totalPendientes() {
        System.out.println("Tareas pendientes: " + tareas.size());
    }

    public static void main(String[] args) {
        agregarTarea("Estudiar Java");
        agregarTarea("Hacer el taller");
        mostrarTareas();
        completarTarea(0);
        totalPendientes();
    }
}
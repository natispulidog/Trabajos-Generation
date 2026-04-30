import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;

public class MenuColecciones {

    static Scanner sc = new Scanner(System.in);

    // Colecciones
    static ArrayList<String> tareas = new ArrayList<String>();
    static HashSet<String> libros = new HashSet<String>();
    static HashMap<String, Double> trabajadores = new HashMap<String, Double>();

    public static void main(String[] args) {

        int opcion;

        do {
            System.out.println("\n===== MENU PRINCIPAL =====");
            System.out.println("1. Lista de Tareas");
            System.out.println("2. Biblioteca de Libros");
            System.out.println("3. Directorio de Trabajadores");
            System.out.println("0. Salir");
            System.out.print("Seleccione una opcion: ");

            opcion = sc.nextInt();
            sc.nextLine(); // limpiar buffer

            switch (opcion) {
                case 1:
                    menuTareas();
                    break;
                case 2:
                    menuLibros();
                    break;
                case 3:
                    menuTrabajadores();
                    break;
                case 0:
                    System.out.println("Saliendo del programa...");
                    break;
                default:
                    System.out.println("Opcion invalida");
            }

        } while (opcion != 0);

        sc.close();
    }

    // ===== MENU TAREAS =====
    static void menuTareas() {
        int op;

        do {
            System.out.println("\n--- Lista de Tareas ---");
            System.out.println("1. Agregar tarea");
            System.out.println("2. Mostrar tareas");
            System.out.println("3. Completar tarea");
            System.out.println("0. Volver");
            System.out.print("Opcion: ");

            op = sc.nextInt();
            sc.nextLine();

            switch (op) {
                case 1:
                    System.out.print("Ingrese la tarea: ");
                    tareas.add(sc.nextLine());
                    System.out.println("Tarea agregada");
                    break;
                case 2:
                    if (tareas.isEmpty()) {
                        System.out.println("No hay tareas pendientes");
                    } else {
                        for (int i = 0; i < tareas.size(); i++) {
                            System.out.println((i + 1) + ". " + tareas.get(i));
                        }
                    }
                    break;
                case 3:
                    System.out.print("Numero de tarea a completar: ");
                    int idx = sc.nextInt() - 1;
                    if (idx >= 0 && idx < tareas.size()) {
                        System.out.println("Tarea completada: " + tareas.remove(idx));
                    } else {
                        System.out.println("Indice invalido");
                    }
                    break;
                case 0:
                    break;
                default:
                    System.out.println("Opcion invalida");
            }
        } while (op != 0);
    }

    // ===== MENU LIBROS =====
    static void menuLibros() {
        int op;

        do {
            System.out.println("\n--- Biblioteca ---");
            System.out.println("1. Agregar libro");
            System.out.println("2. Mostrar libros");
            System.out.println("3. Buscar libro");
            System.out.println("0. Volver");
            System.out.print("Opcion: ");

            op = sc.nextInt();
            sc.nextLine();

            switch (op) {
                case 1:
                    System.out.print("Ingrese el titulo del libro: ");
                    String libro = sc.nextLine();
                    if (libros.add(libro)) {
                        System.out.println("Libro agregado");
                    } else {
                        System.out.println("El libro ya existe");
                    }
                    break;
                case 2:
                    if (libros.isEmpty()) {
                        System.out.println("No hay libros en la biblioteca");
                    } else {
                        for (String l : libros) {
                            System.out.println("- " + l);
                        }
                    }
                    break;
                case 3:
                    System.out.print("Ingrese el libro a buscar: ");
                    String buscar = sc.nextLine();
                    if (libros.contains(buscar)) {
                        System.out.println("Libro disponible");
                    } else {
                        System.out.println("Libro no encontrado");
                    }
                    break;
                case 0:
                    break;
                default:
                    System.out.println("Opcion invalida");
            }
        } while (op != 0);
    }

    // ===== MENU TRABAJADORES =====
    static void menuTrabajadores() {
        int op;

        do {
            System.out.println("\n--- Directorio de Trabajadores ---");
            System.out.println("1. Agregar trabajador");
            System.out.println("2. Mostrar trabajadores");
            System.out.println("3. Actualizar salario");
            System.out.println("4. Salario promedio");
            System.out.println("0. Volver");
            System.out.print("Opcion: ");

            op = sc.nextInt();
            sc.nextLine();

            switch (op) {
                case 1:
                    System.out.print("Nombre: ");
                    String nombre = sc.nextLine();
                    System.out.print("Salario: ");
                    double salario = sc.nextDouble();
                    trabajadores.put(nombre, salario);
                    System.out.println("Trabajador agregado");
                    break;
                case 2:
                    if (trabajadores.isEmpty()) {
                        System.out.println("No hay trabajadores");
                    } else {
                        for (String t : trabajadores.keySet()) {
                            System.out.println(t + " - $" + trabajadores.get(t));
                        }
                    }
                    break;
                case 3:
                    System.out.print("Nombre del trabajador: ");
                    String nom = sc.nextLine();
                    if (trabajadores.containsKey(nom)) {
                        System.out.print("Nuevo salario: ");
                        double nuevoSalario = sc.nextDouble();
                        trabajadores.put(nom, nuevoSalario);
                        System.out.println("Salario actualizado");
                    } else {
                        System.out.println("Trabajador no encontrado");
                    }
                    break;
                case 4:
                    if (trabajadores.isEmpty()) {
                        System.out.println("No hay trabajadores");
                    } else {
                        double suma = 0;
                        for (double s : trabajadores.values()) {
                            suma += s;
                        }
                        System.out.println("Salario promedio: $" + (suma / trabajadores.size()));
                    }
                    break;
                case 0:
                    break;
                default:
                    System.out.println("Opcion invalida");
            }
        } while (op != 0);
    }
}
import java.util.HashSet;

public class BibliotecaLibros {

    static HashSet<String> libros = new HashSet<>();

    public static void agregarLibro(String libro) {
        if (libros.add(libro)) {
            System.out.println("Libro agregado: " + libro);
        } else {
            System.out.println("El libro ya existe");
        }
    }

    public static void mostrarLibros() {
        System.out.println("Libros disponibles:");
        for (String libro : libros) {
            System.out.println("- " + libro);
        }
    }

    public static void buscarLibro(String libro) {
        if (libros.contains(libro)) {
            System.out.println("El libro está disponible");
        } else {
            System.out.println("Libro no encontrado");
        }
    }

    public static void totalLibros() {
        System.out.println("Total de libros únicos: " + libros.size());
    }

    public static void main(String[] args) {
        agregarLibro("Java Básico");
        agregarLibro("POO en Java");
        agregarLibro("Java Básico");
        mostrarLibros();
        buscarLibro("POO en Java");
        totalLibros();
    }
}
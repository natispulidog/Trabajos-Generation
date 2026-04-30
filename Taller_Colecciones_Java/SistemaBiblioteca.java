package Taller_Colecciones_Java;

import java.util.*;

public class SistemaBiblioteca {

    // Colecciones del sistema
    private Map<String, Material> catalogo = new HashMap<>();
    private Map<String, List<String>> listaEspera = new HashMap<>();
    private Set<String> miembros = new HashSet<>();

    // ===== CATALOGO =====
    public void registrarMaterial(Material m) {
        catalogo.put(m.getCodigo(), m);
    }

    public Material buscarMaterial(String codigo) {
        return catalogo.get(codigo);
    }

    public void mostrarCatalogo() {
        for (Material m : catalogo.values()) {
            m.mostrarInfo();
        }
    }

    // ===== LISTA DE ESPERA =====
    public void agregarEspera(String codigoMaterial, String usuario) {
        if (!listaEspera.containsKey(codigoMaterial)) {
            listaEspera.put(codigoMaterial, new ArrayList<String>());
        }
        listaEspera.get(codigoMaterial).add(usuario);
    }

    public String siguienteEnEspera(String codigoMaterial) {
        List<String> lista = listaEspera.get(codigoMaterial);
        if (lista == null || lista.isEmpty()) {
            return null;
        }
        return lista.remove(0);
    }

    // ===== MEMBRESIAS =====
    public boolean registrarMiembro(String usuario) {
        return miembros.add(usuario);
    }

    public boolean tieneMembresia(String usuario) {
        return miembros.contains(usuario);
    }

    // ===== MAIN =====
    public static void main(String[] args) {

        SistemaBiblioteca sistema = new SistemaBiblioteca();

        Libro l1 = new Libro("BK-001", "Java Basico", 2022, true, "Ana Perez", "ISBN001");
        Libro l2 = new Libro("BK-002", "POO Avanzado", 2023, false, "Luis Gomez", "ISBN002");

        Revista r1 = new Revista("RV-001", "Tech Hoy", 2024, true, 15, "Tecnologia");
        Revista r2 = new Revista("RV-002", "Ciencia Viva", 2023, true, 8, "Ciencia");

        sistema.registrarMaterial(l1);
        sistema.registrarMaterial(l2);
        sistema.registrarMaterial(r1);
        sistema.registrarMaterial(r2);

        System.out.println("\nCATALOGO:");
        sistema.mostrarCatalogo();

        sistema.agregarEspera("BK-002", "Juan");
        sistema.agregarEspera("BK-002", "Maria");
        sistema.agregarEspera("BK-002", "Carlos");

        System.out.println("\nSiguiente en espera BK-002: " +
                sistema.siguienteEnEspera("BK-002"));
        System.out.println("Siguiente en espera BK-002: " +
                sistema.siguienteEnEspera("BK-002"));

        sistema.registrarMiembro("Juan");
        sistema.registrarMiembro("Maria");

        System.out.println("\nJuan es miembro? " +
                sistema.tieneMembresia("Juan"));
        System.out.println("Carlos es miembro? " +
                sistema.tieneMembresia("Carlos"));
    }
}

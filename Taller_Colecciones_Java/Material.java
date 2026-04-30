package Taller_Colecciones_Java;

public abstract class Material implements Catalogable {

    protected String codigo;
    protected String titulo;
    protected int anio;
    protected boolean disponible;

    public Material(String codigo, String titulo, int anio, boolean disponible) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.anio = anio;
        this.disponible = disponible;
    }

    @Override
    public String getCodigo() {
        return codigo;
    }

    public boolean isDisponible() {
        return disponible;
    }

    public void setDisponible(boolean disponible) {
        this.disponible = disponible;
    }

    public abstract String getTipo();

    public void mostrarInfo() {
        System.out.println(
            "[" + getTipo() + "] " + titulo + " (" + anio + ") - "
            + (disponible ? "disponible" : "prestado")
        );
    }
}

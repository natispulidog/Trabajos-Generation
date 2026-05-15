package co.generation.clinica.model;

import co.generation.clinica.interfaces.Registrable;

public class Medico implements Registrable {
    private int id;
    private String nombre;
    private String apellido;
    private Especialidad especialidad;

    public Medico(int id, String nombre, String apellido, Especialidad especialidad) {
        this.id = id;
        setNombre(nombre);
        setApellido(apellido);
        setEspecialidad(especialidad);
    }

    public Medico(String nombre, String apellido, Especialidad especialidad) {
        setNombre(nombre);
        setApellido(apellido);
        setEspecialidad(especialidad);
    }

    public void setId(int id) { this.id = id; }

    public void setNombre(String nombre) {
        if (nombre == null || nombre.isBlank()) throw new IllegalArgumentException();
        this.nombre = nombre.trim();
    }

    public void setApellido(String apellido) {
        if (apellido == null || apellido.isBlank()) throw new IllegalArgumentException();
        this.apellido = apellido.trim();
    }

    public void setEspecialidad(Especialidad especialidad) {
        if (especialidad == null) throw new IllegalArgumentException();
        this.especialidad = especialidad;
    }

    public int getId() { return id; }
    public String getNombre() { return nombre; }
    public String getApellido() { return apellido; }
    public Especialidad getEspecialidad() { return especialidad; }

    @Override
    public boolean esValido() {
        return nombre != null && apellido != null && especialidad != null;
    }

    @Override
    public String getDatosRegistro() {
        return toString();
    }

    @Override
    public boolean equals(Object o) {
        if (o instanceof Medico m) {
            return nombre.equalsIgnoreCase(m.nombre) &&
                   apellido.equalsIgnoreCase(m.apellido);
        }
        return false;
    }

    @Override
    public String toString() {
        return "Dr. " + nombre + " " + apellido + " - " + especialidad;
    }
}

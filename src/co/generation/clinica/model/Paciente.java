package co.generation.clinica.model;

import co.generation.clinica.interfaces.Registrable;

public class Paciente implements Registrable {
    private int id;
    private String cedula;
    private String nombre;
    private String apellido;
    private String telefono;

    public Paciente(int id, String cedula, String nombre, String apellido, String telefono) {
        this.id = id;
        setCedula(cedula);
        setNombre(nombre);
        setApellido(apellido);
        setTelefono(telefono);
    }

    public Paciente(String cedula, String nombre, String apellido, String telefono) {
        setCedula(cedula);
        setNombre(nombre);
        setApellido(apellido);
        setTelefono(telefono);
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setCedula(String cedula) {
        if (cedula == null || cedula.isBlank())
            throw new IllegalArgumentException("Cédula inválida");
        this.cedula = cedula;
    }

    public void setNombre(String nombre) {
        if (nombre == null || nombre.isBlank())
            throw new IllegalArgumentException("Nombre inválido");
        this.nombre = nombre.trim();
    }

    public void setApellido(String apellido) {
        if (apellido == null || apellido.isBlank())
            throw new IllegalArgumentException("Apellido inválido");
        this.apellido = apellido.trim();
    }

    public void setTelefono(String telefono) {
        if (!telefono.matches("^[0-9]{7,10}$"))
            throw new IllegalArgumentException("Teléfono inválido");
        this.telefono = telefono;
    }

    public int getId() { return id; }
    public String getCedula() { return cedula; }
    public String getNombre() { return nombre; }
    public String getApellido() { return apellido; }
    public String getTelefono() { return telefono; }

    @Override
    public boolean esValido() {
        return cedula != null && nombre != null &&
               apellido != null && telefono != null;
    }

    @Override
    public String getDatosRegistro() {
        return toString();
    }

    @Override
    public boolean equals(Object o) {
        if (o instanceof Paciente p) {
            return cedula.equals(p.cedula);
        }
        return false;
    }

    @Override
    public String toString() {
        return nombre + " " + apellido + " - " + cedula + " - " + telefono;
    }
}

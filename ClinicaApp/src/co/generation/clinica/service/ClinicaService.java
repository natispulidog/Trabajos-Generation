package co.generation.clinica.service;

import co.generation.clinica.model.*;

import java.util.*;

public class ClinicaService {

    private List<Paciente> pacientes = new ArrayList<>();
    private List<Medico> medicos = new ArrayList<>();

    public List<Paciente> getPacientes() { return pacientes; }
    public List<Medico> getMedicos() { return medicos; }
    private List<Turno> turnos = new ArrayList<>();


    public void registrarPaciente(Paciente p) {
        if (!p.esValido()) return;
        if (pacientes.contains(p)) return;

        p.setId(pacientes.size() + 1);  // ✅ CORRECTO
        pacientes.add(p);
    }

    public void registrarMedico(Medico m) {
        if (!m.esValido()) return;
        if (medicos.contains(m)) return;

        m.setId(medicos.size() + 1);
        medicos.add(m);
    }

    public Paciente buscarPorCedula(String cedula) {
        for (Paciente p : pacientes) {
            if (p.getCedula().equals(cedula)) return p;
        }
        return null;
    }

    public Medico buscarPorNombreApellido(String n, String a) {
        for (Medico m : medicos) {
            if (m.getNombre().equalsIgnoreCase(n) &&
                m.getApellido().equalsIgnoreCase(a)) return m;
        }
        return null;
    }

    public List<Turno> getTurnos() {
    return turnos;
}

}
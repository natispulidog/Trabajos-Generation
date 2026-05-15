package co.generation.clinica;

import co.generation.clinica.model.*;
import co.generation.clinica.service.ClinicaService;
import co.generation.clinica.datos.DatosCSV;

public class Main {
    public static void main(String[] args) {

        ClinicaService servicio = new ClinicaService();

        DatosCSV.cargar(servicio);

        Paciente p = new Paciente("123", "Ana", "Lopez", "3001234567");
        servicio.registrarPaciente(p);

        Medico m = new Medico("Carlos", "Perez", Especialidad.GENERAL);
        servicio.registrarMedico(m);

        System.out.println("✅ Datos registrados correctamente");

        DatosCSV.guardar(servicio);
    }
}
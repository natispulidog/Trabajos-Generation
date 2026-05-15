package co.generation.clinica.model;

import java.time.LocalDateTime;

public class Turno {
    private int id;
    private Paciente paciente;
    private Medico medico;
    private LocalDateTime fechaHora;
    private EstadoTurno estado;

    public Turno(int id, Paciente paciente, Medico medico,
                 LocalDateTime fechaHora, EstadoTurno estado) {
        this.id = id;
        this.paciente = paciente;
        this.medico = medico;
        this.fechaHora = fechaHora;
        this.estado = estado;
    }

    public Turno(Paciente paciente, Medico medico, LocalDateTime fechaHora) {
        this.paciente = paciente;
        this.medico = medico;
        this.fechaHora = fechaHora;
        this.estado = EstadoTurno.PENDIENTE;
    }

    public Medico getMedico() { return medico; }
    public Paciente getPaciente() { return paciente; }
    public LocalDateTime getFechaHora() { return fechaHora; }
    public EstadoTurno getEstado() { return estado; }
    public int getId() { return id; }

    public void setEstado(EstadoTurno estado) {
        this.estado = estado;
    }

    @Override
    public boolean equals(Object o) {
        if (o instanceof Turno t) {
            return medico.equals(t.medico) &&
                   fechaHora.equals(t.fechaHora);
        }
        return false;
    }

    @Override
    public String toString() {
        return "[" + estado + "] " + paciente + " — " + medico +
               " — " + fechaHora;
    }
}
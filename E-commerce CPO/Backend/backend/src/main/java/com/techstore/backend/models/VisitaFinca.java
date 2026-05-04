package com.techstore.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "visitas_finca")
public class VisitaFinca {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String nombre;
  private String duracion;
  private Double precio;

  public VisitaFinca() {}
  public Long getId() { return id; }
  public String getNombre() { return nombre; }
  public String getDuracion() { return duracion; }
  public Double getPrecio() { return precio; }
}

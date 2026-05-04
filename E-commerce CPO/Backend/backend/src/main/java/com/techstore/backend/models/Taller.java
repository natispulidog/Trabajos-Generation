package com.techstore.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "talleres")
public class Taller {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String nombre;
  private String fecha;
  private Double precio;

  public Taller() {}
  public Long getId() { return id; }
  public String getNombre() { return nombre; }
  public String getFecha() { return fecha; }
  public Double getPrecio() { return precio; }
}
package com.techstore.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "productos")
public class Producto {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String nombre;
  private Double precio;
  private String imagen;

  public Producto() {}

  public Long getId() { return id; }
  public String getNombre() { return nombre; }
  public Double getPrecio() { return precio; }
  public String getImagen() { return imagen; }

  public void setNombre(String nombre) { this.nombre = nombre; }
  public void setPrecio(Double precio) { this.precio = precio; }
  public void setImagen(String imagen) { this.imagen = imagen; }
}
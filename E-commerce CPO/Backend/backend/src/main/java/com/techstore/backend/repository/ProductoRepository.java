package com.techstore.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.techstore.backend.models.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Long> {}
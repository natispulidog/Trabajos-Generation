package com.techstore.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.techstore.backend.models.VisitaFinca;
import com.techstore.backend.repository.VisitaFincaRepository;

@RestController
@RequestMapping("/api/farm-visits")
@CrossOrigin(origins = "*")
public class VisitaFincaController {

    @Autowired
    private VisitaFincaRepository repo;

    @GetMapping
    public List<VisitaFinca> all() {
        return repo.findAll();
    }

    @PostMapping
    public VisitaFinca save(@RequestBody VisitaFinca v) {
        return repo.save(v);
    }
}
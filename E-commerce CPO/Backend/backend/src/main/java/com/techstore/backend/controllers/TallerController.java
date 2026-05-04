package com.techstore.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.techstore.backend.models.Taller;
import com.techstore.backend.repository.TallerRepository;

@RestController
@RequestMapping("/api/workshops")
@CrossOrigin(origins = "*")
public class TallerController {

    @Autowired
    private TallerRepository repo;

    @GetMapping
    public List<Taller> all() {
        return repo.findAll();
    }

    @PostMapping
    public Taller save(@RequestBody Taller t) {
        return repo.save(t);
    }
}

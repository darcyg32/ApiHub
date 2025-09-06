package com.darcy.apihub.controllers;

import com.darcy.apihub.dtos.JokeDTO;
import com.darcy.apihub.services.JokeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/joke")
public class JokeController {

    private final JokeService service;

    public JokeController(JokeService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<JokeDTO> random() {
        return ResponseEntity.ok(service.randomJoke());
    }
}

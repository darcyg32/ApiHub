package com.darcy.apiHub.apihub.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ExperimentController {

    @GetMapping("/greet/{name}")
    public Map<String, String> greetUser(@PathVariable String name) {
        // Create a HashMap to hold key-value pairs for the JSON response
        Map<String, String> response = new HashMap<>();

        // Put a single key-value pair into the map: "message" -> "Hello, <name>!"
        response.put("message", "Hello, " + name + "!");

        // Return the map; Spring Boot automatically converts it to JSON
        return response;
    }
}
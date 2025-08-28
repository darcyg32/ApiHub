// Controllers handle HTTP requests from the frontend or Postman
// /users is the base path, so GET /users and POST /users works automatically
// Spring automatically handles JSON serialization/deserialization
// Dependency injection avoids manually creating UserRepository instances

package com.darcy.apiHub.apihub.controllers;

// Import User model and repository
import com.darcy.apiHub.apihub.models.User;
import com.darcy.apiHub.apihub.repositories.UserRepository;

// Spring Web annotations
import org.springframework.web.bind.annotation.*;

import java.util.List;

// @RestController tells Spring Boot: this class handles HTTP requests
// All return values are automatically converted to JSON
@RestController
// Base URL for all endpoints in this controller
@RequestMapping("/users")
public class UserController {

    // Dependency injection: Spring will provide an instance of UserRepository automatically
    private final UserRepository userRepository;

    // Constructor injection is preferred in Spring Boot
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // GET /users --> return all users
    @GetMapping
    public List<User> getAllUsers() {
        // userRepository.findAll() queries the User table and returns all rows
        return userRepository.findAll();
    }

    // POST /users --> create a new user
    @PostMapping
    public User createUser(@RequestBody User user) {
        // @RequestBody tells Spring to convert JSON in the request into a User object
        // userRepository.save(user) inserts the user into the database
        return userRepository.save(user);
    }
}

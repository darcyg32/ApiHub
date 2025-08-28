package com.darcy.apiHub.apihub.models;

// Import annotations from Jakarta Persistence API (JPA)
// JPA lets us map Java classes to database tables automatically
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

// @Entity tells Spring Boot and JPA that this class represents a database table
@Entity
public class User {

    // @Id marks this field as the primary key of the table
    @Id
    // @GeneratedValue tells JPA to auto-generate the ID values
    // strategy = GenerationType.IDENTITY is commonly used for auto-increment columns
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Fields for our user
    private String username;
    private String email;

    // Getters and setters
    public Long getId() { return id; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}

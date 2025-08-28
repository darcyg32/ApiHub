// This is the interface to the database
// Spring Boot generates all the SQL under the hood
// We don't implement anything yet. Just extend JpaRepository

package com.darcy.apiHub.apihub.repositories;

// Import the user model
import com.darcy.apiHub.apihub.models.User;
// Import Spring Data JPA interface
import org.springframework.data.jpa.repository.JpaRepository;

// JpaRepository provides all the standard database operations for a given entity
// <User, Long> means: This repo handles User objects and their primary key is a Long
public interface UserRepository extends JpaRepository<User, Long> {
    // No code needed here for basic CRUD.
    // Spring Data JPA provides: findAll(), findById(), save(), deleteById(), etc.

    // Later, we can add custom queries here, e.g., findByUsername(String username)
}

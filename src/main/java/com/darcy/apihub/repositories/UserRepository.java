package com.darcy.apihub.repositories;

import com.darcy.apihub.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Basic CRUD inherited from JpaRepository
}
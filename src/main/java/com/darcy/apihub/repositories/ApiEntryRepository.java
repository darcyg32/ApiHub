package com.darcy.apihub.repositories;

import com.darcy.apihub.models.ApiEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApiEntryRepository extends JpaRepository<ApiEntry, Long> {
}

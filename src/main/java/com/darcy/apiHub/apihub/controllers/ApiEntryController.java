package com.darcy.apiHub.apihub.controllers;

import com.darcy.apiHub.apihub.dtos.ApiEntryDTO;
import com.darcy.apiHub.apihub.models.ApiEntry;
import com.darcy.apiHub.apihub.services.ApiEntryService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api-entries")
public class ApiEntryController {

    private final ApiEntryService apiEntryService;

    public ApiEntryController(ApiEntryService apiEntryService) {
        this.apiEntryService = apiEntryService;
    }

    @PostMapping
    public ResponseEntity<ApiEntry> createEntry(@Valid @RequestBody ApiEntryDTO dto) {
        return ResponseEntity.ok(apiEntryService.createApiEntry(dto));
    }

    @GetMapping
    public ResponseEntity<List<ApiEntry>> getAllEntries() {
        return ResponseEntity.ok(apiEntryService.getAllEntries());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getEntryById(@PathVariable Long id) {
        return apiEntryService.getEntryById(id)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("API entry not found"));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateEntry(@PathVariable Long id, @Valid @RequestBody ApiEntryDTO dto) {
        return apiEntryService.updateEntry(id, dto)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("API entry not found"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEntry(@PathVariable Long id) {
        if (apiEntryService.deleteEntry(id)) {
            return ResponseEntity.ok("API entry deleted successfully");
        } else {
            return ResponseEntity.status(404).body("API entry not found");
        }
    }
}

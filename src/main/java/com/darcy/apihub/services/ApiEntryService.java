package com.darcy.apihub.services;

import com.darcy.apihub.dtos.ApiEntryDTO;
import com.darcy.apihub.models.ApiEntry;
import com.darcy.apihub.models.User;
import com.darcy.apihub.repositories.ApiEntryRepository;
import com.darcy.apihub.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApiEntryService {

    private final ApiEntryRepository apiEntryRepository;
    private final UserRepository userRepository;

    public ApiEntryService(ApiEntryRepository apiEntryRepository, UserRepository userRepository) {
        this.apiEntryRepository = apiEntryRepository;
        this.userRepository = userRepository;
    }

    public ApiEntry createApiEntry(ApiEntryDTO dto) {
        ApiEntry entry = new ApiEntry();

        entry.setName(dto.getName());
        entry.setUrl(dto.getUrl());
        entry.setDescription(dto.getDescription());

        if (dto.getOwnerId() != null) {
            Optional<User> owner = userRepository.findById(dto.getOwnerId());
            owner.ifPresent(entry::setOwner);
        }

        return apiEntryRepository.save(entry);
    }

    public List<ApiEntry> getAllEntries() {
        return apiEntryRepository.findAll();
    }

    public Optional<ApiEntry> getEntryById(Long id) {
        return apiEntryRepository.findById(id);
    }

    public Optional<ApiEntry> updateEntry(Long id, ApiEntryDTO dto) {
        return apiEntryRepository.findById(id).map(entry -> {
            entry.setName(dto.getName());
            entry.setUrl(dto.getUrl());
            entry.setDescription(dto.getDescription());

            if (dto.getOwnerId() != null) {
                userRepository.findById(dto.getOwnerId()).ifPresent(entry::setOwner);
            }

            return apiEntryRepository.save(entry);
        });
    }

    public boolean deleteEntry(Long id) {
        if (!apiEntryRepository.existsById(id)) return false;
        apiEntryRepository.deleteById(id);
        return true;
    }
}

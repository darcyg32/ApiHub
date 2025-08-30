package com.darcy.apiHub.apihub.dtos;

import jakarta.validation.constraints.NotBlank;

public class ApiEntryDTO {

    @NotBlank
    private String name;

    @NotBlank
    private String url;

    private String description;

    private Long ownerId;

    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Long getOwnerId() { return ownerId; }
    public void setOwnerId(Long ownerId) { this.ownerId = ownerId; }
}

package com.darcy.apiHub.apihub.controllers;

import com.darcy.apiHub.apihub.dtos.CryptoPriceDTO;
import com.darcy.apiHub.apihub.services.CryptoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/crypto")
public class CryptoController {

    private final CryptoService service;

    public CryptoController(CryptoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<CryptoPriceDTO> current() {
        return ResponseEntity.ok(service.getBTCandETHinAUD());
    }
}

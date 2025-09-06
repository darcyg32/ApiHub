package com.darcy.apihub.controllers;

import com.darcy.apihub.dtos.CryptoPriceDTO;
import com.darcy.apihub.services.CryptoService;
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

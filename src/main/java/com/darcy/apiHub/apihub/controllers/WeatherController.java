package com.darcy.apiHub.apihub.controllers;

import com.darcy.apiHub.apihub.dtos.WeatherDTO;
import com.darcy.apiHub.apihub.services.WeatherService;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/weather")
public class WeatherController {

    private final WeatherService service;

    public WeatherController(WeatherService service) {
        this.service = service;
    }

    // Adelaide defaults if lat and/or lon is missing
    @GetMapping
    public ResponseEntity<WeatherDTO> current(
            @RequestParam(value = "lat", required = false) Double lat,
            @RequestParam(value = "lon", required = false) Double lon
    ) {
        if (lat == null || lon == null) {
            lat = -34.93;
            lon = 138.60;
        }
        return Response.ok(service.getCurrent(lat, lon));
    }
}

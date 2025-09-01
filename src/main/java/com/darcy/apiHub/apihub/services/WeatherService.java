package com.darcy.apiHub.apihub.services;

import com.darcy.apiHub.apihub.clients.OpenMeteoClient;
import com.darcy.apiHub.apihub.dtos.WeatherDTO;
import org.springframework.stereotype.Service;

@Service
public class WeatherService {

    private final OpenMeteoClient openMeteoClient;

    public WeatherService(OpenMeteoClient openMeteoClient) {
        this.openMeteoClient = openMeteoClient;
    }

    public WeatherDTO getCurrent(double lat, double lon) {
        var resp = openMeteoClient.getCurrent(lat, lon);
        var cw = resp != null ? resp.currentWeather : null;
        return new WeatherDTO(
                resp != null ? resp.latitude : lat,
                resp != null ? resp.longitude : lon,
                cw != null ? cw.temperature : null,
                cw != null ? cw.windspeed : null,
                cw != null ? cw.time : null
        );
    }
}

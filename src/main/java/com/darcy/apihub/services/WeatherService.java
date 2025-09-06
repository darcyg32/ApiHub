package com.darcy.apihub.services;

import com.darcy.apihub.clients.OpenMeteoClient;
import com.darcy.apihub.dtos.WeatherDTO;
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
                cw != null ? cw.time : null,
                resp != null ? resp.timezone : null,
                resp != null ? resp.timezoneAbbreviation : null,
                resp != null ? resp.utcOffsetSeconds : null
        );
    }
}

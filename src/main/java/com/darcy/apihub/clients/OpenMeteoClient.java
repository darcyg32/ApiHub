package com.darcy.apihub.clients;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.servlet.view.UrlBasedViewResolver;

@Component
public class OpenMeteoClient {

    private final WebClient client;

    public OpenMeteoClient(WebClient.Builder builder, UrlBasedViewResolver urlBasedViewResolver) {
        // No API key required
        this.client = builder
                .baseUrl("https://api.open-meteo.com/v1")
                .build();
    }

    public OpenMeteoResponse getCurrent(double lat, double lon) {
        return client.get()
                .uri(uri -> uri
                        .path("/forecast")
                        .queryParam("latitude", lat)
                        .queryParam("longitude", lon)
                        .queryParam("current_weather", "true")
                        .queryParam("timezone", "auto")
                        .build())
                .retrieve()
                .bodyToMono(OpenMeteoResponse.class)
                .block();
    }

    public static class OpenMeteoResponse {
        public double latitude;
        public double longitude;
        public String timezone;
        @JsonProperty("timezone_abbreviation")
        public String timezoneAbbreviation;
        @JsonProperty("utc_offset_seconds")
        public Integer utcOffsetSeconds;
        @JsonProperty("current_weather")
        public CurrentWeather currentWeather;

        public static class CurrentWeather {
            public Double temperature;
            public Double windspeed;
            public String time;
        }
    }
}

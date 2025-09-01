package com.darcy.apiHub.apihub.dtos;

public class WeatherDTO {
    private double latitude;
    private double longitude;
    private Double temperature; // Celsius
    private Double windSpeed;
    private String timeISO;

    public WeatherDTO() {}

    public WeatherDTO(double latitude, double longitude, Double temperature, Double windSpeed, String timeISO) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.temperature = temperature;
        this.windSpeed = windSpeed;
        this.timeISO = timeISO;
    }

    public double getLatitude() { return latitude; }
    public void setLatitude(double latitude) { this.latitude = latitude; }

    public double getLongitude() { return longitude; }
    public void setLongitude(double longitude) { this.longitude = longitude; }

    public Double getTemperature() { return temperature; }
    public void setTemperature(Double temperature) { this.temperature = temperature; }

    public Double getWindSpeed() { return windSpeed; }
    public void setWindSpeed(Double windSpeed) { this.windSpeed = windSpeed; }

    public String getTimeISO() { return timeISO; }
    public void setTimeISO(String timeISO) { this.timeISO = timeISO; }
}

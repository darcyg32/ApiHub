export interface WeatherDTO {
    latitude: number;
    longitude: number;
    temperature: number | null;
    windspeed: number | null;
    timeISO: string | null;
}

export interface WeatherData {
    data: WeatherDTO | null;
    loading: boolean;
    error: string | null;
}

export interface Coordinates {
    lat: number;
    lon: number;
}

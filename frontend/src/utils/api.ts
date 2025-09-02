const API_BASE_URL = 'http://localhost:8080/api';

// Generic function for making API calls
async function fetchApi<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);

    if (!response.ok) {
        throw new Error(`API call failed: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

// Specific API calls
export const cryptoApi = {
    getPrices: () => fetchApi<import('../types').CryptoPriceDTO>('/crypto')
};

export const weatherApi = {
    getWeather: (lat: number, lon: number) =>
        fetchApi<import('../types').WeatherDTO>(`/weather?lat=${lat}&lon=${lon}`)
};

export const jokeApi = {
    getRandomJoke: () => fetchApi<import('../types').JokeDTO>('/joke')
};

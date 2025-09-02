import { useState, useEffect } from 'react';
import { weatherApi } from '../utils/api.ts';
import type { WeatherData } from '../types';

export function useWeatherData(lat: number, lon: number) {
    const [state, setState] = useState<WeatherData>({
        data: null,
        loading: false,
        error: null
    });

    const fetchData = async (latitude = lat, longitude = lon) => {
        setState(prev => ({ ...prev, loading: true, error: null }));
        try {
            const result = await weatherApi.getWeather(latitude, longitude);
            setState({ data: result, loading: false, error: null});
        } catch (error) {
            setState({
                data: null,
                loading: false,
                error: error instanceof Error ? error.message : 'Failed to fetch weather'
            });
        }
    };

    useEffect(() => {
        void fetchData(lat, lon);
    }, [lat, lon]);

    return { ...state, refetch: fetchData };
}
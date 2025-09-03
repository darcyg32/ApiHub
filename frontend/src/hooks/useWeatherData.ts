import { useState, useEffect, useCallback } from 'react';
import { weatherApi } from '../utils/api';
import type { WeatherData } from '../types';

export function useWeatherData(lat: number, lon: number) {
    const [state, setState] = useState<WeatherData>({
        data: null,
        loading: false,
        error: null,
    });

    const fetchData = useCallback(
        async (latitude = lat, longitude = lon) => {
            setState((prev) => ({ ...prev, loading: true, error: null }));
            try {
                const result = await weatherApi.getWeather(latitude, longitude);
                setState({ data: result, loading: false, error: null });
            } catch (error) {
                setState({
                    data: null,
                    loading: false,
                    error: error instanceof Error ? error.message : 'Failed to fetch weather',
                });
            }
        },
        [lat, lon],
    );

    useEffect(() => {
        void fetchData(lat, lon);
    }, [fetchData, lat, lon]);

    return { ...state, refetch: fetchData };
}

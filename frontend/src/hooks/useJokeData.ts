import { useState, useEffect } from 'react';
import { jokeApi } from '../utils/api';
import type { JokeData } from '../types';

export function useJokeData() {
    const [state, setState] = useState<JokeData>({
        data: null,
        loading: false,
        error: null,
    });

    const fetchData = async () => {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        try {
            const result = await jokeApi.getRandomJoke();
            setState({ data: result, loading: false, error: null });
        } catch (error) {
            setState({
                data: null,
                loading: false,
                error: error instanceof Error ? error.message : 'Failed to fetch joke',
            });
        }
    };

    useEffect(() => {
        void fetchData();
    }, []);

    return { ...state, refetch: fetchData };
}

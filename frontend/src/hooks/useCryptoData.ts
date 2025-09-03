import { useState, useEffect } from 'react';
import { cryptoApi } from '../utils/api.ts';
import type { CryptoData } from '../types';

export function useCryptoData() {
    const [state, setState] = useState<CryptoData>({
        data: null,
        loading: false,
        error: null,
    });

    const fetchData = async () => {
        setState((prev) => ({ ...prev, loading: true, error: null }));

        try {
            const result = await cryptoApi.getPrices();
            setState({ data: result, loading: false, error: null });
        } catch (error) {
            setState({
                data: null,
                loading: false,
                error: error instanceof Error ? error.message : 'Failed to fetch crypto data',
            });
        }
    };

    useEffect(() => {
        void fetchData();
    }, []);

    return { ...state, refetch: fetchData };
}

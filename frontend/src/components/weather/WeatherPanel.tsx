import { useState } from 'react';
import { useWeatherData } from '../../hooks/useWeatherData';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import RefreshButton from '../common/RefreshButton';

export default function WeatherPanel() {
    const [lat, setLat] = useState<number>(-34.93);
    const [lon, setLon] = useState<number>(138.6);
    const { data, loading, error, refetch } = useWeatherData(lat, lon);

    const formattedTime = data?.timeISO
        ? new Date(data.timeISO).toLocaleString(undefined, {
              timeZoneName: data?.timezoneAbbreviation ? undefined : 'short',
          }) + (data?.timezoneAbbreviation ? ` ${data.timezoneAbbreviation}` : '')
        : '—';

    return (
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500">
                        <svg
                            className="h-5 w-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                            />
                        </svg>
                    </div>

                    <div className="space-y-1">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Weather
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="flex items-end gap-4">
                        <div className="space-y-2">
                            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
                                Latitude
                            </label>
                            <input
                                type="number"
                                value={lat}
                                onChange={(e) => setLat(parseFloat(e.target.value))}
                                placeholder="Latitude"
                                step="0.01"
                                className="w-28 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:w-32"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
                                Longitude
                            </label>
                            <input
                                type="number"
                                value={lon}
                                onChange={(e) => setLon(parseFloat(e.target.value))}
                                placeholder="Longitude"
                                step="0.01"
                                className="w-28 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:w-32"
                            />
                        </div>
                    </div>
                    <div className="sm:ml-2">
                        <RefreshButton
                            onClick={() => refetch(lat, lon)}
                            disabled={loading}
                            label="Search"
                        />
                    </div>
                </div>
            </div>

            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}

            {!loading && !error && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Info
                        label="Latitude"
                        value={data?.latitude != null ? data.latitude.toFixed(2) : '—'}
                    />
                    <Info
                        label="Longitude"
                        value={data?.longitude != null ? data.longitude.toFixed(2) : '—'}
                    />
                    <Info
                        label="Temperature"
                        value={data?.temperature != null ? `${data.temperature.toFixed(1)}°C` : '—'}
                    />
                    <Info
                        label="Wind Speed"
                        value={data?.windspeed != null ? `${data.windspeed.toFixed(1)} km/h` : '—'}
                    />
                    <Info
                        label="Last Updated"
                        value={formattedTime}
                        className="col-span-1 sm:col-span-2"
                    />
                </div>
            )}
        </section>
    );
}

function Info({
    label,
    value,
    className = '',
}: {
    label: string;
    value?: string | number;
    className?: string;
}) {
    return (
        <div className={`rounded-lg bg-gray-50 p-4 dark:bg-gray-800 ${className}`}>
            <div className="mb-2 flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {label}
                </span>
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {value ?? '—'}
            </div>
        </div>
    );
}

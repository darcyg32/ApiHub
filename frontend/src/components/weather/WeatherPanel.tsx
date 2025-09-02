import { useState } from "react";
import { useWeatherData } from "../../hooks/useWeatherData";
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";
import RefreshButton from "../common/RefreshButton.tsx";

export default function WeatherPanel() {
  const [lat, setLat] = useState<number>(-34.93);
  const [lon, setLon] = useState<number>(138.6);
  const { data, loading, error, refetch } = useWeatherData(lat, lon);

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Weather (coords)
        </h2>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={lat}
            onChange={(e) => setLat(parseFloat(e.target.value))}
            placeholder="Latitude"
            step="0.01"
            className="w-32 rounded-md border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
          <input
            type="number"
            value={lon}
            onChange={(e) => setLon(parseFloat(e.target.value))}
            placeholder="Longitude"
            step="0.01"
            className="w-32 rounded-md border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
          <RefreshButton
            onClick={() => refetch(lat, lon)}
            disabled={loading}
            label="Search"
          />
        </div>
      </div>

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-2 gap-4">
          <Info label="Latitude" value={data?.latitude != null ? data.latitude.toFixed(2) : "-"} />
          <Info label="Longitude" value={data?.longitude != null ? data.longitude.toFixed(2) : "-"} />
          <Info
            label="Temperature (°C)"
            value={
              data?.temperature != null ? data.temperature.toFixed(1) : "-"
            }
          />
          <Info
            label="Wind (km/h)"
            value={data?.windspeed != null ? data.windspeed.toFixed(1) : "-"}
          />
          <Info
            label="Time"
            value={data?.timeISO ?? "-"}
            className="col-span-2"
          />
        </div>
      )}
    </section>
  );
}

function Info({
  label,
  value,
  className = "",
}: {
  label: string;
  value?: string | number;
  className?: string;
}) {
  return (
    <div className={`rounded-lg bg-gray-50 p-4 dark:bg-gray-800 ${className}`}>
      <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
      <div className="text-lg font-medium text-gray-900 dark:text-white">
        {value ?? "-"}
      </div>
    </div>
  );
}

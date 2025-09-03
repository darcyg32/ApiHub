import { useJokeData } from "../../hooks/useJokeData";
import LoadingSpinner from "../common/LoadingSpinner";
import RefreshButton from "../common/RefreshButton";
import ErrorMessage from "../common/ErrorMessage";

export default function JokePanel() {
    const { data, loading, error, refetch } = useJokeData();

    return (
        <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Random Joke
                </h2>
                <RefreshButton onClick={refetch} disabled={loading} label="New Joke" />
            </div>

            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}

            {!loading && !error && (
                <div className="space-y-2">
                    <p className="text-gray-900 dark:text-white">{data?.setup ?? "-"}</p>
                    <p className="text-gray-600 dark:text-gray-300">
                        {data?.punchline ?? "-"}
                    </p>
                </div>
            )}
        </section>
    );
}

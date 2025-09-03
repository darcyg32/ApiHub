import { useJokeData } from '../../hooks/useJokeData';
import LoadingSpinner from '../common/LoadingSpinner';
import RefreshButton from '../common/RefreshButton';
import ErrorMessage from '../common/ErrorMessage';

export default function JokePanel() {
    const { data, loading, error, refetch } = useJokeData();

    return (
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            {/* Header */}
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-pink-500">
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
                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Random Joke
                        </h2>
                    </div>
                </div>

                <RefreshButton onClick={refetch} disabled={loading} label="New Joke" />
            </div>

            {/* Content */}
            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}

            {!loading && !error && (
                <div className="space-y-4">
                    {/* Setup */}
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                Setup
                            </span>
                        </div>
                        <p className="text-gray-900 dark:text-white">{data?.setup ?? '—'}</p>
                    </div>

                    {/* Punchline */}
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                Punchline
                            </span>
                        </div>
                        <p className="text-gray-900 dark:text-white font-medium">
                            {data?.punchline ?? '—'}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}

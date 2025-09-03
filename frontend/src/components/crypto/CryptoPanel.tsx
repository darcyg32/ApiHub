import { useCryptoData } from '../../hooks/useCryptoData';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import RefreshButton from '../common/RefreshButton';

export default function CryptoPanel() {
    const { data, loading, error, refetch } = useCryptoData();

    return (
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            {/* Header */}
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-5">
                    <div className="relative">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500">
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
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Crypto Prices
                        </h2>
                    </div>
                </div>

                <RefreshButton onClick={refetch} disabled={loading} />
            </div>

            {/* Content */}
            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}

            {!loading && !error && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* BTC Card */}
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                        <div className="mb-2 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"></div>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                    BTC
                                </span>
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Bitcoin</div>
                        </div>
                        <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {data?.btcAud != null ? `$${data.btcAud.toLocaleString()}` : '—'}
                        </div>
                    </div>

                    {/* ETH Card */}
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                        <div className="mb-2 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"></div>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                    ETH
                                </span>
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Ethereum</div>
                        </div>
                        <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {data?.ethAud != null ? `$${data.ethAud.toLocaleString()}` : '—'}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

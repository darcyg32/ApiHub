import { useCryptoData } from '../../hooks/useCryptoData';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import RefreshButton from '../common/RefreshButton';

export default function CryptoPanel() {
    const { data, loading, error, refetch } = useCryptoData();

    return (
        <section className="rounded-x1 border border-gray-200 bg-white p-4 shadow-sm dark-border-gray-800 dark-bg-gray-900">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Crypto Prices (AUD)</h2>
                <RefreshButton onClick={refetch} disabled={loading} />
            </div>

            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}

            {!loading && !error && (
                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                        <div className="text-sm text-gray-500 dark:text-gray-400">BTC</div>
                        <div className="text-2x1 font-semibold text-gray-900 dark:text-white">
                            {data?.btcAud != null ? `$${data.btcAud.toLocaleString()}` : '-'}
                        </div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                        <div className="text-sm text-gray-500 dark:text-gray-400">ETH</div>
                        <div className="text-2x1 font-semibold text-gray-900 dark:text-white">
                            {data?.ethAud != null ? `$${data.ethAud.toLocaleString()}` : '-'}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
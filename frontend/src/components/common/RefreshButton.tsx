type Props = { onClick: () => void; label?: string; disabled?: boolean };

export default function RefreshButton({ onClick, label = 'Refresh', disabled }: Props) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-xl disabled:transform-none active:scale-95"
        >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>

            {/* Icon */}
            <svg
                className="relative h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
            </svg>

            {/* Label */}
            <span className="relative">{label}</span>
        </button>
    );
}

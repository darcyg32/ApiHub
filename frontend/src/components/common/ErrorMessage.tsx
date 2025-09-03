type Props = { message: string };

export default function ErrorMessage({ message }: Props) {
    return (
        <div className="rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-900/20 to-pink-900/20 px-6 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-pink-500 shadow-lg">
                    <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-semibold text-red-200">{message}</p>
                    <p className="text-xs text-red-300/70">
                        Please check your connection and try again
                    </p>
                </div>
            </div>
        </div>
    );
}

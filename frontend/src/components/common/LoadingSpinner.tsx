export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center py-12">
            <div className="relative">
                {/* Main spinner */}
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500 shadow-lg"></div>

                {/* Pulsing ring */}
                <div className="absolute inset-0 h-12 w-12 animate-ping rounded-full border-2 border-blue-500/30"></div>

                {/* Center dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}

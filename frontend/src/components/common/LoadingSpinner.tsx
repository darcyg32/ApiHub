export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center py-6">
            <div className="h-5 w-5 animate spin rounded-full border-2 border-gray-300 border-t-transparent" />
        </div>
    );
}
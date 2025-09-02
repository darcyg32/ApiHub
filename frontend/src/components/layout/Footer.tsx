export default function Footer() {
    return (
        <footer className="mt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-6 text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} ApiHub
            </div>
        </footer>
    );
}
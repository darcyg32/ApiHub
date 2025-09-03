export default function Footer() {
    return (
        <footer className="relative border-t border-gray-800/50 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-6 py-8">
                <div className="flex items-center justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>React 19</span>
                        <span>•</span>
                        <span>TypeScript</span>
                        <span>•</span>
                        <span>Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

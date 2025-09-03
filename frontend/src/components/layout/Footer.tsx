export default function Footer() {
    return (
        <footer className="relative border-t border-gray-800/50 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-6 py-8">
                <div className="flex items-center justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>React 19.1.1</span>
                        <span>•</span>
                        <span>TypeScript 5.8.3</span>
                        <span>•</span>
                        <span>Vite 7.1.2</span>
                        <span>•</span>
                        <span>Tailwind CSS 4.1.12</span>
                    </div>
                </div>
                <div className="mt-2 flex items-center justify-center">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Java 17</span>
                        <span>•</span>
                        <span>Spring Boot 3.5.5</span>
                        <span>•</span>
                        <span>WebFlux</span>
                        <span>•</span>
                        <span>JPA/H2</span>
                        <span>•</span>
                        <span>Gradle</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

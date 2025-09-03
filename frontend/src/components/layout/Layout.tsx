import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden">
                {/* Floating orbs */}
                <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse delay-1000"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            <div className="relative flex min-h-screen flex-col">
                <Header />
                <main className="flex-1 container mx-auto max-w-7xl px-6 py-12">{children}</main>
                <Footer />
            </div>
        </div>
    );
}

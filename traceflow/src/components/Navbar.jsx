import React from 'react';
import { Activity } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-blue-600 p-1.5 rounded-lg">
                        <Activity className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">TraceFlow</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <a href="#features" className="hover:text-white transition-colors">Features</a>
                    <a href="#pipeline" className="hover:text-white transition-colors">Pipeline</a>
                    <a href="#integration" className="hover:text-white transition-colors">Integration</a>
                    <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        Sign In
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg transition-all shadow-lg shadow-blue-900/20">
                        Start Free Trial
                    </button>
                </div>
            </div>
        </nav>
    );
}

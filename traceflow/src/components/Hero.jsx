import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import ParticleNetwork from './ParticleNetwork';

export default function Hero() {
    return (
        <div className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <ParticleNetwork />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    v2.0 Now Available for Enterprise
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                    From Model to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Metal</span>.
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    The first CI/CD OS designed specifically for Automotive OEMs. Streamline MBD workflows, automate Embedded Coder pipelines, and guarantee HIL traceability.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                    <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-900/20 transition-all hover:scale-105 flex items-center justify-center gap-2">
                        Start Free Trial <ArrowRight className="w-5 h-5" />
                    </button>

                    <button className="w-full sm:w-auto bg-slate-800/50 hover:bg-slate-800 text-white text-lg font-bold px-8 py-4 rounded-xl border border-slate-700 backdrop-blur-sm transition-all hover:scale-105 flex items-center justify-center gap-2">
                        <Play className="w-5 h-5 fill-current" /> Watch Demo
                    </button>
                </div>
            </div>
        </div>
    );
}

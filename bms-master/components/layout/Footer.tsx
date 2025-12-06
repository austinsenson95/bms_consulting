import React from 'react';
import { BatteryCharging, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-md bg-gradient-to-br from-brand-accent to-brand-secondary flex items-center justify-center text-white">
                        <BatteryCharging size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-lg font-bold text-slate-900">
                        Voltaic<span className="text-brand-accent">.</span>
                    </span>
                </div>

                <div className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Voltaic Systems. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-slate-500 hover:text-brand-accent transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-slate-500 hover:text-brand-accent transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-slate-500 hover:text-brand-accent transition-colors"><Twitter size={20} /></a>
                </div>
            </div>
        </footer>
    );
}

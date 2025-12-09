"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';
import ParticleNetwork from './ParticleNetwork';

export default function TraceflowHero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <ParticleNetwork />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background pointer-events-none" />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-5xl mx-auto px-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium mb-8"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <Zap size={14} />
                    v2.0 Now Available for Enterprise
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    From Model to <span className="text-gradient-cyan">Metal</span>.
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    The first CI/CD OS designed specifically for Automotive OEMs. Streamline MBD workflows, automate Embedded Coder pipelines, and guarantee HIL traceability.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <button className="w-full sm:w-auto bg-gradient-to-r from-primary to-cyan-400 hover:opacity-90 text-primary-foreground text-lg font-bold px-8 py-4 rounded-xl shadow-glow transition-all hover:scale-105 flex items-center justify-center gap-2">
                        Start Free Trial <ArrowRight className="w-5 h-5" />
                    </button>

                    <button className="w-full sm:w-auto bg-card/80 backdrop-blur-sm hover:bg-secondary text-foreground text-lg font-bold px-8 py-4 rounded-xl border border-border/50 transition-all hover:scale-105 hover:border-primary/30 flex items-center justify-center gap-2">
                        <Play className="w-5 h-5 fill-current" /> Watch Demo
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
}

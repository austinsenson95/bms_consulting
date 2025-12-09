"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import ConfigPanel from '@/components/battery-modeller/ConfigPanel';
import Charts from '@/components/battery-modeller/Charts';
import ResultsPanel from '@/components/battery-modeller/ResultsPanel';
import { CellConfig, PackConfig, SimulationParams, SimulationResult, DEFAULT_NMC_CELL, DEFAULT_LFP_CELL } from '@/lib/battery/types';
import { simulateECM } from '@/lib/battery/ecm';
import { Battery, Zap, Calendar } from 'lucide-react';

export default function BatteryModellerPage() {
    const [cellConfig, setCellConfig] = useState<CellConfig>(DEFAULT_NMC_CELL);
    const [packConfig, setPackConfig] = useState<PackConfig>({
        series: 96,
        parallel: 1,
        initialTempC: 25,
        ambientTempC: 25,
        coolingCoeffWperK: 2
    });
    const [simParams, setSimParams] = useState<SimulationParams>({
        durationSeconds: 3600,
        timeStep: 1,
        profileType: 'CC_DISCHARGE',
        currentAmps: 50
    });

    const [result, setResult] = useState<SimulationResult | null>(null);

    const handleSimulate = () => {
        const res = simulateECM(cellConfig, packConfig, simParams);
        setResult(res);
    };

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-32 pb-12 border-b border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

                <motion.div
                    className="container mx-auto px-6 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono uppercase tracking-wider mb-4">
                        <Battery size={12} />
                        Interactive Tool
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
                        Battery Pack <span className="text-gradient-amber">Modeller</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                        Design and simulate high-performance battery packs tailored to your constraints.
                        Compare <span className="font-semibold text-foreground">NMC</span> vs <span className="font-semibold text-foreground">LFP</span> chemistries
                        with real-time electrochemical & thermal physics.
                    </p>
                </motion.div>
            </div>

            <Section className="py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left: Configuration */}
                    <motion.div
                        className="lg:col-span-4 lg:sticky lg:top-24"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 p-6">
                            <h2 className="text-xl font-bold text-foreground mb-6 border-b border-border/50 pb-4 flex items-center gap-2">
                                <Zap size={18} className="text-primary" />
                                Configuration
                            </h2>
                            <ConfigPanel
                                cellConfig={cellConfig} setCellConfig={setCellConfig}
                                packConfig={packConfig} setPackConfig={setPackConfig}
                                simParams={simParams} setSimParams={setSimParams}
                                onSimulate={handleSimulate}
                            />
                        </div>

                        <div className="mt-6 bg-gradient-to-br from-primary/20 to-card rounded-xl p-6 text-foreground border border-primary/20">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Calendar size={16} className="text-primary" />
                                Need Professional Validation?
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                I verify these models against real-world cycler data for BMS algorithm development.
                            </p>
                            <a
                                href="/#contact"
                                className="inline-block w-full text-center py-2 px-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors text-sm"
                            >
                                Book Simulation Review
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Results */}
                    <motion.div
                        className="lg:col-span-8"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 min-h-[600px]">

                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-foreground">Simulation Results</h2>
                                {result && (
                                    <span className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                                        {result.timeSeries.length} data points
                                    </span>
                                )}
                            </div>

                            <ResultsPanel data={result} />
                            <Charts data={result} />

                        </div>
                    </motion.div>

                </div>
            </Section>

            <Footer />
        </main>
    );
}

"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import ConfigPanel from '@/components/battery-modeller/ConfigPanel';
import Charts from '@/components/battery-modeller/Charts';
import ResultsPanel from '@/components/battery-modeller/ResultsPanel';
import { CellConfig, PackConfig, SimulationParams, SimulationResult, DEFAULT_NMC_CELL, DEFAULT_LFP_CELL } from '@/lib/battery/types';
import { simulateECM } from '@/lib/battery/ecm';

export default function BatteryModellerPage() {
    // State
    const [cellConfig, setCellConfig] = useState<CellConfig>(DEFAULT_NMC_CELL);
    const [packConfig, setPackConfig] = useState<PackConfig>({
        series: 96, // ~350V
        parallel: 1,
        initialTempC: 25,
        ambientTempC: 25,
        coolingCoeffWperK: 2 // Natural convection
    });
    const [simParams, setSimParams] = useState<SimulationParams>({
        durationSeconds: 3600,
        timeStep: 1, // 1s res
        profileType: 'CC_DISCHARGE',
        currentAmps: 50 // 1C for 50Ah cell
    });

    const [result, setResult] = useState<SimulationResult | null>(null);

    const handleSimulate = () => {
        // Run the math engine
        const res = simulateECM(cellConfig, packConfig, simParams);
        setResult(res);
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-32 pb-12 bg-white border-b border-slate-200">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                        Battery Pack <span className="text-teal-600">Modeller</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                        Design and simulate high-performance battery packs tailored to your constraints.
                        Compare <span className="font-semibold text-slate-800">NMC</span> vs <span className="font-semibold text-slate-800">LFP</span> chemistries
                        with real-time electrochemical & thermal physics.
                    </p>
                </div>
            </div>

            <Section className="py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left: Configuration */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Configuration</h2>
                            <ConfigPanel
                                cellConfig={cellConfig} setCellConfig={setCellConfig}
                                packConfig={packConfig} setPackConfig={setPackConfig}
                                simParams={simParams} setSimParams={setSimParams}
                                onSimulate={handleSimulate}
                            />
                        </div>

                        <div className="mt-6 bg-indigo-900 rounded-xl p-6 text-white shadow-lg">
                            <h3 className="font-bold text-lg mb-2">Need Professional Validation?</h3>
                            <p className="text-indigo-200 text-sm mb-4">
                                I verify these models against real-world cycler data for BMS algorithm development.
                            </p>
                            <a href="/#contact" className="inline-block w-full text-center py-2 px-4 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors text-sm">
                                Book Simulation Review
                            </a>
                        </div>
                    </div>

                    {/* Right: Results */}
                    <div className="lg:col-span-8">
                        <div className="bg-slate-100/50 rounded-2xl border border-slate-200/50 p-6 min-h-[600px]">

                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-slate-900">Simulation Results</h2>
                                {result && (
                                    <span className="text-xs font-mono text-slate-400">
                                        {result.timeSeries.length} data points generated
                                    </span>
                                )}
                            </div>

                            <ResultsPanel data={result} />
                            <Charts data={result} />

                        </div>
                    </div>

                </div>
            </Section>

            <Footer />
        </main>
    );
}

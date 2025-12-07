"use client";

import React from 'react';
import { Settings, Battery, Zap, Thermometer, ChevronsRight } from 'lucide-react';
import { CellConfig, PackConfig, SimulationParams, DEFAULT_NMC_CELL, DEFAULT_LFP_CELL } from '@/lib/battery/types';
import Button from '../ui/Button';

interface ConfigPanelProps {
    cellConfig: CellConfig;
    setCellConfig: (c: CellConfig) => void;
    packConfig: PackConfig;
    setPackConfig: (p: PackConfig) => void;
    simParams: SimulationParams;
    setSimParams: (p: SimulationParams) => void;
    onSimulate: () => void;
}

export default function ConfigPanel({
    cellConfig, setCellConfig,
    packConfig, setPackConfig,
    simParams, setSimParams,
    onSimulate
}: ConfigPanelProps) {

    const handleChemistryChange = (type: 'NMC' | 'LFP') => {
        if (type === 'NMC') setCellConfig(DEFAULT_NMC_CELL);
        else setCellConfig(DEFAULT_LFP_CELL);
    };

    return (
        <div className="flex flex-col gap-6">

            {/* Chemistry Selection */}
            <div className="space-y-3">
                <div className="flex items-center gap-2 text-foreground font-semibold text-lg">
                    <Battery className="text-primary" size={20} />
                    <h3>Chemistry & Cell</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => handleChemistryChange('NMC')}
                        className={`p-4 rounded-xl border-2 transition-all text-left group hover:shadow-md
                            ${cellConfig.chemistry === 'NMC'
                                ? 'border-primary bg-primary/5 ring-1 ring-primary/20'
                                : 'border-border bg-card hover:border-primary/50'}`}
                    >
                        <div className="font-bold text-foreground">NMC</div>
                        <div className="text-xs text-muted-foreground mt-1 line-clamp-2">High energy density, sloping voltage curve.</div>
                    </button>
                    <button
                        onClick={() => handleChemistryChange('LFP')}
                        className={`p-4 rounded-xl border-2 transition-all text-left group hover:shadow-md
                            ${cellConfig.chemistry === 'LFP'
                                ? 'border-primary bg-primary/5 ring-1 ring-primary/20'
                                : 'border-border bg-card hover:border-primary/50'}`}
                    >
                        <div className="font-bold text-foreground">LFP</div>
                        <div className="text-xs text-muted-foreground mt-1 line-clamp-2">Long cycle life, flat voltage plateau.</div>
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Capacity (Ah)</label>
                        <input
                            type="number"
                            className="w-full mt-1 p-2 bg-secondary/10 border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            value={cellConfig.nominalCapacityAh}
                            onChange={(e) => setCellConfig({ ...cellConfig, nominalCapacityAh: Number(e.target.value) })}
                        />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Mass (kg)</label>
                        <input
                            type="number"
                            step="0.1"
                            className="w-full mt-1 p-2 bg-secondary/10 border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            value={cellConfig.massKg}
                            onChange={(e) => setCellConfig({ ...cellConfig, massKg: Number(e.target.value) })}
                        />
                    </div>
                </div>
            </div>

            <hr className="border-border" />

            {/* Pack Configuration */}
            <div className="space-y-3">
                <div className="flex items-center gap-2 text-foreground font-semibold text-lg">
                    <Zap className="text-accent" size={20} />
                    <h3>Pack Configuration</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Series (S)</label>
                        <input
                            type="number"
                            className="w-full mt-1 p-2 bg-secondary/10 border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            value={packConfig.series}
                            onChange={(e) => setPackConfig({ ...packConfig, series: Number(e.target.value) })}
                        />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Parallel (P)</label>
                        <input
                            type="number"
                            className="w-full mt-1 p-2 bg-secondary/10 border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            value={packConfig.parallel}
                            onChange={(e) => setPackConfig({ ...packConfig, parallel: Number(e.target.value) })}
                        />
                    </div>
                </div>

                <div className="bg-secondary/10 rounded-lg p-3 border border-border flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Nominal Voltage</span>
                    <span className="font-mono font-bold text-foreground">{(cellConfig.nominalVoltage * packConfig.series).toFixed(1)} V</span>
                </div>
            </div>

            <hr className="border-border" />

            {/* Profile Settings */}
            <div className="space-y-3">
                <div className="flex items-center gap-2 text-foreground font-semibold text-lg">
                    <Settings className="text-muted-foreground" size={20} />
                    <h3>Test Profile</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {/* Simplified Profile Select */}
                    <div className="flex bg-secondary/10 p-1 rounded-lg gap-1 border border-border">
                        {['CC_DISCHARGE', 'CC_CHARGE'].map((p) => (
                            <button
                                key={p}
                                onClick={() => setSimParams({ ...simParams, profileType: p as any })}
                                className={`flex-1 py-1.5 px-3 rounded-md text-sm font-medium transition-all ${simParams.profileType === p ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                            >
                                {p === 'CC_DISCHARGE' ? 'Discharge' : 'Charge'}
                            </button>
                        ))}
                    </div>

                    <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Current (Amps)</label>
                        <div className="flex items-center gap-2 mt-1">
                            <input
                                type="number"
                                className="flex-1 p-2 bg-secondary/10 border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                value={simParams.currentAmps}
                                onChange={(e) => setSimParams({ ...simParams, currentAmps: Number(e.target.value) })}
                            />
                            <span className="text-sm font-mono text-muted-foreground bg-secondary/5 py-2 px-3 rounded-md border border-border">
                                {((simParams.currentAmps / packConfig.parallel) / cellConfig.nominalCapacityAh).toFixed(2)} C
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Duration (Sec)</label>
                        <input
                            type="number"
                            className="w-full mt-1 p-2 bg-secondary/10 border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            value={simParams.durationSeconds}
                            onChange={(e) => setSimParams({ ...simParams, durationSeconds: Number(e.target.value) })}
                        />
                    </div>
                </div>
            </div>

            <Button variant="primary" className="w-full mt-2" onClick={onSimulate}>
                <div className="flex items-center justify-center gap-2">
                    <ChevronsRight size={18} />
                    Run Simulation
                </div>
            </Button>

        </div>
    );
}

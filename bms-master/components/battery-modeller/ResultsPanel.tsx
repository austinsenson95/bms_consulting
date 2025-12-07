"use client";

import React from 'react';
import { SimulationResult } from '@/lib/battery/types';
import { Zap, Activity, Thermometer, BatteryCharging } from 'lucide-react';

export default function ResultsPanel({ data }: { data: SimulationResult | null }) {
    if (!data) return null;

    const { summary } = data;

    const Metric = ({ label, value, unit, icon: Icon, color }: any) => (
        <div className="bg-card border border-border p-4 rounded-xl flex items-center justify-between shadow-sm">
            <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{label}</p>
                <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-bold text-foreground">{typeof value === 'number' ? value.toLocaleString(undefined, { maximumFractionDigits: 1 }) : value}</span>
                    <span className="text-sm font-medium text-muted-foreground">{unit}</span>
                </div>
            </div>
            <div className={`p-3 rounded-full ${color.bg} ${color.text}`}>
                <Icon size={20} />
            </div>
        </div>
    );

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Metric
                label="Total Energy"
                value={summary.totalEnergyWh / 1000}
                unit="kWh"
                icon={Zap}
                color={{ bg: 'bg-primary/10', text: 'text-primary' }}
            />
            <Metric
                label="Peak Power"
                value={summary.maxPowerW / 1000}
                unit="kW"
                icon={Activity}
                color={{ bg: 'bg-accent/10', text: 'text-accent-foreground' }}
            />
            <Metric
                label="Max Temp"
                value={summary.maxTempC}
                unit="°C"
                icon={Thermometer}
                color={{ bg: 'bg-destructive/10', text: 'text-destructive' }}
            />
            <Metric
                label="Final SoC"
                value={(summary.finalSoC * 100).toFixed(1)}
                unit="%"
                icon={BatteryCharging}
                color={{ bg: 'bg-primary/10', text: 'text-primary' }}
            />
        </div>
    );
}

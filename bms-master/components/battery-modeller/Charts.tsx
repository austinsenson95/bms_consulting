"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { SimulationResult } from '@/lib/battery/types';

interface ChartsProps {
    data: SimulationResult | null;
}

const ChartCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">{title}</h4>
        <div className="h-64 w-full">
            {children}
        </div>
    </div>
);

export default function Charts({ data }: ChartsProps) {
    if (!data) {
        return (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground p-12 bg-secondary/10 border border-dashed border-border rounded-xl">
                <p>Run a simulation to see results.</p>
            </div>
        );
    }

    const { timeSeries } = data;

    // Downsample for performance if too many points
    const displayData = timeSeries.length > 500
        ? timeSeries.filter((_, i) => i % Math.ceil(timeSeries.length / 500) === 0)
        : timeSeries;

    // Rose Gold Theme Colors
    const colors = {
        primary: "#B76E79",
        accent: "#E2B5A3",
        secondary: "#64748b", // slate-500 equivalent
        destructive: "#ef4444"
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
            <ChartCard title="Pack Voltage">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={displayData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -5, fill: 'hsl(var(--muted-foreground))' }} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <YAxis domain={['auto', 'auto']} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <Tooltip
                            contentStyle={{ borderRadius: '0.75rem', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--foreground))', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Line type="monotone" dataKey="voltagePack" stroke={colors.primary} strokeWidth={2} dot={false} name="Voltage (V)" />
                    </LineChart>
                </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Current">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={displayData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -5, fill: 'hsl(var(--muted-foreground))' }} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <Tooltip contentStyle={{ borderRadius: '0.75rem', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--foreground))', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                        <Line type="stepAfter" dataKey="current" stroke={colors.accent} strokeWidth={2} dot={false} name="Current (A)" />
                    </LineChart>
                </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="State of Charge (SoC)">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={displayData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -5, fill: 'hsl(var(--muted-foreground))' }} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <YAxis domain={[0, 1]} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <Tooltip contentStyle={{ borderRadius: '0.75rem', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--foreground))', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                        <Line type="monotone" dataKey="soc" stroke={colors.secondary} strokeWidth={2} dot={false} name="SoC" />
                    </LineChart>
                </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Temperature">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={displayData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -5, fill: 'hsl(var(--muted-foreground))' }} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <YAxis domain={['auto', 'auto']} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <Tooltip contentStyle={{ borderRadius: '0.75rem', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--foreground))', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                        <Line type="monotone" dataKey="temperature" stroke={colors.destructive} strokeWidth={2} dot={false} name="Temp (°C)" />
                    </LineChart>
                </ResponsiveContainer>
            </ChartCard>
        </div>
    );
}

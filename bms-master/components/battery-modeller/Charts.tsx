"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SimulationResult } from '@/lib/battery/types';

interface ChartsProps {
    data: SimulationResult | null;
}

const ChartCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-card/80 border border-border/50 rounded-xl p-4 backdrop-blur-sm">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">{title}</h4>
        <div className="h-64 w-full">
            {children}
        </div>
    </div>
);

export default function Charts({ data }: ChartsProps) {
    if (!data) {
        return (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground p-12 bg-secondary/20 border border-dashed border-border/50 rounded-xl">
                <p>Run a simulation to see results.</p>
            </div>
        );
    }

    const { timeSeries } = data;

    const displayData = timeSeries.length > 500
        ? timeSeries.filter((_, i) => i % Math.ceil(timeSeries.length / 500) === 0)
        : timeSeries;

    // Dark Blueprint Theme Colors
    const colors = {
        primary: "#00FFCC",    // Electric Cyan
        accent: "#FFB800",     // Signal Amber
        secondary: "#64748b",  // Slate
        destructive: "#ef4444" // Red
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
            <ChartCard title="Pack Voltage">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={displayData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
                        <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -5, fill: 'hsl(var(--muted-foreground))' }} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <YAxis domain={['auto', 'auto']} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <Tooltip
                            contentStyle={{
                                borderRadius: '0.75rem',
                                border: '1px solid hsl(var(--border))',
                                backgroundColor: 'hsl(var(--card))',
                                color: 'hsl(var(--foreground))',
                                boxShadow: '0 4px 20px rgba(0, 255, 204, 0.1)'
                            }}
                        />
                        <Line type="monotone" dataKey="voltagePack" stroke={colors.primary} strokeWidth={2} dot={false} name="Voltage (V)" />
                    </LineChart>
                </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Current">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={displayData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
                        <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -5, fill: 'hsl(var(--muted-foreground))' }} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <Tooltip contentStyle={{ borderRadius: '0.75rem', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--foreground))', boxShadow: '0 4px 20px rgba(255, 184, 0, 0.1)' }} />
                        <Line type="stepAfter" dataKey="current" stroke={colors.accent} strokeWidth={2} dot={false} name="Current (A)" />
                    </LineChart>
                </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="State of Charge (SoC)">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={displayData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
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
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
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

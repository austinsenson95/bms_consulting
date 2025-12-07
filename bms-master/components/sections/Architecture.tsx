import React from 'react';
import Section from '../ui/Section';

export default function Architecture() {
    return (
        <Section id="architecture">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    System Architecture
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A modular, layered approach ensuring portability across MCUs and AFEs while maintaining strict safety boundaries.
                </p>
            </div>

            {/* Architecture Diagram */}
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col gap-4 text-center font-mono text-sm">

                    {/* Cloud Layer */}
                    <div className="p-4 rounded-xl border border-dashed border-border bg-secondary/10">
                        <span className="text-muted-foreground uppercase tracking-widest text-xs block mb-2">Cloud & Connectivity</span>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-card shadow-sm p-3 rounded text-primary border border-border">Fleet Analytics</div>
                            <div className="bg-card shadow-sm p-3 rounded text-primary border border-border">OTA Manager</div>
                            <div className="bg-card shadow-sm p-3 rounded text-primary border border-border">Digital Twin</div>
                        </div>
                    </div>

                    {/* Connection Lines */}
                    <div className="h-8 w-px bg-border mx-auto"></div>

                    {/* Application Layer */}
                    <div className="p-6 rounded-xl border border-primary/20 bg-card shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                        <span className="text-primary uppercase tracking-widest text-xs block mb-4">Application Layer</span>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="bg-secondary/10 p-4 rounded border border-border text-foreground">SoC / SoH / SoP</div>
                            <div className="bg-secondary/10 p-4 rounded border border-border text-foreground">Thermal Mgmt</div>
                            <div className="bg-secondary/10 p-4 rounded border border-border text-foreground">Charging Logic</div>
                            <div className="bg-secondary/10 p-4 rounded border border-border text-foreground">Fault Handler</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-secondary/5 p-3 rounded border border-border text-muted-foreground">Diagnostics (UDS/OBD)</div>
                            <div className="bg-secondary/5 p-3 rounded border border-border text-muted-foreground">Data Logging</div>
                        </div>
                    </div>

                    {/* RTE / Middleware */}
                    <div className="bg-secondary/20 p-3 rounded-lg border border-border text-muted-foreground tracking-wide">
                        RTE / Middleware / OS Abstraction
                    </div>

                    {/* BSW Layer */}
                    <div className="p-6 rounded-xl border border-accent/20 bg-card shadow-lg">
                        <span className="text-accent uppercase tracking-widest text-xs block mb-4">Basic Software (BSW)</span>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-secondary/10 p-3 rounded text-muted-foreground border border-border">RTOS (FreeRTOS)</div>
                            <div className="bg-secondary/10 p-3 rounded text-muted-foreground border border-border">CAN Stack</div>
                            <div className="bg-secondary/10 p-3 rounded text-muted-foreground border border-border">Memory Mgmt</div>
                            <div className="bg-secondary/10 p-3 rounded text-muted-foreground border border-border">IO Drivers</div>
                        </div>
                    </div>

                    {/* Hardware Layer */}
                    <div className="p-4 rounded-xl border border-border bg-secondary/10 mt-2">
                        <span className="text-muted-foreground uppercase tracking-widest text-xs block mb-2">Hardware Abstraction</span>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-card p-3 rounded border border-border text-muted-foreground shadow-sm">MCU (STM32/NXP)</div>
                            <div className="bg-card p-3 rounded border border-border text-muted-foreground shadow-sm">AFE (TI/ADI)</div>
                            <div className="bg-card p-3 rounded border border-border text-muted-foreground shadow-sm">Sensors / Actuators</div>
                        </div>
                    </div>

                </div>

                {/* Key Guarantees */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {[
                        { label: "Safety", val: "ISO-26262 Ready" },
                        { label: "Modularity", val: "Hardware Agnostic" },
                        { label: "Reliability", val: "Dual-Bank OTA" },
                        { label: "Quality", val: "100% Test Coverage" },
                    ].map((item, i) => (
                        <div key={i} className="text-center p-4 rounded-lg bg-card border border-border shadow-sm">
                            <div className="text-muted-foreground text-xs uppercase mb-1">{item.label}</div>
                            <div className="text-foreground font-semibold">{item.val}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

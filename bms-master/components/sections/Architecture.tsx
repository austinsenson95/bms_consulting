import React from 'react';
import Section from '../ui/Section';

export default function Architecture() {
    return (
        <Section id="architecture">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    System Architecture
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    A modular, layered approach ensuring portability across MCUs and AFEs while maintaining strict safety boundaries.
                </p>
            </div>

            {/* Architecture Diagram */}
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col gap-4 text-center font-mono text-sm">

                    {/* Cloud Layer */}
                    <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50">
                        <span className="text-slate-500 uppercase tracking-widest text-xs block mb-2">Cloud & Connectivity</span>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white shadow-sm p-3 rounded text-purple-600 border border-slate-200">Fleet Analytics</div>
                            <div className="bg-white shadow-sm p-3 rounded text-purple-600 border border-slate-200">OTA Manager</div>
                            <div className="bg-white shadow-sm p-3 rounded text-purple-600 border border-slate-200">Digital Twin</div>
                        </div>
                    </div>

                    {/* Connection Lines */}
                    <div className="h-8 w-px bg-slate-300 mx-auto"></div>

                    {/* Application Layer */}
                    <div className="p-6 rounded-xl border border-brand-accent/20 bg-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent"></div>
                        <span className="text-brand-accent uppercase tracking-widest text-xs block mb-4">Application Layer</span>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="bg-slate-50 p-4 rounded border border-slate-200 text-slate-900">SoC / SoH / SoP</div>
                            <div className="bg-slate-50 p-4 rounded border border-slate-200 text-slate-900">Thermal Mgmt</div>
                            <div className="bg-slate-50 p-4 rounded border border-slate-200 text-slate-900">Charging Logic</div>
                            <div className="bg-slate-50 p-4 rounded border border-slate-200 text-slate-900">Fault Handler</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-3 rounded border border-slate-200 text-slate-600">Diagnostics (UDS/OBD)</div>
                            <div className="bg-slate-50 p-3 rounded border border-slate-200 text-slate-600">Data Logging</div>
                        </div>
                    </div>

                    {/* RTE / Middleware */}
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-300 text-slate-600 tracking-wide">
                        RTE / Middleware / OS Abstraction
                    </div>

                    {/* BSW Layer */}
                    <div className="p-6 rounded-xl border border-brand-secondary/20 bg-white shadow-lg">
                        <span className="text-brand-secondary uppercase tracking-widest text-xs block mb-4">Basic Software (BSW)</span>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-slate-50 p-3 rounded text-slate-600 border border-slate-200">RTOS (FreeRTOS)</div>
                            <div className="bg-slate-50 p-3 rounded text-slate-600 border border-slate-200">CAN Stack</div>
                            <div className="bg-slate-50 p-3 rounded text-slate-600 border border-slate-200">Memory Mgmt</div>
                            <div className="bg-slate-50 p-3 rounded text-slate-600 border border-slate-200">IO Drivers</div>
                        </div>
                    </div>

                    {/* Hardware Layer */}
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 mt-2">
                        <span className="text-slate-600 uppercase tracking-widest text-xs block mb-2">Hardware Abstraction</span>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white p-3 rounded border border-slate-200 text-slate-500 shadow-sm">MCU (STM32/NXP)</div>
                            <div className="bg-white p-3 rounded border border-slate-200 text-slate-500 shadow-sm">AFE (TI/ADI)</div>
                            <div className="bg-white p-3 rounded border border-slate-200 text-slate-500 shadow-sm">Sensors / Actuators</div>
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
                        <div key={i} className="text-center p-4 rounded-lg bg-white border border-slate-200 shadow-sm">
                            <div className="text-slate-500 text-xs uppercase mb-1">{item.label}</div>
                            <div className="text-slate-900 font-semibold">{item.val}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

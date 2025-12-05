import React from 'react';
import { ArrowRight, Download, Cpu, Zap, Activity, BatteryCharging } from 'lucide-react';
import Button from './ui/Button';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements - STRICT LIGHT MODE: No dark gradients, subtle teal accents only */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] opacity-40" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-brand-secondary/5 rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-semibold tracking-wide uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                        </span>
                        Production Ready Firmware Stack
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                        Full-Stack <br />
                        <span className="text-brand-accent">
                            BMS Platform
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                        From AFE drivers to Cloud AI. We provide end-to-end engineering services for EVs, Energy Storage, and Mobility.
                        <span className="block mt-2 text-slate-900 font-medium">
                            Safety-critical. ISO-26262 ready. Scalable.
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" href="#contact" className="group">
                            Schedule Discovery Call
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="group">
                            <Download className="mr-2 w-4 h-4" />
                            Service Overview
                        </Button>
                    </div>

                    <div className="pt-8 flex items-center gap-8 text-slate-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <Cpu size={18} className="text-brand-accent" />
                            <span>STM32 / NXP / TI</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap size={18} className="text-brand-accent" />
                            <span>AUTOSAR / RTOS</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Activity size={18} className="text-brand-accent" />
                            <span>MATLAB / Simulink</span>
                        </div>
                    </div>
                </div>

                {/* Visual / Abstract Graphic */}
                <div className="relative hidden lg:block">
                    <div className="relative w-full aspect-square max-w-lg mx-auto">
                        {/* Central Core */}
                        <div className="absolute inset-0 m-auto w-64 h-64 bg-white rounded-2xl border border-slate-200 shadow-[0_20px_40px_rgba(2,6,23,0.08)] flex items-center justify-center z-20">
                            <div className="text-center">
                                <BatteryCharging size={64} className="text-brand-accent mx-auto mb-2" />
                                <div className="text-slate-900 font-bold text-xl">Core BMS</div>
                                <div className="text-slate-500 text-sm">Firmware v2.0</div>
                            </div>
                        </div>

                        {/* Orbiting Elements */}
                        <div className="absolute inset-0 m-auto w-96 h-96 border border-slate-200 rounded-full animate-[spin_20s_linear_infinite] z-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-slate-200 shadow-lg rounded-lg flex items-center justify-center text-xs text-slate-500">
                                AFE
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white border border-slate-200 shadow-lg rounded-lg flex items-center justify-center text-xs text-slate-500">
                                OTA
                            </div>
                        </div>

                        <div className="absolute inset-0 m-auto w-[500px] h-[500px] border border-slate-200/50 rounded-full animate-[spin_30s_linear_infinite_reverse] z-0">
                            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-slate-200 shadow-lg rounded-lg flex items-center justify-center text-xs text-slate-500">
                                Cloud
                            </div>
                            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-slate-200 shadow-lg rounded-lg flex items-center justify-center text-xs text-slate-500">
                                HMI
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

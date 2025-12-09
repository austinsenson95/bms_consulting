"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Cpu, Zap, Activity, BatteryCharging, Terminal, Shield, Gauge } from 'lucide-react';
import Button from '../ui/Button';

// Animated grid background component
const AnimatedGrid = () => (
    <div className="absolute inset-0 overflow-hidden">
        {/* Main radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />

        {/* Animated circuit traces */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="trace-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="hsl(165 100% 50%)" />
                    <stop offset="100%" stopColor="transparent" />
                </linearGradient>
            </defs>
            {/* Horizontal traces */}
            {[20, 35, 65, 80].map((y, i) => (
                <motion.line
                    key={`h-${i}`}
                    x1="0%"
                    y1={`${y}%`}
                    x2="100%"
                    y2={`${y}%`}
                    stroke="url(#trace-gradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatDelay: 3 }}
                />
            ))}
            {/* Vertical traces */}
            {[15, 40, 60, 85].map((x, i) => (
                <motion.line
                    key={`v-${i}`}
                    x1={`${x}%`}
                    y1="0%"
                    x2={`${x}%`}
                    y2="100%"
                    stroke="hsl(165 100% 50% / 0.1)"
                    strokeWidth="1"
                />
            ))}
        </svg>
    </div>
);

// Floating tech nodes
const FloatingNodes = () => {
    const nodes = [
        { x: '10%', y: '20%', label: 'AFE', delay: 0 },
        { x: '85%', y: '30%', label: 'OTA', delay: 0.5 },
        { x: '15%', y: '70%', label: 'CAN', delay: 1 },
        { x: '80%', y: '75%', label: 'SoC', delay: 1.5 },
        { x: '50%', y: '15%', label: 'RTOS', delay: 2 },
    ];

    return (
        <>
            {nodes.map((node, i) => (
                <motion.div
                    key={i}
                    className="absolute hidden lg:flex items-center justify-center"
                    style={{ left: node.x, top: node.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: node.delay + 0.5, duration: 0.5, ease: "backOut" }}
                >
                    <motion.div
                        className="w-16 h-16 rounded-xl bg-card/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center font-mono text-xs text-primary shadow-glow-sm"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
                    >
                        {node.label}
                    </motion.div>
                </motion.div>
            ))}
        </>
    );
};

// Central core visualization
const CoreVisual = () => (
    <motion.div
        className="relative w-full max-w-md mx-auto aspect-square"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
    >
        {/* Outer rotating ring */}
        <motion.div
            className="absolute inset-0 rounded-full border border-primary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-glow" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-glow-amber" />
        </motion.div>

        {/* Middle ring */}
        <motion.div
            className="absolute inset-8 rounded-full border border-primary/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-lg bg-card border border-primary/40 shadow-glow-sm" />
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-lg bg-card border border-accent/40 shadow-glow-amber" />
        </motion.div>

        {/* Inner pulsing core */}
        <motion.div
            className="absolute inset-16 rounded-2xl bg-gradient-to-br from-card via-card to-secondary border border-primary/30 shadow-glow flex flex-col items-center justify-center"
            animate={{
                boxShadow: [
                    "0 0 20px hsla(165, 100%, 50%, 0.2), 0 0 40px hsla(165, 100%, 50%, 0.1)",
                    "0 0 40px hsla(165, 100%, 50%, 0.3), 0 0 80px hsla(165, 100%, 50%, 0.15)",
                    "0 0 20px hsla(165, 100%, 50%, 0.2), 0 0 40px hsla(165, 100%, 50%, 0.1)",
                ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
            <BatteryCharging className="w-16 h-16 text-primary mb-2" strokeWidth={1.5} />
            <div className="text-foreground font-bold text-xl tracking-tight">Core BMS</div>
            <div className="text-primary/80 text-sm font-mono">v2.0.4</div>
        </motion.div>

        {/* Data flow particles */}
        {[0, 1, 2, 3].map((i) => (
            <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary/60"
                style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: `${80 + i * 20}px 0px`
                }}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5
                }}
            />
        ))}
    </motion.div>
);

// Tech stack badges
const TechBadge = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
    <motion.div
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50 backdrop-blur-sm"
        whileHover={{ scale: 1.05, borderColor: "hsl(165 100% 50% / 0.3)" }}
        transition={{ duration: 0.2 }}
    >
        <Icon size={16} className="text-primary" />
        <span className="text-sm text-muted-foreground font-medium">{label}</span>
    </motion.div>
);

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
            <AnimatedGrid />
            <FloatingNodes />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Text Content */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    {/* Status indicator */}
                    <motion.div
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                        </span>
                        <span className="text-sm font-mono text-primary tracking-wide">
                            <Terminal className="inline w-3 h-3 mr-1.5" />
                            PRODUCTION_READY
                        </span>
                    </motion.div>

                    {/* Main headline */}
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                    >
                        Full-Stack <br />
                        <span className="text-gradient-cyan">
                            BMS Platform
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    >
                        From AFE drivers to Cloud AI. End-to-end engineering for
                        <span className="text-foreground font-medium"> EVs</span>,
                        <span className="text-foreground font-medium"> Energy Storage</span>, and
                        <span className="text-foreground font-medium"> Mobility</span>.
                    </motion.p>

                    {/* Key features */}
                    <motion.div
                        className="flex flex-wrap gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {[
                            { icon: Shield, label: "ISO 26262 Ready" },
                            { icon: Gauge, label: "ASIL-B/C" },
                            { icon: Zap, label: "Real-time" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + i * 0.1 }}
                            >
                                <item.icon size={14} />
                                {item.label}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 pt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Button variant="glow" size="lg" href="#contact" className="group">
                            Schedule Discovery Call
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="group">
                            <Download className="w-4 h-4" />
                            Service Overview
                        </Button>
                    </motion.div>

                    {/* Tech stack */}
                    <motion.div
                        className="pt-6 flex flex-wrap items-center gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <TechBadge icon={Cpu} label="STM32 / NXP / TI" />
                        <TechBadge icon={Zap} label="AUTOSAR / RTOS" />
                        <TechBadge icon={Activity} label="MATLAB / Simulink" />
                    </motion.div>
                </motion.div>

                {/* Visual */}
                <motion.div
                    className="relative hidden lg:block"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <CoreVisual />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div
                    className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1.5 h-3 rounded-full bg-primary"
                        animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}

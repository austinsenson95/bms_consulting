"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Cloud, Cpu, Database, Layers, Settings, Shield, Zap, Server, HardDrive, Radio } from 'lucide-react';

const layers = [
    {
        name: "Cloud & Connectivity",
        color: "primary",
        type: "cloud",
        items: [
            { name: "Fleet Analytics", icon: Database },
            { name: "OTA Manager", icon: Cloud },
            { name: "Digital Twin", icon: Layers },
        ]
    },
    {
        name: "Application Layer",
        color: "primary",
        type: "main",
        items: [
            { name: "SoC / SoH / SoP", icon: Zap },
            { name: "Thermal Mgmt", icon: Settings },
            { name: "Charging Logic", icon: Zap },
            { name: "Fault Handler", icon: Shield },
        ],
        subItems: [
            { name: "Diagnostics (UDS/OBD)", icon: Settings },
            { name: "Data Logging", icon: Database },
        ]
    },
    {
        name: "RTE / Middleware / OS Abstraction",
        color: "muted",
        type: "middleware",
    },
    {
        name: "Basic Software (BSW)",
        color: "accent",
        type: "bsw",
        items: [
            { name: "RTOS (FreeRTOS)", icon: Server },
            { name: "CAN Stack", icon: Radio },
            { name: "Memory Mgmt", icon: HardDrive },
            { name: "IO Drivers", icon: Settings },
        ]
    },
    {
        name: "Hardware Abstraction",
        color: "muted",
        type: "hardware",
        items: [
            { name: "MCU (STM32/NXP)", icon: Cpu },
            { name: "AFE (TI/ADI)", icon: Zap },
            { name: "Sensors / Actuators", icon: Settings },
        ]
    }
];

const guarantees = [
    { label: "Safety", val: "ISO-26262 Ready", icon: Shield },
    { label: "Modularity", val: "Hardware Agnostic", icon: Layers },
    { label: "Reliability", val: "Dual-Bank OTA", icon: Cloud },
    { label: "Quality", val: "100% Coverage", icon: Zap },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Architecture() {
    return (
        <Section id="architecture" pattern="circuit">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono uppercase tracking-wider mb-6"
                >
                    <Layers size={12} />
                    System Design
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                    Layered{' '}
                    <span className="text-gradient-amber">Architecture</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A modular, AUTOSAR-inspired approach ensuring portability across MCUs and AFEs
                    while maintaining strict safety boundaries.
                </p>
            </motion.div>

            {/* Architecture Diagram */}
            <motion.div
                className="max-w-4xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="flex flex-col gap-3 font-mono text-sm">
                    {layers.map((layer, idx) => (
                        <motion.div key={idx} variants={itemVariants}>
                            {/* Connection line */}
                            {idx > 0 && (
                                <div className="h-6 w-px bg-gradient-to-b from-border to-transparent mx-auto -mb-3 relative z-0">
                                    <motion.div
                                        className="absolute inset-0 w-px bg-primary/50"
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                    />
                                </div>
                            )}

                            {layer.type === "middleware" ? (
                                <div className="bg-secondary/30 backdrop-blur-sm p-4 rounded-lg border border-border/50 text-center text-muted-foreground tracking-wide hover:border-primary/30 transition-colors">
                                    {layer.name}
                                </div>
                            ) : (
                                <div className={`
                                    p-6 rounded-xl border backdrop-blur-sm relative overflow-hidden
                                    ${layer.type === "main"
                                        ? 'bg-card/80 border-primary/30 shadow-glow-sm'
                                        : layer.type === "bsw"
                                            ? 'bg-card/60 border-accent/30 shadow-glow-amber'
                                            : 'bg-card/40 border-border/50'
                                    }
                                `}>
                                    {/* Left accent bar for main layers */}
                                    {(layer.type === "main" || layer.type === "bsw") && (
                                        <div className={`absolute top-0 left-0 w-1 h-full ${layer.type === "main" ? 'bg-primary' : 'bg-accent'
                                            }`} />
                                    )}

                                    <span className={`
                                        uppercase tracking-widest text-xs block mb-4 font-medium
                                        ${layer.color === "primary" ? 'text-primary' : layer.color === "accent" ? 'text-accent' : 'text-muted-foreground'}
                                    `}>
                                        {layer.name}
                                    </span>

                                    {layer.items && (
                                        <div className={`grid gap-3 ${layer.items.length > 3 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-3'
                                            }`}>
                                            {layer.items.map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    className={`
                                                        flex items-center gap-2 p-3 rounded-lg border transition-all cursor-default
                                                        ${layer.type === "main"
                                                            ? 'bg-secondary/50 border-border/50 hover:border-primary/30 text-foreground'
                                                            : layer.type === "bsw"
                                                                ? 'bg-secondary/30 border-border/50 hover:border-accent/30 text-muted-foreground'
                                                                : 'bg-card/50 border-border/50 hover:border-primary/20 text-muted-foreground'
                                                        }
                                                    `}
                                                    whileHover={{ scale: 1.02, y: -2 }}
                                                >
                                                    <item.icon size={14} className={
                                                        layer.type === "main" ? 'text-primary/70' :
                                                            layer.type === "bsw" ? 'text-accent/70' : 'text-muted-foreground'
                                                    } />
                                                    <span className="text-xs">{item.name}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}

                                    {layer.subItems && (
                                        <div className="grid md:grid-cols-2 gap-3 mt-4">
                                            {layer.subItems.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-2 p-2 rounded-lg bg-secondary/30 border border-border/30 text-muted-foreground text-xs"
                                                >
                                                    <item.icon size={12} className="text-primary/50" />
                                                    {item.name}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Key Guarantees */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {guarantees.map((item, i) => (
                        <motion.div
                            key={i}
                            className="text-center p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all group"
                            variants={itemVariants}
                            whileHover={{ y: -4, scale: 1.02 }}
                        >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:shadow-glow-sm transition-shadow">
                                <item.icon size={18} className="text-primary" />
                            </div>
                            <div className="text-muted-foreground text-xs uppercase tracking-wider mb-1 font-mono">{item.label}</div>
                            <div className="text-foreground font-semibold">{item.val}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Section>
    );
}

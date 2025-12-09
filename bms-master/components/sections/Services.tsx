"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Layers, Wrench, ShieldCheck, BrainCircuit, ChevronRight, Cpu, Zap, Server, Lock, FlaskConical, GitBranch, Rocket, Brain, Cloud, Settings2, FileCode } from 'lucide-react';

const services = [
    {
        category: "Core Firmware Stack",
        icon: Layers,
        color: "cyan",
        size: "large",
        items: [
            { icon: Cpu, title: "BMS Data Collection & AFE", desc: "Drivers for TI, NXP, ADI AFEs with robust error handling." },
            { icon: Zap, title: "BMS Algorithms", desc: "SoC (EKF), SoH, SoP, and cell balancing logic." },
            { icon: Server, title: "RTOS Integration", desc: "FreeRTOS/Zephyr task design with priority scheduling." },
            { icon: Settings2, title: "Hardware Drivers", desc: "Low-level drivers for CAN, SPI, I2C, and peripherals." },
        ]
    },
    {
        category: "Production & DevOps",
        icon: Wrench,
        color: "amber",
        size: "small",
        items: [
            { icon: GitBranch, title: "Automated Build System", desc: "Dockerized build environments for reproducible firmware." },
            { icon: Rocket, title: "CI/CD Pipelines", desc: "GitLab/GitHub Actions integration with HIL testing." },
            { icon: Cloud, title: "Bootloader & OTA", desc: "Secure FOTA/COTA with dual-bank rollback support." },
            { icon: FileCode, title: "Configurable Manifests", desc: "Single codebase for multiple pack variants." },
        ]
    },
    {
        category: "Safety & Assurance",
        icon: ShieldCheck,
        color: "cyan",
        size: "small",
        items: [
            { icon: Lock, title: "ISO 26262 Compliance", desc: "Safety goals (ASIL-B/C) and functional safety patterns." },
            { icon: FlaskConical, title: "Module Unit Tests", desc: "100% code coverage with Ceedling/GoogleTest." },
            { icon: FileCode, title: "Static Analysis", desc: "MISRA-C 2012 compliance and cyclomatic complexity checks." },
            { icon: Settings2, title: "Diagnostics Stack", desc: "UDS (ISO 14229) and OBD-II support." },
        ]
    },
    {
        category: "Intelligence & Analytics",
        icon: BrainCircuit,
        color: "amber",
        size: "large",
        items: [
            { icon: Brain, title: "Edge AI Stack", desc: "On-chip inference for anomaly detection and aging models." },
            { icon: Cloud, title: "Fleet Insights", desc: "Cloud connectors for telemetry and predictive maintenance." },
            { icon: Zap, title: "Self-Recovery", desc: "Advanced fault handling and limp-home strategies." },
            { icon: Cpu, title: "Simulink Integration", desc: "Model-Based Design (MBD) code generation workflow." },
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
};

interface ServiceCardProps {
    service: typeof services[0];
    index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
    const Icon = service.icon;
    const isLarge = service.size === "large";
    const isCyan = service.color === "cyan";

    return (
        <motion.div
            variants={cardVariants}
            className={`
                relative group
                ${isLarge ? 'md:col-span-2 lg:row-span-1' : 'md:col-span-1'}
            `}
        >
            {/* Card container */}
            <div className={`
                h-full p-6 md:p-8 rounded-2xl
                bg-card/60 backdrop-blur-md
                border border-border/50
                transition-all duration-500 ease-out
                hover:border-${isCyan ? 'primary' : 'accent'}/40
                hover:shadow-${isCyan ? 'glow' : 'glow-amber'}
                overflow-hidden
                relative
            `}>
                {/* Corner markers */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />

                {/* Background glow on hover */}
                <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-br ${isCyan ? 'from-primary/5 via-transparent to-transparent' : 'from-accent/5 via-transparent to-transparent'}
                `} />

                {/* Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                    <motion.div
                        className={`
                            p-3 rounded-xl
                            ${isCyan
                                ? 'bg-primary/10 border border-primary/20 text-primary'
                                : 'bg-accent/10 border border-accent/20 text-accent'
                            }
                            group-hover:shadow-glow-sm transition-shadow duration-300
                        `}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </motion.div>
                    <div>
                        <h3 className="text-xl font-bold text-foreground tracking-tight">{service.category}</h3>
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                            {service.items.length} capabilities
                        </p>
                    </div>
                </div>

                {/* Items grid */}
                <div className={`grid gap-4 relative z-10 ${isLarge ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                    {service.items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/30 transition-colors duration-200"
                            whileHover={{ x: 4 }}
                        >
                            <item.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isCyan ? 'text-primary/70' : 'text-accent/70'}`} />
                            <div className="min-w-0">
                                <h4 className={`text-sm font-semibold ${isCyan ? 'text-primary' : 'text-accent'} truncate`}>
                                    {item.title}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Explore link */}
                <motion.div
                    className={`
                        mt-6 pt-4 border-t border-border/50
                        flex items-center gap-2 text-sm font-medium
                        ${isCyan ? 'text-primary/80 hover:text-primary' : 'text-accent/80 hover:text-accent'}
                        cursor-pointer transition-colors relative z-10
                    `}
                    whileHover={{ x: 4 }}
                >
                    <span className="font-mono text-xs uppercase tracking-wider">Explore capabilities</span>
                    <ChevronRight className="w-4 h-4" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default function Services() {
    return (
        <Section id="services" darker pattern="grid">
            {/* Section header */}
            <motion.div
                className="text-center max-w-3xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Engineering Stack
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                    Full-Spectrum{' '}
                    <span className="text-gradient-cyan">Capabilities</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    We deliver the complete software lifecycle for battery systems.
                    <br className="hidden sm:block" />
                    From bare-metal drivers to cloud-connected intelligence.
                </p>
            </motion.div>

            {/* Bento grid */}
            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* Custom layout: Large cards span 2 cols, small cards span 1 */}
                <ServiceCard service={services[0]} index={0} /> {/* Core Firmware - Large */}
                <ServiceCard service={services[1]} index={1} /> {/* Production - Small */}
                <ServiceCard service={services[2]} index={2} /> {/* Safety - Small */}
                <ServiceCard service={services[3]} index={3} /> {/* Intelligence - Large */}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                <p className="text-muted-foreground text-sm font-mono mb-4">
                    // Need something custom? Let&apos;s architect it together.
                </p>
                <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                    whileHover={{ x: 4 }}
                >
                    Discuss your requirements
                    <ChevronRight className="w-4 h-4" />
                </motion.a>
            </motion.div>
        </Section>
    );
}

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Search, Compass, Rocket, GitBranch, FlaskConical, Package, ChevronRight } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: "Discovery & Requirements",
        desc: "We map your vehicle/storage specs to BMS requirements. Deep-dive into pack topology, safety needs, and performance targets.",
        color: "primary"
    },
    {
        icon: Compass,
        title: "Architecture Design",
        desc: "Safety concept (HARA), component selection, and stack planning. Define interfaces and safety boundaries.",
        color: "accent"
    },
    {
        icon: Rocket,
        title: "Pilot Implementation",
        desc: "Rapid prototyping on reference hardware (Nucleo/Launchpad). Validate algorithms and communication stacks.",
        color: "primary"
    },
    {
        icon: GitBranch,
        title: "Integration & CI/CD",
        desc: "Porting to custom hardware and setting up automated pipelines. Docker builds, HIL runners, and test automation.",
        color: "accent"
    },
    {
        icon: FlaskConical,
        title: "Validation & Testing",
        desc: "HIL testing, environmental validation, and pack-level tuning. Full coverage and compliance documentation.",
        color: "primary"
    },
    {
        icon: Package,
        title: "SOP & Support",
        desc: "Production release, OTA setup, and long-term maintenance. Your firmware, production-ready and future-proof.",
        color: "accent"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Process() {
    return (
        <Section id="process" darker pattern="dots">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left column - Header */}
                <motion.div
                    className="lg:sticky lg:top-32"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-6"
                    >
                        <GitBranch size={12} />
                        Methodology
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                        Engagement{' '}
                        <span className="text-gradient-cyan">Model</span>
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        From concept to mass production. We integrate seamlessly with your engineering
                        team using a battle-tested methodology.
                    </p>

                    <div className="hidden lg:block">
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                            whileHover={{ x: 4 }}
                        >
                            Start your project
                            <ChevronRight size={16} />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right column - Steps */}
                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Vertical timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

                    <div className="space-y-6">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className="relative pl-16"
                                variants={itemVariants}
                            >
                                {/* Timeline node */}
                                <motion.div
                                    className={`
                                        absolute left-0 top-0 w-12 h-12 rounded-xl border-2 
                                        flex items-center justify-center z-10
                                        ${step.color === "primary"
                                            ? 'bg-card border-primary/40 shadow-glow-sm'
                                            : 'bg-card border-accent/40 shadow-glow-amber'
                                        }
                                    `}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <step.icon size={20} className={
                                        step.color === "primary" ? 'text-primary' : 'text-accent'
                                    } />
                                </motion.div>

                                {/* Content card */}
                                <motion.div
                                    className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all"
                                    whileHover={{ x: 4, scale: 1.01 }}
                                >
                                    <div className={`
                                        text-xs font-mono mb-2 uppercase tracking-wider
                                        ${step.color === "primary" ? 'text-primary' : 'text-accent'}
                                    `}>
                                        Phase 0{idx + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.desc}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}

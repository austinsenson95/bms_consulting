"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { CheckCircle2, Award, Users, Zap, Battery, Shield } from 'lucide-react';

const highlights = [
    "10+ years in Automotive & Energy Storage",
    "Expertise in Functional Safety (ISO 26262)",
    "Track record of scaling from prototype to production",
    "Shipped millions of battery packs globally"
];

const stats = [
    { value: "50+", label: "Projects", icon: Zap },
    { value: "1GWh+", label: "Managed", icon: Battery },
    { value: "10+", label: "Years", icon: Award },
    { value: "100%", label: "Remote", icon: Users },
];

export default function About() {
    return (
        <Section id="about" pattern="circuit">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-6"
                    >
                        <Shield size={12} />
                        About Us
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                        Built by{' '}
                        <span className="text-gradient-cyan">BMS Engineers</span>
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        We are a team of senior embedded engineers and systems architects who have
                        shipped millions of battery packs for automotive and industrial OEMs. We
                        understand the pain of legacy codebases and rigid tools.
                    </p>

                    <div className="space-y-4">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-foreground">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right - Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={i}
                                    className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 text-center hover:border-primary/30 transition-all group"
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-sm transition-shadow">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-4xl font-bold text-foreground mb-1 text-gradient-cyan">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}

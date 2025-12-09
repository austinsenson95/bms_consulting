"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Code2, Cpu, Database, GitBranch, Server, Wifi } from 'lucide-react';

const categories = [
    {
        name: "Languages",
        icon: Code2,
        items: ["C / Embedded C++", "Rust", "Python", "MATLAB / Simulink"],
    },
    {
        name: "RTOS & Frameworks",
        icon: Server,
        items: ["FreeRTOS", "Zephyr", "AUTOSAR", "Linux"],
    },
    {
        name: "MCU Platforms",
        icon: Cpu,
        items: ["STM32", "NXP S32K", "TI C2000", "Infineon Aurix"],
    },
    {
        name: "Protocols",
        icon: Wifi,
        items: ["CAN / CAN-FD", "Modbus", "MQTT", "Protobuf"],
    },
    {
        name: "DevOps",
        icon: GitBranch,
        items: ["GitLab CI", "Docker", "Jenkins", "Grafana"],
    },
    {
        name: "Tools",
        icon: Database,
        items: ["Trace32", "Segger", "Vector CANoe", "dSpace"],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

export default function TechStack() {
    return (
        <Section id="tech-stack" darker pattern="dots">
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-6"
                >
                    <Code2 size={12} />
                    Stack
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                    Technology{' '}
                    <span className="text-gradient-cyan">Stack</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Industry-standard tools for building reliable, maintainable embedded systems.
                </p>
            </motion.div>

            {/* Categories grid */}
            <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {categories.map((category, idx) => {
                    const Icon = category.icon;
                    return (
                        <motion.div
                            key={idx}
                            className="p-5 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all"
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Icon size={16} className="text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground">{category.name}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((tech, i) => (
                                    <motion.span
                                        key={i}
                                        className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground text-xs font-medium hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </Section>
    );
}

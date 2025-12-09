"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, GitBranch, Cloud, Shield } from 'lucide-react';

const features = [
    {
        icon: Cpu,
        title: "Automated HIL",
        description: "Flash target hardware and run driving cycles automatically.",
        colSpan: "col-span-1 md:col-span-2",
        color: "primary"
    },
    {
        icon: GitBranch,
        title: "Traceability",
        description: "Link every binary back to specific Simulink model versions.",
        colSpan: "col-span-1",
        color: "accent"
    },
    {
        icon: Cloud,
        title: "Cloud Runners",
        description: "Scalable build environments for massive firmware compilation.",
        colSpan: "col-span-1",
        color: "primary"
    },
    {
        icon: Shield,
        title: "MISRA C Compliance",
        description: "Automated static analysis gates before every merge.",
        colSpan: "col-span-1 md:col-span-2",
        color: "accent"
    }
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

export default function TraceflowServices() {
    return (
        <section id="features" className="py-24 bg-background relative">
            <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Engineered for <span className="text-gradient-cyan">Automotive Excellence</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Replace fragile scripts with a robust, enterprise-grade CI/CD platform built for the complexities of modern vehicle software.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => {
                        const isCyan = feature.color === "primary";
                        return (
                            <motion.div
                                key={index}
                                className={`
                                    ${feature.colSpan} p-8 rounded-2xl 
                                    bg-card/60 backdrop-blur-sm
                                    border border-border/50
                                    hover:border-${isCyan ? 'primary' : 'accent'}/40
                                    hover:shadow-${isCyan ? 'glow' : 'glow-amber'}
                                    transition-all duration-300
                                    group
                                `}
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                            >
                                <motion.div
                                    className={`
                                        w-12 h-12 rounded-xl flex items-center justify-center mb-6
                                        ${isCyan ? 'bg-primary/10 border-primary/20' : 'bg-accent/10 border-accent/20'}
                                        border
                                        group-hover:shadow-glow-sm transition-shadow
                                    `}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <feature.icon className={`w-6 h-6 ${isCyan ? 'text-primary' : 'text-accent'}`} />
                                </motion.div>
                                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Bike, Factory, Zap, Truck, ArrowUpRight, Battery, Building2 } from 'lucide-react';

const cases = [
    {
        icon: Bike,
        title: "Light Electric Mobility",
        desc: "Cost-optimized BMS for 2W/3W scooters. Focus on robust protection and simple swapping logic.",
        stats: "30% faster TTM",
        color: "primary",
    },
    {
        icon: Battery,
        title: "Stationary Storage",
        desc: "High-voltage stackable architecture for residential and grid-scale ESS. Modbus TCP/IP integration.",
        stats: "99.9% Uptime",
        color: "accent",
    },
    {
        icon: Truck,
        title: "Commercial Vehicles",
        desc: "Heavy-duty BMS with ISO-26262 ASIL-C compliance. Multi-string management and thermal modeling.",
        stats: "ASIL-C Ready",
        color: "primary",
    },
    {
        icon: Building2,
        title: "Industrial Robotics",
        desc: "Compact, high-discharge BMS for AGVs and forklifts. CANopen integration and rapid charging.",
        stats: "Custom Form Factors",
        color: "accent",
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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
};

export default function UseCases() {
    return (
        <Section id="use-cases" pattern="grid">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono uppercase tracking-wider mb-6"
                >
                    <Zap size={12} />
                    Applications
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                    Industry{' '}
                    <span className="text-gradient-amber">Use Cases</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    From micro-mobility to grid-scale storage. We adapt our stack to your specific requirements.
                </p>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {cases.map((item, idx) => {
                    const Icon = item.icon;
                    const isCyan = item.color === "primary";

                    return (
                        <motion.div
                            key={idx}
                            className="group relative"
                            variants={itemVariants}
                        >
                            <div className={`
                                h-full p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50
                                hover:border-${isCyan ? 'primary' : 'accent'}/40
                                transition-all duration-300 cursor-default
                                hover:shadow-${isCyan ? 'glow' : 'glow-amber'}
                            `}>
                                {/* Icon */}
                                <motion.div
                                    className={`
                                        mb-4 p-3 rounded-xl w-fit
                                        ${isCyan
                                            ? 'bg-primary/10 border border-primary/20'
                                            : 'bg-accent/10 border border-accent/20'
                                        }
                                        group-hover:shadow-glow-sm transition-shadow
                                    `}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <Icon className={`w-6 h-6 ${isCyan ? 'text-primary' : 'text-accent'}`} />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.desc}</p>

                                {/* Stats badge */}
                                <div className={`
                                    inline-flex items-center gap-2 px-3 py-1.5 rounded-lg
                                    ${isCyan ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}
                                    text-xs font-mono uppercase tracking-wider
                                `}>
                                    {item.stats}
                                </div>

                                {/* Hover arrow */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight size={16} className={isCyan ? 'text-primary' : 'text-accent'} />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </Section>
    );
}

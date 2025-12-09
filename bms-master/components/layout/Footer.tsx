"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Github, Linkedin, Twitter, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
    services: [
        { name: 'Core Firmware', href: '/#services' },
        { name: 'Safety & Compliance', href: '/#services' },
        { name: 'Production DevOps', href: '/#services' },
        { name: 'Intelligence', href: '/#services' },
    ],
    tools: [
        { name: 'TraceFlow', href: '/traceflow' },
        { name: 'Battery Modeller', href: '/battery-modeller' },
    ],
    resources: [
        { name: 'Architecture', href: '/#architecture' },
        { name: 'Process', href: '/#process' },
        { name: 'Use Cases', href: '/#use-cases' },
    ],
};

const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Footer() {
    return (
        <footer className="relative bg-card/50 border-t border-border/50 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
                {/* Main footer grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
                    {/* Brand column */}
                    <div className="lg:col-span-2">
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            whileHover={{ x: 4 }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center shadow-glow-sm">
                                <Zap size={22} className="text-primary-foreground" strokeWidth={2.5} />
                            </div>
                            <div>
                                <span className="text-lg font-bold text-foreground">
                                    Voltaic<span className="text-primary">.</span>
                                </span>
                                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                                    BMS Engineering
                                </p>
                            </div>
                        </motion.div>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
                            End-to-end Battery Management System solutions. From AFE drivers to Cloud AI.
                            Production-grade firmware for the next generation of energy.
                        </p>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <Mail size={16} className="text-primary" />
                                <a href="mailto:contact@voltaic.dev" className="hover:text-foreground transition-colors">
                                    contact@voltaic.dev
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <MapPin size={16} className="text-primary" />
                                <span>Remote-First • Worldwide</span>
                            </div>
                        </div>
                    </div>

                    {/* Links columns */}
                    <div>
                        <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                            Tools
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.tools.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono">
                                            NEW
                                        </span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4 mt-8">
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-foreground/70 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA column */}
                    <div>
                        <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                            Ready to build?
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Schedule a technical discovery call to discuss your BMS requirements.
                        </p>
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get in touch
                            <ArrowUpRight size={14} />
                        </motion.a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs font-mono text-muted-foreground">
                        © {new Date().getFullYear()} Voltaic Systems. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                className="w-9 h-9 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-glow-sm transition-all"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.label}
                            >
                                <social.icon size={16} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        </footer>
    );
}

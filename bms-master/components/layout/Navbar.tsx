"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '/#services' },
        { name: 'TraceFlow', href: '/traceflow', badge: 'Tool' },
        { name: 'Battery Modeller', href: '/battery-modeller', badge: 'Tool' },
        { name: 'Architecture', href: '/#architecture' },
        { name: 'Process', href: '/#process' },
        { name: 'Use Cases', href: '/#use-cases' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <motion.div
                        className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Zap size={22} className="text-primary-foreground" strokeWidth={2.5} />
                        {/* Pulse ring */}
                        <motion.div
                            className="absolute inset-0 rounded-xl border border-primary/50"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                            Voltaic<span className="text-primary">.</span>
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest -mt-0.5">
                            BMS Engineering
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            <span className="relative z-10 flex items-center gap-1.5">
                                {link.name}
                                {link.badge && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono uppercase">
                                        {link.badge}
                                    </span>
                                )}
                            </span>
                            {/* Hover underline */}
                            <motion.span
                                className="absolute bottom-0 left-4 right-4 h-px bg-primary origin-left"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.2 }}
                            />
                        </Link>
                    ))}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Button variant="primary" size="sm" className="hidden md:inline-flex" href="#contact">
                        Book Technical Call
                        <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>

                    <motion.button
                        className="lg:hidden relative w-10 h-10 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/30 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <AnimatePresence mode="wait">
                            {mobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={20} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={20} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="lg:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <div className="p-6 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="flex items-center justify-between py-3 px-4 rounded-lg text-foreground hover:bg-secondary/50 hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="font-medium">{link.name}</span>
                                        {link.badge && (
                                            <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary font-mono uppercase">
                                                {link.badge}
                                            </span>
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="pt-4"
                            >
                                <Button variant="glow" className="w-full" href="#contact">
                                    Book Technical Call
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

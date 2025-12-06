"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, BatteryCharging } from 'lucide-react';
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
        { name: 'TraceFlow', href: '/traceflow' },
        { name: 'Architecture', href: '/#architecture' },
        { name: 'Process', href: '/#process' },
        { name: 'Use Cases', href: '/#use-cases' },
        { name: 'Tech Stack', href: '/#tech-stack' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-lg bg-brand-accent flex items-center justify-center text-white shadow-md shadow-brand-accent/20 group-hover:shadow-brand-accent/40 transition-all">
                        <BatteryCharging size={24} strokeWidth={2.5} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">
                        Voltaic<span className="text-brand-accent">.</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-brand-accent hover:underline hover:underline-offset-4 transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Button variant="primary" size="sm" className="hidden md:inline-flex" href="#contact">
                        Book Technical Call
                    </Button>

                    <button
                        className="md:hidden text-slate-600 hover:text-slate-900"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-slate-600 hover:text-brand-accent py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="primary" className="w-full mt-2" href="#contact">
                        Book Technical Call
                    </Button>
                </div>
            )}
        </nav>
    );
}

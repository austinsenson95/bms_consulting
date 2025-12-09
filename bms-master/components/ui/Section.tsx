"use client";

import { motion } from 'framer-motion';

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    darker?: boolean;
    pattern?: 'dots' | 'grid' | 'circuit' | 'none';
}

export default function Section({
    id,
    className = '',
    children,
    darker = false,
    pattern = 'none'
}: SectionProps) {
    const patternClasses = {
        dots: 'bg-dot-pattern',
        grid: 'bg-grid-pattern',
        circuit: 'bg-circuit-pattern',
        none: '',
    };

    return (
        <section
            id={id}
            className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden ${darker ? 'bg-secondary/30 border-y border-border/50' : 'bg-transparent'
                } ${className}`}
        >
            {/* Pattern overlay */}
            {pattern !== 'none' && (
                <div className={`absolute inset-0 ${patternClasses[pattern]} opacity-50 pointer-events-none`} />
            )}

            {/* Gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />

            <motion.div
                className="max-w-7xl mx-auto relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
                {children}
            </motion.div>
        </section>
    );
}

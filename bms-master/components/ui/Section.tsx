"use client";

import { motion } from 'framer-motion';

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    darker?: boolean;
}

export default function Section({ id, className = '', children, darker = false }: SectionProps) {
    return (
        <section
            id={id}
            className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden ${darker ? 'bg-white border-y border-slate-100' : 'bg-transparent'} ${className}`}
        >
            <motion.div
                className="max-w-7xl mx-auto relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
}

import React from 'react';
import { Cpu, GitBranch, Cloud, Shield } from 'lucide-react';

const features = [
    {
        icon: Cpu,
        title: "Automated HIL",
        description: "Flash target hardware and run driving cycles automatically.",
        colSpan: "col-span-1 md:col-span-2",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        text: "text-blue-400"
    },
    {
        icon: GitBranch,
        title: "Traceability",
        description: "Link every binary back to specific Simulink model versions.",
        colSpan: "col-span-1",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        text: "text-emerald-400"
    },
    {
        icon: Cloud,
        title: "Cloud Runners",
        description: "Scalable build environments for massive firmware compilation.",
        colSpan: "col-span-1",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        text: "text-purple-400"
    },
    {
        icon: Shield,
        title: "MISRA C Compliance",
        description: "Automated static analysis gates before every merge.",
        colSpan: "col-span-1 md:col-span-2",
        bg: "bg-primary/10",
        border: "border-primary/20",
        text: "text-primary"
    }
];

export default function ServicesGrid() {
    return (
        <section id="features" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Engineered for <span className="text-primary">Automotive Excellence</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Replace fragile scripts with a robust, enterprise-grade CI/CD platform built for the complexities of modern vehicle software.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`
                ${feature.colSpan} p-8 rounded-2xl border ${feature.border} ${feature.bg} 
                backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300
                group
              `}
                        >
                            <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon className={`w-6 h-6 ${feature.text}`} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

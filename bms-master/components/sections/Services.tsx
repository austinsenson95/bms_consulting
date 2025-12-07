import React from 'react';
import Section from '../ui/Section';
import { Layers, Wrench, ShieldCheck, BrainCircuit } from 'lucide-react';

const services = [
    {
        category: "Core Firmware Stack",
        icon: <Layers className="w-6 h-6 text-primary" />,
        items: [
            { title: "BMS Data Collection & AFE", desc: "Drivers for TI, NXP, ADI AFEs with robust error handling." },
            { title: "BMS Algorithms", desc: "SoC (EKF), SoH, SoP, and cell balancing logic." },
            { title: "RTOS Integration", desc: "FreeRTOS/Zephyr task design with priority scheduling." },
            { title: "Hardware Drivers", desc: "Low-level drivers for CAN, SPI, I2C, and peripherals." },
        ]
    },
    {
        category: "Production & DevOps",
        icon: <Wrench className="w-6 h-6 text-accent" />,
        items: [
            { title: "Automated Build System", desc: "Dockerized build environments for reproducible firmware." },
            { title: "CI/CD Pipelines", desc: "GitLab/GitHub Actions integration with HIL testing." },
            { title: "Bootloader & OTA", desc: "Secure FOTA/COTA with dual-bank rollback support." },
            { title: "Configurable Manifests", desc: "Single codebase for multiple pack variants." },
        ]
    },
    {
        category: "Safety & Assurance",
        icon: <ShieldCheck className="w-6 h-6 text-primary" />,
        items: [
            { title: "ISO 26262 Compliance", desc: "Safety goals (ASIL-B/C) and functional safety patterns." },
            { title: "Module Unit Tests", desc: "100% code coverage with Ceedling/GoogleTest." },
            { title: "Static Analysis", desc: "MISRA-C 2012 compliance and cyclomatic complexity checks." },
            { title: "Diagnostics Stack", desc: "UDS (ISO 14229) and OBD-II support." },
        ]
    },
    {
        category: "Intelligence & Analytics",
        icon: <BrainCircuit className="w-6 h-6 text-accent" />,
        items: [
            { title: "Edge AI Stack", desc: "On-chip inference for anomaly detection and aging models." },
            { title: "Fleet Insights", desc: "Cloud connectors for telemetry and predictive maintenance." },
            { title: "Self-Recovery", desc: "Advanced fault handling and limp-home strategies." },
            { title: "Simulink Integration", desc: "Model-Based Design (MBD) code generation workflow." },
        ]
    }
];

export default function Services() {
    return (
        <Section id="services" darker>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Engineering Capabilities
                </h2>
                <p className="text-muted-foreground text-lg">
                    We deliver the complete software lifecycle for battery systems.
                    From bare-metal drivers to cloud-connected intelligence.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, idx) => (
                    <div key={idx} className="bg-card shadow-lg border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-lg bg-secondary/20 border border-border">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground">{service.category}</h3>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {service.items.map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <h4 className="text-primary font-medium text-sm">{item.title}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

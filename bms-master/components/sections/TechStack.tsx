import React from 'react';
import Section from '../ui/Section';

const technologies = [
    "C / Embedded C++", "Rust", "Python", "MATLAB / Simulink",
    "FreeRTOS", "Zephyr", "AUTOSAR", "Linux",
    "STM32", "NXP S32K", "TI C2000", "Infineon Aurix",
    "CAN / CAN-FD", "Modbus", "MQTT", "Protobuf",
    "GitLab CI", "Docker", "Jenkins", "Grafana"
];

export default function TechStack() {
    return (
        <Section id="tech-stack" darker>
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    Technology Stack
                </h2>
                <p className="text-slate-600">
                    We use modern, industry-standard tools to build reliable systems.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {technologies.map((tech, idx) => (
                    <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-brand-accent/50 hover:text-brand-accent transition-colors cursor-default shadow-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </Section>
    );
}

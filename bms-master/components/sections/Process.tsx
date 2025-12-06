import React from 'react';
import Section from '../ui/Section';

const steps = [
    { title: "Discovery & Requirements", desc: "We map your vehicle/storage specs to BMS requirements." },
    { title: "Architecture Design", desc: "Safety concept (HARA), component selection, and stack planning." },
    { title: "Pilot Implementation", desc: "Rapid prototyping on reference hardware (Nucleo/Launchpad)." },
    { title: "Integration & CI/CD", desc: "Porting to custom hardware and setting up automated pipelines." },
    { title: "Validation & Testing", desc: "HIL testing, environmental validation, and pack-level tuning." },
    { title: "SOP & Support", desc: "Production release, OTA setup, and long-term maintenance." },
];

export default function Process() {
    return (
        <Section id="process" darker>
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Engagement Model
                </h2>
                <p className="text-slate-600">
                    From concept to mass production. We integrate seamlessly with your engineering team.
                </p>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2"></div>

                <div className="space-y-12">
                    {steps.map((step, idx) => (
                        <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 -translate-x-1/2 bg-white border-2 border-brand-accent rounded-full z-10 flex items-center justify-center">
                                <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                            </div>

                            {/* Content */}
                            <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                                <div className="bg-white shadow-md p-6 rounded-xl border border-slate-200 hover:border-brand-accent/30 transition-colors">
                                    <div className="text-brand-accent text-sm font-mono mb-2">0{idx + 1}</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-slate-600 text-sm">{step.desc}</p>
                                </div>
                            </div>

                            {/* Spacer for the other side */}
                            <div className="hidden md:block md:w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

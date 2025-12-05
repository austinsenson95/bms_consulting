import React from 'react';
import Section from './ui/Section';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
    return (
        <Section id="about">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50">
                <div className="md:flex gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">
                            Built by BMS Engineers
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            We are a team of senior embedded engineers and systems architects who have shipped millions of battery packs for automotive and industrial OEMs. We understand the pain of legacy codebases and rigid tools.
                        </p>

                        <div className="space-y-3">
                            {[
                                "10+ years in Automotive & Energy Storage",
                                "Expertise in Functional Safety (ISO 26262)",
                                "Track record of scaling from prototype to production"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-brand-secondary" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Stat Block */}
                    <div className="mt-8 md:mt-0 shrink-0">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-200">
                                <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
                                <div className="text-xs text-slate-500 uppercase">Projects</div>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-200">
                                <div className="text-3xl font-bold text-slate-900 mb-1">1GWh+</div>
                                <div className="text-xs text-slate-500 uppercase">Managed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

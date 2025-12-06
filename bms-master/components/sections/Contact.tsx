"use client";

import React, { useState } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Send, Check } from 'lucide-react';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <Section id="contact" darker className="border-t border-slate-200 bg-slate-50">
            <div className="max-w-xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Ready to Scale?
                </h2>
                <p className="text-slate-600">
                    Book a technical discovery call. No sales fluff, just engineering.
                </p>
            </div>

            <div className="max-w-md mx-auto">
                {status === 'success' ? (
                    <div className="bg-brand-secondary/5 border border-brand-secondary/20 rounded-xl p-8 text-center animate-in fade-in zoom-in">
                        <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8 text-brand-secondary" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Message Received</h3>
                        <p className="text-slate-600">We'll be in touch within 24 hours.</p>
                        <Button
                            variant="outline"
                            className="mt-6"
                            onClick={() => setStatus('idle')}
                        >
                            Send Another
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                                placeholder="Jane Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1">Work Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                                placeholder="jane@company.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-1">Project Details</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none"
                                placeholder="Tell us about your BMS requirements..."
                            ></textarea>
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            {!status && <Send className="ml-2 w-4 h-4" />}
                        </Button>
                    </form>
                )}
            </div>
        </Section>
    );
}

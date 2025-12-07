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
        <Section id="contact" darker className="border-t border-border bg-secondary/10">
            <div className="max-w-xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Ready to Scale?
                </h2>
                <p className="text-muted-foreground">
                    Book a technical discovery call. No sales fluff, just engineering.
                </p>
            </div>

            <div className="max-w-md mx-auto">
                {status === 'success' ? (
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center animate-in fade-in zoom-in">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Message Received</h3>
                        <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
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
                            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                placeholder="Jane Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Work Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                placeholder="jane@company.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Project Details</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
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

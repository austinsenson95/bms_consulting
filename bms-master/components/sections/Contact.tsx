"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Send, Check, Mail, Calendar, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <Section id="contact" className="border-t border-border/50">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left - Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-6"
                    >
                        <Sparkles size={12} />
                        Let&apos;s Build
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                        Ready to{' '}
                        <span className="text-gradient-cyan">Scale?</span>
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        Book a technical discovery call. No sales fluff, just engineering.
                        We&apos;ll discuss your requirements and explore how we can help.
                    </p>

                    {/* Quick options */}
                    <div className="space-y-4 mb-8">
                        <motion.a
                            href="mailto:contact@voltaic.dev"
                            className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all group"
                            whileHover={{ x: 4 }}
                        >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:shadow-glow-sm transition-shadow">
                                <Mail size={18} className="text-primary" />
                            </div>
                            <div className="flex-1">
                                <div className="font-medium text-foreground">Email Us</div>
                                <div className="text-sm text-muted-foreground">contact@voltaic.dev</div>
                            </div>
                            <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        </motion.a>

                        <motion.a
                            href="#"
                            className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-accent/30 transition-all group"
                            whileHover={{ x: 4 }}
                        >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:shadow-glow-amber transition-shadow">
                                <Calendar size={18} className="text-accent" />
                            </div>
                            <div className="flex-1">
                                <div className="font-medium text-foreground">Book a Call</div>
                                <div className="text-sm text-muted-foreground">30-min technical discovery</div>
                            </div>
                            <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />
                        </motion.a>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        <MessageSquare size={14} className="inline mr-2 text-primary" />
                        Average response time: <span className="text-foreground font-medium">under 24 hours</span>
                    </p>
                </motion.div>

                {/* Right - Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-border/50 relative overflow-hidden">
                        {/* Corner decorations */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />

                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    className="text-center py-8"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                >
                                    <motion.div
                                        className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring" }}
                                    >
                                        <Check className="w-10 h-10 text-primary" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">Message Received!</h3>
                                    <p className="text-muted-foreground mb-6">We&apos;ll be in touch within 24 hours.</p>
                                    <Button
                                        variant="outline"
                                        onClick={() => setStatus('idle')}
                                    >
                                        Send Another
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-bold text-foreground mb-1">Send a Message</h3>
                                        <p className="text-sm text-muted-foreground">Or use the quick options on the left</p>
                                    </div>

                                    <div>
                                        <label htmlFor="name" className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-glow-sm transition-all"
                                            placeholder="Jane Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Work Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-glow-sm transition-all"
                                            placeholder="jane@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Project Details</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={4}
                                            className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-glow-sm transition-all resize-none"
                                            placeholder="Tell us about your BMS requirements..."
                                        ></textarea>
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="glow"
                                        className="w-full"
                                        disabled={status === 'submitting'}
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <motion.div
                                                    className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </Button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}

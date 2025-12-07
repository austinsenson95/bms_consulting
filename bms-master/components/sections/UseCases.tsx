import React from 'react';
import Section from '../ui/Section';
import { Bike, Factory, Zap, Truck } from 'lucide-react';

const cases = [
    {
        icon: <Bike className="w-8 h-8 text-primary" />,
        title: "Light Electric Mobility",
        desc: "Cost-optimized BMS for 2W/3W scooters. Focus on robust protection and simple swapping logic.",
        stats: "30% faster TTM"
    },
    {
        icon: <Zap className="w-8 h-8 text-accent" />,
        title: "Stationary Storage",
        desc: "High-voltage stackable architecture for residential and grid-scale ESS. Modbus TCP/IP integration.",
        stats: "99.9% Uptime"
    },
    {
        icon: <Truck className="w-8 h-8 text-primary" />,
        title: "Commercial Vehicles",
        desc: "Heavy-duty BMS with ISO-26262 ASIL-C compliance. Multi-string management.",
        stats: "ASIL-C Ready"
    },
    {
        icon: <Factory className="w-8 h-8 text-accent" />,
        title: "Industrial Robotics",
        desc: "Compact, high-discharge BMS for AGVs and forklifts. CANopen integration.",
        stats: "Custom Form Factors"
    }
];

export default function UseCases() {
    return (
        <Section id="use-cases">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Industry Applications
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cases.map((item, idx) => (
                    <div key={idx} className="group p-6 rounded-2xl bg-card border border-border shadow-md hover:bg-secondary/10 transition-colors">
                        <div className="mb-4 p-3 bg-secondary/10 rounded-lg w-fit group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                        <div className="text-xs font-bold text-primary uppercase tracking-wider">
                            {item.stats}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu,
    Code,
    Terminal,
    GitBranch,
    Layers,
    Box,
    Package,
    CheckCircle,
    ArrowRight,
    ArrowDown,
    Activity,
    Server,
    Play,
    FileCode,
    Settings,
    Database,
    Cloud,
    Download,
    Upload,
    Shield,
    HardDrive,
    Zap,
    Users,
    Monitor,
} from 'lucide-react';

// --- Shared Components ---

const TriggerBadge = ({ text }: { text: string }) => (
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-card text-primary text-[10px] uppercase font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-1 whitespace-nowrap z-20 border border-primary/30">
        <Zap size={10} className="text-accent" />
        {text}
    </div>
);

const ArtifactBadge = ({ text }: { text: string }) => (
    <div className="mt-3 bg-secondary/50 text-muted-foreground text-[10px] font-medium px-2 py-1 rounded border border-border/50 flex items-center gap-1 justify-center">
        <Package size={10} />
        {text}
    </div>
);

interface PipelineStepProps {
    number?: string;
    title: string;
    description?: string;
    icon: React.ElementType;
    isLast?: boolean;
    colorClass: string;
    bgClass: string;
    triggerText?: string;
    artifactText?: string;
    compact?: boolean;
}

const PipelineStep = ({
    number,
    title,
    description,
    icon: Icon,
    isLast,
    colorClass,
    bgClass,
    triggerText,
    artifactText,
    compact = false,
}: PipelineStepProps) => {
    return (
        <div className={`flex flex-col md:flex-row items-center flex-1 group relative ${compact ? 'min-w-[200px]' : 'w-full md:w-auto'}`}>
            {triggerText && <TriggerBadge text={triggerText} />}

            <div
                className={`
                    relative z-10 flex flex-col items-center 
                    ${compact ? 'p-4 min-h-[160px]' : 'p-6 h-full'} 
                    rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm
                    transition-all duration-300 hover:shadow-glow-sm hover:-translate-y-1 hover:border-primary/30
                    w-full text-center
                `}
            >
                {number && (
                    <div
                        className={`
                            absolute -top-3 -right-3 w-7 h-7 rounded-full 
                            flex items-center justify-center text-xs font-bold text-primary-foreground shadow-md
                            ${colorClass}
                        `}
                    >
                        {number}
                    </div>
                )}

                <div
                    className={`
                        rounded-full mb-3 transition-colors duration-300
                        ${compact ? 'p-3' : 'p-4 mb-4'} 
                        ${bgClass} group-hover:bg-opacity-80
                    `}
                >
                    <Icon
                        className={`
                            ${compact ? 'w-5 h-5' : 'w-8 h-8'} 
                            ${colorClass.replace('bg-', 'text-').replace('-600', '-400').replace('-500', '-400')}
                        `}
                    />
                </div>

                <h3 className={`${compact ? 'text-sm' : 'text-base'} font-bold text-foreground mb-1`}>{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed px-1">{description}</p>

                {artifactText && <ArtifactBadge text={artifactText} />}
            </div>

            {!isLast && (
                <div className="hidden md:flex items-center justify-center w-8 text-muted-foreground shrink-0 mx-2">
                    <ArrowRight className="w-5 h-5" />
                </div>
            )}

            {!isLast && (
                <div className="md:hidden flex items-center justify-center h-8 text-muted-foreground my-2">
                    <ArrowDown className="w-5 h-5" />
                </div>
            )}
        </div>
    );
};

const SectionHeader = ({ title, color }: { title: string; color: string }) => (
    <div className="flex items-center gap-2 mb-4 px-1">
        <div className={`w-1.5 h-6 rounded-full ${color}`} />
        <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{title}</h2>
    </div>
);

// --- View 1: End-to-End ---
const EndToEndView = () => (
    <motion.div
        className="space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
    >
        <div>
            <SectionHeader title="Phase 1: Model-Based Design & Validation" color="bg-primary" />
            <div className="flex flex-col md:flex-row gap-4">
                <PipelineStep number="1" title="MIL Testing" description="Simulate Simulink model with test vectors." icon={Box} colorClass="bg-primary" bgClass="bg-primary/10" triggerText="Manual / Nightly" />
                <PipelineStep number="2" title="Code Gen" description="Embedded Coder generates C source." icon={Code} colorClass="bg-primary" bgClass="bg-primary/10" triggerText="Auto on MIL Pass" />
                <PipelineStep number="3" title="SIL Testing" description="Verify generated C code matches model behavior." icon={Terminal} colorClass="bg-primary" bgClass="bg-primary/10" isLast={true} artifactText="SIL Report" />
            </div>
        </div>

        <div>
            <SectionHeader title="Phase 2: CI/CD Integration" color="bg-accent" />
            <div className="flex flex-col md:flex-row gap-4">
                <PipelineStep number="4" title="Push to GitLab" description="Commit component code to Algo Repo." icon={GitBranch} colorClass="bg-accent" bgClass="bg-accent/10" />
                <PipelineStep number="5" title="FW Integration" description="Main FW repo submodule update." icon={Layers} colorClass="bg-accent" bgClass="bg-accent/10" triggerText="Developer Action" />
                <PipelineStep number="6" title="GitLab Build" description="Cloud runner compiles full firmware." icon={Server} colorClass="bg-accent" bgClass="bg-accent/10" triggerText="Auto on Push" isLast={true} />
            </div>
        </div>

        <div>
            <SectionHeader title="Phase 3: Release & Validation" color="bg-green-500" />
            <div className="flex flex-col md:flex-row gap-4">
                <PipelineStep number="7" title="Artifacts" description="Package binaries and reports." icon={Package} colorClass="bg-green-500" bgClass="bg-green-500/10" artifactText=".hex, .elf, .pdf" />
                <PipelineStep number="8" title="HIL System Test" description="Flash target BMS & run driving cycles." icon={Cpu} colorClass="bg-green-500" bgClass="bg-green-500/10" isLast={true} />
            </div>
        </div>
    </motion.div>
);

// --- View 2: Algorithm / MBD Side ---
const AlgorithmView = () => (
    <motion.div
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
    >
        <div className="bg-gradient-to-br from-primary/10 to-card p-6 rounded-xl border border-primary/20 shadow-glow-sm">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 border-b border-border/50 pb-4">
                <Activity className="w-6 h-6 text-primary" /> Algorithm Development Loop
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PipelineStep number="1" title="Simulink Model" description="Design control logic (SOC/SOH/Balancing)." icon={Activity} colorClass="bg-primary" bgClass="bg-card" />
                <PipelineStep number="2" title="MIL Simulations" description="Run test vectors in Simulink environment." icon={Play} colorClass="bg-primary" bgClass="bg-card" />
                <PipelineStep number="3" title="Validation Gate" description="Automated Check: Do tests pass thresholds?" icon={Shield} colorClass="bg-primary" bgClass="bg-card" triggerText="Quality Gate" />
                <PipelineStep number="4" title="Embedded Coder" description="Generate optimized C-code & headers." icon={Code} colorClass="bg-cyan-500" bgClass="bg-card" triggerText="Auto-Gen" />
                <PipelineStep number="5" title="Python SIL Runner" description="Compile generated code on host (x86) & re-run MIL vectors." icon={Terminal} colorClass="bg-cyan-500" bgClass="bg-card" artifactText="Test Logs" />
                <PipelineStep number="6" title="Repo Push" description="Commit verified code to Component Repo." icon={Upload} colorClass="bg-cyan-500" bgClass="bg-card" />
            </div>
        </div>
    </motion.div>
);

// --- View 3: Firmware Integration ---
const FirmwareView = () => (
    <motion.div
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
    >
        <div className="bg-gradient-to-br from-accent/10 to-card p-6 rounded-xl border border-accent/20">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 border-b border-border/50 pb-4">
                <Layers className="w-6 h-6 text-accent" /> Firmware Integration Flow
            </h3>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row gap-6">
                    <PipelineStep number="1" title="Main FW Repo" description="Holds drivers, OS, and Algo submodules." icon={Database} colorClass="bg-accent" bgClass="bg-card" />
                    <PipelineStep number="2" title="Submodule Update" description="Developer updates pointer to new Algo commit." icon={GitBranch} colorClass="bg-accent" bgClass="bg-card" triggerText="Integration Trigger" isLast={true} />
                </div>

                <div className="relative border-2 border-dashed border-red-500/30 rounded-xl p-6 bg-red-500/5">
                    <div className="absolute -top-3 left-6 bg-card text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-500/30">
                        GitLab CI Runner Environment
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mt-2">
                        <PipelineStep number="3" title="Patch Script" description="`generatedCodeCompiler.py` adapts headers/makefiles." icon={FileCode} colorClass="bg-red-500" bgClass="bg-card" />
                        <PipelineStep number="4" title="Toolchain Build" description="ARM-GCC compiles full firmware image." icon={Settings} colorClass="bg-red-500" bgClass="bg-card" />
                        <PipelineStep number="5" title="BMS Binaries" description="Production-ready .hex & .elf files." icon={Package} colorClass="bg-red-500" bgClass="bg-card" artifactText="Release Asset" isLast={true} />
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

// --- View 4: GitLab CI Pipeline ---
const GitLabView = () => (
    <motion.div
        className="flex justify-center py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
    >
        <div className="bg-card p-8 rounded-2xl shadow-glow border border-border/50 max-w-5xl w-full relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="flex items-center justify-between mb-10 border-b border-border/50 pb-6 relative z-10">
                <div className="flex items-center gap-3">
                    <Cloud className="w-8 h-8 text-accent" />
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">GitLab CI Pipeline</h2>
                        <p className="text-xs text-muted-foreground font-mono">Runner: aws-bms-runner-01</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="px-3 py-1 rounded bg-green-500/20 text-green-400 text-xs font-mono border border-green-500/30">status: running</div>
                    <div className="px-3 py-1 rounded bg-secondary text-muted-foreground text-xs font-mono border border-border/50">ID: #4921</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
                <div className="space-y-3">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">1. Prepare</div>
                    <div className="bg-secondary/50 p-4 rounded-lg border border-border/50 flex flex-col gap-2 relative group hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-3 text-foreground font-semibold text-sm">
                            <Download size={16} className="text-primary" /> Checkout
                        </div>
                        <div className="text-[10px] text-muted-foreground">Fetch submodules & LFS</div>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">2. Patch</div>
                    <div className="bg-secondary/50 p-4 rounded-lg border border-border/50 flex flex-col gap-2 group relative hover:border-accent/30 transition-colors">
                        <div className="flex items-center gap-3 text-foreground font-semibold text-sm">
                            <Terminal size={16} className="text-accent" /> Scripting
                        </div>
                        <div className="text-[10px] text-muted-foreground">run `generatedCodeCompiler.py`</div>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">3. Build</div>
                    <div className="bg-secondary/50 p-4 rounded-lg border border-border/50 flex flex-col gap-2 group relative hover:border-purple-500/30 transition-colors">
                        <div className="flex items-center gap-3 text-foreground font-semibold text-sm">
                            <Settings size={16} className="text-purple-400" /> Compile
                        </div>
                        <div className="text-[10px] text-muted-foreground">ARM-GCC Release Build</div>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-lg border border-border/30 flex flex-col gap-2 opacity-60">
                        <div className="flex items-center gap-3 text-foreground font-semibold text-sm">
                            <Shield size={16} className="text-purple-400" /> Static Analysis
                        </div>
                        <div className="text-[10px] text-muted-foreground">MISRA C Checks</div>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">4. Release</div>
                    <div className="bg-secondary/50 p-4 rounded-lg border border-green-500/30 flex flex-col gap-2 group relative shadow-lg shadow-green-900/20 hover:border-green-500/50 transition-colors">
                        <div className="flex items-center gap-3 text-green-400 font-semibold text-sm">
                            <Package size={16} /> Publish
                        </div>
                        <div className="text-[10px] text-muted-foreground">Upload to Package Registry</div>
                        <div className="mt-2 pt-2 border-t border-border/30 flex gap-2">
                            <span className="text-[10px] bg-card px-1 py-0.5 rounded border border-border/50 font-mono">bms_fw.hex</span>
                            <span className="text-[10px] bg-card px-1 py-0.5 rounded border border-border/50 font-mono">sil_report.pdf</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

// --- View 5: Swimlane Diagram ---
const SwimlaneView = () => (
    <motion.div
        className="overflow-x-auto pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
    >
        <div className="min-w-[900px] bg-card rounded-xl shadow-lg border border-border/50 divide-y divide-border/30">
            <div className="flex bg-secondary/50 text-xs font-bold text-muted-foreground uppercase tracking-wider py-3">
                <div className="w-32 text-center border-r border-border/30">Actor</div>
                <div className="flex-1 px-4">Timeline / Process</div>
            </div>

            <div className="flex hover:bg-secondary/20 transition-colors">
                <div className="w-32 bg-primary/10 p-4 flex flex-col items-center justify-center border-r border-border/30">
                    <Activity className="text-primary mb-2" />
                    <span className="text-xs font-bold text-primary text-center">Algo Team (MBD)</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-6 relative">
                    <PipelineStep title="MIL Val" icon={Box} colorClass="bg-primary" bgClass="bg-card" compact={true} />
                    <ArrowRight className="text-muted-foreground" />
                    <PipelineStep title="SIL Val" icon={Terminal} colorClass="bg-primary" bgClass="bg-card" compact={true} />
                    <ArrowRight className="text-muted-foreground" />
                    <PipelineStep title="Push Code" icon={Upload} colorClass="bg-primary" bgClass="bg-card" compact={true} triggerText="Handover" />
                </div>
            </div>

            <div className="flex hover:bg-secondary/20 transition-colors">
                <div className="w-32 bg-accent/10 p-4 flex flex-col items-center justify-center border-r border-border/30">
                    <Users className="text-accent mb-2" />
                    <span className="text-xs font-bold text-accent text-center">Firmware Lead</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-6 pl-48 md:pl-[420px] relative">
                    <PipelineStep title="Update Submodule" icon={GitBranch} colorClass="bg-accent" bgClass="bg-card" compact={true} triggerText="Trigger CI" />
                </div>
            </div>

            <div className="flex hover:bg-secondary/20 transition-colors">
                <div className="w-32 bg-secondary p-4 flex flex-col items-center justify-center border-r border-border/30">
                    <Server className="text-muted-foreground mb-2" />
                    <span className="text-xs font-bold text-muted-foreground text-center">GitLab Runner</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-6 pl-48 md:pl-[420px] relative">
                    <div className="w-24 border-t-2 border-dashed border-border/50"></div>
                    <PipelineStep title="Auto Build" icon={Settings} colorClass="bg-muted" bgClass="bg-card" compact={true} />
                    <ArrowRight className="text-muted-foreground" />
                    <PipelineStep title="Publish Artifacts" icon={Package} colorClass="bg-muted" bgClass="bg-card" compact={true} artifactText="Binaries" />
                </div>
            </div>

            <div className="flex hover:bg-secondary/20 transition-colors">
                <div className="w-32 bg-green-500/10 p-4 flex flex-col items-center justify-center border-r border-border/30">
                    <CheckCircle className="text-green-500 mb-2" />
                    <span className="text-xs font-bold text-green-500 text-center">System Test</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-6 justify-end">
                    <PipelineStep title="Flash Target" icon={Cpu} colorClass="bg-green-500" bgClass="bg-card" compact={true} />
                    <ArrowRight className="text-muted-foreground" />
                    <PipelineStep title="HIL Testing" icon={Monitor} colorClass="bg-green-500" bgClass="bg-card" compact={true} />
                </div>
            </div>
        </div>
    </motion.div>
);

// --- View 6: Architecture Diagram ---
const ArchitectureView = () => (
    <motion.div
        className="flex justify-center items-center py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
    >
        <div className="relative w-full max-w-4xl h-[500px] border-2 border-border/50 border-dashed rounded-3xl p-8 bg-card/50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                <div className="w-48 h-48 rounded-full bg-card border-4 border-accent shadow-glow-amber flex flex-col items-center justify-center p-4 text-center">
                    <Cloud className="w-10 h-10 text-accent mb-2" />
                    <h3 className="font-bold text-foreground">GitLab CI/CD</h3>
                    <p className="text-xs text-muted-foreground mt-1">Orchestrator</p>
                    <div className="mt-2 flex gap-1 justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-75"></div>
                    </div>
                </div>
            </div>

            <div className="absolute top-10 left-10 p-4 bg-card rounded-xl shadow-lg border border-primary/30 w-56 z-10">
                <div className="flex items-center gap-2 mb-2 text-primary font-bold">
                    <Activity size={18} /> MBD / Algorithm
                </div>
                <div className="text-xs text-muted-foreground space-y-1 pl-6 border-l-2 border-primary/20">
                    <div>Simulink Models</div>
                    <div className="font-semibold text-primary">Embedded Coder</div>
                    <div>Python SIL Wrapper</div>
                </div>
            </div>

            <div className="absolute bottom-10 left-10 p-4 bg-card rounded-xl shadow-lg border border-cyan-500/30 w-56 z-10">
                <div className="flex items-center gap-2 mb-2 text-cyan-400 font-bold">
                    <Layers size={18} /> Firmware Integration
                </div>
                <div className="text-xs text-muted-foreground space-y-1 pl-6 border-l-2 border-cyan-500/20">
                    <div>Main Repo</div>
                    <div className="font-semibold text-cyan-400">Submodules</div>
                    <div>Makefiles / CMake</div>
                </div>
            </div>

            <div className="absolute top-10 right-10 p-4 bg-card rounded-xl shadow-lg border border-purple-500/30 w-56 z-10">
                <div className="flex items-center gap-2 mb-2 text-purple-400 font-bold">
                    <HardDrive size={18} /> Artifact Registry
                </div>
                <div className="text-xs text-muted-foreground space-y-1 pl-6 border-l-2 border-purple-500/20">
                    <div className="font-mono bg-secondary/50 rounded px-1 w-fit">release-v1.0.zip</div>
                    <div>SIL Reports</div>
                    <div>Traceability Docs</div>
                </div>
            </div>

            <div className="absolute bottom-10 right-10 p-4 bg-card rounded-xl shadow-lg border border-green-500/30 w-56 z-10">
                <div className="flex items-center gap-2 mb-2 text-green-400 font-bold">
                    <Cpu size={18} /> Target BMS (HIL)
                </div>
                <div className="text-xs text-muted-foreground space-y-1 pl-6 border-l-2 border-green-500/20">
                    <div>Flash Tooling</div>
                    <div>Vector CANoe / VTEST</div>
                    <div>Test Reports</div>
                </div>
            </div>
        </div>
    </motion.div>
);

// --- Main Component ---
export default function PipelineDemo() {
    const [activeTab, setActiveTab] = useState('gitlab');

    const tabs = [
        { id: 'end-to-end', label: 'End-to-End Flow' },
        { id: 'algorithm', label: 'Algorithm (MBD)' },
        { id: 'firmware', label: 'Firmware Integration' },
        { id: 'gitlab', label: 'GitLab CI' },
        { id: 'swimlane', label: 'Team Swimlanes' },
        { id: 'architecture', label: 'System Arch' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'end-to-end': return <EndToEndView />;
            case 'algorithm': return <AlgorithmView />;
            case 'firmware': return <FirmwareView />;
            case 'gitlab': return <GitLabView />;
            case 'swimlane': return <SwimlaneView />;
            case 'architecture': return <ArchitectureView />;
            default: return <GitLabView />;
        }
    };

    return (
        <div className="bg-card/50 p-4 md:p-8 font-sans text-foreground rounded-xl">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                        <Activity size={14} /> BMS Firmware Engineering
                    </div>
                    <h1 className="text-2xl md:text-4xl font-extrabold text-foreground mb-2">
                        Automotive CI/CD <span className="text-gradient-cyan">Pipeline Visualizer</span>
                    </h1>
                    <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
                        Interactive dashboard demonstrating the automated workflow from Simulink MIL validation to Target HIL testing.
                    </p>
                </header>

                <div className="flex flex-wrap justify-center gap-2 mb-10 bg-secondary/50 p-2 rounded-xl border border-border/50 w-fit mx-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200
                                ${activeTab === tab.id
                                    ? 'bg-primary text-primary-foreground shadow-glow-sm'
                                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                                }
                            `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <div className="min-h-[600px]" key={activeTab}>
                        {renderContent()}
                    </div>
                </AnimatePresence>
            </div>
        </div>
    );
}

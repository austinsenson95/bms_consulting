"use client";

import React, { useState } from 'react';
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
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-1 whitespace-nowrap z-20 border border-slate-600">
        <Zap size={10} className="text-yellow-400" />
        {text}
    </div>
);

const ArtifactBadge = ({ text }: { text: string }) => (
    <div className="mt-3 bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-1 rounded border border-slate-200 flex items-center gap-1 justify-center">
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
            {/* Trigger Badge (Floating) */}
            {triggerText && <TriggerBadge text={triggerText} />}

            {/* Card Container */}
            <div
                className={`
        relative z-10 flex flex-col items-center 
        ${compact ? 'p-4 min-h-[160px]' : 'p-6 h-full'} 
        rounded-xl border border-slate-200 bg-white shadow-sm 
        transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200
        w-full text-center
      `}
            >
                {/* Step Number Badge */}
                {number && (
                    <div
                        className={`
            absolute -top-3 -right-3 w-7 h-7 rounded-full 
            flex items-center justify-center text-xs font-bold text-white shadow-md
            ${colorClass}
          `}
                    >
                        {number}
                    </div>
                )}

                {/* Icon */}
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
            ${colorClass.replace('bg-', 'text-')}
          `}
                    />
                </div>

                {/* Content */}
                <h3 className={`${compact ? 'text-sm' : 'text-base'} font-bold text-slate-800 mb-1`}>{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed px-1">{description}</p>

                {/* Artifacts */}
                {artifactText && <ArtifactBadge text={artifactText} />}
            </div>

            {/* Connector Line (Desktop) */}
            {!isLast && (
                <div className="hidden md:flex items-center justify-center w-8 text-slate-300 shrink-0 mx-2">
                    <ArrowRight className="w-5 h-5" />
                </div>
            )}

            {/* Connector Line (Mobile) */}
            {!isLast && (
                <div className="md:hidden flex items-center justify-center h-8 text-slate-300 my-2">
                    <ArrowDown className="w-5 h-5" />
                </div>
            )}
        </div>
    );
};

const SectionHeader = ({ title, color }: { title: string; color: string }) => (
    <div className="flex items-center gap-2 mb-4 px-1">
        <div className={`w-1.5 h-6 rounded-full ${color}`} />
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">{title}</h2>
    </div>
);

// --- View 1: End-to-End ---
const EndToEndView = () => (
    <div className="space-y-12 animate-in fade-in duration-500">
        <div>
            <SectionHeader title="Phase 1: Model-Based Design & Validation" color="bg-blue-500" />
            <div className="flex flex-col md:flex-row gap-4">
                <PipelineStep
                    number="1"
                    title="MIL Testing"
                    description="Simulate Simulink model with test vectors."
                    icon={Box}
                    colorClass="bg-blue-600"
                    bgClass="bg-blue-50"
                    triggerText="Manual / Nightly"
                />
                <PipelineStep
                    number="2"
                    title="Code Gen"
                    description="Embedded Coder generates C source."
                    icon={Code}
                    colorClass="bg-blue-600"
                    bgClass="bg-blue-50"
                    triggerText="Auto on MIL Pass"
                />
                <PipelineStep
                    number="3"
                    title="SIL Testing"
                    description="Verify generated C code matches model behavior."
                    icon={Terminal}
                    colorClass="bg-blue-600"
                    bgClass="bg-blue-50"
                    isLast={true}
                    artifactText="SIL Report"
                />
            </div>
        </div>

        <div>
            <SectionHeader title="Phase 2: CI/CD Integration" color="bg-orange-500" />
            <div className="flex flex-col md:flex-row gap-4">
                <PipelineStep
                    number="4"
                    title="Push to GitLab"
                    description="Commit component code to Algo Repo."
                    icon={GitBranch}
                    colorClass="bg-orange-600"
                    bgClass="bg-orange-50"
                />
                <PipelineStep
                    number="5"
                    title="FW Integration"
                    description="Main FW repo submodule update."
                    icon={Layers}
                    colorClass="bg-orange-600"
                    bgClass="bg-orange-50"
                    triggerText="Developer Action"
                />
                <PipelineStep
                    number="6"
                    title="GitLab Build"
                    description="Cloud runner compiles full firmware."
                    icon={Server}
                    colorClass="bg-orange-600"
                    bgClass="bg-orange-50"
                    triggerText="Auto on Push"
                    isLast={true}
                />
            </div>
        </div>

        <div>
            <SectionHeader title="Phase 3: Release & Validation" color="bg-emerald-500" />
            <div className="flex flex-col md:flex-row gap-4">
                <PipelineStep
                    number="7"
                    title="Artifacts"
                    description="Package binaries and reports."
                    icon={Package}
                    colorClass="bg-emerald-600"
                    bgClass="bg-emerald-50"
                    artifactText=".hex, .elf, .pdf"
                />
                <PipelineStep
                    number="8"
                    title="HIL System Test"
                    description="Flash target BMS & run driving cycles."
                    icon={Cpu}
                    colorClass="bg-emerald-600"
                    bgClass="bg-emerald-50"
                    isLast={true}
                />
            </div>
        </div>
    </div>
);

// --- View 2: Algorithm / MBD Side ---
const AlgorithmView = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2 border-b border-blue-100 pb-4">
                <Activity className="w-6 h-6" /> Algorithm Development Loop
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PipelineStep
                    number="1"
                    title="Simulink Model"
                    description="Design control logic (SOC/SOH/Balancing)."
                    icon={Activity}
                    colorClass="bg-blue-600"
                    bgClass="bg-white"
                />
                <PipelineStep
                    number="2"
                    title="MIL Simulations"
                    description="Run test vectors in Simulink environment."
                    icon={Play}
                    colorClass="bg-blue-600"
                    bgClass="bg-white"
                />
                <PipelineStep
                    number="3"
                    title="Validation Gate"
                    description="Automated Check: Do tests pass thresholds?"
                    icon={Shield}
                    colorClass="bg-blue-600"
                    bgClass="bg-white"
                    triggerText="Quality Gate"
                />
                <PipelineStep
                    number="4"
                    title="Embedded Coder"
                    description="Generate optimized C-code & headers."
                    icon={Code}
                    colorClass="bg-indigo-600"
                    bgClass="bg-white"
                    triggerText="Auto-Gen"
                />
                <PipelineStep
                    number="5"
                    title="Python SIL Runner"
                    description="Compile generated code on host (x86) & re-run MIL vectors."
                    icon={Terminal}
                    colorClass="bg-indigo-600"
                    bgClass="bg-white"
                    artifactText="Test Logs"
                />
                <PipelineStep
                    number="6"
                    title="Repo Push"
                    description="Commit verified code to Component Repo."
                    icon={Upload}
                    colorClass="bg-indigo-600"
                    bgClass="bg-white"
                />
            </div>
        </div>
    </div>
);

// --- View 3: Firmware Integration ---
const FirmwareView = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
        <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100 shadow-sm">
            <h3 className="text-xl font-bold text-orange-900 mb-6 flex items-center gap-2 border-b border-orange-100 pb-4">
                <Layers className="w-6 h-6" /> Firmware Integration Flow
            </h3>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row gap-6">
                    <PipelineStep
                        number="1"
                        title="Main FW Repo"
                        description="Holds drivers, OS, and Algo submodules."
                        icon={Database}
                        colorClass="bg-orange-600"
                        bgClass="bg-white"
                    />
                    <PipelineStep
                        number="2"
                        title="Submodule Update"
                        description="Developer updates pointer to new Algo commit."
                        icon={GitBranch}
                        colorClass="bg-orange-600"
                        bgClass="bg-white"
                        triggerText="Integration Trigger"
                        isLast={true}
                    />
                </div>

                {/* Automation Section */}
                <div className="relative border-2 border-dashed border-red-200 rounded-xl p-6 bg-red-50/30">
                    <div className="absolute -top-3 left-6 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full border border-red-200">
                        GitLab CI Runner Environment
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 mt-2">
                        <PipelineStep
                            number="3"
                            title="Patch Script"
                            description="`generatedCodeCompiler.py` adapts headers/makefiles."
                            icon={FileCode}
                            colorClass="bg-red-500"
                            bgClass="bg-white"
                        />
                        <PipelineStep
                            number="4"
                            title="Toolchain Build"
                            description="ARM-GCC compiles full firmware image."
                            icon={Settings}
                            colorClass="bg-red-500"
                            bgClass="bg-white"
                        />
                        <PipelineStep
                            number="5"
                            title="BMS Binaries"
                            description="Production-ready .hex & .elf files."
                            icon={Package}
                            colorClass="bg-red-500"
                            bgClass="bg-white"
                            artifactText="Release Asset"
                            isLast={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- View 4: GitLab CI Pipeline ---
const GitLabView = () => (
    <div className="animate-in fade-in duration-500 flex justify-center py-4">
        <div className="bg-foreground text-white p-8 rounded-2xl shadow-2xl max-w-5xl w-full relative overflow-hidden border border-white/10">
            {/* Background Decor */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="flex items-center justify-between mb-10 border-b border-slate-700 pb-6 relative z-10">
                <div className="flex items-center gap-3">
                    <Cloud className="w-8 h-8 text-orange-500" />
                    <div>
                        <h2 className="text-2xl font-bold">GitLab CI Pipeline</h2>
                        <p className="text-xs text-slate-400">Runner: aws-bms-runner-01</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="px-3 py-1 rounded bg-green-500/20 text-green-400 text-xs font-mono border border-green-500/30">status: running</div>
                    <div className="px-3 py-1 rounded bg-slate-700 text-slate-300 text-xs font-mono">ID: #4921</div>
                </div>
            </div>

            {/* Pipeline Graph */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
                {/* Stage 1: Prepare */}
                <div className="space-y-3">
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">1. Prepare</div>
                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex flex-col gap-2 relative group">
                        <div className="flex items-center gap-3 text-slate-200 font-semibold text-sm">
                            <Download size={16} className="text-blue-400" /> Checkout
                        </div>
                        <div className="text-[10px] text-slate-500">Fetch submodules & LFS</div>
                        <div className="absolute inset-0 border border-blue-500/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                </div>

                {/* Stage 2: Patch & Gen */}
                <div className="space-y-3">
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">2. Patch</div>
                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex flex-col gap-2 group relative">
                        <div className="flex items-center gap-3 text-slate-200 font-semibold text-sm">
                            <Terminal size={16} className="text-yellow-400" /> Scripting
                        </div>
                        <div className="text-[10px] text-slate-500">run `generatedCodeCompiler.py`</div>
                        <div className="absolute inset-0 border border-yellow-500/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <ArrowRight className="absolute -left-6 top-16 text-slate-600 hidden md:block" size={16} />
                </div>

                {/* Stage 3: Build */}
                <div className="space-y-3">
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">3. Build</div>
                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex flex-col gap-2 group relative">
                        <div className="flex items-center gap-3 text-slate-200 font-semibold text-sm">
                            <Settings size={16} className="text-purple-400" /> Compile
                        </div>
                        <div className="text-[10px] text-slate-500">ARM-GCC Release Build</div>
                        <div className="absolute inset-0 border border-purple-500/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex flex-col gap-2 opacity-50">
                        <div className="flex items-center gap-3 text-slate-200 font-semibold text-sm">
                            <Shield size={16} className="text-purple-400" /> Static Analysis
                        </div>
                        <div className="text-[10px] text-slate-500">MISRA C Checks</div>
                    </div>
                    <ArrowRight className="absolute -left-6 top-16 text-slate-600 hidden md:block" size={16} />
                </div>

                {/* Stage 4: Release */}
                <div className="space-y-3">
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">4. Release</div>
                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex flex-col gap-2 group relative shadow-lg shadow-green-900/20">
                        <div className="flex items-center gap-3 text-green-400 font-semibold text-sm">
                            <Package size={16} /> Publish
                        </div>
                        <div className="text-[10px] text-slate-400">Upload to Package Registry</div>
                        <div className="mt-2 pt-2 border-t border-slate-700 flex gap-2">
                            <span className="text-[10px] bg-slate-900 px-1 py-0.5 rounded border border-slate-600">bms_fw.hex</span>
                            <span className="text-[10px] bg-slate-900 px-1 py-0.5 rounded border border-slate-600">sil_report.pdf</span>
                        </div>
                        <div className="absolute inset-0 border border-green-500/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <ArrowRight className="absolute -left-6 top-16 text-slate-600 hidden md:block" size={16} />
                </div>
            </div>
        </div>
    </div>
);

// --- View 5: Swimlane Diagram ---
const SwimlaneView = () => (
    <div className="animate-in fade-in duration-500 overflow-x-auto pb-4">
        <div className="min-w-[900px] bg-white rounded-xl shadow border border-slate-200 divide-y divide-slate-100">
            {/* Header Row */}
            <div className="flex bg-slate-50 text-xs font-bold text-slate-500 uppercase tracking-wider py-2">
                <div className="w-32 text-center border-r border-slate-200">Actor</div>
                <div className="flex-1 px-4">Timeline / Process</div>
            </div>

            {/* Lane 1: Algo Team */}
            <div className="flex hover:bg-slate-50 transition-colors">
                <div className="w-32 bg-blue-50/50 p-4 flex flex-col items-center justify-center border-r border-slate-100">
                    <Activity className="text-blue-600 mb-2" />
                    <span className="text-xs font-bold text-blue-800 text-center">Algo Team (MBD)</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-6 relative">
                    <PipelineStep title="MIL Val" icon={Box} colorClass="bg-blue-500" bgClass="bg-white" compact={true} />
                    <ArrowRight className="text-slate-300" />
                    <PipelineStep title="SIL Val" icon={Terminal} colorClass="bg-blue-500" bgClass="bg-white" compact={true} />
                    <ArrowRight className="text-slate-300" />
                    <PipelineStep title="Push Code" icon={Upload} colorClass="bg-blue-500" bgClass="bg-white" compact={true} triggerText="Handover" />

                    {/* Vertical Handoff Line */}
                    <div className="absolute right-12 top-full h-8 border-l-2 border-dashed border-slate-300 z-0"></div>
                </div>
            </div>

            {/* Lane 2: Firmware Team */}
            <div className="flex hover:bg-slate-50 transition-colors">
                <div className="w-32 bg-orange-50/50 p-4 flex flex-col items-center justify-center border-r border-slate-100">
                    <Users className="text-orange-600 mb-2" />
                    <span className="text-xs font-bold text-orange-800 text-center">Firmware Lead</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-6 pl-48 md:pl-[420px] relative">
                    <PipelineStep title="Update Submodule" icon={GitBranch} colorClass="bg-orange-500" bgClass="bg-white" compact={true} triggerText="Trigger CI" />
                    <div className="absolute left-[440px] top-full h-8 border-l-2 border-dashed border-slate-300 z-0"></div>
                </div>
            </div>

            {/* Lane 3: CI System */}
            <div className="flex hover:bg-slate-50 transition-colors">
                <div className="w-32 bg-slate-100 p-4 flex flex-col items-center justify-center border-r border-slate-100">
                    <Server className="text-slate-600 mb-2" />
                    <span className="text-xs font-bold text-slate-800 text-center">GitLab Runner</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-6 pl-48 md:pl-[420px] relative">
                    <div className="w-24 border-t-2 border-dashed border-slate-200"></div>
                    <PipelineStep title="Auto Build" icon={Settings} colorClass="bg-slate-600" bgClass="bg-white" compact={true} />
                    <ArrowRight className="text-slate-300" />
                    <PipelineStep title="Publish Artifacts" icon={Package} colorClass="bg-slate-600" bgClass="bg-white" compact={true} artifactText="Binaries" />
                    <div className="absolute right-[120px] top-full h-8 border-l-2 border-dashed border-slate-300 z-0"></div>
                </div>
            </div>

            {/* Lane 4: Test Team */}
            <div className="flex hover:bg-slate-50 transition-colors">
                <div className="w-32 bg-emerald-50/50 p-4 flex flex-col items-center justify-center border-r border-slate-100">
                    <CheckCircle className="text-emerald-600 mb-2" />
                    <span className="text-xs font-bold text-emerald-800 text-center">System Test</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-6 justify-end">
                    <PipelineStep title="Flash Target" icon={Cpu} colorClass="bg-emerald-500" bgClass="bg-white" compact={true} />
                    <ArrowRight className="text-slate-300" />
                    <PipelineStep title="HIL Testing" icon={Monitor} colorClass="bg-emerald-500" bgClass="bg-white" compact={true} />
                </div>
            </div>
        </div>
    </div>
);

// --- View 6: Architecture Diagram ---
const ArchitectureView = () => (
    <div className="animate-in fade-in duration-500 flex justify-center items-center py-10">
        <div className="relative w-full max-w-4xl h-[500px] border-2 border-slate-200 border-dashed rounded-3xl p-8 bg-slate-50/50">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                <div className="w-48 h-48 rounded-full bg-white border-4 border-orange-500 shadow-xl flex flex-col items-center justify-center p-4 text-center">
                    <Cloud className="w-10 h-10 text-orange-500 mb-2" />
                    <h3 className="font-bold text-slate-800">GitLab CI/CD</h3>
                    <p className="text-xs text-slate-500 mt-1">Orchestrator</p>
                    <div className="mt-2 flex gap-1 justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-75"></div>
                    </div>
                </div>
            </div>

            {/* Node: MBD */}
            <div className="absolute top-10 left-10 p-4 bg-white rounded-xl shadow border border-blue-200 w-56 z-10">
                <div className="flex items-center gap-2 mb-2 text-blue-600 font-bold">
                    <Activity size={18} /> MBD / Algorithm
                </div>
                <div className="text-xs text-slate-600 space-y-1 pl-6 border-l-2 border-blue-100">
                    <div className="flex items-center gap-1">Simulink Models</div>
                    <div className="flex items-center gap-1 font-semibold text-blue-700">Embedded Coder</div>
                    <div className="flex items-center gap-1">Python SIL Wrapper</div>
                </div>
            </div>
            {/* Connector MBD -> Center */}
            <svg className="absolute top-24 left-56 w-32 h-24 z-0 text-slate-300 pointer-events-none">
                <path d="M 0 10 Q 80 10 120 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
            </svg>

            {/* Node: Firmware */}
            <div className="absolute bottom-10 left-10 p-4 bg-white rounded-xl shadow border border-indigo-200 w-56 z-10">
                <div className="flex items-center gap-2 mb-2 text-indigo-600 font-bold">
                    <Layers size={18} /> Firmware Integration
                </div>
                <div className="text-xs text-slate-600 space-y-1 pl-6 border-l-2 border-indigo-100">
                    <div className="flex items-center gap-1">Main Repo</div>
                    <div className="flex items-center gap-1 font-semibold text-indigo-700">Submodules</div>
                    <div className="flex items-center gap-1">Makefiles / CMake</div>
                </div>
            </div>
            {/* Connector FW -> Center */}
            <svg className="absolute bottom-28 left-56 w-32 h-24 z-0 text-slate-300 pointer-events-none">
                <path d="M 0 80 Q 80 80 120 0" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            </svg>

            {/* Node: Artifacts */}
            <div className="absolute top-10 right-10 p-4 bg-white rounded-xl shadow border border-purple-200 w-56 z-10">
                <div className="flex items-center gap-2 mb-2 text-purple-600 font-bold">
                    <HardDrive size={18} /> Artifact Registry
                </div>
                <div className="text-xs text-slate-600 space-y-1 pl-6 border-l-2 border-purple-100">
                    <div className="flex items-center gap-1 font-mono bg-slate-100 rounded px-1 w-fit">release-v1.0.zip</div>
                    <div className="flex items-center gap-1">SIL Reports</div>
                    <div className="flex items-center gap-1">Traceability Docs</div>
                </div>
            </div>
            {/* Connector Center -> Artifacts */}
            <svg className="absolute top-24 right-56 w-32 h-24 z-0 text-slate-300 pointer-events-none">
                <path d="M 0 100 Q 40 10 130 10" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>

            {/* Node: Hardware */}
            <div className="absolute bottom-10 right-10 p-4 bg-white rounded-xl shadow border border-emerald-200 w-56 z-10">
                <div className="flex items-center gap-2 mb-2 text-emerald-600 font-bold">
                    <Cpu size={18} /> Target BMS (HIL)
                </div>
                <div className="text-xs text-slate-600 space-y-1 pl-6 border-l-2 border-emerald-100">
                    <div className="flex items-center gap-1">Flash Tooling</div>
                    <div className="flex items-center gap-1">Vector CANoe / VTEST</div>
                    <div className="flex items-center gap-1">Test Reports</div>
                </div>
            </div>
            {/* Connector Center -> Hardware */}
            <svg className="absolute bottom-28 right-56 w-32 h-24 z-0 text-slate-300 pointer-events-none">
                <path d="M 0 0 Q 40 80 130 80" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
        </div>
    </div>
);

// --- Main Component ---
export default function PipelineDemo() {
    const [activeTab, setActiveTab] = useState('end-to-end');

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
            case 'end-to-end':
                return <EndToEndView />;
            case 'algorithm':
                return <AlgorithmView />;
            case 'firmware':
                return <FirmwareView />;
            case 'gitlab':
                return <GitLabView />;
            case 'swimlane':
                return <SwimlaneView />;
            case 'architecture':
                return <ArchitectureView />;
            default:
                return <EndToEndView />;
        }
    };

    return (
        <div className="bg-secondary/30 p-4 md:p-8 font-sans text-foreground rounded-xl">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-8 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                        <Activity size={14} /> BMS Firmware Engineering
                    </div>
                    <h1 className="text-2xl md:text-4xl font-extrabold text-foreground mb-2">
                        Automotive CI/CD <span className="text-primary">Pipeline Visualizer</span>
                    </h1>
                    <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
                        Interactive dashboard demonstrating the automated workflow from Simulink MIL validation to Target HIL testing.
                    </p>
                </header>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10 bg-white p-2 rounded-xl shadow-sm border border-slate-200 w-fit mx-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200
                ${activeTab === tab.id
                                    ? 'bg-slate-800 text-white shadow-md'
                                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                                }
              `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="min-h-[600px]">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

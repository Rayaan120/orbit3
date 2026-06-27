import React from 'react';
import { motion } from 'framer-motion';
import { Radar, Sparkles, ShieldCheck, Workflow, Rocket, Activity, Zap, Cpu, Target, Layers } from 'lucide-react';

const WhyChooseMissionControl = () => {
    // Card data for easy updates
    const modules = [
        {
            id: 'MOD-01',
            icon: ShieldCheck,
            title: "Mission Precision",
            description: "Every detail is planned, tracked, and executed with accuracy to ensure a smooth and flawless event journey.",
            progress: 98,
            labels: ["Timeline Locked", "Quality Checked"],
            color: "text-blue-400",
            glow: "shadow-blue-500/20"
        },
        {
            id: 'MOD-02',
            icon: Sparkles,
            title: "Creative Intelligence",
            description: "We transform ideas into memorable event concepts through strategic thinking, visual creativity, and brand-focused storytelling.",
            progress: 95,
            labels: ["Concept Optimized", "Experience Designed"],
            color: "text-violet-400",
            glow: "shadow-violet-500/20"
        },
        {
            id: 'MOD-03',
            icon: Workflow,
            title: "Full-Spectrum Control",
            description: "From vendors and logistics to production and guest experience, every moving part is managed under one clear command system.",
            progress: 100,
            labels: ["Vendors Synced", "Flow Controlled"],
            color: "text-cyan-400",
            glow: "shadow-cyan-500/20"
        },
        {
            id: 'MOD-04',
            icon: Rocket,
            title: "High-Impact Delivery",
            description: "Our events are built to impress, engage, and create lasting impact for brands, guests, and audiences.",
            progress: 92,
            labels: ["Audience Engaged", "Impact Confirmed"],
            color: "text-emerald-400",
            glow: "shadow-emerald-500/20"
        }
    ];

    return (
        <section className="relative w-full pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden bg-deep-space text-starlight">
            {/* --- Background Elements --- */}
            <div className="absolute inset-0 z-0">
                {/* Radial Gradients */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-nebula-purple/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cosmic-blue/10 blur-[120px]" />
                
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(79,209,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(79,209,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
                
                {/* Moving Scan Line */}
                <motion.div 
                    className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue/30 to-transparent z-10"
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Animated Glowing Orbs */}
                <motion.div 
                    className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-cosmic-blue shadow-[0_0_15px_#4FD1FF] z-10"
                    animate={{ opacity: [0, 0.6, 0], scale: [0.5, 2, 0.5] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div 
                    className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-nebula-purple shadow-[0_0_15px_#8B5CF6] z-10"
                    animate={{ opacity: [0, 0.4, 0], scale: [0.5, 2.5, 0.5] }}
                    transition={{ duration: 7, repeat: Infinity, delay: 2 }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                        Why Choose Orbit Events
                    </h2>
                    <p className="text-white/40 text-lg leading-relaxed font-light tracking-wide">
                        We operate every event like a mission command system—combining strategy, creativity, precision, and full-spectrum control to deliver seamless experiences with lasting impact.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
                    
                    {/* --- Left Side: Mission Control Core --- */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-5 h-full rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-8 md:p-12 relative overflow-hidden group shadow-2xl flex flex-col"
                    >
                        {/* Ambient Inner Glow */}
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-cosmic-blue/10 blur-[100px] group-hover:bg-cosmic-blue/20 transition-colors duration-1000" />
                        
                        {/* Decorative Corners */}
                        <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-cosmic-blue/30 rounded-tl-xl group-hover:border-cosmic-blue transition-colors duration-500" />
                        <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-cosmic-blue/30 rounded-br-xl group-hover:border-cosmic-blue transition-colors duration-500" />
                        
                        <div className="relative z-10 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-2 h-2 rounded-full bg-cosmic-blue animate-pulse shadow-[0_0_10px_#4FD1FF]" />
                                <span className="text-cosmic-blue/60 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">Orbit Command Center</span>
                            </div>

                            <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-6 leading-[1.1] tracking-tighter">
                                Event Execution <br /> System
                            </h3>
                            
                            <p className="text-white/40 text-base leading-relaxed mb-8 font-light">
                                Real-time coordination, creative direction, vendor alignment, and flawless delivery managed through one controlled process.
                            </p>

                            {/* --- NEW: Technical Data Stream to fill the gap --- */}
                            <div className="grid grid-cols-2 gap-4 mb-16">
                                {/* System Logs Terminal */}
                                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden group/term">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[8px] font-mono text-cosmic-blue/50 uppercase tracking-widest">System Logs</span>
                                        <div className="flex gap-1">
                                            <div className="w-1 h-1 rounded-full bg-cosmic-blue/30" />
                                            <div className="w-1 h-1 rounded-full bg-cosmic-blue/30" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        {[
                                            { t: '12:04:12', msg: 'CORE.SYNC: COMPLETED' },
                                            { t: '12:04:45', msg: 'ASSET.LOAD: TRAJECTORY' },
                                            { t: '12:05:01', msg: 'PROTO.INIT: ACTIVE' },
                                        ].map((log, lidx) => (
                                            <div key={lidx} className="flex gap-2 font-mono text-[7px] leading-none">
                                                <span className="text-white/20">{log.t}</span>
                                                <span className="text-white/40 group-hover/term:text-cosmic-blue/60 transition-colors">{log.msg}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <motion.div 
                                        className="absolute bottom-0 left-0 h-[1px] bg-cosmic-blue/20"
                                        animate={{ width: ['0%', '100%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>

                                {/* Mission Timeline Bar */}
                                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                                    <span className="text-[8px] font-mono text-cosmic-blue/50 uppercase tracking-widest mb-4">Mission Timeline</span>
                                    <div className="relative h-1 bg-white/5 rounded-full overflow-hidden mb-2">
                                        <motion.div 
                                            className="absolute inset-y-0 left-0 bg-cosmic-blue shadow-[0_0_8px_#4FD1FF]"
                                            animate={{ width: ['20%', '85%', '20%'] }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                    </div>
                                    <div className="flex justify-between font-mono text-[7px] text-white/20 uppercase tracking-tighter">
                                        <span>Ignition</span>
                                        <span>Orbit</span>
                                    </div>
                                </div>
                            </div>

                            {/* Animated Radar Graphic */}
                            <div className="relative flex items-center justify-center py-12 mb-12">
                                {/* Orbital Rings */}
                                <motion.div 
                                    className="absolute w-56 h-56 rounded-full border border-white/5"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div 
                                    className="absolute w-40 h-40 rounded-full border border-cosmic-blue/10"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                                
                                {/* Radar Line */}
                                <motion.div 
                                    className="absolute w-56 h-56 rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-28 bg-gradient-to-t from-cosmic-blue/40 via-cosmic-blue/10 to-transparent" />
                                </motion.div>

                                {/* Center Pulse */}
                                <div className="relative flex items-center justify-center">
                                    <motion.div 
                                        className="absolute w-6 h-6 rounded-full bg-cosmic-blue/20"
                                        animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    />
                                    <div className="w-3 h-3 rounded-full bg-cosmic-blue shadow-[0_0_15px_#4FD1FF] z-10" />
                                </div>
                            </div>

                            {/* System Status Indicators */}
                            <div className="grid grid-cols-2 gap-4 mt-auto">
                                {[
                                    { label: 'Planning', status: 'Online', icon: Target },
                                    { label: 'Design', status: 'Active', icon: Cpu },
                                    { label: 'Logistics', status: 'Synced', icon: Layers },
                                    { label: 'Delivery', status: 'Ready', icon: Rocket },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group/stat hover:bg-white/[0.05] transition-colors">
                                        <div className="p-2 rounded-lg bg-white/5 text-cosmic-blue/50 group-hover/stat:text-cosmic-blue transition-colors">
                                            <item.icon size={16} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-white/20 uppercase font-mono tracking-wider">{item.label}</span>
                                            <span className="text-[10px] text-cosmic-blue font-mono font-bold tracking-widest uppercase">{item.status}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Right Side: Module Cards --- */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {modules.map((module, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className={`group relative p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-700 hover:border-white/30 hover:bg-white/[0.04] flex flex-col shadow-2xl overflow-hidden`}
                            >
                                {/* Module Glow */}
                                <div className={`absolute -right-16 -top-16 w-32 h-32 blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity bg-current ${module.color}`} />
                                
                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                                            <span className="text-[9px] font-mono text-white/30 tracking-[0.3em] uppercase">System Active</span>
                                        </div>
                                        <span className="text-[9px] font-mono text-cosmic-blue/40 uppercase tracking-[0.3em] font-bold">{module.id}</span>
                                    </div>
                                    <div className="hidden">
                                        {/* Removed module icons */}
                                    </div>
                                </div>

                                <h4 className="text-2xl font-display font-black text-white mb-4 leading-tight tracking-tight">
                                    {module.title}
                                </h4>
                                
                                <p className="text-white/40 text-sm font-light leading-relaxed mb-8 flex-1">
                                    {module.description}
                                </p>

                                {/* Animated Progress Bar */}
                                <div className="mb-8 relative z-10">
                                    <div className="flex justify-between items-end mb-3">
                                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Efficiency Matrix</span>
                                        <span className={`text-[10px] font-mono ${module.color} font-black`}>{module.progress}%</span>
                                    </div>
                                    <div className="w-full h-[4px] bg-white/5 rounded-full overflow-hidden p-[1px]">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${module.progress}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                                            className={`h-full rounded-full bg-gradient-to-r from-transparent via-white/50 to-current ${module.color} shadow-[0_0_12px_currentColor]`}
                                        />
                                    </div>
                                </div>

                                {/* Data Labels */}
                                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 relative z-10">
                                    {module.labels.map((label, lIdx) => (
                                        <span key={lIdx} className="text-[8px] font-mono px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-white/20 uppercase tracking-[0.2em] group-hover:text-white/60 group-hover:border-white/10 transition-all duration-500">
                                            {label}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Subtle Noise Texture Overlay */}
            <div className="absolute inset-0 z-1 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </section>
    );
};

export default WhyChooseMissionControl;

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Cpu, Navigation, Sparkles } from 'lucide-react';

const steps = [
    { 
        id: "2014", 
        title: "Mission Ignition", 
        subtitle: "Ground Control Established",
        icon: Navigation, 
        desc: "Orbit Control Center was founded with a single objective: to engineer event dimensions that defy the status quo. We launched our first series of boutique experiential missions.",
        themeColor: "text-white",
        borderColor: "border-white/30",
        glow: "shadow-[0_0_30px_rgba(255,255,255,0.2)]",
        bgGlow: "bg-white/5",
        data: "EST. // Q1 2014",
        coords: "N 25° 20' 48\""
    },
    { 
        id: "2017", 
        title: "Orbital Expansion", 
        subtitle: "Scaling the Universe",
        icon: Sparkles, 
        desc: "Achieved the 50-mission milestone. We expanded our gravitational pull across the UAE and Gulf region, establishing ourselves as a premier agency for luxury brand activations.",
        themeColor: "text-cosmic-blue",
        borderColor: "border-cosmic-blue/30",
        glow: "shadow-[0_0_30px_rgba(79,209,255,0.3)]",
        bgGlow: "bg-cosmic-blue/5",
        data: "STAT // 50+ MISSIONS",
        coords: "E 55° 27' 08\""
    },
    { 
        id: "2020", 
        title: "Tech Integration", 
        subtitle: "Digital Dimension",
        icon: Cpu, 
        desc: "Pioneered virtual and hybrid event modules during the global shift. Integrated advanced holographic tech into live production, setting a new industry benchmark for tech-driven experiences.",
        themeColor: "text-white",
        borderColor: "border-white/30",
        glow: "shadow-[0_0_30px_rgba(255,255,255,0.2)]",
        bgGlow: "bg-white/5",
        data: "SYS.UP // HYBRID V1.0",
        coords: "W 12° 04' 09\""
    },
    { 
        id: "2023", 
        title: "Global Trajectory", 
        subtitle: "International Horizons",
        icon: Rocket, 
        desc: "Reached the 150-mission mark. Successfully executed large-scale international projects in Europe and Asia, solidifying Orbit's status as a global experience engine.",
        themeColor: "text-cosmic-blue",
        borderColor: "border-cosmic-blue/30",
        glow: "shadow-[0_0_30px_rgba(79,209,255,0.3)]",
        bgGlow: "bg-cosmic-blue/5",
        data: "ORBIT.STAT // GLOBAL",
        coords: "S 33° 51' 11\""
    },
    { 
        id: "Present", 
        title: "Future Frontiers", 
        subtitle: "Beyond the Horizon",
        icon: Target, 
        desc: "Continuously charting new territory in the experience universe. We remain focused on pushing boundaries and redefining what is possible in event architecture.",
        themeColor: "text-white",
        borderColor: "border-white/30",
        glow: "shadow-[0_0_30px_rgba(255,255,255,0.2)]",
        bgGlow: "bg-white/5",
        data: "TARGET // UNLIMITED",
        coords: "00° 00' 00\""
    }
];

export default function Timeline() {
    return (
        <section className="pt-12 pb-16 relative bg-[#060913] overflow-hidden font-sans">
            {/* High-tech grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-30 pointer-events-none"></div>
            
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                
                {/* Header Section */}
                <div className="text-center mb-32 relative">

                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-[100px] font-display font-black mb-8 uppercase tracking-tighter"
                    >
                        <span className="text-white inline-block">Evolution</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 relative inline-block italic">
                            Timeline
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-starlight/60 max-w-2xl mx-auto text-lg md:text-xl font-light font-sans"
                    >
                        Charting our trajectory from ignition in 2014 to becoming a global engine for extraordinary brand experiences.
                    </motion.p>
                </div>

                {/* Timeline Container */}
                <div className="relative mt-20 md:mt-40">
                    {/* The core laser beam */}
                    <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-[2px] md:-translate-x-1/2 hidden sm:block bg-white/5">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-50" />
                        {/* Data packet flowing down the beam */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" style={{ animation: 'flowDown 4s linear infinite' }} />
                    </div>

                    <div className="flex flex-col gap-16 md:gap-32 relative z-10">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            
                            return (
                                <div key={step.id} className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                                    
                                    {/* Desktop Data Readout (Opposite side of card) */}
                                    <div className={`hidden md:flex flex-col justify-center w-[40%] ${!isEven ? 'order-1 items-end text-right' : 'order-2 items-start text-left'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.7, delay: 0.3 }}
                                            className="font-mono text-sm"
                                        >
                                            <div className={`flex items-center gap-3 mb-2 ${!isEven ? 'flex-row-reverse' : ''}`}>
                                                <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse" />
                                                <span className="text-white/20 tracking-widest">{step.coords}</span>
                                            </div>
                                            <div className={`text-xl font-bold text-white opacity-40 tracking-widest uppercase font-display italic`}>
                                                {step.data}
                                            </div>
                                        </motion.div>
                                    </div>
                                    
                                    {/* Center Orbital Node */}
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                                        className="absolute left-0 top-0 sm:left-[28px] sm:top-1/2 md:left-1/2 w-16 h-16 sm:-translate-x-1/2 sm:-translate-y-1/2 flex items-center justify-center z-20"
                                    >
                                        {/* Outer target ring */}
                                        <div className={`absolute inset-[-10px] rounded-full border border-white/5 border-dashed animate-[spin_15s_linear_infinite] group-hover:border-white/20 transition-colors`} />
                                        
                                        {/* Inner glowing ring */}
                                        <div className={`absolute inset-0 rounded-full border border-white/10 opacity-40 animate-[spin_8s_linear_infinite_reverse] group-hover:opacity-100 transition-opacity`} />
                                        
                                        {/* Core node */}
                                        <div className={`relative w-10 h-10 bg-[#0A0E17] rounded-full border border-white/20 flex items-center justify-center z-10 group-hover:${step.glow} transition-shadow duration-500 shadow-xl`}>
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
                                            <step.icon size={18} className="relative z-20 text-white/80" />
                                        </div>

                                        {/* Mobile structural connector */}
                                        <div className="sm:hidden absolute top-16 left-1/2 w-[2px] h-[calc(100%+4rem)] bg-gradient-to-b from-white/10 to-transparent -translate-x-1/2" />
                                    </motion.div>

                                    {/* Main Content Card - HUD Style */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6 }}
                                        className={`w-full sm:w-[calc(100%-80px)] sm:ml-[80px] md:w-[40%] md:ml-0 ${isEven ? 'md:order-2' : 'md:order-0'} relative pt-20 sm:pt-0`}
                                    >
                                        {/* Rocket Panel Design */}
                                        <div className="relative w-full max-w-md mx-auto group/rocket hover:-translate-y-8 transition-transform duration-700">
                                            
                                            {/* Vivid Red/Orange Flame Exhaust & Real Fire */}
                                            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-32 h-64 pointer-events-none z-0 overflow-visible flex justify-center">
                                                
                                                {/* Large Red Outer Glow */}
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[80%] bg-red-600/50 blur-3xl animate-[flame-pulse_1.2s_ease-in-out_infinite] opacity-70 group-hover/rocket:opacity-100 transition-all duration-700" />
                                                
                                                {/* Vivid Orange Middle Flame */}
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[70%] bg-gradient-to-t from-transparent via-orange-500 to-red-500 blur-xl animate-[flame-flicker_0.4s_ease-in-out_infinite] opacity-90" />
                                                
                                                {/* Bright Yellow/White Core */}
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[50%] bg-gradient-to-t from-transparent via-yellow-300 to-white blur-md animate-[flame-pulse_0.8s_ease-in-out_infinite] opacity-100" />

                                                {/* REAL FIRE PHOTOGRAPHIC OVERLAY */}
                                                <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-24 h-[90%] overflow-hidden transform rotate-180 mix-blend-screen opacity-80 group-hover/rocket:opacity-100 group-hover/rocket:scale-y-125 transition-all duration-700 origin-top [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                                                    <img 
                                                        src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=400&auto=format&fit=crop" 
                                                        alt="Real Fire" 
                                                        className="w-full h-full object-cover animate-[flame-flicker_0.3s_ease-in-out_infinite]"
                                                        style={{ filter: 'brightness(1.5) contrast(2.5)' }}
                                                    />
                                                </div>
                                                
                                                {/* Particle Sparks (Subtle) */}
                                                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-200 rounded-full blur-[1px] animate-[ping_1.5s_infinite] opacity-50" />
                                            </div>
                                            
                                            {/* Left Fin */}
                                            <div className="absolute bottom-4 -left-6 w-12 h-32 bg-gradient-to-br from-white/10 to-transparent border-l border-b border-white/10 rounded-bl-3xl -skew-y-12 transform -z-10 group-hover/rocket:border-white/30 transition-colors duration-500" />
                                            
                                            {/* Right Fin */}
                                            <div className="absolute bottom-4 -right-6 w-12 h-32 bg-gradient-to-bl from-white/10 to-transparent border-r border-b border-white/10 rounded-br-3xl skew-y-12 transform -z-10 group-hover/rocket:border-white/30 transition-colors duration-500" />

                                            {/* Main Fuselage (The Card) */}
                                            <div 
                                                className="relative bg-white/[0.03] backdrop-blur-xl p-8 pt-12 md:p-10 md:pt-14 border border-white/10 group-hover/rocket:border-white/30 transition-all duration-500 shadow-2xl overflow-hidden z-10"
                                                style={{ 
                                                    clipPath: 'polygon(50% 0%, 100% 12%, 100% 100%, 0% 100%, 0% 12%)', 
                                                    borderRadius: '4rem 4rem 1rem 1rem' 
                                                }}
                                            >
                                                {/* Subtle gradient over the rocket body */}
                                                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/50 pointer-events-none" />
                                                
                                                {/* Vertical Fuselage Line */}
                                                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none" />

                                                {/* Nose Cone Window (Year) */}
                                                <div className="mx-auto w-24 h-24 rounded-full border-[6px] border-[#0A0E17] shadow-[0_0_0_1px_rgba(255,255,255,0.1)] bg-gradient-to-br from-white/10 to-black flex items-center justify-center mb-8 relative overflow-hidden group-hover/rocket:shadow-[0_0_0_1px_rgba(79,209,255,0.4)] transition-all duration-500">
                                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.3),transparent)] pointer-events-none" />
                                                    {/* Reflection glare */}
                                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full opacity-50" />
                                                    
                                                    <span className="text-xl md:text-2xl font-display font-black text-white relative z-10 tracking-tighter">
                                                        {step.id}
                                                    </span>
                                                </div>

                                                <div className="relative z-10 flex flex-col items-center text-center mt-2">
                                                    {/* Subtitle */}
                                                    <div className="px-4 py-1.5 bg-white/5 border border-white/10 font-mono text-[9px] md:text-[10px] text-white/50 uppercase tracking-[0.2em] rounded-full mb-6 group-hover/rocket:border-white/20 transition-colors">
                                                        {step.subtitle}
                                                    </div>
                                                    
                                                    {/* Title & Desc */}
                                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 tracking-tight">
                                                        {step.title}
                                                    </h3>
                                                    
                                                    <p className="text-white/50 leading-relaxed font-light font-sans text-sm md:text-base">
                                                        {step.desc}
                                                    </p>
                                                    
                                                    {/* Technical Details */}
                                                    <div className="w-full mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                                                        <div className="flex gap-1.5">
                                                            {[...Array(6)].map((_, i) => (
                                                                <div key={i} className={`w-1 h-2 ${i < 3 ? 'bg-white/40' : 'bg-white/5'} transform -skew-x-12`} />
                                                            ))}
                                                        </div>
                                                        <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase">{step.data}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Engine Nozzle at bottom */}
                                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-gradient-to-b from-[#1a1a2e] to-black border-x border-b border-white/20 rounded-b-2xl z-10 flex justify-center items-end pb-1 shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                                                 <div className="w-16 h-1 bg-white/20 rounded-full" />
                                            </div>
                                        </div>
                                    </motion.div>
                                    
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            
            <style>{`
                @keyframes flowDown {
                    0% { top: -20%; opacity: 0; }
                    20% { opacity: 1; }
                    80% { opacity: 1; }
                    100% { top: 120%; opacity: 0; }
                }
                @keyframes flame-pulse {
                    0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.8; }
                    50% { transform: translateX(-50%) scale(1.1); opacity: 1; }
                }
                @keyframes flame-flicker {
                    0%, 100% { transform: translateX(-50%) skewX(0deg) scaleY(1); }
                    25% { transform: translateX(-50%) skewX(2deg) scaleY(1.05); }
                    75% { transform: translateX(-50%) skewX(-2deg) scaleY(0.95); }
                }
            `}</style>
        </section>
    );
}

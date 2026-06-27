import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket } from 'lucide-react';

const timelineData = [
    {
        year: "2002",
        title: "The Journey Begins",
        description: "A vision set in motion, creating experiences that connect people and brands."
    },
    {
        year: "2004",
        title: "First Launch Sequence",
        description: "Entered the world of live experiences through corporate events, brand activations, and entertainment across the UAE."
    },
    {
        year: "2010",
        title: "Expanding Into New Orbits",
        description: "Growing into larger productions, public events, and regional collaborations across new markets."
    },
    {
        year: "2014-15",
        title: "100+ Missions Completed",
        description: "Over 100 successful experiences delivered across corporate, entertainment, lifestyle, and community sectors.",
        launchLabel: "Launch",
        launches: ["Dubai Supermom"]
    },
    {
        year: "2020",
        title: "Launching Bigger Experiences",
        description: "Stepping into larger-format productions, records, and empowerment platforms.",
        launchLabel: "Launch",
        launches: ["Abaya Rally Women's Drive", "Guinness Book of Records"]
    },
    {
        year: "2022",
        title: "The Era of Original IPs",
        description: "Building diverse intellectual properties and community-driven platforms.",
        launchLabel: "Key Launches",
        launches: ["Kandura Rally", "We Conquer"]
    },
    {
        year: "2024",
        title: "Entering New Frontiers",
        description: "Creating experiences with greater community impact.",
        launchLabel: "Launch",
        launches: ["EarthSoul Festival"]
    },
    {
        year: "2025",
        title: "Beyond Borders",
        description: "Expanding into new markets with large-scale concerts and IPs.",
        launchLabel: "Launches",
        launches: ["Abaya Rally Qatar", "Dabangg Salman Khan Live in Qatar"]
    },
    {
        year: "2026",
        title: "The Next Orbit",
        description: "Stepping into storytelling, media, and broadcast-led platforms built for the future.",
        launchLabel: "Launch",
        launches: ["The Gamechangers Middle East"]
    }
];

export default function OrbitTimelineSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const [activeIndex, setActiveIndex] = useState(null);

    // Subtle parallax for background elements
    const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={containerRef} className="pt-12 pb-8 relative bg-[#060913] overflow-hidden font-sans">

            {/* --- Background Effects --- */}

            {/* Deep atmospheric gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#14203D_0%,transparent_70%)] opacity-40 pointer-events-none" />

            {/* Subtle galaxy fog */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 bg-gradient-to-r from-cosmic-blue/5 via-nebula-purple/5 to-cosmic-blue/5 blur-[100px] pointer-events-none" />

            {/* Planet horizon glow at bottom edge */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cosmic-blue/10 to-transparent blur-2xl pointer-events-none" />

            {/* Floating cosmic dust (simulated with CSS pattern) */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSIvPgo8L3N2Zz4=')] bg-[length:40px_40px] opacity-30 pointer-events-none"
            />

            {/* Thin orbital curves in background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] aspect-square rounded-[50%] border border-white/[0.03] pointer-events-none" />
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[120vw] aspect-square rounded-[50%] border border-cosmic-blue/[0.03] pointer-events-none" />


            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                {/* --- Header Section --- */}
                <div className="text-center mb-16 relative">


                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    >
                        Orbit Milestones
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl font-display text-white/80 mb-6 font-medium tracking-wide"
                    >
                        Built on Vision. Driven by Impact.
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-starlight/60 max-w-2xl mx-auto text-lg font-light leading-relaxed"
                    >
                        From a bold idea to regional launches and original IPs, explore the milestones that shaped Orbit Events over the years.
                    </motion.p>
                </div>

                {/* --- Timeline Architecture --- */}

                {/* Desktop Horizontal Timeline Wrapper */}
                <div className="relative hidden lg:block pb-10">
                    {/* Glowing Horizontal Line */}
                    <div className="absolute top-[80px] left-0 w-full h-[1px] bg-white/10">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cosmic-blue/50 to-transparent opacity-50" />
                        {/* Moving Spaceship */}
                        <motion.div
                            animate={{ left: ["-10%", "110%"] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 -translate-y-1/2 flex items-center"
                        >
                            {/* Engine Trail */}
                            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-cosmic-blue/40 to-cyan-400 shadow-[0_0_15px_#4FD1FF] opacity-50" />
                            
                            {/* Realistic Spaceship Image */}
                            <div className="relative w-32 h-20 -ml-4">
                                <img 
                                    src="/spaceship.png" 
                                    alt="Spaceship" 
                                    className="w-full h-full object-contain mix-blend-screen drop-shadow-[0_0_15px_rgba(79,209,255,0.4)]"
                                />
                                {/* Subtle Engine Pulse Glow */}
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 blur-md rounded-full animate-pulse opacity-60" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-9 relative z-10 w-full px-4">
                        {timelineData.map((node, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <div
                                    key={`${node.year}-${node.title}`}
                                    className="flex flex-col items-center relative flex-1"
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onMouseLeave={() => setActiveIndex(null)}
                                >
                                    {/* Year Label */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`text-sm tracking-[0.3em] uppercase font-bold mb-8 transition-all duration-500 ${isActive ? 'text-cosmic-blue scale-110' : 'text-starlight/30'}`}
                                    >
                                        {node.year}
                                    </motion.div>

                                    {/* Cosmic Node (Technical Point) */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        className="relative flex items-center justify-center h-24 mb-16"
                                    >
                                        {/* Connecting vertical tick */}
                                        <div className={`absolute -top-10 w-[1px] h-10 transition-colors duration-500 ${isActive ? 'bg-cosmic-blue/50' : 'bg-white/10'}`} />

                                        {/* Node Container */}
                                        <div className={`relative rounded-full flex items-center justify-center transition-all duration-700 ${isActive ? 'w-10 h-10 bg-cosmic-blue shadow-[0_0_20px_rgba(79,209,255,0.6)]' : 'w-4 h-4 bg-white/20'}`}>
                                            <div className={`absolute inset-[-8px] rounded-full border border-cosmic-blue/20 transition-opacity ${isActive ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />
                                            {/* Inner tech detail */}
                                            <div className="w-1 h-1 bg-black rounded-full" />
                                        </div>
                                    </motion.div>

                                    {/* Content Card Container (Relative now) */}
                                    <div className="relative w-full px-2 flex justify-center min-h-[390px]">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + 0.4 }}
                                            className={`w-full max-w-[180px] h-[380px] p-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-700 text-center flex flex-col items-center group/card
                                                ${isActive ? 'border-cosmic-blue/40 bg-white/[0.06] -translate-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]' : 'hover:bg-white/[0.04]'}`}
                                        >
                                            {/* Connecting vertical line down to card */}
                                            <div className={`absolute -top-16 w-[1px] h-16 transition-all duration-700 ${isActive ? 'bg-gradient-to-b from-cosmic-blue/50 to-cosmic-blue/20' : 'bg-white/5'}`} />

                                            <h3 className={`text-base leading-tight font-display font-bold mb-2 tracking-tight transition-colors duration-500 ${isActive ? 'text-cosmic-blue' : 'text-white'}`}>
                                                {node.title}
                                            </h3>
                                            <p className="text-[11px] text-starlight/50 leading-relaxed font-light group-hover/card:text-starlight/80 transition-colors">
                                                {node.description}
                                            </p>
                                            {node.launches && (
                                                <div className="mt-4 pt-3 border-t border-white/10 w-full text-left">
                                                    <div className="flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.2em] text-cosmic-blue/80 font-bold mb-2">
                                                        <Rocket size={12} />
                                                        <span>{node.launchLabel}</span>
                                                    </div>
                                                    <ul className="space-y-1.5 text-[10px] text-starlight/60 leading-relaxed">
                                                        {node.launches.map((launch) => (
                                                            <li key={launch} className="text-center">
                                                                {launch}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile / Tablet Vertical Timeline */}
                <div className="lg:hidden relative pl-8 md:pl-1/2">
                    {/* Vertical Glowing Line */}
                    <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-[1px] bg-white/10 md:-translate-x-1/2">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cosmic-blue/50 to-transparent opacity-50" />
                        {/* Moving Spaceship on Mobile */}
                        <motion.div
                            animate={{ top: ["-5%", "105%"] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
                        >
                            {/* Engine Trail (coming from top) */}
                            <div className="w-[2px] h-20 bg-gradient-to-b from-transparent via-cosmic-blue/40 to-cyan-400 shadow-[0_0_10px_#4FD1FF] opacity-40" />
                            
                            {/* Spaceship Image rotated 90deg to face down */}
                            <div className="relative w-24 h-32 -mt-3">
                                <img 
                                    src="/spaceship.png" 
                                    alt="Spaceship" 
                                    className="w-full h-full object-contain mix-blend-screen drop-shadow-[0_0_20px_rgba(79,209,255,0.5)] rotate-90"
                                />
                                {/* Subtle Engine Pulse Glow */}
                                <div className="absolute left-1/2 -translate-x-1/2 top-2 w-5 h-5 bg-cyan-400 blur-sm rounded-full animate-pulse opacity-70" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-16 relative z-10">
                        {timelineData.map((node, index) => {
                            const isEven = index % 2 === 0;
                            const isActive = activeIndex === index;

                            return (
                                <div key={`${node.year}-${node.title}`} className="relative flex flex-col md:flex-row items-center w-full group">

                                    {/* Center Node on Mobile (Left aligned on mobile, Center on Tablet) */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        className="absolute left-0 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
                                    >
                                        <div className="absolute inset-[-10px] rounded-full border border-cosmic-blue/30 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 shadow-[0_0_20px_rgba(79,209,255,0.3)]" />

                                        <div className="relative w-12 h-12 rounded-full border border-white/20 group-hover:border-cosmic-blue/50 transition-colors duration-500 shadow-xl flex items-center justify-center bg-[#0A0E17]">
                                            <div className={`w-3 h-3 rounded-full transition-all duration-500 ${isActive ? 'bg-cosmic-blue scale-150 shadow-[0_0_10px_rgba(79,209,255,0.8)]' : 'bg-white/20'}`} />
                                        </div>
                                    </motion.div>

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:ml-auto md:text-left' : 'md:mr-auto md:text-right md:pr-16'}`}
                                    >
                                        <div className="min-h-[260px] p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md group-hover:bg-white/[0.05] group-hover:border-cosmic-blue/30 transition-all duration-500 shadow-lg relative">
                                            {/* Highlight gradient on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                            <div className="text-cosmic-blue text-sm tracking-[0.2em] font-bold mb-2">
                                                {node.year}
                                            </div>
                                            <h3 className="text-2xl font-display font-bold text-white mb-3">
                                                {node.title}
                                            </h3>
                                            <p className="text-starlight/60 text-sm leading-relaxed font-light">
                                                {node.description}
                                            </p>
                                            {node.launches && (
                                                <div className="mt-5 pt-4 border-t border-white/10">
                                                    <div className="flex items-center gap-2 text-cosmic-blue text-xs tracking-[0.2em] uppercase font-bold mb-3">
                                                        <Rocket size={14} />
                                                        <span>{node.launchLabel}</span>
                                                    </div>
                                                    <ul className="space-y-2 text-starlight/70 text-sm leading-relaxed font-light">
                                                        {node.launches.map((launch) => (
                                                            <li key={launch}>{launch}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 pb-12 mt-16 lg:mt-0">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-xl md:text-2xl font-display italic text-white/80"
                >
                    And This Mission Is Only Getting Started.
                </motion.p>
            </div>
        </section>
    );
}

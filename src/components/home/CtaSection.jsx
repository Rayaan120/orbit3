import React from 'react';
import { motion } from 'framer-motion';
import StarBackground from './StarBackground';

export default function CtaSection() {
    return (
        <section className="relative py-40 overflow-hidden bg-deep-space">
            {/* Cinematic Star Background */}
            <div className="absolute inset-0 z-0">
                <StarBackground />
            </div>

            {/* Core Glow Behind Console */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-cosmic-blue/10 rounded-full blur-[150px] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                {/* Main Holographic Console */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full border border-white/10 bg-deep-space/40 backdrop-blur-2xl rounded-2xl p-10 md:p-16 overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    {/* Console HUD Lines */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue to-transparent opacity-50" />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue to-transparent opacity-50" />
                    
                    {/* Scanning Line Animation */}
                    <motion.div 
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        className="absolute left-0 right-0 h-[3px] bg-cosmic-blue/40 blur-[3px] z-0 pointer-events-none shadow-[0_0_15px_rgba(64,166,255,0.5)]"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                        
                        {/* Left Side: Telemetry / Header Text */}
                        <div className="space-y-8">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-4 text-xs md:text-sm font-mono text-cosmic-blue uppercase tracking-[0.3em]"
                            >
                                <span className="w-2 h-2 rounded-full bg-cosmic-blue animate-pulse shadow-[0_0_10px_rgba(64,166,255,0.8)]" />
                                System Status: Online // Active
                            </motion.div>
                            
                            <h2 className="text-5xl md:text-7xl font-display font-light text-white leading-tight">
                                Ready To <br />
                                <span className="font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Elevate?</span>
                            </h2>
                            
                            <p className="text-white/60 text-lg md:text-xl max-w-lg font-light leading-relaxed">
                                Partner with Orbit to transform your vision into an unforgettable reality. Let's engineer something extraordinary together.
                            </p>
                        </div>

                        {/* Right Side: The Interface / Buttons */}
                        <div className="flex flex-col gap-6 w-full lg:max-w-md ml-auto">
                            
                            {/* Primary Action */}
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative w-full group/btn overflow-hidden rounded-xl border border-cosmic-blue/50 bg-cosmic-blue/5 backdrop-blur-md p-1 cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-cosmic-blue translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-in-out" />
                                <div className="relative flex items-center justify-between px-8 py-6">
                                    <span className="font-display font-bold text-white tracking-widest uppercase text-sm md:text-base group-hover/btn:text-deep-space transition-colors duration-500">
                                        Inquire Now
                                    </span>
                                    {/* Action Icon */}
                                    <svg className="w-6 h-6 text-cosmic-blue group-hover/btn:text-deep-space transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </motion.button>

                            {/* Secondary Action */}
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-between px-9 py-6 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 group/comm cursor-pointer"
                            >
                                <span className="font-display font-bold text-white/70 group-hover/comm:text-white tracking-widest uppercase text-sm md:text-base">
                                    Explore Portfolio
                                </span>
                                <div className="w-3 h-3 rounded-full border border-white/50 group-hover/comm:bg-white transition-colors duration-300" />
                            </motion.button>

                            {/* Decorative coordinate layout beneath buttons */}
                            <div className="flex justify-between w-full px-2 text-[10px] text-white/30 font-mono tracking-[0.2em] mt-4 border-t border-white/5 pt-4">
                                <span>COORD: 25.2048° N</span>
                                <span>COORD: 55.2708° E</span>
                            </div>
                        </div>

                    </div>
                    
                    {/* Decorative Sci-Fi Corner Brackets */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cosmic-blue/40" />
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cosmic-blue/40" />
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-cosmic-blue/40" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cosmic-blue/40" />
                </motion.div>
            </div>
        </section>
    );
}

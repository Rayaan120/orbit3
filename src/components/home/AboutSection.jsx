import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutSection() {
    return (
        <section id="about-mission" className="relative w-full bg-deep-space overflow-hidden border-t border-white/5">
            {/* 
                Visual foundation using the provided cinematic image.
                The layout is designed to strictly preserve the visual integrity of the asset
                while preparing a clean left-aligned space for future content insertion.
            */}
            <div className="relative w-full min-h-[60vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
                
                {/* Cinematic Background Layer */}
                <div className="absolute inset-0 z-0">
                    <motion.img 
                        initial={{ scale: 1.05, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        src="/about/about.png" 
                        alt="Orbit Events Mission Control" 
                        className="w-full h-full object-cover select-none pointer-events-none"
                    />
                    
                    {/* 
                        Multi-Layered Cinematic Overlays:
                        1. Primary Content Gradient - Ensures future text on the left is legible 
                           without obstructing the Earth and satellite on the right.
                    */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-deep-space via-deep-space/60 to-transparent w-full md:w-[80%] lg:w-[55%]" />
                    
                    {/* 2. Top & Bottom Vignettes - Smoothly blends the section with adjacent site content */}
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep-space to-transparent z-10 opacity-90" />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep-space to-transparent z-10 opacity-90" />
                    
                    {/* 3. Global Atmospheric Glow - Adds a subtle premium depth to the space theme */}
                    <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,15,26,0.4)_100%)] pointer-events-none" />
                </div>

                {/* Content Architecture - Structured for future content insertion on the left side */}
                <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 md:px-12 h-full flex items-center">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
                        {/* 
                            This content zone is left clean as per requirements. 
                            The layout maintains a "Rule of Thirds" balance where the visual weight 
                            is carried by the background image on the right, and the 
                            intellectual weight will be carried by the text on the left.
                        */}
                        <div className="py-24 md:py-32 w-full max-w-xl">
                            <motion.h2 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight"
                            >
                                We’re ORBIT – we believe experience matters.
                            </motion.h2>
                            
                            <motion.p 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-starlight/80 text-lg md:text-xl mb-8 font-light leading-relaxed"
                            >
                                We help brands connect with people through Event Management, Product Sampling, Sponsorship Activation, Wedding Planning, and Entertainment.
                            </motion.p>

                            <motion.p 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="text-starlight/60 text-sm md:text-base font-light leading-relaxed border-l border-white/20 pl-6"
                            >
                                Celebrating Global Live Entertainment in UAE for two (2) decades. We combine creativity with over two decades of experience creating literally hundreds of award-winning, extraordinary live events, experiences, festivals, concerts, and brand activations.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="mt-10"
                            >
                                <Link to="/about" className="group relative inline-block px-8 py-3.5 bg-white text-deep-space font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Learn More
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                                    </span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Technical Aesthetic Details (Sci-Fi / Apple Inspired) */}
                <div className="absolute bottom-10 left-10 md:left-12 z-30 hidden md:block">
                    <div className="flex flex-col gap-2.5 font-mono text-[9px] md:text-[10px] text-white/10 tracking-[0.4em] uppercase">
                        <div className="flex items-center gap-5">
                            <span className="w-10 h-[0.5px] bg-white/10"></span>
                            <span className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-cosmic-blue animate-pulse"></span>
                                Mission Control Visual System
                            </span>
                        </div>
                        <div className="flex items-center gap-5">
                            <span className="w-10 h-[0.5px] bg-white/10"></span>
                            <span>Coordinates: Orbiting Primary</span>
                        </div>
                    </div>
                </div>
                
                {/* Top Corner Technical Ornament */}
                <div className="absolute top-12 left-12 z-30 hidden lg:block opacity-20 hover:opacity-50 transition-opacity duration-700">
                    <div className="w-32 h-32 border-l border-t border-white/20 rounded-tl-3xl" />
                </div>
            </div>

            {/* Bottom transition line */}
            <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}

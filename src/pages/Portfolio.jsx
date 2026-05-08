import React from 'react';
import { motion } from 'framer-motion';
import StarBackground from '../components/home/StarBackground';
import CtaSection from '../components/home/CtaSection';
import OrbitMapSection from '../components/home/OrbitMapSection';

export default function Portfolio() {
    return (
        <div className="bg-deep-space min-h-screen pt-24 pb-32">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-white/5">
                <StarBackground />
                
                {/* Holographic Archive Visuals */}
                <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                    {/* Floating Polaroids / Images */}
                    <motion.div 
                        animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }} 
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-[10%] top-[20%] w-48 h-64 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hidden md:block overflow-hidden shadow-2xl opacity-60"
                        style={{ transform: 'perspective(1000px) rotateY(15deg)' }}
                    >
                        <div className="absolute inset-4 bg-deep-space rounded-xl overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Archive frame" className="w-full h-full object-cover grayscale mix-blend-screen opacity-50" />
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        animate={{ y: [15, -15, 15], rotate: [2, -2, 2] }} 
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute right-[10%] bottom-[15%] w-56 h-40 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hidden md:block overflow-hidden shadow-2xl opacity-50"
                        style={{ transform: 'perspective(1000px) rotateY(-15deg)' }}
                    >
                         <div className="absolute inset-4 bg-deep-space rounded-xl overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Archive frame" className="w-full h-full object-cover grayscale mix-blend-screen opacity-50" />
                        </div>
                    </motion.div>

                    {/* Central Grid Focus */}
                    <div className="absolute w-[800px] h-[800px] border-[0.5px] border-cosmic-blue/10 rounded-full blur-[2px]" />
                    <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full" />
                </div>

                <div className="relative z-10 text-center px-6 mt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                    >

                        
                        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-4 leading-none uppercase">
                            Event <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Portfolio</span> <span className="text-cosmic-blue">.</span>
                        </h1>
                        
                        <p className="text-starlight/70 text-xl md:text-2xl max-w-3xl mx-auto font-light mb-10 relative -left-4">
                            Explore Orbit Events’ portfolio of corporate events, brand activations, entertainment productions, exhibitions, and immersive experiences delivered across Dubai and the UAE.
                        </p>
                        
                        <div className="flex items-center justify-center gap-6 text-starlight/40 font-mono text-xs uppercase tracking-widest border-t border-white/10 pt-8 w-64 mx-auto">
                            <span>Archives</span>
                            <div className="w-1 h-1 rounded-full bg-cosmic-blue" />
                            <span>Encrypted</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <OrbitMapSection />
            <CtaSection />
        </div>
    );
}

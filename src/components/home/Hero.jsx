import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nebula-purple/20 rounded-full blur-[150px] mix-blend-screen" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cosmic-blue/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            {/* Orbit Rings Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl pointer-events-none z-0">
                <div className="absolute inset-0 border-[0.5px] border-white/5 rounded-full animate-orbit" style={{ animationDuration: '40s' }} />
                <div className="absolute inset-8 border-[0.5px] border-cosmic-blue/10 rounded-full animate-orbit" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
                <div className="absolute inset-16 border-[0.5px] border-nebula-purple/10 rounded-full animate-orbit" style={{ animationDuration: '25s' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orbit-gold/30 bg-orbit-gold/10 text-orbit-gold text-sm font-medium tracking-wide backdrop-blur-md"
                >
                    <Rocket size={16} />
                    <span>Space Agency for Brand Experiences</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-tight"
                >
                    Welcome to the <br />
                    <span className="text-gradient">Event Universe</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-lg md:text-xl text-starlight/70 max-w-2xl mb-12"
                >
                    Orbit Events designs extraordinary brand experiences that move beyond gravity and into unforgettable moments.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <button className="px-8 py-4 rounded-full bg-starlight text-deep-space font-semibold font-display tracking-wide hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-1">
                        Explore Our Universe
                    </button>
                    <button className="px-8 py-4 rounded-full border border-cosmic-blue/50 text-cosmic-blue font-semibold font-display tracking-wide neon-glow hover:bg-cosmic-blue/10 transition-all hover:-translate-y-1">
                        Start Your Mission
                    </button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-starlight/50 animate-bounce"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <ChevronDown size={20} />
            </motion.div>
        </section>
    );
}

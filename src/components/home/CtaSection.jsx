import React from 'react';
import { motion } from 'framer-motion';

export default function CtaSection() {
    return (
        <section className="relative py-32 overflow-hidden bg-deep-space">
            {/* Nebula Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-r from-nebula-purple/30 via-cosmic-blue/20 to-transparent rounded-full blur-[100px] opacity-60" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 md:p-20 rounded-3xl glass-card relative overflow-hidden group"
                >
                    {/* Subtle star particles within card */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-screen" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
                            Ready to Launch Your <br />
                            <span className="text-gradient">Next Event?</span>
                        </h2>
                        <p className="text-xl text-starlight/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join us on a mission to create extraordinary brand experiences that resonate across the universe.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-cosmic-blue text-deep-space font-display font-bold tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1">
                                Start a Project
                            </button>
                            <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 border border-white/20 text-white font-display font-bold tracking-wider hover:bg-white/10 hover:border-white transition-all">
                                Contact Orbit
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

import React from 'react';
import { motion } from 'framer-motion';

const clients = [
    "SpaceX", "Tesla", "NASA", "Blue Origin", "Virgin Galactic", "Boeing", "Lockheed", "Airbus"
];

export default function ClientConstellation() {
    return (
        <section className="py-24 relative bg-deep-space">
            {/* Background Starfield specifically for this section */}
            <div className="absolute inset-0 pointer-events-none opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Client <span className="font-light italic text-starlight/80">Constellation</span></h2>
                    <p className="text-starlight/50">The stars that guide our universe.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-32 rounded-2xl border border-white/5 glass flex items-center justify-center overflow-hidden hover:border-white/20 transition-colors cursor-pointer"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-transparent transition-all duration-500" />

                            {/* Star dot in corner */}
                            <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-orbit-gold group-hover:shadow-[0_0_10px_#FBBF24] transition-all duration-500" />

                            {/* Logo text (Placeholder for actual logos) */}
                            <span className="text-xl font-display font-bold text-starlight/30 group-hover:text-starlight tracking-widest uppercase transition-colors duration-500">
                                {client}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

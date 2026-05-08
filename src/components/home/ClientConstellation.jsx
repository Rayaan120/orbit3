import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    "SpaceX", "Tesla", "NASA", "Blue Origin", "Virgin Galactic", "Boeing", "Lockheed", "Airbus"
];

export default function ClientConstellation() {
    // Duplicate the partners array for seamless infinite loop
    const doubledPartners = [...partners, ...partners];

    return (
        <section className="pt-12 pb-24 relative bg-deep-space overflow-hidden">
            {/* Background Starfield specifically for this section */}
            <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 uppercase tracking-tighter">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic-blue to-starlight italic">Partners</span>
                        </h2>
                        <p className="text-starlight/50 font-mono text-sm tracking-[0.2em] max-w-2xl mx-auto">Collaborating with industry pioneers to orchestrate high-impact experiences and unmissable brand momentum.</p>
                    </motion.div>
                </div>

                {/* Infinite Marquee Container */}
                <div className="relative flex overflow-hidden group">
                    {/* Fade overlays for smooth edges */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-deep-space to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-deep-space to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-6 whitespace-nowrap py-4"
                        animate={{
                            x: [0, "-50%"],
                        }}
                        transition={{
                            x: {
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                    >
                        {doubledPartners.map((partner, index) => (
                            <div
                                key={`${partner}-${index}`}
                                className="inline-flex items-center justify-center min-w-[240px] h-28 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group/item relative overflow-hidden"
                            >
                                {/* Subtle Glow on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-cosmic-blue/0 via-transparent to-cosmic-blue/0 group-hover/item:from-cosmic-blue/5 group-hover/item:to-transparent transition-all duration-500" />
                                
                                {/* Corner Star */}
                                <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-white/20 group-hover/item:bg-cosmic-blue group-hover/item:shadow-[0_0_8px_#4FD1FF] transition-all" />

                                <span className="text-xl font-display font-bold text-starlight/20 group-hover/item:text-starlight/80 tracking-[0.2em] uppercase transition-all duration-300 transform group-hover/item:scale-110">
                                    {partner}
                                </span>
                                
                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue/0 to-transparent group-hover/item:via-cosmic-blue/40 transition-all duration-500" />
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

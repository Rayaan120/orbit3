import React from 'react';
import { motion } from 'framer-motion';

const partnerLogos = Array.from({ length: 89 }, (_, i) => `/Logos/Logos/Artboard ${i + 1}.png`);

const row1 = partnerLogos.filter((_, idx) => idx % 2 === 0);
const row2 = partnerLogos.filter((_, idx) => idx % 2 !== 0);

export default function ClientConstellation() {
    const doubledRow1 = [...row1, ...row1];
    const doubledRow2 = [...row2, ...row2];

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
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                            Our Partners
                        </h2>
                        <p className="text-starlight/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">Collaborating with industry pioneers to orchestrate high-impact experiences and unmissable brand momentum.</p>
                    </motion.div>
                </div>

                {/* Infinite Marquee Container */}
                <div className="flex flex-col gap-6 relative overflow-hidden group">
                    {/* Fade overlays for smooth edges */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-deep-space to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-deep-space to-transparent z-10 pointer-events-none" />

                    {/* Row 1: Scrolls Left */}
                    <div className="relative flex overflow-hidden">
                        <motion.div
                            className="flex gap-6 whitespace-nowrap py-2"
                            animate={{
                                x: [0, "-50%"],
                            }}
                            transition={{
                                x: {
                                    duration: 120,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                            }}
                        >
                            {doubledRow1.map((logo, index) => (
                                <div
                                    key={`row1-${logo}-${index}`}
                                    className="inline-flex items-center justify-center min-w-[220px] md:min-w-[250px] h-28 px-8 rounded-2xl border border-black/5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(79,209,255,0.2)] hover:border-cosmic-blue/20 transition-all duration-300 group/item relative overflow-hidden"
                                >
                                    {/* Subtle Glow on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-cosmic-blue/0 via-transparent to-cosmic-blue/0 group-hover/item:from-cosmic-blue/5 group-hover/item:to-transparent transition-all duration-500" />
                                    
                                    {/* Corner Star */}
                                    <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-cosmic-blue/20 group-hover/item:bg-cosmic-blue group-hover/item:shadow-[0_0_8px_#4FD1FF] transition-all" />

                                    <img
                                        src={logo}
                                        alt={`Partner Logo ${index + 1}`}
                                        className="w-full h-full max-h-20 object-contain opacity-95 group-hover/item:opacity-100 transition-all duration-300"
                                        loading="lazy"
                                    />
                                    
                                    {/* Bottom Accent Line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue/0 to-transparent group-hover/item:via-cosmic-blue/40 transition-all duration-500" />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2: Scrolls Right */}
                    <div className="relative flex overflow-hidden">
                        <motion.div
                            className="flex gap-6 whitespace-nowrap py-2"
                            animate={{
                                x: ["-50%", 0],
                            }}
                            transition={{
                                x: {
                                    duration: 120,
                                    repeat: Infinity,
                                    ease: "linear",
                                    },
                                }}
                            >
                                {doubledRow2.map((logo, index) => (
                                    <div
                                        key={`row2-${logo}-${index}`}
                                        className="inline-flex items-center justify-center min-w-[220px] md:min-w-[250px] h-28 px-8 rounded-2xl border border-black/5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(79,209,255,0.2)] hover:border-cosmic-blue/20 transition-all duration-300 group/item relative overflow-hidden"
                                    >
                                        {/* Subtle Glow on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-cosmic-blue/0 via-transparent to-cosmic-blue/0 group-hover/item:from-cosmic-blue/5 group-hover/item:to-transparent transition-all duration-500" />
                                        
                                        {/* Corner Star */}
                                        <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-cosmic-blue/20 group-hover/item:bg-cosmic-blue group-hover/item:shadow-[0_0_8px_#4FD1FF] transition-all" />

                                        <img
                                            src={logo}
                                            alt={`Partner Logo ${index + 1}`}
                                            className="w-full h-full max-h-20 object-contain opacity-95 group-hover/item:opacity-100 transition-all duration-300"
                                            loading="lazy"
                                        />
                                        
                                        {/* Bottom Accent Line */}
                                        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue/0 to-transparent group-hover/item:via-cosmic-blue/40 transition-all duration-500" />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }

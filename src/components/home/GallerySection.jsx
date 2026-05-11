import React from 'react';
import { motion } from 'framer-motion';

const images = [
    {
        url: "C:\\Users\\rayaa\\.gemini\\antigravity\\brain\\a782c452-32bf-4c42-97e5-a39640607d37\\luxury_cosmic_gala_1778445247739.png",
        title: "Immersive Galas",
        tag: "ARCHIVE // 01"
    },
    {
        url: "C:\\Users\\rayaa\\.gemini\\antigravity\\brain\\a782c452-32bf-4c42-97e5-a39640607d37\\futuristic_activation_stage_1778445261593.png",
        title: "Brand Dimensions",
        tag: "ARCHIVE // 02"
    }
];

export default function GallerySection() {
    return (
        <section className="pt-12 pb-12 relative bg-deep-space overflow-hidden font-sans">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue/20 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight">
                            Our <span className="text-cosmic-blue italic font-light">Work</span>
                        </h2>
                        <div className="h-[1px] w-24 bg-cosmic-blue mx-auto mb-6 opacity-50" />
                        <p className="text-starlight/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            A quick look at some of the events and experiences we've created recently. We're all about making moments that people actually enjoy and remember.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group relative"
                        >
                            {/* High-tech frame */}
                            <div className="absolute -inset-4 border border-white/5 rounded-3xl pointer-events-none group-hover:border-cosmic-blue/20 transition-colors duration-700" />
                            
                            {/* Content wrapper */}
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    src={img.url}
                                    alt={img.title}
                                    className="w-full h-full object-cover"
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-80" />
                                
                                {/* Corner Accents */}
                                <div className="absolute top-6 left-6 flex flex-col gap-1">
                                    <div className="w-8 h-[1px] bg-cosmic-blue/50" />
                                    <div className="w-[1px] h-8 bg-cosmic-blue/50" />
                                </div>
                                
                                {/* Archive Tag */}
                                <div className="absolute top-6 right-6">
                                    <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">
                                        {img.tag}
                                    </span>
                                </div>

                                {/* Title Overlay */}
                                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-cosmic-blue transition-colors duration-500">
                                            {img.title}
                                        </h3>
                                        <div className="flex gap-1.5 opacity-40">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="w-3 h-[2px] bg-white transform -skew-x-12" />
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cosmic-blue group-hover:bg-cosmic-blue/10 transition-all duration-500">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-cosmic-blue transition-colors">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Decorative technical line */}
                            <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-white/10 via-transparent to-transparent" />
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Subtle light rays */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-cosmic-blue/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-nebula-purple/5 blur-[120px] pointer-events-none" />
        </section>
    );
}

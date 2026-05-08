import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: "01",
        title: "Global Summit 2025",
        brand: "TechCorp Global",
        category: "Corporate Event",
        stats: "5,000+ Attendees",
        location: "Dubai, UAE",
        year: "2025",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        themeColor: "purple"
    },
    {
        id: "02",
        title: "Future Mobility Expo",
        brand: "AutoDrive Innovations",
        category: "Tech Exhibition",
        stats: "12,000+ Visitors",
        location: "Berlin, Germany",
        year: "2024",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        themeColor: "blue"
    },
    {
        id: "03",
        title: "Symphony of Lights",
        brand: "Stellar Brands",
        category: "Brand Activation",
        stats: "Multi-city Tour",
        location: "Tokyo, Japan",
        year: "2024",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        themeColor: "gold"
    },
    {
        id: "04",
        title: "Neon Horizon Fest",
        brand: "Lumina Entertainment",
        category: "Music Festival",
        stats: "25,000+ Capacity",
        location: "London, UK",
        year: "2024",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        themeColor: "cyan"
    }
];

export default function Portfolio() {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="py-32 relative bg-deep-space overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-nebula-purple/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cosmic-blue/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cosmic-blue"></div>
                            <span className="text-cosmic-blue tracking-[0.2em] text-sm font-medium uppercase">Our Track Record</span>
                            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cosmic-blue"></div>
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-starlight to-white/50">Mission Log</span>
                        </h2>
                        <p className="text-starlight/70 text-lg leading-relaxed font-light">
                            Explore our successful planetary landings and deep space activations. We engineer experiences that defy gravity and leave lasting orbital impressions.
                        </p>
                    </div>
                    <motion.button 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative px-8 py-4 rounded-full border border-white/20 overflow-hidden group hover:border-transparent transition-colors duration-500 bg-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(79,209,255,0.2)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue to-nebula-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative z-10 text-white font-medium flex items-center gap-3 tracking-wide">
                            Explore All Missions
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </span>
                    </motion.button>
                </div>

                {/* Interactive Gallery */}
                <div className="flex flex-col md:flex-row h-[800px] w-full gap-4 md:gap-3">
                    {projects.map((project, index) => {
                        const isActive = activeIdx === index;
                        
                        const gradientFrom = 
                            project.themeColor === 'purple' ? 'from-nebula-purple/80' :
                            project.themeColor === 'blue' ? 'from-cosmic-blue/80' :
                            project.themeColor === 'gold' ? 'from-orbit-gold/80' :
                            'from-cyan-500/80';
                        
                        const shadowColor = 
                            project.themeColor === 'purple' ? 'shadow-[inset_0_0_50px_rgba(139,92,246,0.2)]' :
                            project.themeColor === 'blue' ? 'shadow-[inset_0_0_50px_rgba(79,209,255,0.2)]' :
                            project.themeColor === 'gold' ? 'shadow-[inset_0_0_50px_rgba(251,191,36,0.2)]' :
                            'shadow-[inset_0_0_50px_rgba(6,182,212,0.2)]';

                        return (
                            <motion.div
                                key={project.id}
                                onMouseEnter={() => setActiveIdx(index)}
                                onClick={() => setActiveIdx(index)}
                                className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex-1`}
                                style={{
                                    flexGrow: isActive ? 6 : 1,
                                }}
                            >
                                {/* Image layer */}
                                <div className="absolute inset-0">
                                    <div className={`absolute inset-0 transition-opacity duration-[800ms] z-10 
                                        ${isActive ? `bg-gradient-to-t ${gradientFrom} via-deep-space/40 to-transparent opacity-90` : 'bg-deep-space/80 opacity-100 mix-blend-multiply'}
                                    `} />
                                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-space ${isActive ? 'opacity-90' : 'opacity-100'} z-10 transition-opacity duration-[800ms]`} />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full object-cover transition-transform duration-[2s] ease-out
                                            ${isActive ? 'scale-105 grayscale-0' : 'scale-100 grayscale-[60%]'}
                                        `}
                                    />
                                </div>

                                {/* Frame Border (glow) */}
                                <div className={`absolute inset-0 border border-white/10 rounded-[2rem] z-30 pointer-events-none transition-all duration-[800ms]
                                    ${isActive ? `border-white/30 ${shadowColor}` : ''}
                                `} />

                                {/* Active State Content */}
                                <div className={`absolute inset-0 p-6 md:p-12 flex flex-col justify-end z-20 transition-all duration-[800ms] delay-100 
                                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
                                `}>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4">
                                            <span className="text-white/50 font-display font-light text-2xl">{project.id}</span>
                                            <div className="h-[1px] w-12 bg-white/30 hidden md:block"></div>
                                            <p className="text-white/80 text-xs md:text-sm font-medium tracking-widest uppercase">
                                                {project.category}
                                            </p>
                                        </div>
                                        
                                        <h3 className="text-3xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-2 leading-[1.1] drop-shadow-lg">
                                            {project.title}
                                        </h3>
                                        
                                        <div className="flex flex-wrap items-center gap-3 md:gap-5 text-sm md:text-base text-starlight mt-4">
                                            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                {project.location}
                                            </div>
                                            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                {project.year}
                                            </div>
                                            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 hidden sm:flex">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                {project.stats}
                                            </div>
                                        </div>
                                        
                                        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/50 text-xs font-bold border border-white/10 backdrop-blur-md">
                                                    {project.brand.substring(0,2).toUpperCase()}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-white/50 text-xs tracking-wider uppercase mb-1">Client Entity</span>
                                                    <span className="text-white font-medium tracking-wide">{project.brand}</span>
                                                </div>
                                            </div>
                                            
                                            <button className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-deep-space flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-0.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Inactive State Content */}
                                <div className={`absolute inset-0 flex flex-col items-center justify-end md:justify-end md:pb-16 z-20 transition-all duration-[600ms] 
                                    ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                                `}>
                                    <div className="hidden md:flex flex-col items-center gap-8 h-full justify-end pb-12 w-full">
                                        <span className="text-white/40 font-display text-2xl rotate-180" style={{ writingMode: 'vertical-rl' }}>{project.id}</span>
                                        <div className="w-[1px] h-20 bg-white/20"></div>
                                        <h3 className="text-3xl font-display font-medium text-white/50 hover:text-white/80 transition-colors rotate-180 tracking-[0.2em] whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
                                            {project.title}
                                        </h3>
                                    </div>
                                    
                                    {/* Mobile inactive state */}
                                    <div className="md:hidden flex items-center justify-between w-full px-6 py-5 bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl absolute bottom-0">
                                        <span className="text-white/70 font-display font-medium text-lg">{project.title}</span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50"><path d="m9 18 6-6-6-6"/></svg>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

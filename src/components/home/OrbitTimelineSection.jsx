import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineData = [
    {
        year: "2018",
        title: "The Launch",
        description: "Orbit Events was founded with a vision to create extraordinary event experiences.",
        image: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?q=80&w=400&auto=format&fit=crop" // Moon surface
    },
    {
        year: "2019",
        title: "First Impact",
        description: "Successfully delivered major events while building trusted client partnerships.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop" // Earth from orbit at night
    },
    {
        year: "2020",
        title: " Horizons",
        description: "Expanded our services and strengthened our creative event capabilities.",
        image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=400&auto=format&fit=crop" // Planet sunrise atmosphere
    },
    {
        year: "2021",
        title: "Breakthrough",
        description: "Executed high-profile activations and large-scale productions across the UAE.",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=400&auto=format&fit=crop" // Spiral galaxy
    },
    {
        year: "2022",
        title: "Recognition",
        description: "Recognized for excellence in event management and immersive brand experiences.",
        image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=400&auto=format&fit=crop" // Nebula cloud formation
    },
    {
        year: "2023",
        title: " Global",
        description: "Expanded  with premium event experiences across international markets.",
        image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=400&auto=format&fit=crop" // Black hole / deep space
    },
    {
        year: "2024+",
        title: "The Future ",
        description: "Continuing to innovate with creativity, technology, and experiences.",
        image: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=400&auto=format&fit=crop" // Supernova Nebula Spectrum
    }
];

export default function OrbitTimelineSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const [activeIndex, setActiveIndex] = useState(null);

    // Subtle parallax for background elements
    const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={containerRef} className="pt-12 pb-8 relative bg-[#060913] overflow-hidden font-sans">

            {/* --- Background Effects --- */}

            {/* Deep atmospheric gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#14203D_0%,transparent_70%)] opacity-40 pointer-events-none" />

            {/* Subtle galaxy fog */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 bg-gradient-to-r from-cosmic-blue/5 via-nebula-purple/5 to-cosmic-blue/5 blur-[100px] pointer-events-none" />

            {/* Planet horizon glow at bottom edge */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cosmic-blue/10 to-transparent blur-2xl pointer-events-none" />

            {/* Floating cosmic dust (simulated with CSS pattern) */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSIvPgo8L3N2Zz4=')] bg-[length:40px_40px] opacity-30 pointer-events-none"
            />

            {/* Thin orbital curves in background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] aspect-square rounded-[50%] border border-white/[0.03] pointer-events-none" />
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[120vw] aspect-square rounded-[50%] border border-cosmic-blue/[0.03] pointer-events-none" />


            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                {/* --- Header Section --- */}
                <div className="text-center mb-16 relative">


                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight text-white"
                    >
                        A Timeline of <span className="text-cosmic-blue italic font-light">Growth</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl font-display text-white/80 mb-6 font-medium tracking-wide"
                    >
                        Built on Vision. <span className="text-cosmic-blue">Driven by Impact.</span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-starlight/60 max-w-2xl mx-auto text-lg font-light leading-relaxed"
                    >
                        From a bold idea to premium event experiences, explore the milestones that shaped Orbit Events over the years.
                    </motion.p>
                </div>

                {/* --- Timeline Architecture --- */}

                {/* Desktop Horizontal Timeline Wrapper */}
                <div className="relative hidden lg:block pb-10">
                    {/* Glowing Horizontal Line */}
                    <div className="absolute top-[80px] left-0 w-full h-[1px] bg-white/10">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cosmic-blue/50 to-transparent opacity-50" />
                        {/* Moving light pulse */}
                        <motion.div
                            animate={{ left: ["0%", "100%"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 -translate-y-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-cosmic-blue to-transparent shadow-[0_0_10px_#4FD1FF]"
                        />
                    </div>

                    <div className="flex justify-between relative z-10 w-full px-4">
                        {timelineData.map((node, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <div
                                    key={node.year}
                                    className="flex flex-col items-center relative flex-1"
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onMouseLeave={() => setActiveIndex(null)}
                                >
                                    {/* Year Label */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`text-sm tracking-[0.3em] uppercase font-bold mb-8 transition-all duration-500 ${isActive ? 'text-cosmic-blue scale-110' : 'text-starlight/30'}`}
                                    >
                                        {node.year}
                                    </motion.div>

                                    {/* Cosmic Node (Image) */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        className="relative flex items-center justify-center h-24 mb-16"
                                    >
                                        {/* Connecting vertical tick */}
                                        <div className={`absolute -top-10 w-[1px] h-10 transition-colors duration-500 ${isActive ? 'bg-cosmic-blue/50' : 'bg-white/10'}`} />

                                        {/* Outer Glow Ring */}
                                        <div className={`absolute inset-[-20px] rounded-full border border-cosmic-blue/20 transition-all duration-1000 ${isActive ? 'opacity-100 scale-110 shadow-[0_0_40px_rgba(79,209,255,0.3)]' : 'opacity-0 scale-90'}`} />

                                        {/* Node Container */}
                                        <div className={`relative rounded-full overflow-hidden transition-all duration-700 border shadow-2xl ${isActive ? 'w-28 h-28 border-cosmic-blue/50 ring-4 ring-cosmic-blue/10' : 'w-20 h-20 border-white/10'}`}>
                                            <motion.img
                                                src={node.image}
                                                alt={`${node.year} Cosmic Element`}
                                                className="w-full h-full object-cover"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                                            />
                                            {/* Spherical Shadow Overlay */}
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,transparent,rgba(0,0,0,0.8))] pointer-events-none" />
                                        </div>
                                    </motion.div>

                                    {/* Content Card Container (Relative now) */}
                                    <div className="relative w-full px-2 flex justify-center min-h-[160px]">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + 0.4 }}
                                            className={`w-full max-w-[220px] p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-700 text-center flex flex-col items-center group/card
                                                ${isActive ? 'border-cosmic-blue/40 bg-white/[0.06] -translate-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]' : 'hover:bg-white/[0.04]'}`}
                                        >
                                            {/* Connecting vertical line down to card */}
                                            <div className={`absolute -top-16 w-[1px] h-16 transition-all duration-700 ${isActive ? 'bg-gradient-to-b from-cosmic-blue/50 to-cosmic-blue/20' : 'bg-white/5'}`} />

                                            <h3 className={`text-lg font-display font-bold mb-2 tracking-tight transition-colors duration-500 ${isActive ? 'text-cosmic-blue' : 'text-white'}`}>
                                                {node.title}
                                            </h3>
                                            <p className="text-[11px] text-starlight/50 leading-relaxed font-light group-hover/card:text-starlight/80 transition-colors">
                                                {node.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile / Tablet Vertical Timeline */}
                <div className="lg:hidden relative pl-8 md:pl-1/2">
                    {/* Vertical Glowing Line */}
                    <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-[1px] bg-white/10 md:-translate-x-1/2">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cosmic-blue/50 to-transparent opacity-50" />
                        {/* Moving light pulse */}
                        <motion.div
                            animate={{ top: ["0%", "100%"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute left-1/2 -translate-x-1/2 h-32 w-[2px] bg-gradient-to-b from-transparent via-cosmic-blue to-transparent shadow-[0_0_10px_#4FD1FF]"
                        />
                    </div>

                    <div className="flex flex-col gap-16 relative z-10">
                        {timelineData.map((node, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={node.year} className="relative flex flex-col md:flex-row items-center w-full group">

                                    {/* Center Node on Mobile (Left aligned on mobile, Center on Tablet) */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        className="absolute left-0 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
                                    >
                                        <div className="absolute inset-[-10px] rounded-full border border-cosmic-blue/30 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 shadow-[0_0_20px_rgba(79,209,255,0.3)]" />

                                        <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/20 group-hover:border-cosmic-blue/50 transition-colors duration-500 shadow-xl">
                                            <img
                                                src={node.image}
                                                alt={`${node.year} Cosmic Element`}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,transparent,rgba(0,0,0,0.8))] pointer-events-none" />
                                        </div>
                                    </motion.div>

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:ml-auto md:text-left' : 'md:mr-auto md:text-right md:pr-16'}`}
                                    >
                                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md group-hover:bg-white/[0.05] group-hover:border-cosmic-blue/30 transition-all duration-500 shadow-lg relative">
                                            {/* Highlight gradient on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                            <div className="text-cosmic-blue text-sm tracking-[0.2em] font-bold mb-2">
                                                {node.year}
                                            </div>
                                            <h3 className="text-2xl font-display font-bold text-white mb-3">
                                                {node.title}
                                            </h3>
                                            <p className="text-starlight/60 text-sm leading-relaxed font-light">
                                                {node.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}

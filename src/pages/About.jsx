import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Telescope, Shield, Users, Activity, Globe, Zap, Database } from 'lucide-react';
import StarBackground from '../components/home/StarBackground';
import WhyChooseMissionControl from '../components/home/WhyChooseMissionControl';
import WhyChooseScannerSection from '../components/home/WhyChooseScannerSection';
import CtaSection from '../components/home/CtaSection';
const values = [
    { 
        id: "01",
        icon: Shield, 
        title: "Precision Execution", 
        desc: "Every detail matters. We plan, manage, and deliver with absolute accuracy to ensure flawless event experiences.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        col: "lg:col-span-7",
        theme: "group-hover:text-nebula-purple",
        glow: "group-hover:shadow-[inset_0_0_80px_rgba(139,92,246,0.25)]",
        border: "group-hover:border-nebula-purple/50"
    },
    { 
        id: "02",
        icon: Sparkles, 
        title: "Creative Innovation", 
        desc: "We go beyond conventional ideas—crafting unique, forward-thinking concepts that make every event stand out.",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        col: "lg:col-span-5",
        theme: "group-hover:text-cosmic-blue",
        glow: "group-hover:shadow-[inset_0_0_80px_rgba(79,209,255,0.25)]",
        border: "group-hover:border-cosmic-blue/50"
    },
    { 
        id: "03",
        icon: Users, 
        title: "Client-Centric Approach", 
        desc: "Your vision drives everything we do. We collaborate closely to turn your ideas into impactful, memorable experiences.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        col: "lg:col-span-5",
        theme: "group-hover:text-orbit-gold",
        glow: "group-hover:shadow-[inset_0_0_80px_rgba(251,191,36,0.25)]",
        border: "group-hover:border-orbit-gold/50"
    },
    { 
        id: "04",
        icon: Activity, 
        title: "Reliability & Control", 
        desc: "Like mission control, we stay in command at every stage—ensuring timelines, quality, and execution are always on track.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        col: "lg:col-span-7",
        theme: "group-hover:text-cyan-400",
        glow: "group-hover:shadow-[inset_0_0_80px_rgba(34,211,238,0.25)]",
        border: "group-hover:border-cyan-400/50"
    },
];

export default function About() {
    return (
        <div className="bg-deep-space min-h-screen pb-8 md:pb-32">
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <motion.img 
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        src="/space/space.png" 
                        alt="Deep Space Background" 
                        className="w-full h-full object-cover select-none pointer-events-none"
                    />
                    {/* Cinematic Overlays (Softened for mobile clarity) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-deep-space/20 md:from-deep-space/50 via-transparent to-deep-space/60 md:to-deep-space/80 z-10 hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-r from-deep-space/10 md:from-deep-space/30 via-transparent to-deep-space/10 md:to-deep-space/30 z-10 hidden md:block" />
                </div>
                
                {/* Holographic Radar/Grid Elements */}
                <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                    <div className="absolute w-[800px] h-[800px] border border-white/5 rounded-full" />
                    <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full" />
                    <div className="absolute w-[400px] h-[400px] border-[0.5px] border-cosmic-blue/20 rounded-full flex items-center justify-center">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full rounded-full border-t border-cosmic-blue/50" 
                        />
                    </div>
                    {/* Vertical / Horizontal Axis */}
                    <div className="absolute w-full max-w-[1200px] h-[1px] bg-white/5" />
                    <div className="absolute h-full max-h-[1200px] w-[1px] bg-white/5" />
                </div>

                <div className="relative z-10 text-center px-6 pb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <div className="hidden">
                            {/* Removed badge as per user request */}
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight mb-6 leading-[1.1]">
                            About <br /> 
                            <span className="font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Orbit</span> Events
                        </h1>

                        <p className="text-starlight/60 max-w-2xl mx-auto text-lg font-light mt-6 leading-relaxed">
                            At Orbit Events, we don’t just organize events—we engineer experiences. Driven by precision, creativity, and control, our team transforms ideas into seamless, high-impact moments that elevate brands and captivate audiences.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Tech Corner */}
                <div className="absolute bottom-8 right-8 flex-col items-end hidden md:flex font-mono text-[10px] text-cosmic-blue/40 tracking-[0.2em] text-right">
                    <span>SYS.REV: 9.4.2</span>
                    <span>AUTHORIZATION: ALIGNED</span>
                    <span>STATUS: NOMINAL</span>
                </div>
            </section>

            {/* 
            ====================================
            REDESIGNED ORIGIN MODULE (Who We Are)
            ====================================
            */}
            <section className="relative mb-8 pt-8 md:pt-12 overflow-hidden min-h-[500px] lg:min-h-[700px] w-full">
                {/* Background decorative typography */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[15vw] font-display font-black text-white/[0.02] tracking-tighter leading-none select-none pointer-events-none z-0 whitespace-nowrap">
                    THE ORIGIN
                </div>

                {/* Astronaut: full section background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img
                        src="/space/astronaut.png"
                        alt="Orbit Astronaut"
                        className="w-full h-full object-cover object-[-320px_bottom] md:object-left-bottom select-none opacity-55"
                    />
                    {/* Subtle dark overlay to keep text readable without hiding the astronaut */}
                    <div className="absolute inset-0 bg-deep-space/30" />
                    {/* Edge fades for smooth blending into surrounding sections */}
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-deep-space to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-deep-space to-transparent" />
                </div>

                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
                        <div className="hidden lg:block lg:col-span-5" />

                        {/* Right: Architectural Content Structure */}
                        <div className="lg:col-span-7 lg:pl-12">
                            <motion.div 
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-col gap-10"
                            >
                                {/* Header Block */}
                                <div className="relative mb-4">
                                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                                        Who We Are?
                                    </h2>
                                </div>

                                {/* Subsection 1: What We Do */}
                                <div className="relative pl-8 border-l border-white/10 group">
                                    <div className="absolute top-0 left-[-2px] w-[3px] h-0 bg-cosmic-blue transition-all duration-700 group-hover:h-full" />
                                    <div className="mb-4">
                                        <span className="font-mono text-[10px] text-cosmic-blue tracking-[0.4em] uppercase opacity-60">Module-01</span>
                                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1">What We Do</h3>
                                    </div>
                                    <p className="text-starlight/70 leading-relaxed font-light mb-4">
                                        From product launches to award ceremonies, concerts, entertainment events, festivals, sponsorship activations, road shows, campaigns, conferences, or corporate events of any scale – you name it, we’ve got you covered.
                                    </p>
                                    <p className="text-starlight/70 leading-relaxed font-light mb-4">
                                        We develop bespoke strategies to suit each client’s needs. We take great pride in being at the forefront of innovation and creativity.
                                    </p>
                                    <p className="text-cosmic-blue font-medium italic">
                                        We’re here to help you explore a flawlessly crafted universe that brings your vision to life.
                                    </p>
                                </div>

                                {/* Subsection 2: Our Inspiration */}
                                <div className="relative pl-8 border-l border-white/10 group">
                                    <div className="absolute top-0 left-[-2px] w-[3px] h-0 bg-nebula-purple transition-all duration-700 group-hover:h-full" />
                                    <div className="mb-4">
                                        <span className="font-mono text-[10px] text-nebula-purple tracking-[0.4em] uppercase opacity-60">Module-02</span>
                                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1">Our Inspiration</h3>
                                    </div>
                                    <p className="text-starlight/70 leading-relaxed font-light mb-4">
                                        Constellations, galaxies, planets, asteroids, stars, black holes, satellites, aliens, rockets, astronauts, moons, and anything space excites us. Our ethos is built around being curious, disrupting the norm, and going beyond to conquer new frontiers with our clients.
                                    </p>
                                    <p className="text-starlight/70 leading-relaxed font-light">
                                        We are always excited to begin our incredible space odyssey that takes off the ground as we explore uncharted regions of the event universe bringing your ideas to life.
                                    </p>
                                </div>

                                {/* Subsection 3: Point of Difference */}
                                <div className="relative pl-8 border-l border-white/10 group">
                                    <div className="absolute top-0 left-[-2px] w-[3px] h-0 bg-orbit-gold transition-all duration-700 group-hover:h-full" />
                                    <div className="mb-4">
                                        <span className="font-mono text-[10px] text-orbit-gold tracking-[0.4em] uppercase opacity-60">Module-03</span>
                                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1">Point Of Difference</h3>
                                    </div>
                                    <p className="text-starlight/70 leading-relaxed font-light mb-4">
                                        We love to be challenged and are passionate about creating powerful human experiences, that connect people and brands. What sets us apart are the years of experience and sound knowledge of different markets and segments in which we operate.
                                    </p>
                                    <p className="text-starlight/70 leading-relaxed font-light">
                                        We strive to provide high-quality services and a trustworthy experience to all clients and partners alike. We work with the best suppliers and the most illustrious venues to create the distinguishable mark that sets us apart in every project we build.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[1400px] mx-auto px-6 relative z-20">
                {/* 
                ====================================
                IMPROVISED VALUES SECTION
                ====================================
                */}
                <section className="mb-0 relative overflow-hidden pt-4 pb-8 rounded-[4rem]">
                    {/* Cinematic Moving Deep Space Background */}
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-transparent to-deep-space z-10" />
                        
                        {/* Realistic Moving Starfield */}
                        <div className="absolute inset-0 opacity-60">
                            <StarBackground />
                        </div>
                        
                        {/* Animated Nebula Glows / Moving Clouds */}
                        <motion.div 
                            className="absolute top-0 left-0 w-[800px] h-[800px] bg-cosmic-blue/10 rounded-full blur-[150px]" 
                            animate={{ 
                                x: [0, 100, 0],
                                y: [0, -50, 0],
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div 
                            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-nebula-purple/10 rounded-full blur-[150px]" 
                            animate={{ 
                                x: [0, -100, 0],
                                y: [0, 50, 0],
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        />
                    </div>

                    {/* Architectural background lines */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent z-10 hidden lg:block" />

                    <div className="text-center mb-12 relative">
                        <div className="hidden">
                            {/* Removed operational DNA badge */}
                        </div>
                        
                        <motion.h2 
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                        >
                            Core Values
                        </motion.h2>
                        <motion.p
                            animate={{ opacity: 1 }}
                            className="text-starlight/60 max-w-2xl mx-auto text-lg font-light leading-relaxed"
                        >
                            Built on precision, innovation, and control, our core values guide every Orbit Event—ensuring seamless execution, elevated experiences, and results that leave a lasting impact.
                        </motion.p>
                    </div>

                    {/* Satellite Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-6 lg:gap-x-16 relative z-10 pt-0 px-4 lg:px-8">
                        {values.map((val, i) => (
                            <motion.div
                                key={val.title}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.15 }}
                                className="group relative flex items-center justify-center h-[480px] lg:h-[450px]"
                            >
                                {/* Left Solar Wing */}
                                <div className="absolute left-[-15px] md:left-[-30px] lg:left-[-15px] top-1/2 -translate-y-1/2 w-[60px] md:w-[100px] lg:w-[50px] h-[150px] md:h-[200px] lg:h-[140px] z-0 transition-transform duration-700 group-hover:-translate-x-3">
                                    <div className="w-full h-full bg-cosmic-blue/10 backdrop-blur-md border border-cosmic-blue/30 relative overflow-hidden flex items-center justify-center">
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,209,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(79,209,255,0.2)_1px,transparent_1px)] bg-[size:15px_15px] opacity-40" />
                                        <div className="w-[80%] h-[2px] bg-cosmic-blue/40 shadow-[0_0_15px_#4FD1FF]" />
                                    </div>
                                    {/* Arm Connector */}
                                    <div className="absolute right-[-15px] top-1/2 -translate-y-1/2 w-4 h-2 bg-white/20" />
                                </div>

                                {/* Right Solar Wing */}
                                <div className="absolute right-[-15px] md:right-[-30px] lg:right-[-15px] top-1/2 -translate-y-1/2 w-[60px] md:w-[100px] lg:w-[50px] h-[150px] md:h-[200px] lg:h-[140px] z-0 transition-transform duration-700 group-hover:translate-x-3">
                                    <div className="w-full h-full bg-cosmic-blue/10 backdrop-blur-md border border-cosmic-blue/30 relative overflow-hidden flex items-center justify-center">
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,209,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(79,209,255,0.2)_1px,transparent_1px)] bg-[size:15px_15px] opacity-40" />
                                        <div className="w-[80%] h-[2px] bg-cosmic-blue/40 shadow-[0_0_15px_#4FD1FF]" />
                                    </div>
                                    {/* Arm Connector */}
                                    <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-4 h-2 bg-white/20" />
                                </div>

                                {/* Central Satellite Body */}
                                <div 
                                    className="relative w-full max-w-[280px] md:max-w-[340px] lg:max-w-[230px] h-full bg-[#0A0E17] border border-white/20 z-10 transition-all duration-700 group-hover:border-cosmic-blue group-hover:shadow-[0_0_80px_rgba(79,209,255,0.15)] flex flex-col items-center p-6 md:p-8 lg:p-5 text-center"
                                    style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 15%, 100% 85%, 80% 100%, 20% 100%, 0% 85%, 0% 15%)' }}
                                >
                                    {/* Image Overlay with low opacity */}
                                    <div className="absolute inset-0 z-0">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/80 to-transparent z-10" />
                                        <img 
                                            src={val.image} 
                                            alt={val.title}
                                            className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-[2s]"
                                        />
                                    </div>
 
                                    {/* Satellite Head (Communication Dish) */}
                                    <div className="relative z-20 w-14 h-14 rounded-full border-2 border-cosmic-blue/50 flex items-center justify-center mb-6 bg-black group-hover:scale-110 transition-transform duration-500">
                                        <div className="absolute inset-[-4px] rounded-full border border-dashed border-cosmic-blue/30 animate-[spin_15s_linear_infinite]" />
                                        <val.icon size={24} className="text-cosmic-blue" />
                                    </div>
 
                                    {/* Text Content */}
                                    <div className="relative z-20 flex-1 flex flex-col items-center w-full">
                                        <div className="text-[9px] font-mono text-cosmic-blue tracking-[0.4em] uppercase mb-2 opacity-60 group-hover:opacity-100 transition-opacity">Protocol {val.id}</div>
                                        <h3 className="text-2xl md:text-3xl lg:text-lg xl:text-xl font-display font-black text-white mb-4 leading-tight flex items-center justify-center min-h-[64px] lg:min-h-[72px] w-full px-2">
                                            {val.title}
                                        </h3>
                                        <div className="w-8 h-[2px] bg-white/10 mb-4 group-hover:w-16 group-hover:bg-cosmic-blue transition-all duration-500 shrink-0" />
                                        <p className="text-starlight/60 text-xs md:text-sm leading-relaxed font-light min-h-[72px] flex items-start justify-center">
                                            {val.desc}
                                        </p>
                                    </div>
 
                                    {/* Bottom Tech Detail */}
                                    <div className="relative z-20 mt-6 flex flex-col items-center gap-2">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, j) => (
                                                <div key={j} className="w-1 h-1 rounded-full bg-cosmic-blue shadow-[0_0_5px_#4FD1FF]" />
                                            ))}
                                        </div>
                                        <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Active Transmission</span>
                                    </div>
                                </div>

                                {/* Bottom Glow Ambient */}
                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-cosmic-blue/5 blur-[50px] -z-10 group-hover:bg-cosmic-blue/20 transition-colors duration-1000" />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
            
            <WhyChooseScannerSection />
            
            <CtaSection />
            
            <style jsx>{`
                @keyframes scanline {
                    0% { top: 0%; opacity: 0; }
                    5% { opacity: 1; }
                    95% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
        </div>
    );
}

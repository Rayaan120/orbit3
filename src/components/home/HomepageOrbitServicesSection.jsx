import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Target, Briefcase, CalendarCheck, Zap, Aperture, ArrowRight, Globe, Rocket } from 'lucide-react';

const services = [
    {
        title: "Entertainment",
        description: "Engaging performances and experiences designed to captivate every audience.",
        icon: Sparkles
    },
    {
        title: "Conferences & Summit",
        description: "Purpose-built conferences and summit experiences designed for connection and impact.",
        icon: Target
    },
    {
        title: "Corporate Events",
        description: "Professional corporate experiences engineered for engagement and impact.",
        icon: Briefcase
    },
    {
        title: "Event Management",
        description: "End-to-end event planning and execution with seamless coordination.",
        icon: CalendarCheck
    },
    {
        title: "Sponsorship Activation",
        description: "Innovative activation strategies designed to maximize exposure and engagement.",
        icon: Zap
    },
    {
        title: "Brand Experience",
        description: "Immersive experiences crafted to create unforgettable audience connections.",
        icon: Aperture
    },
    {
        title: "Exhibitions",
        description: "Stunning custom exhibition stands, pavilions, and high-impact tradeshow displays.",
        icon: Globe
    },
    {
        title: "Event Launch",
        description: "Spectacular, high-impact product launches and theatrical brand reveals.",
        icon: Rocket
    }
];

// Helper to stagger cards
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
        opacity: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 50, damping: 20 }
    }
};

export default function HomepageOrbitServicesSection() {
    return (
        <section className="relative w-full min-h-screen bg-[#030014] overflow-hidden pt-12 pb-24 border-t border-white/5">
            {/* Full Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/bg.png" 
                    alt="Space Background" 
                    className="w-full h-full object-cover object-center opacity-80"
                />
                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#030014] via-[#030014]/80 to-transparent w-full md:w-[70%]" />
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030014] to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030014] to-transparent opacity-90" />
            </div>

            {/* Particles / Atmospheric Motion */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2
                        }}
                        className="absolute w-1 h-1 bg-cyan-400/30 rounded-full blur-[1px]"
                        style={{
                            left: `${Math.random() * 50}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 md:px-12">
                
                {/* Header Section */}
                <div className="flex flex-col items-center justify-center text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        {/* Decorative UI Line */}
                        <div className="w-px h-8 bg-gradient-to-b from-transparent to-cyan-500/50 mb-4" />
                        
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                            Orbit Services
                        </h2>
                        
                        <p className="text-starlight/80 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
                            Capabilities engineered to elevate brands through immersive experiences, strategic execution, and unforgettable event production.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid (Left & Center columns) */}
                <div className="w-full lg:w-[70%]">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            
                            return (
                                <motion.div 
                                    key={service.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className="group relative"
                                >
                                    {/* Futuristic Card Frame */}
                                    <div className="relative h-full min-h-[260px] md:min-h-[280px] bg-black/40 backdrop-blur-xl border border-white/5 group-hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
                                         style={{ 
                                             clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
                                             boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)'
                                         }}
                                    >
                                        {/* Background Scanning Grid */}
                                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                                             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                                        
                                        {/* Dynamic Scanning Line */}
                                        <motion.div 
                                            animate={{ top: ['-10%', '110%'] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent z-10 opacity-0 group-hover:opacity-100"
                                        />

                                        {/* Corner Brackets */}
                                        <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-cyan-500/40" />
                                        <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-white/10" />
                                        <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-white/10" />

                                        <div className="relative p-8 flex flex-col h-full z-20">
                                            {/* Header UI Row */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="h-px w-8 bg-cyan-500/30 group-hover:w-12 transition-all duration-500" />
                                                <div className="h-px flex-grow mx-4 bg-white/5" />
                                                <span className="text-[10px] font-mono text-white/20 tracking-tighter uppercase">ID: 00{index + 1}</span>
                                            </div>
                                            
                                            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 tracking-wide group-hover:text-cyan-400 transition-colors">
                                                {service.title}
                                            </h3>
                                            
                                            <p className="text-white/50 font-light text-sm md:text-base leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
                                                {service.description}
                                            </p>
                                            
                                            {/* Interaction Prompt */}
                                            <div className="mt-auto flex items-center gap-4">
                                                <Link 
                                                    to="/services" 
                                                    className="relative group/btn flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-lg overflow-hidden transition-all hover:bg-cyan-500/20 hover:border-cyan-400/50"
                                                >
                                                    <span className="text-[11px] font-bold text-white uppercase tracking-widest relative z-10">View More</span>
                                                    <ArrowRight size={14} className="text-cyan-400 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                                    
                                                    {/* Button Glitch Effect */}
                                                    <div className="absolute inset-0 w-full h-full bg-cyan-400/10 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                                                </Link>
                                                
                                                {/* Futuristic UI Detail */}
                                                <div className="flex-grow flex justify-end gap-1 opacity-20">
                                                    <div className="w-1 h-1 bg-white rounded-full" />
                                                    <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                                                    <div className="w-4 h-1 bg-cyan-500 rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
            
            {/* Technical Corner Details */}
            <div className="absolute bottom-8 left-8 z-30 hidden lg:block pointer-events-none opacity-30">
                <div className="flex items-center gap-4 text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
                    <span className="w-8 h-[1px] bg-cyan-500/50" />
                    SYS.OPS.ONLINE
                </div>
            </div>
        </section>
    );
}

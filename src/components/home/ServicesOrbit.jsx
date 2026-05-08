import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Zap, Layout, Play, Briefcase, Rocket, Sparkles, Target, Megaphone, Music } from 'lucide-react';
import SunCanvas from './SunCanvas';
import StarBackground from './StarBackground';

const services = [
    { title: "Event Management", icon: Layout, angle: 0 },
    { title: "Brand Experience", icon: Sparkles, angle: 60 },
    { title: "Sponsorships Activation", icon: Target, angle: 120 },
    { title: "Corporate Events", icon: Briefcase, angle: 180 },
    { title: "Entertainment", icon: Music, angle: 240 },
    { title: "Marketing & Promotions", icon: Megaphone, angle: 300 },
];

export default function ServicesOrbit() {
    return (
        <section className="pt-12 pb-32 relative overflow-hidden bg-deep-space">
            <StarBackground />
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6"
                    >
                        Orbit <span className="text-white">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-starlight/60 max-w-2xl mx-auto text-lg"
                    >
                        Capabilities that revolve around your brand, creating unmissable gravitational pull.
                    </motion.p>
                </div>

                <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-video flex items-center justify-center">

                    {/* Orbit Perspective Wrapper (Hidden on mobile) */}
                    <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none" style={{ transform: 'scaleY(0.6)' }}>
                        
                        {/* Static Orbit Paths */}
                        <div className="absolute w-[112%] aspect-square border-[1.5px] border-white/5 rounded-full" />
                        <div className="absolute w-[80%] aspect-square border-[1.5px] border-white/10 rounded-full" />

                        {/* Rotating Items Container (Large enough for both orbits) */}
                        <div className="absolute w-[140%] aspect-square animate-orbit" style={{ animationDuration: '60s' }}>
                            {services.map((service, i) => {
                                // Split services across inner and outer orbits
                                const isOuter = i % 2 === 0;
                                // Inner radius: 80 / 140 * 50 = 28.6
                                // Outer radius: 112 / 140 * 50 = 40
                                const radiusPerc = isOuter ? 40 : 28.6;
                                
                                const rad = (service.angle * Math.PI) / 180;
                                const x = 50 + Math.cos(rad) * radiusPerc;
                                const y = 50 + Math.sin(rad) * radiusPerc;

                                return (
                                    <div
                                        key={service.title}
                                        className="absolute pointer-events-auto"
                                        style={{
                                            left: `${x}%`,
                                            top: `${y}%`,
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <div className="animate-orbit" style={{ animationDuration: '60s', animationDirection: 'reverse' }}>
                                            <div 
                                                className="flex flex-col items-center gap-3 cursor-pointer group hover:-translate-y-2 transition-transform duration-300"
                                                style={{ transform: 'scaleY(1.66)' }} 
                                            >
                                                <div className="relative flex items-center justify-center mt-2">
                                                    {/* Left Solar Panel */}
                                                    <div className="absolute -left-9 w-10 h-12 bg-[#0c1322] border border-cosmic-blue/30 rounded-[2px] grid grid-cols-3 grid-rows-4 gap-[1px] p-[1px] group-hover:border-cosmic-blue/80 group-hover:shadow-[0_0_15px_rgba(79,209,255,0.4)] transition-all z-0 transform -rotate-12">
                                                        {[...Array(12)].map((_, i) => <div key={i} className="bg-cosmic-blue/10 w-full h-full"></div>)}
                                                    </div>
                                                    
                                                    {/* Right Solar Panel */}
                                                    <div className="absolute -right-9 w-10 h-12 bg-[#0c1322] border border-cosmic-blue/30 rounded-[2px] grid grid-cols-3 grid-rows-4 gap-[1px] p-[1px] group-hover:border-cosmic-blue/80 group-hover:shadow-[0_0_15px_rgba(79,209,255,0.4)] transition-all z-0 transform rotate-12">
                                                        {[...Array(12)].map((_, i) => <div key={i} className="bg-cosmic-blue/10 w-full h-full"></div>)}
                                                    </div>

                                                    {/* Connecting Rods */}
                                                    <div className="absolute -left-4 w-5 h-0.5 bg-white/20 z-0 transform -rotate-12"></div>
                                                    <div className="absolute -right-4 w-5 h-0.5 bg-white/20 z-0 transform rotate-12"></div>

                                                    {/* Main Satellite Bus */}
                                                    <div className="relative w-14 h-14 bg-[#0F172A] border border-white/20 flex items-center justify-center z-10 group-hover:border-cosmic-blue group-hover:shadow-[0_0_25px_rgba(79,209,255,0.4)] transition-all duration-300 shadow-xl rounded-md overflow-hidden">
                                                        {/* Metallic texture overlay */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40"></div>
                                                        
                                                        {/* Circular sensor/lens assembly */}
                                                        <div className="relative w-7 h-7 rounded-full bg-black border border-white/10 flex items-center justify-center">
                                                            <div className="w-4 h-4 rounded-full bg-[#1e293b] border border-cosmic-blue/40 flex items-center justify-center">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-cosmic-blue shadow-[0_0_8px_rgba(79,209,255,0.8)]"></div>
                                                            </div>
                                                        </div>

                                                        {/* Technical details (small antenna/sensors) */}
                                                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                                                        <div className="absolute bottom-1 left-1 w-3 h-0.5 bg-white/10"></div>
                                                    </div>

                                                    {/* Top Antenna */}
                                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-white/20 z-0">
                                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cosmic-blue/40 rounded-full animate-pulse"></div>
                                                    </div>
                                                </div>
                                                <span className="font-display font-medium text-xs md:text-sm text-starlight whitespace-nowrap bg-deep-space/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-lg mt-2">{service.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Center Planet - Replacement for Globe with 3D Sun */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none rounded-full overflow-hidden">
                        <div className="relative w-40 h-40 md:w-60 md:h-60 flex items-center justify-center rounded-full overflow-hidden">
                            {/* The 3D Sun Component - Now the sole focus of the center */}
                            <SunCanvas />
                        </div>
                    </div>

                    {/* Mobile representation (Grid instead of orbit for better UX) */}
                    <div className="md:hidden grid grid-cols-2 gap-4 relative z-10 w-full px-4 mt-80">
                        {services.map((service) => (
                            <div key={service.title} className="flex flex-col items-center gap-4 text-center p-2">
                                <div className="relative flex items-center justify-center mt-4">
                                    {/* Left Solar Panel */}
                                    <div className="absolute -left-7 w-7 h-10 bg-[#0c1322] border border-cosmic-blue/30 rounded-[2px] grid grid-cols-2 grid-rows-3 gap-[1px] p-[1px] transform -rotate-12">
                                        {[...Array(6)].map((_, i) => <div key={i} className="bg-cosmic-blue/10 w-full h-full"></div>)}
                                    </div>
                                    
                                    {/* Right Solar Panel */}
                                    <div className="absolute -right-7 w-7 h-10 bg-[#0c1322] border border-cosmic-blue/30 rounded-[2px] grid grid-cols-2 grid-rows-3 gap-[1px] p-[1px] transform rotate-12">
                                        {[...Array(6)].map((_, i) => <div key={i} className="bg-cosmic-blue/10 w-full h-full"></div>)}
                                    </div>

                                    {/* Connecting Rods */}
                                    <div className="absolute -left-3 w-4 h-0.5 bg-white/20 z-0 transform -rotate-12"></div>
                                    <div className="absolute -right-3 w-4 h-0.5 bg-white/20 z-0 transform rotate-12"></div>

                                    {/* Main Satellite Bus */}
                                    <div className="relative w-12 h-12 bg-[#0F172A] border border-cosmic-blue/40 flex items-center justify-center z-10 shadow-xl rounded-md overflow-hidden shadow-[0_0_15px_rgba(79,209,255,0.2)]">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/40"></div>
                                        <div className="w-5 h-5 rounded-full bg-black border border-cosmic-blue/30 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-cosmic-blue rounded-full shadow-[0_0_5px_rgba(79,209,255,0.8)]"></div>
                                        </div>
                                    </div>

                                    {/* Top Antenna */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-white/20 z-0">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cosmic-blue/40 rounded-full"></div>
                                    </div>
                                </div>
                                <span className="font-display font-medium text-sm text-starlight mt-2 bg-deep-space/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">{service.title}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

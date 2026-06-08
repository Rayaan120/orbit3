import React from 'react';
import { motion } from 'framer-motion';
import EarthCenterCanvas from './EarthCenterCanvas';
import StarBackground from './StarBackground';

const satelliteImg = "/New folder/satellite.png";

const services = [
    { title: "Event Management", angle: 0 },
    { title: "Brand Experience", angle: 60 },
    { title: "Sponsorships Activation", angle: 120 },
    { title: "Corporate Events", angle: 180 },
    { title: "Entertainment", angle: 240 },
    { title: "Conferences & Summit", angle: 300 },
];

export default function ServicesOrbit() {
    return (
        <section className="pt-8 pb-12 md:pt-10 md:pb-16 relative overflow-hidden bg-deep-space">
            <StarBackground />
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10">
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

                <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[16/13.5] flex items-center justify-center">

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
                                                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                                                    <img 
                                                        src={satelliteImg} 
                                                        alt="Satellite" 
                                                        className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(79,209,255,0.3)] group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(79,209,255,0.6)] transition-all duration-500"
                                                    />
                                                </div>
                                                <span className="font-display font-medium text-xs md:text-sm text-starlight whitespace-nowrap bg-deep-space/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-lg mt-1">{service.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Center Planet - Replacement for Globe with 3D Earth */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none rounded-full overflow-hidden">
                        <div className="relative w-40 h-40 md:w-60 md:h-60 flex items-center justify-center rounded-full overflow-hidden">
                            {/* The 3D Earth Component - Now the sole focus of the center */}
                            <EarthCenterCanvas />
                        </div>
                    </div>

                    <div className="md:hidden grid grid-cols-2 gap-x-8 gap-y-12 relative z-10 w-full px-4 mt-80">
                        {services.map((service, i) => {
                            return (
                                <div key={service.title} className="flex flex-col items-center gap-3 text-center">
                                    <div className="relative w-24 h-24 flex items-center justify-center">
                                        <img 
                                            src={satelliteImg} 
                                            alt="Satellite" 
                                            className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(79,209,255,0.3)]"
                                        />
                                    </div>
                                    <span className="font-display font-medium text-sm text-starlight bg-deep-space/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">{service.title}</span>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}

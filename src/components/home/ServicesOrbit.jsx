import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Zap, Layout, Play, Briefcase } from 'lucide-react';

const services = [
    { title: "Corporate Events", icon: Briefcase, angle: 0 },
    { title: "Brand Activations", icon: Zap, angle: 60 },
    { title: "Exhibitions", icon: Layout, angle: 120 },
    { title: "Product Launches", icon: Rocket, angle: 180 },
    { title: "Experiential Marketing", icon: Users, angle: 240 },
    { title: "Event Production", icon: Play, angle: 300 },
];

function Rocket(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    );
}

export default function ServicesOrbit() {
    return (
        <section className="py-32 relative overflow-hidden bg-deep-space">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6"
                    >
                        Orbit <span className="text-gradient">Services</span>
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

                    {/* Center Planet */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-nebula-purple to-cosmic-blue shadow-[0_0_50px_rgba(139,92,246,0.5)] flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border border-white/20 bg-black/20 mix-blend-overlay" />
                            <div className="absolute inset-2 rounded-full border-[0.5px] border-white/20 animate-pulse-slow" />
                            <Globe size={48} className="text-white opacity-80" strokeWidth={1} />
                        </div>
                    </div>

                    {/* Orbit Paths */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[0.5px] border-white/5 rounded-full z-0" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-[0.5px] border-white/10 rounded-full z-0" />

                    {/* Orbiting Cards container matching aspect-video on desktop and square on mobile */}
                    <div className="absolute inset-0 z-10 hidden md:block animate-orbit" style={{ animationDuration: '60s' }}>
                        {services.map((service, i) => {
                            const radius = 350; // Desktop radius
                            const rad = (service.angle * Math.PI) / 180;
                            const x = Math.cos(rad) * radius;
                            const y = Math.sin(rad) * radius * 0.6; // Elliptical

                            return (
                                <div
                                    key={service.title}
                                    className="absolute top-1/2 left-1/2 group"
                                    style={{
                                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                    }}
                                >
                                    {/* Counter-rotate to keep content upright */}
                                    <div className="animate-orbit" style={{ animationDuration: '60s', animationDirection: 'reverse' }}>
                                        <div className="glass-card p-4 rounded-xl flex items-center gap-3 w-48 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer group-hover:-translate-y-2 transition-transform duration-300">
                                            <div className="w-10 h-10 rounded-full bg-deep-space border border-white/10 flex items-center justify-center group-hover:border-cosmic-blue group-hover:shadow-[0_0_10px_rgba(79,209,255,0.4)] transition-all shrink-0">
                                                <service.icon size={18} className="text-cosmic-blue" />
                                            </div>
                                            <span className="font-display font-medium text-sm text-starlight leading-snug">{service.title}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile representation (Grid instead of orbit for better UX) */}
                    <div className="md:hidden grid grid-cols-2 gap-4 relative z-10 w-full px-4 mt-80">
                        {services.map((service) => (
                            <div key={service.title} className="glass-card p-4 rounded-xl flex flex-col items-center gap-3 text-center">
                                <div className="w-12 h-12 rounded-full bg-deep-space border border-white/10 flex items-center justify-center mb-2">
                                    <service.icon size={20} className="text-cosmic-blue" />
                                </div>
                                <span className="font-display font-medium text-sm text-starlight">{service.title}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

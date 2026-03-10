import React from 'react';
import { motion } from 'framer-motion';
import { Target, PenTool, Wrench, Rocket, CheckCircle } from 'lucide-react';

const steps = [
    { id: 1, title: "Mission Brief", icon: Target, desc: "Defining objectives & coordinates." },
    { id: 2, title: "Creative Design", icon: PenTool, desc: "Architecting the visual universe." },
    { id: 3, title: "Production Eng", icon: Wrench, desc: "Building the physical modules." },
    { id: 4, title: "Launch Execution", icon: Rocket, desc: "Ignition and live operations." },
    { id: 5, title: "Mission Success", icon: CheckCircle, desc: "Data analysis and debriefing." }
];

export default function Timeline() {
    return (
        <section className="py-24 relative bg-deep-space overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Event <span className="text-gradient">Timeline</span></h2>
                    <p className="text-starlight/60 max-w-xl mx-auto text-lg">
                        The meticulous sequence of our mission control process.
                    </p>
                </div>

                <div className="relative">
                    {/* Main glowing line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-nebula-purple/20 via-cosmic-blue/50 to-orbit-gold/20 -translate-y-1/2 rounded-full hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Checkpoint Node */}
                                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full glass-card border-none bg-deep-space/80 border-white/10 flex items-center justify-center mb-6 z-10 group-hover:bg-cosmic-blue/10 group-hover:scale-110 group-hover:border-cosmic-blue/50 transition-all duration-300">
                                    <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping bg-cosmic-blue/30 transition-opacity`} style={{ animationDuration: '2s' }} />
                                    <step.icon size={28} className="text-starlight group-hover:text-cosmic-blue transition-colors z-10" />

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-nebula-purple to-cosmic-blue text-xs font-bold flex items-center justify-center text-white border border-deep-space">
                                        0{step.id}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-cosmic-blue transition-colors">{step.title}</h3>
                                <p className="text-sm text-starlight/50 max-w-[200px] leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

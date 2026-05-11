import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import StarBackground from './StarBackground';

const Counter = ({ value, duration = 3, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            let startTime;
            const end = parseInt(value);
            
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
                // Ease out expo for a more premium feel
                const easeOutExpo = 1 - Math.pow(2, -10 * progress);
                setCount(Math.floor(easeOutExpo * end));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    setCount(end); // Ensure it lands exactly on the value
                }
            };
            
            window.requestAnimationFrame(step);
        }
    }, [value, duration, isInView]);

    return (
        <span ref={ref} className="font-display font-black">
            {count}{suffix}
        </span>
    );
};

const milestones = [
    { value: "25", label: "Years", suffix: "" },
    { value: "250", label: "Events", suffix: "+" },
    { value: "200", label: "Clients", suffix: "" },
    { value: "1", label: "Guinness World Records", suffix: "" }
];

export default function StatsSection() {
    return (
        <section className="py-8 relative bg-deep-space overflow-hidden">
            <StarBackground />
            
            {/* Cinematic Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue/20 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue/20 to-transparent" />
            
            {/* Large Decorative Text Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
                <span className="text-[20vw] font-display font-black whitespace-nowrap tracking-tighter">ORBIT IMPACT</span>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold text-center text-white tracking-tight"
                    >
                        Milestones <span className="text-cosmic-blue">Achieved</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {milestones.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="relative mb-2">
                                {/* Number with glow effect */}
                                <div className="text-7xl md:text-8xl font-display font-black text-white tracking-tighter transition-all duration-500 group-hover:text-cosmic-blue group-hover:scale-105">
                                    <Counter value={item.value} suffix={item.suffix} />
                                </div>
                                
                                {/* Geometric accent */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute top-0 right-0 w-full h-[1px] bg-cosmic-blue/50" />
                                    <div className="absolute top-0 right-0 w-[1px] h-full bg-cosmic-blue/50" />
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="h-[1px] w-4 bg-white/20 group-hover:w-8 group-hover:bg-cosmic-blue transition-all duration-500" />
                                <span className="text-sm md:text-base tracking-[0.2em] uppercase font-bold text-starlight/60 group-hover:text-white transition-colors duration-500">
                                    {item.label}
                                </span>
                                <div className="h-[1px] w-4 bg-white/20 group-hover:w-8 group-hover:bg-cosmic-blue transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical trajectory line */}
                <div className="mt-8 relative h-12 w-full flex items-center justify-center">
                    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <motion.div 
                        initial={{ left: "0%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute w-24 h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue to-transparent"
                    />
                    <div className="text-[9px] tracking-[0.5em] uppercase text-starlight/20 bg-deep-space px-6">
                        Orbit Execution Engine // Sequential Success Nodes
                    </div>
                </div>
            </div>
        </section>
    );
}



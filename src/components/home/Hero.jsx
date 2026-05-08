import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import EarthCanvas from './EarthCanvas';
import astronautImg from '../../assets/astronaut.png';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#030014]">
            {/* Background glowing elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nebula-purple/30 rounded-full blur-[150px] mix-blend-screen" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cosmic-blue/20 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            {/* Orbit Rings Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl pointer-events-none z-0 opacity-40">
                <div className="absolute inset-0 border-[0.5px] border-white/5 rounded-full animate-orbit" style={{ animationDuration: '40s' }} />
                <div className="absolute inset-8 border-[0.5px] border-cosmic-blue/10 rounded-full animate-orbit" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
                <div className="absolute inset-16 border-[0.5px] border-nebula-purple/10 rounded-full animate-orbit" style={{ animationDuration: '25s' }} />
            </div>

            {/* The 3D Rotating Earth Background */}
            <div className="absolute inset-0 z-10">
                <EarthCanvas />
            </div>

            <div className="relative z-20 max-w-[90rem] w-full mx-auto px-6 h-full flex flex-col lg:flex-row items-center pointer-events-none">
                {/* Left Side: Astronaut */}
                <div className="w-full lg:w-1/2 h-full flex items-center justify-center relative pointer-events-none lg:-ml-20">
                    <motion.div
                        animate={{ 
                            y: [0, -25, 0],
                            rotate: [0, 3, -2, 0]
                        }}
                        transition={{ 
                            duration: 8, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] z-20"
                    >
                        <img 
                            src={astronautImg} 
                            alt="Astronaut floating" 
                            className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(0,150,255,0.4)]"
                        />
                    </motion.div>
                </div>

                {/* Typography Block - Aligned to the right */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center items-start lg:ml-auto mt-10 lg:mt-0 relative z-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="text-7xl md:text-8xl lg:text-[130px] font-display tracking-tight mb-6 leading-[0.9] text-white flex flex-col uppercase"
                    >
                        <span className="font-light text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.9)' }}>
                            WE ARE
                        </span>
                        <span className="font-extrabold tracking-tighter">
                            ORBIT!
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-lg md:text-xl text-white/95 max-w-lg mb-10 font-medium leading-relaxed"
                    >
                        We are excited to begin our space odyssey that takes off the ground exploring uncharted regions of the event universe bringing your ideas to life.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="pointer-events-auto"
                    >
                        <Link to="/services" className="px-8 py-3.5 border border-white text-white text-sm font-semibold tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-4">
                            EXPLORE MORE <span className="text-xl leading-none">→</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-starlight/50 animate-bounce"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <ChevronDown size={20} />
            </motion.div>
        </section>
    );
}

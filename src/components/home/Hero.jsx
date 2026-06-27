import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import EarthCanvas from './EarthCanvas';
import astronautImg from '../../assets/astronaut.png';

export default function Hero() {
    const wordsContainerRef = useRef(null);
    const words = ["CREATORS", "EXPLORERS", "STORYTELLERS", "PARTNERS", "ORBIT!"];

    useEffect(() => {
        const wordElements = wordsContainerRef.current.querySelectorAll('.word');
        
        const tl = gsap.timeline({ delay: 0.8 });

        wordElements.forEach((word, index) => {
            const letters = word.querySelectorAll('.letter');
            const isLast = index === wordElements.length - 1;

            // Initial state for this word (hidden)
            gsap.set(letters, { 
                opacity: 0, 
                y: 40, 
                filter: 'blur(12px)',
                rotateX: -45,
                pointerEvents: 'none'
            });

            // Enter animation
            tl.to(letters, {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                rotateX: 0,
                duration: 1,
                stagger: 0.05,
                ease: "expo.out",
                pointerEvents: 'auto',
                onStart: () => {
                    // Ensure only current word is visible/interacting
                    gsap.set(word, { zIndex: 10 });
                }
            });

            if (!isLast) {
                // Exit animation (dissolve/break away)
                tl.to(letters, {
                    opacity: 0,
                    y: -60,
                    x: (i) => (i - letters.length / 2) * 15,
                    rotate: (i) => (i - letters.length / 2) * 4,
                    filter: 'blur(15px)',
                    duration: 1.2,
                    stagger: {
                        each: 0.03,
                        from: "random"
                    },
                    ease: "power3.inOut",
                    delay: 1.5,
                    onComplete: () => {
                        gsap.set(word, { zIndex: 0 });
                    }
                });
            }
        });

        return () => {
            tl.kill();
        };
    }, []);

    const splitText = (text) => {
        return text.split('').map((char, index) => (
            <span key={index} className="letter inline-block transform-gpu">
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#030014] pt-20 pb-10 lg:py-0">
            {/* Background glowing elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-nebula-purple/30 rounded-full blur-[80px] md:blur-[150px] mix-blend-screen" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] md:w-[800px] md:h-[400px] bg-cosmic-blue/20 rounded-full blur-[60px] md:blur-[120px] mix-blend-screen" />
            </div>

            {/* Orbit Rings Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl pointer-events-none z-0 opacity-40">
                <div className="absolute inset-0 border-[0.5px] border-white/5 rounded-full animate-orbit" style={{ animationDuration: '40s' }} />
                <div className="absolute inset-16 border-[0.5px] border-nebula-purple/10 rounded-full animate-orbit" style={{ animationDuration: '25s' }} />
            </div>

            {/* The 3D Rotating Earth Background */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <EarthCanvas />
            </div>

            <div className="relative z-20 max-w-[100rem] w-full mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-center pointer-events-none gap-4 lg:gap-0">
                {/* Left Side: Astronaut */}
                <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center justify-center relative pointer-events-none lg:-ml-20">
                    <motion.div
                        animate={{ 
                            y: [0, -10, 0],
                            rotate: [0, 2, -1, 0]
                        }}
                        transition={{ 
                            duration: 8, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        className="relative w-[150px] h-[150px] sm:w-[260px] sm:h-[260px] md:w-[400px] md:h-[400px] lg:w-[650px] lg:h-[650px] z-20"
                    >
                        <img 
                            src={astronautImg} 
                            alt="Astronaut floating" 
                            className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(0,150,255,0.35)]"
                        />
                    </motion.div>
                </div>

                {/* Typography Block - Aligned to the right */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center items-center lg:items-start lg:ml-auto mt-2 lg:mt-0 relative z-20 text-center lg:text-left pointer-events-none">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl sm:text-4xl md:text-5xl lg:text-[64px] font-display tracking-tight mb-4 lg:mb-6 leading-[0.95] text-white flex flex-col uppercase w-full"
                    >
                        <span className="font-light text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.9)' }}>
                            WE ARE
                        </span>
                        
                        <div ref={wordsContainerRef} className="relative h-[1.25em] mt-1 lg:mt-2 overflow-visible w-full">
                            {words.map((word, index) => (
                                <span 
                                    key={index}
                                    className="word font-extrabold tracking-tighter absolute top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 whitespace-nowrap overflow-visible"
                                >
                                    {splitText(word)}
                                </span>
                            ))}
                        </div>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-lg mb-6 sm:mb-8 lg:mb-10 font-light leading-relaxed px-4 lg:px-0"
                    >
                        We are excited to begin our space odyssey that takes off the ground exploring uncharted regions of the event universe bringing your ideas to life.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="pointer-events-auto text-xs sm:text-sm"
                    >
                        <Link to="/services" className="px-6 py-3 border border-white text-white font-semibold tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-3">
                            EXPLORE MORE <span className="text-lg leading-none">→</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="hidden md:flex absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-starlight/50 animate-bounce z-20"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <ChevronDown size={20} />
            </motion.div>
        </section>
    );
}

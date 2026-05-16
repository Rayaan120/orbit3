import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { X, CheckCircle2 } from 'lucide-react';
import StarBackground from './StarBackground';

const cards = [
    { id: 1, title: "Need a Thought?", desc: "Creative concepts and strategic event ideas tailored for impactful brand experiences.", angle: 315 },
    { id: 2, title: "Need Something Interesting?", desc: "Immersive experiences designed to captivate audiences and elevate engagement.", angle: 45 },
    { id: 3, title: "Need Seamless Execution?", desc: "Precision-driven planning, coordination, and production for flawless event delivery.", angle: 225 },
    { id: 4, title: "Need a Lasting Impact?", desc: "High-impact experiences engineered to leave powerful impressions on guests and audiences.", angle: 135 }
];

export default function WhyChooseScannerSection() {
    const [isScanning, setIsScanning] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const beamRef = useRef(null);
    const infiniteRotation = useRef(null);
    const currentRotation = useRef(0);

    // Continuous rotation by default
    useEffect(() => {
        if (!isScanning && !selectedCard) {
            infiniteRotation.current = gsap.to(beamRef.current, {
                rotation: "+=360",
                duration: 5, // Slightly faster for more engagement
                repeat: -1,
                ease: "none",
                onUpdate: function() {
                    currentRotation.current = gsap.getProperty(beamRef.current, "rotation");
                }
            });
        }
        return () => {
            if (infiniteRotation.current) infiniteRotation.current.kill();
        };
    }, [isScanning, selectedCard]);

    const handleStopScan = () => {
        if (isScanning || selectedCard) {
            // Reset if already selected
            setSelectedCard(null);
            return;
        }

        setIsScanning(true);
        if (infiniteRotation.current) infiniteRotation.current.kill();

        // Ensure accurate number extraction
        const currentRot = gsap.getProperty(beamRef.current, "rotation");
        const numRot = typeof currentRot === 'number' ? currentRot : (parseFloat(currentRot) || 0);
        
        // Normalize rotation to 0 - 359.99 degrees
        const normalizedRot = ((numRot % 360) + 360) % 360;

        let targetCardId = 1;
        
        // Shifted Quadrant mapping to align with visual beam offset
        // (Assuming 0-90 is Top Left, 90-180 is Top Right, etc. based on user feedback)
        if (normalizedRot >= 0 && normalizedRot < 90) {
            targetCardId = 1; // Top Left (Card 1)
        } else if (normalizedRot >= 90 && normalizedRot < 180) {
            targetCardId = 2; // Top Right (Card 2)
        } else if (normalizedRot >= 180 && normalizedRot < 270) {
            targetCardId = 4; // Bottom Right (Card 4)
        } else {
            targetCardId = 3; // Bottom Left (Card 3)
        }

        // Update states immediately
        setIsScanning(false);
        setSelectedCard(targetCardId);
        
        // Open the mission terminal popup
        setTimeout(() => setIsModalOpen(true), 600);
    };

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen bg-[#060913] overflow-hidden pt-8 pb-24 font-sans flex flex-col items-center justify-center border-t border-white/5">
            {/* --- ULTRA-CINEMATIC 3D BACKGROUND --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* 1. Base Cosmic Depth */}
                <div className="absolute inset-0 bg-[#060913]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0c1631_0%,#060913_100%)] opacity-80" />

                {/* 2. Three.js Starfield Layer */}
                <div className="absolute inset-0 opacity-100 brightness-125">
                    <StarBackground />
                </div>
                
                {/* 3. Mouse-Parallax Nebula Clouds */}
                <motion.div 
                    style={{ 
                        x: mousePos.x * 50, 
                        y: mousePos.y * 50,
                        rotate: mousePos.x * 5
                    }}
                    className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] bg-cosmic-blue/10 blur-[140px] rounded-full mix-blend-screen"
                />
                <motion.div 
                    style={{ 
                        x: mousePos.x * -70, 
                        y: mousePos.y * -70,
                        rotate: mousePos.x * -10
                    }}
                    className="absolute bottom-[-20%] right-[-10%] w-[100%] h-[100%] bg-nebula-purple/10 blur-[160px] rounded-full mix-blend-screen"
                />

                {/* 4. Holographic Orbital Ring (Geometric Scale) */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.07] rotate-[15deg]">
                    <circle cx="50%" cy="50%" r="45%" fill="none" stroke="white" strokeWidth="1" strokeDasharray="10 20" className="animate-[spin_120s_linear_infinite]" />
                    <circle cx="50%" cy="50%" r="45.5%" fill="none" stroke="#4FD1FF" strokeWidth="0.5" className="animate-pulse" />
                </svg>

                {/* 5. Corner Telemetry (HUD Detail) */}
                <div className="absolute top-12 left-12 font-mono text-[9px] text-cosmic-blue/30 tracking-[0.3em] uppercase hidden md:block">
                    <div className="mb-1">Sector: 09-Orbit</div>
                    <div className="mb-1">Coordinates: 40.7128° N, 74.0060° W</div>
                    <div>Status: Scanning Brand Space...</div>
                </div>
                <div className="absolute bottom-12 right-12 font-mono text-[9px] text-white/20 tracking-[0.3em] uppercase text-right hidden md:block">
                    <div className="mb-1">Engine: Framer_Glow_v4</div>
                    <div>Buffer: 100% Aligned</div>
                </div>

                {/* 6. Dynamic Grid with Perspective */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(79,209,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,209,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_90%)] opacity-60" />
                
                {/* 7. Scanning Laser Beam (Horizontal Sweep) */}
                <motion.div 
                    animate={{ y: ["-20%", "120%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue/30 to-transparent z-10"
                />

                {/* 8. Vignette for focus */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#060913_100%)] opacity-80" />
            </div>
            {/* --- END BACKGROUND --- */}

            {/* Top Area */}
            <div className="text-center mb-16 relative z-20 px-6">
                <motion.div 
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 tracking-tight max-w-4xl mx-auto leading-[1.1]">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic-blue via-white to-cosmic-blue/50 italic font-light text-6xl md:text-8xl">Choose Us?</span>
                    </h2>
                    <p className="text-starlight/60 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
                        Orbit Events combines creativity, precision, immersive production, and strategic execution to transform ideas into unforgettable experiences.
                    </p>
                </motion.div>
            </div>

            {/* Main Interactive Interface */}
            <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center mt-8 z-10 px-4 md:px-12">
                
                {/* Central Scanner Core */}
                <div className="relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-[320px] h-[320px] md:w-[450px] md:h-[450px] z-30 flex items-center justify-center mb-16 md:mb-0">
                    
                    {/* Outer glow and rings */}
                    <div className="absolute inset-[-20px] md:inset-[-60px] border border-white/5 rounded-full pointer-events-none" />
                    <div className="absolute inset-0 border border-cosmic-blue/20 rounded-full bg-[#060913]/60 backdrop-blur-md shadow-[0_0_80px_rgba(79,209,255,0.15)] overflow-hidden">
                        
                        {/* Grid & HUD lines inside radar */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-10" />
                        <div className="absolute inset-4 border-[2px] border-dashed border-cosmic-blue/30 rounded-full animate-[spin_25s_linear_infinite]" />
                        <div className="absolute inset-12 border border-cosmic-blue/10 rounded-full" />
                        <div className="w-[1px] h-full bg-cosmic-blue/20 absolute left-1/2 -translate-x-1/2" />
                        <div className="h-[1px] w-full bg-cosmic-blue/20 absolute top-1/2 -translate-y-1/2" />
                        
                        {/* The GSAP Rotating Scan Beam */}
                        <div 
                            ref={beamRef} 
                            className="absolute inset-0 rounded-full mix-blend-screen origin-center z-0"
                            style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(79,209,255,0.9) 100%)' }}
                        />
                    </div>

                    {/* Large Red Buzzer */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
                        <button 
                            onClick={handleStopScan}
                            disabled={isScanning}
                            className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-b from-red-500 to-red-800 
                                shadow-[0_10px_0_#7f1d1d,0_15px_40px_rgba(220,38,38,0.5)] 
                                active:shadow-[0_2px_0_#7f1d1d,0_5px_15px_rgba(220,38,38,0.4)] 
                                active:translate-y-2 transition-all duration-200 flex items-center justify-center group border-[6px] border-[#0a0e17]
                                ${isScanning ? 'pointer-events-none scale-[0.98] shadow-[0_4px_0_#7f1d1d,0_10px_30px_rgba(220,38,38,0.6)] translate-y-1' : 'hover:brightness-110 hover:scale-105'}`}
                        >
                            {/* Glossy top reflection */}
                            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Scanning Pulse */}
                            {isScanning && (
                                <div className="absolute inset-0 rounded-full animate-ping bg-red-500/50" />
                            )}

                            <div className="flex flex-col items-center">
                                {isScanning ? (
                                    <span className="font-display font-black text-white text-sm md:text-base tracking-[0.3em] uppercase drop-shadow-md animate-pulse">
                                        Locking...
                                    </span>
                                ) : selectedCard ? (
                                    <span className="font-display font-black text-white text-xs md:text-sm tracking-[0.2em] uppercase">
                                        Reset
                                    </span>
                                ) : (
                                    <>
                                        <span className="font-display font-black text-white/70 text-xs md:text-sm tracking-[0.2em] uppercase mb-1">Engage</span>
                                        <span className="font-display font-black text-white text-xl md:text-3xl tracking-widest uppercase drop-shadow-lg leading-none">LOCK</span>
                                    </>
                                )}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Surrounding Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-[480px] lg:gap-x-[550px] md:gap-y-32 w-full relative z-20">
                    {cards.map((card, index) => {
                        const isSelected = selectedCard === card.id;
                        return (
                            <motion.div 
                                key={card.id}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative p-8 md:p-10 rounded-3xl border transition-all duration-700 backdrop-blur-xl group
                                    ${isSelected ? 'border-cosmic-blue bg-[#060913]/90 shadow-[0_0_50px_rgba(79,209,255,0.4)] scale-105 z-30' : 'border-white/10 bg-[#060913]/50 hover:bg-[#060913]/70 hover:border-white/30'}`}
                            >
                                {/* Inner glow for selected state */}
                                {isSelected && (
                                    <div className="absolute inset-0 rounded-3xl bg-cosmic-blue/10 animate-pulse pointer-events-none" />
                                )}
                                
                                <div className="mb-4">
                                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-50 mb-2 block">Data Module 0{card.id}</span>
                                    <h3 className={`text-2xl md:text-3xl font-display font-bold transition-colors duration-500 ${isSelected ? 'text-cosmic-blue' : 'text-white'}`}>
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="text-starlight/70 leading-relaxed font-light">
                                    {card.desc}
                                </p>

                                {/* Decorative tech corners */}
                                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/20 rounded-tl-3xl transition-colors duration-500 group-hover:border-cosmic-blue" />
                                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/20 rounded-br-3xl transition-colors duration-500 group-hover:border-cosmic-blue" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <InteractiveFormModal onClose={() => setIsModalOpen(false)} />
                )}
            </AnimatePresence>
        </section>
    );
}

// --------------------------------------------------------------------------------
// Holographic Terminal Modal Component
// --------------------------------------------------------------------------------
function InteractiveFormModal({ onClose }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        type: "", scale: "", priority: "", name: "", email: "", phone: "", message: ""
    });

    const handleSelection = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Brief delay for UX so they see their selection
        setTimeout(() => setStep(prev => prev + 1), 300);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally send the data
        setStep(5); // Success step
    };

    return (
        <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060913]/80"
        >
            <motion.div 
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-3xl bg-[#0a0e17] border border-cosmic-blue/40 rounded-[2rem] p-6 md:p-10 shadow-[0_0_80px_rgba(79,209,255,0.2)] relative overflow-hidden"
            >
                {/* Holographic background artifacts */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cosmic-blue/10 blur-[80px] pointer-events-none rounded-full" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none mix-blend-overlay opacity-30" />

                {/* Header */}
                <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-6 relative z-10">
                    <div>
                        <h3 className="text-3xl font-display font-black text-white tracking-tight">Let’s Build Your Experience</h3>
                        <p className="text-cosmic-blue text-sm font-mono tracking-[0.2em] uppercase mt-2">
                            {step < 5 ? `Mission Configuration // Step 0${step}` : 'Transmission Complete'}
                        </p>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all hover:bg-white/5"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Form Steps */}
                <div className="min-h-[300px] relative z-10">
                    <AnimatePresence mode="wait">
                        
                        {/* STEP 1: Type */}
                        {step === 1 && (
                            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <p className="text-white text-lg mb-6 font-light">What are you looking for?</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["Corporate Event", "Brand Activation", "Entertainment Experience", "Exhibition", "Luxury Experience", "Something Unique"].map(opt => (
                                        <button 
                                            key={opt}
                                            onClick={() => handleSelection('type', opt)} 
                                            className="p-5 text-left border border-white/10 rounded-2xl hover:border-cosmic-blue hover:bg-cosmic-blue/5 transition-all group flex justify-between items-center bg-white/[0.02]"
                                        >
                                            <span className="text-white group-hover:text-cosmic-blue font-medium transition-colors">{opt}</span>
                                            <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-cosmic-blue group-hover:shadow-[0_0_10px_#4FD1FF] transition-all" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: Scale */}
                        {step === 2 && (
                            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <p className="text-white text-lg mb-6 font-light">What scale is your event?</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["Small / Intimate", "Medium / Regional", "Large / National", "Mega Event / Global"].map(opt => (
                                        <button 
                                            key={opt}
                                            onClick={() => handleSelection('scale', opt)} 
                                            className="p-5 text-left border border-white/10 rounded-2xl hover:border-cosmic-blue hover:bg-cosmic-blue/5 transition-all group flex justify-between items-center bg-white/[0.02]"
                                        >
                                            <span className="text-white group-hover:text-cosmic-blue font-medium transition-colors">{opt}</span>
                                            <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-cosmic-blue transition-all" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: Priority */}
                        {step === 3 && (
                            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <p className="text-white text-lg mb-6 font-light">What matters most to you?</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["Creativity & Design", "Audience Engagement", "Precision & Logistics", "Technological Innovation", "Massive Impact"].map(opt => (
                                        <button 
                                            key={opt}
                                            onClick={() => handleSelection('priority', opt)} 
                                            className="p-5 text-left border border-white/10 rounded-2xl hover:border-cosmic-blue hover:bg-cosmic-blue/5 transition-all group flex justify-between items-center bg-white/[0.02]"
                                        >
                                            <span className="text-white group-hover:text-cosmic-blue font-medium transition-colors">{opt}</span>
                                            <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-cosmic-blue transition-all" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 4: Contact */}
                        {step === 4 && (
                            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <p className="text-white text-lg mb-6 font-light">Final details to establish connection.</p>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue focus:outline-none transition-all placeholder:text-white/30" />
                                        <input required type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue focus:outline-none transition-all placeholder:text-white/30" />
                                    </div>
                                    <input type="tel" placeholder="Phone Number (Optional)" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue focus:outline-none transition-all placeholder:text-white/30" />
                                    <textarea required placeholder="Short Message or Event Details" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue focus:outline-none transition-all resize-none placeholder:text-white/30" />
                                    
                                    <div className="flex justify-between items-center mt-4">
                                        <button type="button" onClick={() => setStep(1)} className="text-sm text-starlight/50 hover:text-white transition-colors">
                                            Restart Scanner
                                        </button>
                                        <button type="submit" className="bg-white text-[#060913] hover:bg-cosmic-blue px-8 py-4 rounded-xl font-bold tracking-widest uppercase transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(79,209,255,0.4)]">
                                            Let's Connect
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {/* STEP 5: Success */}
                        {step === 5 && (
                            <motion.div key="step5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-12">
                                <div className="w-20 h-20 bg-cosmic-blue/20 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 size={40} className="text-cosmic-blue" />
                                </div>
                                <h4 className="text-3xl font-display font-bold text-white mb-4">Message Received</h4>
                                <p className="text-starlight/70 max-w-md mx-auto">
                                    Our mission control team is analyzing your coordinates. We will establish connection shortly to discuss your extraordinary experience.
                                </p>
                                <button onClick={onClose} className="mt-8 px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors">
                                    Close Terminal
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
}

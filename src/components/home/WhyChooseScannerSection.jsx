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
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                        Why Choose Us?
                    </h2>
                    <p className="text-starlight/60 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
                        Orbit Events combines creativity, precision, immersive production, and strategic execution to transform ideas into unforgettable experiences.
                    </p>
                </motion.div>
            </div>

            {/* Main Interactive Interface */}
            <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center mt-8 z-10 px-2 sm:px-6 md:px-12">
                
                {/* Central Scanner Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] xs:w-[200px] xs:h-[200px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px] z-30 flex items-center justify-center">
                    
                    {/* Outer glow and rings */}
                    <div className="absolute inset-[-10px] xs:inset-[-20px] sm:inset-[-40px] md:inset-[-60px] border border-white/5 rounded-full pointer-events-none" />
                    <div className="absolute inset-0 border border-cosmic-blue/20 rounded-full bg-[#060913]/60 backdrop-blur-md shadow-[0_0_80px_rgba(79,209,255,0.15)] overflow-hidden">
                        
                        {/* Grid & HUD lines inside radar */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-10" />
                        <div className="absolute inset-2 sm:inset-4 border-[2px] border-dashed border-cosmic-blue/30 rounded-full animate-[spin_25s_linear_infinite]" />
                        <div className="absolute inset-6 sm:inset-12 border border-cosmic-blue/10 rounded-full" />
                        <div className="w-[1px] h-full bg-cosmic-blue/20 absolute left-1/2 -translate-x-1/2" />
                        <div className="h-[1px] w-full bg-cosmic-blue/20 absolute top-1/2 -translate-y-1/2" />
                        
                        {/* The GSAP Rotating Scan Beam */}
                        <div 
                            ref={beamRef} 
                            className="absolute inset-0 rounded-full mix-blend-screen origin-center z-0"
                            style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(79,209,255,0.9) 100%)' }}
                        />
                    </div>

                    {/* Large Neon Green Buzzer */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
                        <button 
                            onClick={handleStopScan}
                            disabled={isScanning}
                            className={`relative w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-b from-lime-400 to-green-600 
                                shadow-[0_4px_0_#14532d,0_8px_20px_rgba(34,197,94,0.5)] md:shadow-[0_10px_0_#14532d,0_15px_40px_rgba(34,197,94,0.5)] 
                                active:shadow-[0_1px_0_#14532d,0_3px_10px_rgba(34,197,94,0.4)] md:active:shadow-[0_2px_0_#14532d,0_5px_15px_rgba(34,197,94,0.4)] 
                                active:translate-y-1 md:active:translate-y-2 transition-all duration-200 flex items-center justify-center group border-[3px] md:border-[6px] border-[#0a0e17]
                                ${isScanning ? 'pointer-events-none scale-[0.98] shadow-[0_2px_0_#14532d,0_5px_15px_rgba(34,197,94,0.6)] translate-y-0.5' : 'hover:brightness-110 hover:scale-105'}`}
                        >
                            {/* Glossy top reflection */}
                            <div className="absolute inset-1 md:inset-2 rounded-full bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Scanning Pulse */}
                            {isScanning && (
                                <div className="absolute inset-0 rounded-full animate-ping bg-lime-400/50" />
                            )}

                            <div className="flex flex-col items-center px-1 text-center">
                                {isScanning ? (
                                    <span className="font-display font-bold text-white text-[8px] xs:text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase drop-shadow-md animate-pulse">
                                        Designing...
                                    </span>
                                ) : selectedCard ? (
                                    <span className="font-display font-bold text-white text-[8px] xs:text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                                        Reset
                                    </span>
                                ) : (
                                    <>
                                        <span className="font-display font-bold text-white/70 text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs tracking-[0.05em] sm:tracking-[0.1em] uppercase mb-0.5">Design Your</span>
                                        <span className="font-display font-bold text-white text-[8px] xs:text-[10px] sm:text-sm md:text-lg tracking-normal sm:tracking-wider uppercase drop-shadow-lg leading-none">Experience</span>
                                    </>
                                )}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Surrounding Cards Grid */}
                <div className="grid grid-cols-2 gap-x-[150px] xs:gap-x-[190px] sm:gap-x-[320px] md:gap-x-[480px] lg:gap-x-[550px] gap-y-12 xs:gap-y-20 sm:gap-y-32 w-full relative z-20">
                    {cards.map((card, index) => {
                        const isSelected = selectedCard === card.id;
                        return (
                            <motion.div 
                                key={card.id}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative p-3 xs:p-5 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border transition-all duration-700 backdrop-blur-xl group
                                    ${isSelected ? 'border-cosmic-blue bg-[#060913]/90 shadow-[0_0_30px_rgba(79,209,255,0.4)] md:shadow-[0_0_50px_rgba(79,209,255,0.4)] scale-105 z-30' : 'border-white/10 bg-[#060913]/50 hover:bg-[#060913]/70 hover:border-white/30'}`}
                            >
                                {/* Inner glow for selected state */}
                                {isSelected && (
                                    <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-cosmic-blue/10 animate-pulse pointer-events-none" />
                                )}
                                
                                <div className="mb-2 md:mb-4">
                                    <span className="font-mono text-[8px] xs:text-[10px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase opacity-50 mb-1 sm:mb-2 block">Data Module 0{card.id}</span>
                                    <h3 className={`text-sm xs:text-base sm:text-2xl md:text-3xl font-display font-bold transition-colors duration-500 ${isSelected ? 'text-cosmic-blue' : 'text-white'}`}>
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="text-starlight/70 leading-relaxed font-light text-[10px] xs:text-[12px] sm:text-sm md:text-base">
                                    {card.desc}
                                </p>

                                {/* Decorative tech corners */}
                                <div className="absolute top-0 left-0 w-3 h-3 sm:w-6 sm:h-6 border-t-[1.5px] sm:border-t-2 border-l-[1.5px] sm:border-l-2 border-white/20 rounded-tl-xl sm:rounded-tl-3xl transition-colors duration-500 group-hover:border-cosmic-blue" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-6 sm:h-6 border-b-[1.5px] sm:border-b-2 border-r-[1.5px] sm:border-r-2 border-white/20 rounded-br-xl sm:rounded-br-3xl transition-colors duration-500 group-hover:border-cosmic-blue" />
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
        type: "", scale: "", priority: "", name: "", email: "", phone: "", message: "", _gotcha: ""
    });

    const handleSelection = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Brief delay for UX so they see their selection
        setTimeout(() => setStep(prev => prev + 1), 300);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://formspree.io/f/mpqevgql", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setStep(5); // Success step
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error sending message. Please try again.");
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#060913]/80 overflow-y-auto"
        >
            <motion.div 
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-3xl my-auto bg-[#0a0e17] border border-cosmic-blue/40 rounded-2xl sm:rounded-[2rem] p-4 xs:p-6 md:p-10 shadow-[0_0_80px_rgba(79,209,255,0.2)] relative overflow-hidden max-h-[95vh] flex flex-col"
            >
                {/* Holographic background artifacts */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cosmic-blue/10 blur-[80px] pointer-events-none rounded-full" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none mix-blend-overlay opacity-30" />

                {/* Header */}
                <div className="flex justify-between items-start mb-4 xs:mb-6 border-b border-white/10 pb-4 relative z-10 shrink-0">
                    <div>
                        <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-display font-bold text-white tracking-tight drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">Let’s Build Your Experience</h3>
                        <p className="text-cosmic-blue text-xs sm:text-sm font-mono tracking-[0.2em] uppercase mt-1">
                            {step < 5 ? `Mission Configuration // Step 0${step}` : 'Transmission Complete'}
                        </p>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all hover:bg-white/5 ml-2"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Form Steps */}
                <div className="overflow-y-auto pr-1 flex-grow min-h-0 relative z-10">
                    <AnimatePresence mode="wait">
                        
                        {/* STEP 1: Type */}
                        {step === 1 && (
                            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="pb-2">
                                <p className="text-white text-sm xs:text-base sm:text-lg mb-4 font-light">What are you looking for?</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                                    {["Corporate Event", "Brand Activation", "Entertainment Experience", "Exhibition", "Luxury Experience", "Conference", "Launch Event", "Something Unique"].map(opt => (
                                        <button 
                                            key={opt}
                                            onClick={() => handleSelection('type', opt)} 
                                            className="p-3 xs:p-4 border border-white/10 rounded-xl sm:rounded-2xl hover:border-cosmic-blue hover:bg-cosmic-blue/5 transition-all group flex justify-between items-center bg-white/[0.02]"
                                        >
                                            <span className="text-white group-hover:text-cosmic-blue text-xs xs:text-sm sm:text-base font-medium transition-colors">{opt}</span>
                                            <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white/20 group-hover:bg-cosmic-blue group-hover:shadow-[0_0_10px_#4FD1FF] transition-all" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: Scale */}
                        {step === 2 && (
                            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="pb-2">
                                <p className="text-white text-sm xs:text-base sm:text-lg mb-4 font-light">What scale is your event?</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                                    {["Small / Intimate", "Medium / Regional", "Large / National", "Mega Event / Global"].map(opt => (
                                        <button 
                                            key={opt}
                                            onClick={() => handleSelection('scale', opt)} 
                                            className="p-3 xs:p-4 border border-white/10 rounded-xl sm:rounded-2xl hover:border-cosmic-blue hover:bg-cosmic-blue/5 transition-all group flex justify-between items-center bg-white/[0.02]"
                                        >
                                            <span className="text-white group-hover:text-cosmic-blue text-xs xs:text-sm sm:text-base font-medium transition-colors">{opt}</span>
                                            <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white/20 group-hover:bg-cosmic-blue transition-all" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: Priority */}
                        {step === 3 && (
                            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="pb-2">
                                <p className="text-white text-sm xs:text-base sm:text-lg mb-4 font-light">What matters most to you?</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                                    {["Creativity & Design", "Audience Engagement", "Precision & Logistics", "Technological Innovation", "Massive Impact"].map(opt => (
                                        <button 
                                            key={opt}
                                            onClick={() => handleSelection('priority', opt)} 
                                            className="p-3 xs:p-4 border border-white/10 rounded-xl sm:rounded-2xl hover:border-cosmic-blue hover:bg-cosmic-blue/5 transition-all group flex justify-between items-center bg-white/[0.02]"
                                        >
                                            <span className="text-white group-hover:text-cosmic-blue text-xs xs:text-sm sm:text-base font-medium transition-colors">{opt}</span>
                                            <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white/20 group-hover:bg-cosmic-blue transition-all" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 4: Contact */}
                        {step === 4 && (
                            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="pb-2">
                                <p className="text-white text-sm xs:text-base sm:text-lg mb-4 font-light">Final details to establish connection.</p>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
                                    <input type="text" name="_gotcha" value={formData._gotcha} onChange={(e) => setFormData(prev => ({ ...prev, _gotcha: e.target.value }))} style={{ display: 'none' }} />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                        <input required type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 xs:p-4 text-xs xs:text-sm sm:text-base text-white focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue focus:outline-none transition-all placeholder:text-white/30" />
                                        <input required type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 xs:p-4 text-xs xs:text-sm sm:text-base text-white focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue focus:outline-none transition-all placeholder:text-white/30" />
                                    </div>
                                    <input type="tel" placeholder="Phone Number (Optional)" value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 xs:p-4 text-xs xs:text-sm sm:text-base text-white focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue focus:outline-none transition-all placeholder:text-white/30" />
                                    <textarea required placeholder="Short Message or Event Details" rows={3} value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 xs:p-4 text-xs xs:text-sm sm:text-base text-white focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue focus:outline-none transition-all resize-none placeholder:text-white/30" />
                                    
                                    <div className="flex justify-between items-center mt-2 sm:mt-4">
                                        <button type="button" onClick={() => setStep(1)} className="text-xs sm:text-sm text-starlight/50 hover:text-white transition-colors">
                                            Restart Scanner
                                        </button>
                                        <button type="submit" className="bg-white text-[#060913] hover:bg-cosmic-blue px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl text-xs xs:text-sm font-bold tracking-widest uppercase transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(79,209,255,0.4)]">
                                            Let's Connect
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {/* STEP 5: Success */}
                        {step === 5 && (
                            <motion.div key="step5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-6 sm:py-12">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cosmic-blue/20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                                    <CheckCircle2 size={32} className="text-cosmic-blue" />
                                </div>
                                <h4 className="text-xl sm:text-3xl font-display font-bold text-white mb-2 sm:mb-4">Message Received</h4>
                                <p className="text-starlight/70 text-xs sm:text-base max-w-md mx-auto">
                                    Our mission control team is analyzing your coordinates. We will establish connection shortly to discuss your extraordinary experience.
                                </p>
                                <button onClick={onClose} className="mt-6 sm:mt-8 px-6 py-2.5 sm:px-8 sm:py-3 border border-white/20 rounded-full text-xs sm:text-base text-white hover:bg-white/10 transition-colors">
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

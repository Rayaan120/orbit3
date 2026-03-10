import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X } from 'lucide-react';

const planets = [
    { id: 1, name: "Neon Nights", x: 20, y: 30, size: "w-8 h-8", color: "from-blue-400 to-indigo-600", shadow: "shadow-blue-500/50", details: "Brand activation in Neo Tokyo. 10k attendees." },
    { id: 2, name: "Desert Mirage", x: 70, y: 20, size: "w-12 h-12", color: "from-orange-400 to-red-600", shadow: "shadow-orange-500/50", details: "Immersive exhibition in Dubai desert." },
    { id: 3, name: "Tech Oasis", x: 40, y: 70, size: "w-16 h-16", color: "from-green-400 to-emerald-600", shadow: "shadow-green-500/50", details: "Silicon Valley massive corporate summit." },
    { id: 4, name: "Arctic Echo", x: 80, y: 80, size: "w-10 h-10", color: "from-cyan-300 to-blue-500", shadow: "shadow-cyan-500/50", details: "Product launch in Iceland." },
];

export default function UniverseMap() {
    const [activePlanet, setActivePlanet] = useState(null);

    return (
        <section className="py-24 relative overflow-hidden bg-deep-space border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Event <span className="text-gradient-gold">Universe Map</span></h2>
                <p className="text-starlight/60 max-w-xl mx-auto text-lg">
                    Click on a glowing planet to explore our global mission coordinates.
                </p>
            </div>

            <div className="relative w-full max-w-6xl mx-auto h-[600px] rounded-3xl border border-white/10 overflow-hidden glass bg-black/40">

                {/* Connection Lines (Grid) */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                {/* Map Planets */}
                {planets.map((planet) => (
                    <motion.div
                        key={planet.id}
                        className="absolute z-10 cursor-pointer"
                        style={{ left: `${planet.x}%`, top: `${planet.y}%` }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: planet.id * 0.1 }}
                        onClick={() => setActivePlanet(planet)}
                    >
                        {/* Pulse Ring */}
                        <div className={`absolute -inset-4 rounded-full border border-white/20 animate-ping opacity-30 ${planet.shadow}`} style={{ animationDuration: '3s' }} />

                        {/* The Planet */}
                        <div className={`relative ${planet.size} rounded-full bg-gradient-to-br ${planet.color} shadow-lg ${planet.shadow} hover:scale-125 transition-transform flex items-center justify-center group`}>
                            <div className="absolute inset-0 bg-black/20 rounded-full mix-blend-overlay" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[1px] bg-white/20 -rotate-45 pointer-events-none" />

                            {/* Tooltip on hover */}
                            <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-deep-space border border-white/20 rounded-lg px-3 py-1 text-xs whitespace-nowrap pointer-events-none z-20">
                                {planet.name}
                            </div>
                        </div>

                    </motion.div>
                ))}

                {/* Modal Overlay */}
                <AnimatePresence>
                    {activePlanet && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-50 bg-deep-space/80 backdrop-blur-sm flex items-center justify-center p-6"
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="w-full max-w-md bg-deep-space border border-white/20 rounded-2xl overflow-hidden glass shadow-[0_0_50px_rgba(79,209,255,0.2)]"
                            >
                                <div className={`h-32 bg-gradient-to-br ${activePlanet.color} relative`}>
                                    <button
                                        onClick={() => setActivePlanet(null)}
                                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors"
                                    >
                                        <X size={16} />
                                    </button>
                                    <div className="absolute -bottom-10 left-6">
                                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${activePlanet.color} border-4 border-deep-space shadow-lg ${activePlanet.shadow}`} />
                                    </div>
                                </div>
                                <div className="pt-14 pb-8 px-6">
                                    <div className="flex items-center gap-2 text-cosmic-blue mb-2 text-sm font-medium tracking-wide">
                                        <MapPin size={16} /> Coordinate Located
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-white mb-4">{activePlanet.name}</h3>
                                    <p className="text-starlight/70 leading-relaxed">
                                        {activePlanet.details}
                                    </p>
                                    <button className="mt-8 w-full py-3 rounded-xl border border-cosmic-blue/50 text-cosmic-blue font-semibold hover:bg-cosmic-blue/10 transition-colors neon-glow">
                                        View Mission Report
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

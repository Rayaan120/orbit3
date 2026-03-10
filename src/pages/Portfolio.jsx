import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["All", "Corporate", "Exhibitions", "Brand Activations", "Product Launches", "Experiential"];

const projects = [
    { id: 1, title: "Global Tech Summit", category: "Corporate", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", color: "from-blue-500" },
    { id: 2, title: "Velocity Auto Show", category: "Exhibitions", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", color: "from-purple-500" },
    { id: 3, title: "Neon Energy Drink Launch", category: "Product Launches", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", color: "from-green-500" },
    { id: 4, title: "Future Finance Gala", category: "Corporate", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", color: "from-yellow-500" },
    { id: 5, title: "Urban Fashion Week", category: "Experiential", image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", color: "from-pink-500" },
    { id: 6, title: "Gaming Console Reveal", category: "Product Launches", image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", color: "from-red-500" },
    { id: 7, title: "AI Symposium 2025", category: "Corporate", image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", color: "from-cyan-500" },
    { id: 8, title: "Oasis Music Festival VIP", category: "Brand Activations", image: "https://images.unsplash.com/photo-1470229722913-7c090be5c520?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", color: "from-orange-500" },
];

export default function Portfolio() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="bg-deep-space min-h-screen pt-24 pb-32">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space to-transparent z-10" />

                <div className="relative z-20 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4"
                    >
                        Mission <span className="text-gradient">Log</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-starlight/70 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        A visual record of our planetary conquests.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                ? 'bg-starlight text-deep-space shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                                : 'bg-white/5 text-starlight hover:bg-white/10 border border-white/10 hover:border-white/30'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative h-[400px] rounded-2xl overflow-hidden glass-card cursor-pointer"
                            >
                                <div className="absolute inset-0 z-0">
                                    <div className="absolute inset-0 bg-deep-space/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700" />
                                </div>

                                <div className={`absolute inset-0 border-2 border-transparent z-20 rounded-2xl transition-all duration-500 pointer-events-none group-hover:border-white/20`} />

                                <div className="absolute inset-0 p-6 flex flex-col justify-end z-30 bg-gradient-to-t from-deep-space via-deep-space/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className={`inline-block px-3 py-1 bg-gradient-to-r ${project.color} to-transparent text-white text-xs font-bold uppercase tracking-wider rounded-sm mb-3`}>
                                            {project.category}
                                        </span>
                                        <h3 className="text-3xl font-display font-bold text-white mb-2">{project.title}</h3>
                                        <div className="w-12 h-1 bg-white/20 rounded-full group-hover:w-full group-hover:bg-cosmic-blue transition-all duration-700" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}

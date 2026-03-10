import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Global Summit 2025",
        brand: "TechCorp",
        location: "Dubai",
        year: "2025",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        theme: "purple"
    },
    {
        title: "Future Mobility Exp",
        brand: "AutoDrive",
        location: "Berlin",
        year: "2024",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        theme: "blue"
    },
    {
        title: "Symphony of Lights",
        brand: "Stellar Brands",
        location: "Tokyo",
        year: "2024",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        theme: "gold"
    }
];

export default function Portfolio() {
    return (
        <section className="py-24 relative bg-deep-space">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Event <span className="text-gradient">Mission Log</span></h2>
                        <p className="text-starlight/60 max-w-xl text-lg">
                            Explore our successful planetary landings and deep space activations.
                        </p>
                    </div>
                    <button className="px-6 py-2 rounded-full border border-white/20 hover:border-starlight transition-colors">
                        View All Missions
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            key={project.title}
                            className="group relative rounded-2xl overflow-hidden glass-card cursor-pointer h-[400px]"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute inset-0 bg-deep-space/60 group-hover:bg-deep-space/20 transition-colors z-10 duration-500" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Glowing Border effect */}
                            <div className={`absolute inset-0 border-2 border-transparent z-20 rounded-2xl transition-colors duration-500 pointer-events-none
                ${project.theme === 'purple' ? 'group-hover:border-nebula-purple/50 group-hover:shadow-[inset_0_0_30px_rgba(139,92,246,0.3)]' : ''}
                ${project.theme === 'blue' ? 'group-hover:border-cosmic-blue/50 group-hover:shadow-[inset_0_0_30px_rgba(79,209,255,0.3)]' : ''}
                ${project.theme === 'gold' ? 'group-hover:border-orbit-gold/50 group-hover:shadow-[inset_0_0_30px_rgba(251,191,36,0.3)]' : ''}
              `} />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className={`text-xs font-semibold uppercase tracking-wider mb-2
                      ${project.theme === 'purple' ? 'text-nebula-purple' : ''}
                      ${project.theme === 'blue' ? 'text-cosmic-blue' : ''}
                      ${project.theme === 'gold' ? 'text-orbit-gold' : ''}
                    `}>
                                            {project.brand}
                                        </p>
                                        <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-4 text-sm text-starlight/60">
                                            <span>{project.location}</span>
                                            <span>•</span>
                                            <span>{project.year}</span>
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

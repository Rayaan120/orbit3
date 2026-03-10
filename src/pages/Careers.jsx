import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Zap, Globe } from 'lucide-react';

const benefits = [
    { icon: Heart, title: "Health & Wellbeing", desc: "Premium health coverage and wellness programs." },
    { icon: Globe, title: "Remote Flexibility", desc: "Work from anywhere in the universe." },
    { icon: Zap, title: "Continuous Learning", desc: "Budget for courses, conferences, and books." },
    { icon: Users, title: "Stellar Team", desc: "Collaborate with the best minds in the industry." }
];

const jobs = [
    { id: 1, title: "Senior Event Producer", type: "Full-time", location: "Dubai", dept: "Production" },
    { id: 2, title: "3D Spatial Designer", type: "Full-time", location: "Remote", dept: "Creative" },
    { id: 3, title: "Technical Director", type: "Contract", location: "London", dept: "Engineering" },
    { id: 4, title: "Marketing Account Manager", type: "Full-time", location: "New York", dept: "Client Success" },
];

export default function Careers() {
    return (
        <div className="bg-deep-space min-h-screen pt-24 pb-32">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541881512402-fa333857e5e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space to-transparent z-10" />

                <div className="relative z-20 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4"
                    >
                        Join the <span className="text-gradient">Orbit Mission</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-starlight/70 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        We're always looking for astronauts to join our crew.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-6 py-24">
                {/* Culture Section */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-starlight">Life Aboard <span className="text-cosmic-blue">Orbit</span></h2>
                    <p className="text-starlight/70 leading-relaxed text-lg font-light mb-12">
                        Working at Orbit Events isn't just a job; it's a mission. We are a collective of visionaries, engineers, and creatives who thrive on pushing the boundaries of what's possible in the live event space.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-full bg-deep-space border border-white/10 flex items-center justify-center mb-4 text-cosmic-blue shadow-[0_0_15px_rgba(79,209,255,0.2)]">
                                    <benefit.icon size={20} />
                                </div>
                                <h3 className="font-display font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-starlight/50 text-sm leading-relaxed">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Open Roles */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-starlight border-b border-white/10 pb-4">Open <span className="text-gradient-gold">Positions</span></h2>

                    <div className="space-y-4">
                        {jobs.map((job) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group cursor-pointer"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-2 text-xs font-bold uppercase tracking-widest text-starlight/40">
                                        <span className="text-cosmic-blue">{job.dept}</span>
                                        <span>•</span>
                                        <span>{job.type}</span>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-cosmic-blue transition-colors">
                                        {job.title}
                                    </h3>
                                    <div className="text-starlight/50 mt-2 flex items-center gap-2 text-sm">
                                        <Globe size={14} /> {job.location}
                                    </div>
                                </div>

                                <button className="px-6 py-2 rounded-full border border-white/20 text-starlight font-medium hover:border-cosmic-blue hover:text-cosmic-blue transition-colors whitespace-nowrap">
                                    Apply Now
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

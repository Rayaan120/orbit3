import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Telescope, Shield, Users } from 'lucide-react';

const values = [
    { icon: Sparkles, title: "Innovation", desc: "Pushing the boundaries of what's possible." },
    { icon: Telescope, title: "Vision", desc: "Seeing the big picture and microscopic details." },
    { icon: Shield, title: "Precision", desc: "Flawless execution of complex missions." },
    { icon: Users, title: "Collaboration", desc: "Partnering seamlessly with our clients." },
];

export default function About() {
    return (
        <div className="bg-deep-space min-h-screen pt-24 pb-32">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Earth from space"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/80 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6"
                    >
                        Exploring the Universe of <br />
                        <span className="text-gradient">Experiences</span>
                    </motion.h1>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
                {/* Story Section */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 rounded-3xl"
                        >
                            <h2 className="text-3xl font-display font-bold mb-6 text-starlight">Our Story</h2>
                            <p className="text-starlight/70 leading-relaxed mb-6 font-light">
                                Founded on the principle that events should be more than just gatherings, Orbit Events was built to engineer immersive brand dimensions.
                            </p>
                            <p className="text-starlight/70 leading-relaxed font-light">
                                We act as your dedicated space agency—planning, designing, and launching missions that captivate audiences and create gravitational pull for your brand.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-square rounded-3xl overflow-hidden glass-card border-none"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Astronaut"
                                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                            />
                            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(11,15,26,1)]" />
                        </motion.div>
                    </div>
                </section>

                {/* Values Section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display font-bold text-starlight mb-4">Core <span className="text-gradient-gold">Values</span></h2>
                        <p className="text-starlight/50">The principles that guide our every launch.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {values.map((val, i) => (
                            <motion.div
                                key={val.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cosmic-blue/5 rounded-full blur-[30px] -mr-16 -mt-16 transition-all group-hover:bg-cosmic-blue/20" />
                                <val.icon size={32} className="text-cosmic-blue mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-display font-semibold mb-3">{val.title}</h3>
                                <p className="text-starlight/60 text-sm leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

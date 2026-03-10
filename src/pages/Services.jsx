import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Zap, Layout, Rocket, Users, Play, ArrowRight, ChevronDown } from 'lucide-react';

const services = [
    {
        id: "corporate",
        icon: Briefcase,
        title: "Corporate Events",
        shortDesc: "High-impact summits and conferences.",
        fullDesc: "We engineer corporate events that break the mold of traditional conferences. From global summits to intimate executive retreats, we design environments that foster connection, inspire innovation, and amplify your corporate message with precision and flair."
    },
    {
        id: "exhibitions",
        icon: Layout,
        title: "Exhibitions",
        shortDesc: "Immersive brand pavilions and stands.",
        fullDesc: "Our exhibition designs are more than just stands; they are immersive brand pavilions. We utilize cutting-edge technology, spatial design, and interactive elements to ensure your presence commands attention and creates lasting impressions on the show floor."
    },
    {
        id: "activations",
        icon: Zap,
        title: "Brand Activations",
        shortDesc: "Electrifying consumer experiences.",
        fullDesc: "We create electrifying brand activations that generate massive gravitational pull. By blending physical and digital realms, we design memorable consumer touchpoints that drive engagement, virality, and deep brand loyalty in unexpected ways."
    },
    {
        id: "launches",
        icon: Rocket,
        title: "Product Launches",
        shortDesc: "Cinematic reveals for new innovations.",
        fullDesc: "A product launch should be a cinematic event. We choreograph every element—from the setting and lighting to the narrative arc—ensuring your new innovation is revealed with maximum impact, capturing the imagination of your audience and the media."
    },
    {
        id: "experiential",
        icon: Users,
        title: "Experiential Marketing",
        shortDesc: "Multi-sensory brand journeys.",
        fullDesc: "We craft multi-sensory brand journeys that allow your audience to step inside your brand's universe. These campaigns move beyond traditional marketing, creating deep, emotional connections through highly interactive and personalized experiences."
    },
    {
        id: "production",
        icon: Play,
        title: "Event Production",
        shortDesc: "Flawless technical execution.",
        fullDesc: "Our production team represents the mission control of your event. From complex AV rigging and stage engineering to seamless show calling, we handle the extreme technical demands of live events with absolute precision and unshakeable reliability."
    }
];

export default function Services() {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <div className="bg-deep-space min-h-screen pt-24 pb-32">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[0.5px] border-white/10 rounded-full animate-orbit" style={{ animationDuration: '60s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[0.5px] border-cosmic-blue/20 rounded-full animate-orbit" style={{ animationDirection: 'reverse', animationDuration: '45s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-nebula-purple/30 rounded-full blur-[100px]" />

                    {/* Central Satellite/Planet abstraction */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-deep-space border border-white/20 shadow-[0_0_50px_rgba(79,209,255,0.2)] flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border border-dashed border-cosmic-blue/50 animate-spin" style={{ animationDuration: '20s' }} />
                    </div>
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4"
                    >
                        Our <span className="text-gradient">Capabilities</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-starlight/70 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        A full spectrum of experiential services designed to elevate your brand's trajectory.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${expandedId === service.id ? 'col-span-1 md:col-span-2 ring-1 ring-cosmic-blue bg-white/5 shadow-[0_0_30px_rgba(79,209,255,0.1)]' : 'hover:-translate-y-1'}`}
                            onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                        >
                            <div className="p-8 flex items-start gap-6">
                                <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-colors duration-500 ${expandedId === service.id ? 'bg-cosmic-blue shadow-[0_0_20px_rgba(79,209,255,0.5)]' : 'bg-deep-space border border-white/10'}`}>
                                    <service.icon size={24} className={expandedId === service.id ? 'text-deep-space' : 'text-cosmic-blue'} />
                                </div>

                                <div className="flex-grow">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-2xl font-display font-bold text-white">{service.title}</h3>
                                        <motion.div animate={{ rotate: expandedId === service.id ? 180 : 0 }}>
                                            <ChevronDown className="text-starlight/50" />
                                        </motion.div>
                                    </div>
                                    <p className="text-starlight/60 mb-4">{service.shortDesc}</p>

                                    <AnimatePresence>
                                        {expandedId === service.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 border-t border-white/10">
                                                    <p className="text-starlight/80 leading-relaxed font-light mb-6">
                                                        {service.fullDesc}
                                                    </p>
                                                    <button className="flex items-center gap-2 text-cosmic-blue text-sm font-semibold tracking-wide hover:gap-3 transition-all group">
                                                        Start this Mission <ArrowRight size={16} className="group-hover:text-white transition-colors" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

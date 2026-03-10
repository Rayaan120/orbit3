import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
    return (
        <div className="bg-deep-space min-h-screen pt-24 pb-32">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space to-transparent z-10" />

                <div className="relative z-20 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4"
                    >
                        Establish <span className="text-gradient">Contact</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-starlight/70 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Let's plan your next mission.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-display font-bold text-starlight mb-8">Mission <span className="text-cosmic-blue">Control</span></h2>
                        <p className="text-starlight/70 leading-relaxed mb-12 font-light max-w-md">
                            Whether you're ready to launch a massive planetary activation or just want to calibrate your trajectory, our communications channel is open.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 relative group">
                                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-cosmic-blue group-hover:bg-cosmic-blue group-hover:text-deep-space transition-colors relative z-10">
                                    <MapPin size={24} />
                                </div>
                                {/* Glow behind icon */}
                                <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-cosmic-blue/20 blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div>
                                    <h3 className="text-xl font-display font-bold text-white mb-2">Space Sector 7G</h3>
                                    <p className="text-starlight/50 leading-relaxed">
                                        123 Galaxy Avenue <br />
                                        Cosmic City, CC 90210 <br />
                                        United Earth Sphere
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 relative group">
                                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-nebula-purple group-hover:bg-nebula-purple group-hover:text-white transition-colors relative z-10">
                                    <Phone size={24} />
                                </div>
                                <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-nebula-purple/20 blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div>
                                    <h3 className="text-xl font-display font-bold text-white mb-2">Frequency</h3>
                                    <p className="text-starlight/50">+1 (800) 555-ORBIT</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 relative group">
                                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-orbit-gold group-hover:bg-orbit-gold group-hover:text-deep-space transition-colors relative z-10">
                                    <Mail size={24} />
                                </div>
                                <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-orbit-gold/20 blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div>
                                    <h3 className="text-xl font-display font-bold text-white mb-2">Transmission</h3>
                                    <p className="text-starlight/50">mission@orbitevents.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden"
                    >
                        {/* Form Background Accent */}
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-cosmic-blue/10 rounded-full blur-[80px] pointer-events-none" />

                        <h3 className="text-2xl font-display font-bold text-white mb-8">Send a Transmission</h3>

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-starlight/40 mb-2">Commander Name</label>
                                    <input type="text" className="w-full bg-deep-space border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-starlight/40 mb-2">Email Signal</label>
                                    <input type="email" className="w-full bg-deep-space border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue transition-all" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-starlight/40 mb-2">Mission Type</label>
                                <select className="w-full bg-deep-space border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue transition-all appearance-none cursor-pointer">
                                    <option>Corporate Event</option>
                                    <option>Exhibition Stand</option>
                                    <option>Brand Activation</option>
                                    <option>Product Launch</option>
                                    <option>Other Coordination</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-starlight/40 mb-2">Mission Details</label>
                                <textarea rows="4" className="w-full bg-deep-space border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue transition-all resize-none" placeholder="Describe your objectives..."></textarea>
                            </div>

                            <button type="button" className="w-full py-4 rounded-xl bg-gradient-to-r from-cosmic-blue to-nebula-purple text-white font-display font-bold tracking-wide shadow-[0_0_20px_rgba(79,209,255,0.4)] hover:shadow-[0_0_30px_rgba(79,209,255,0.6)] hover:scale-[1.02] transition-all flex justify-center items-center gap-2">
                                Launch Transmission <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

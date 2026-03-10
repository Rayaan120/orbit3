import React from 'react';
import { Link } from 'react-router-dom';
import { SpaceIcon, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-deep-space pt-24 pb-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue to-transparent opacity-50" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cosmic-blue/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link to="/" className="text-2xl font-display font-bold text-starlight tracking-tight flex items-center gap-2 mb-6">
                            <span className="w-8 h-8 rounded-full border-2 border-cosmic-blue flex justify-center items-center shadow-[0_0_10px_#4FD1FF]">
                                <div className="w-2 h-2 rounded-full bg-cosmic-blue" />
                            </span>
                            <span>Orbit</span>
                        </Link>
                        <p className="text-starlight/60 text-sm leading-relaxed mb-6">
                            Designing extraordinary brand experiences that move beyond gravity and into unforgettable moments.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 glass flex items-center justify-center text-starlight/80 hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:shadow-[0_0_15px_rgba(79,209,255,0.3)] transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 glass flex items-center justify-center text-starlight/80 hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:shadow-[0_0_15px_rgba(79,209,255,0.3)] transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 glass flex items-center justify-center text-starlight/80 hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:shadow-[0_0_15px_rgba(79,209,255,0.3)] transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-display text-starlight mb-6 font-semibold">Universe</h3>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Portfolio', 'Careers', 'Contact'].map(link => (
                                <li key={link}>
                                    <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-starlight/60 hover:text-cosmic-blue transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-cosmic-blue/0 group-hover:bg-cosmic-blue transition-colors" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-display text-starlight mb-6 font-semibold">Missions</h3>
                        <ul className="space-y-4">
                            {['Corporate Events', 'Brand Activations', 'Exhibitions', 'Product Launches', 'Event Production'].map(service => (
                                <li key={service}>
                                    <Link to="/services" className="text-starlight/60 hover:text-cosmic-blue transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-cosmic-blue/0 group-hover:bg-cosmic-blue transition-colors" />
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-display text-starlight mb-6 font-semibold">Launch Pad</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-starlight/60 text-sm">
                                <MapPin size={18} className="text-cosmic-blue shrink-0 mt-0.5" />
                                <span>123 Galaxy Avenue, Space Sector 7G, Cosmic City</span>
                            </li>
                            <li className="flex items-center gap-3 text-starlight/60 text-sm">
                                <Phone size={18} className="text-cosmic-blue shrink-0" />
                                <span>+1 (800) 555-ORBIT</span>
                            </li>
                            <li className="flex items-center gap-3 text-starlight/60 text-sm">
                                <Mail size={18} className="text-cosmic-blue shrink-0" />
                                <span>mission@orbitevents.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-starlight/40 text-sm">
                        &copy; {new Date().getFullYear()} Orbit Events. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-starlight/40">
                        <a href="#" className="hover:text-starlight transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-starlight transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

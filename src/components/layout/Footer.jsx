import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, X, Linkedin, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-deep-space pt-8 pb-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue to-transparent opacity-50" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cosmic-blue/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
                    {/* Brand */}
                    <div className="md:col-span-1 flex flex-col items-start">
                        <Link to="/" className="transition-transform hover:scale-105 duration-300 -ml-16 -mt-16">
                            <img 
                                src="/logo.png" 
                                alt="Orbit Events" 
                                className="h-48 w-auto object-contain object-left"
                            />
                        </Link>
                        <p className="text-starlight/60 text-sm leading-relaxed -mt-12 relative z-10">
                            Designing extraordinary brand experiences that move beyond gravity and into unforgettable moments.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-8">
                            <a href="https://www.instagram.com/orbitevents.ae/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 glass flex items-center justify-center text-starlight/80 hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:shadow-[0_0_15px_rgba(79,209,255,0.3)] transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="https://x.com/orbit_eventsuae" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 glass flex items-center justify-center text-starlight/80 hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:shadow-[0_0_15px_rgba(79,209,255,0.3)] transition-all">
                                <X size={18} />
                            </a>
                            <a href="https://www.facebook.com/OrbitEventsDubai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 glass flex items-center justify-center text-starlight/80 hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:shadow-[0_0_15px_rgba(79,209,255,0.3)] transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.linkedin.com/company/orbit-events-and-promotions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 glass flex items-center justify-center text-starlight/80 hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:shadow-[0_0_15px_rgba(79,209,255,0.3)] transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://www.youtube.com/@OrbitEventsUAE" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 glass flex items-center justify-center text-starlight/80 hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:shadow-[0_0_15px_rgba(79,209,255,0.3)] transition-all">
                                <Youtube size={18} />
                            </a>
                            <a href="https://www.tiktok.com/@orbiteventsdubai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 glass flex items-center justify-center text-starlight/80 hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:shadow-[0_0_15px_rgba(79,209,255,0.3)] transition-all">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-display text-starlight mb-6 font-semibold uppercase tracking-wider">Navigation</h3>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map(link => (
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
                        <h3 className="text-lg font-display text-starlight mb-6 font-semibold uppercase tracking-wider">Services</h3>
                        <ul className="space-y-4">
                            {['Corporate Events', 'Brand Experience', 'Sponsorship Activation', 'Entertainment', 'Conferences & Summit', 'Exhibitions', 'Event Launch', 'Awards & Team Building'].map(service => (
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
                        <h3 className="text-lg font-display text-starlight mb-6 font-semibold uppercase tracking-wider">Get In Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-starlight/60 text-sm">
                                <MapPin size={18} className="text-cosmic-blue shrink-0 mt-0.5" />
                                <span>115, Al Makateb Building PO Box. 181996 Dubai, UAE</span>
                            </li>
                            <li className="flex items-center gap-3 text-starlight/60 text-sm">
                                <Phone size={18} className="text-cosmic-blue shrink-0" />
                                <span>+971 55 576 3536</span>
                            </li>
                            <li className="flex items-center gap-3 text-starlight/60 text-sm">
                                <Mail size={18} className="text-cosmic-blue shrink-0" />
                                <span>info@orbit.events</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
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

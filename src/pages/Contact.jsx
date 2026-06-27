import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, ArrowRight } from 'lucide-react';
import StarBackground from '../components/home/StarBackground';

export default function Contact() {
    useEffect(() => {
        document.title = "Contact Orbit Events Dubai | Event Management & Production Company";
        let metaDescription = document.querySelector('meta[name="description"]');
        const descriptionContent = "Get in touch with Orbit Events for premium event management, corporate events, brand activations, entertainment experiences, and production services across Dubai, the UAE, and beyond. Our team is ready to help plan and execute your next event with precision and creativity.";
        
        if (metaDescription) {
            metaDescription.setAttribute("content", descriptionContent);
        } else {
            metaDescription = document.createElement('meta');
            metaDescription.name = "description";
            metaDescription.content = descriptionContent;
            document.head.appendChild(metaDescription);
        }
    }, []);

    return (
        <div className="bg-deep-space min-h-screen pt-24 pb-12">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-white/5">
                <StarBackground />
                
                {/* Communications Signal / Abstract UI */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
                    <div className="absolute w-[200px] h-[200px] border-[2px] border-cosmic-blue/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute w-[400px] h-[400px] border-[1px] border-cosmic-blue/10 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                    <div className="absolute w-[800px] h-[800px] border border-white/5 rounded-full" />
                    
                    {/* Signal origin pulse down line */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-1/2 bg-gradient-to-t from-cosmic-blue via-cosmic-blue/50 to-transparent" />
                </div>

                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <div className="max-w-3xl flex flex-col items-start text-left">
                            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight mb-8">
                                Contact <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Orbit Events Dubai</span>
                            </h1>
                            
                            <p className="text-starlight/70 text-lg md:text-xl font-light leading-relaxed pl-1">
                                Get in touch with Orbit Events for premium event management, corporate events, brand activations, entertainment experiences, and production services across Dubai, the UAE, and beyond. Our team is ready to help plan and execute your next event with precision and creativity.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-1/4 left-0 w-96 h-96 bg-cosmic-blue/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-nebula-purple/5 rounded-full blur-[100px]" />
                    {/* Subtle grid lines */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch relative z-10">
                    
                    {/* Left Column: Mission Log / Contact Details */}
                    <div className="lg:col-span-5 space-y-12">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                                    Contact Information
                                </h2>
                                <p className="text-starlight/60 max-w-2xl text-lg font-light leading-relaxed">
                                    Orbit Events operates across Dubai, the UAE, and international markets—delivering premium event management, brand activations, entertainment experiences, and corporate productions with precision and creativity.
                                </p>
                            </motion.div>
                        </div>

                        <div className="relative space-y-10 pl-8 border-l border-white/10">
                            {/* Connection Line with Pulse */}
                            <div className="absolute left-[-1px] top-0 w-[1px] h-full bg-gradient-to-b from-cosmic-blue via-nebula-purple to-transparent" />
                            
                            {[
                                { 
                                    icon: <MapPin size={22} />, 
                                    title: "Office Location", 
                                    content: "115, Al Makateb Building, Dubai, UAE", 
                                    sub: "Corporate Headquarters",
                                    color: "text-cosmic-blue",
                                    bg: "bg-cosmic-blue/10"
                                },
                                { 
                                    icon: <Phone size={22} />, 
                                    title: "Phone Contact", 
                                    content: "+971 4 295 8339", 
                                    sub: "Mon – Fri | 09:00 AM – 06:00 PM GST",
                                    color: "text-nebula-purple",
                                    bg: "bg-nebula-purple/10"
                                },
                                { 
                                    icon: <Mail size={22} />, 
                                    title: "Email Address", 
                                    content: "info@orbit.events", 
                                    sub: "Send us your event inquiries anytime",
                                    color: "text-orbit-gold",
                                    bg: "bg-orbit-gold/10"
                                }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative group"
                                >
                                    {/* Pulse dot on the line */}
                                    <div className={`absolute left-[-37px] top-3 w-4 h-4 rounded-full border-2 border-deep-space ${item.bg} flex items-center justify-center`}>
                                        <div className={`w-1.5 h-1.5 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                                    </div>

                                    <div className="glass-card p-6 rounded-2xl border-white/5 hover:border-white/20 transition-all duration-500 group-hover:translate-x-2">
                                        <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                                            {item.icon}
                                        </div>
                                        <h3 className="text-white font-display font-bold text-lg mb-1">{item.title}</h3>
                                        <p className="text-starlight/80 font-medium mb-1">{item.content}</p>
                                        <p className="text-starlight/40 text-xs font-mono tracking-widest uppercase">{item.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: The Terminal (Form) */}
                    <div className="lg:col-span-7 flex flex-col h-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col h-full"
                        >
                            {/* Terminal Header Decor */}
                            <div className="bg-[#0a0a1a] border border-white/10 rounded-t-2xl p-4 flex items-center justify-between border-b-0 shrink-0">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="text-[10px] font-mono text-starlight/30 tracking-[0.2em] uppercase">
                                    CONTACT FORM
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cosmic-blue animate-pulse" />
                                    <span className="text-[10px] font-mono text-cosmic-blue tracking-widest uppercase">Encryption Active</span>
                                </div>
                            </div>

                            <div className="glass-card p-8 md:p-12 rounded-b-3xl border-t-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex-grow flex flex-col">
                                <h3 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">Start Your Event Journey</h3>
                                <p className="text-starlight/60 max-w-2xl text-lg font-light leading-relaxed mb-10 shrink-0">Fill out the form below and our team will get in touch to discuss your event requirements, creative vision, and execution strategy.</p>

                                <form action="https://formspree.io/f/mpqevgql" method="POST" className="space-y-8 flex-grow flex flex-col">
                                    {/* Honeypot field to prevent spam */}
                                    <input type="text" name="_gotcha" style={{ display: 'none' }} />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shrink-0">
                                        <div className="relative group">
                                            <input type="text" name="name" required className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-cosmic-blue transition-all" placeholder=" " />
                                            <label className="absolute left-0 top-3 text-starlight/30 text-sm pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cosmic-blue peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest font-bold">Full Name</label>
                                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-cosmic-blue transition-all duration-500 group-focus-within:w-full" />
                                        </div>
                                        <div className="relative group">
                                            <input type="email" name="email" required className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-cosmic-blue transition-all" placeholder=" " />
                                            <label className="absolute left-0 top-3 text-starlight/30 text-sm pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cosmic-blue peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest font-bold">Email Address</label>
                                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-cosmic-blue transition-all duration-500 group-focus-within:w-full" />
                                        </div>
                                    </div>

                                    <div className="relative group shrink-0">
                                        <select name="eventType" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-cosmic-blue transition-all appearance-none cursor-pointer">
                                            <option className="bg-deep-space text-white">Corporate Events</option>
                                            <option className="bg-deep-space text-white">Brand Experiences</option>
                                            <option className="bg-deep-space text-white">Sponsorship Activations</option>
                                            <option className="bg-deep-space text-white">Entertainment</option>
                                            <option className="bg-deep-space text-white">Marketing Campaigns</option>
                                            <option className="bg-deep-space text-white">Other Inquiry</option>
                                        </select>
                                        <label className="absolute left-0 -top-4 text-xs text-starlight/30 uppercase tracking-widest font-bold">Event Type</label>
                                        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-cosmic-blue transition-all duration-500 group-focus-within:w-full" />
                                    </div>

                                    <div className="relative group flex-grow flex flex-col">
                                        <textarea name="message" required className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-cosmic-blue transition-all resize-none flex-grow" placeholder=" "></textarea>
                                        <label className="absolute left-0 top-3 text-starlight/30 text-sm pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cosmic-blue peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest font-bold">Project Details</label>
                                        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-cosmic-blue transition-all duration-500 group-focus-within:w-full" />
                                    </div>

                                    <div className="pt-4 shrink-0">
                                        <button type="submit" className="w-full group relative overflow-hidden rounded-xl bg-cosmic-blue py-5 text-deep-space font-display font-black tracking-[0.2em] uppercase transition-all hover:shadow-[0_0_40px_rgba(79,209,255,0.4)] active:scale-[0.98]">
                                            <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                                            <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-deep-space">
                                                Send Inquiry <Send size={20} className="transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
                                            </span>
                                        </button>

                                        <div className="flex justify-between items-center pt-4 opacity-30">
                                            <div className="text-[9px] font-mono tracking-tighter uppercase">Orbit Secure Uplink</div>
                                            <div className="text-[9px] font-mono tracking-tighter uppercase">ID: OE-CONTACT-ALPHA</div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* Google Maps Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 relative group cursor-pointer"
                >
                    <a 
                        href="https://www.google.com/maps/search/?api=1&query=Orbit+Events+and+Promotions+Dubai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-blue/20 via-nebula-purple/20 to-orbit-gold/20 rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity" />
                        <div className="relative glass-card rounded-3xl overflow-hidden border-white/10 h-[450px]">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.5360526776713!2d55.3327542!3d25.2579078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc1de41cbc3%3A0xab669c43d76b9a13!2sOrbit%20Events%20and%20Promotions!5e1!3m2!1sen!2sae!4v1778228736163!5m2!1sen!2sae" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Orbit Events Location"
                            ></iframe>
                            
                            {/* Overlay to catch clicks and maintain theme */}
                            <div className="absolute inset-0 bg-cosmic-blue/5 group-hover:bg-transparent transition-colors z-10" />
                            
                            <div className="absolute top-4 left-4 z-20">
                                <div className="bg-deep-space/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-cosmic-blue animate-pulse" />
                                    <span className="text-[10px] font-mono text-white/70 tracking-widest uppercase">Base Coordinates: Orbit HQ</span>
                                </div>
                            </div>

                            <div className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                <div className="bg-cosmic-blue text-deep-space px-6 py-2 rounded-full font-display font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(79,209,255,0.4)]">
                                    Open in Google Maps <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    </a>
                </motion.div>

            </div>

            {/* WhatsApp Floating Button - Moved outside overflow-hidden container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="fixed bottom-8 right-8 z-[999]"
            >
                <a 
                    href="https://wa.me/971555763536" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95"
                >
                    {/* Pulse animation rings */}
                    <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
                    <div className="absolute inset-[-4px] rounded-full border border-[#25D366]/30 animate-pulse" />
                    
                    <svg 
                        className="w-7 h-7 text-white relative z-10" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>

                    {/* Tooltip */}
                    <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl">
                        Chat with us
                    </div>
                </a>
            </motion.div>
        </div>
    );
}

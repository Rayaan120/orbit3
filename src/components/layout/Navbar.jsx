import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cosmic-blue via-nebula-purple to-orbit-gold origin-left z-50"
                style={{ scaleX }}
            />

            <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-deep-space/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-display font-bold text-starlight tracking-tight flex items-center gap-2 group">
                        <div className="relative w-8 h-8 flex justify-center items-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-cosmic-blue/50 border-t-cosmic-blue"
                            />
                            <span className="w-4 h-4 rounded-full bg-cosmic-blue shadow-[0_0_10px_#4FD1FF]" />
                        </div>
                        <span>Orbit</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.href}
                                className={`relative px-2 py-1 font-medium transition-colors hover:text-cosmic-blue group ${location.pathname === link.href ? 'text-cosmic-blue' : 'text-starlight/80'}`}
                            >
                                {link.title}
                                <motion.div
                                    className="absolute inset-0 rounded-full border border-cosmic-blue/0 group-hover:border-cosmic-blue/30 scale-75 group-hover:scale-125 transition-all duration-300 pointer-events-none"
                                    animate={{ rotate: [0, 90] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                />
                            </Link>
                        ))}
                        <Link to="/contact" className="ml-4 px-6 py-2 rounded-full border border-white/20 glass hover:border-cosmic-blue/50 hover:shadow-[0_0_15px_rgba(79,209,255,0.3)] transition-all flex justify-center items-center relative overflow-hidden group">
                            <span className="relative z-10 font-medium">Start Mission</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue/20 to-nebula-purple/20 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-500" />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-starlight" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <motion.div
                initial={false}
                animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                className="fixed top-[70px] left-0 w-full z-30 bg-deep-space/95 backdrop-blur-xl border-b border-white/10 overflow-hidden md:hidden"
            >
                <div className="flex flex-col px-6 py-8 gap-6 text-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            to={link.href}
                            onClick={() => setIsOpen(false)}
                            className={location.pathname === link.href ? 'text-cosmic-blue' : 'text-starlight/80'}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </>
    );
}

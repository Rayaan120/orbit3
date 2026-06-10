import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
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
                className="fixed top-0 left-0 right-0 h-1 bg-cosmic-blue origin-left z-50 shadow-[0_0_10px_#4FD1FF]"
                style={{ scaleX }}
            />

            <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-deep-space/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-deep-space border-b border-white/5 py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="relative w-56 md:w-[350px] h-12 flex items-center">
                        <Link to="/" className="absolute left-0 top-1/2 -translate-y-[48%] transition-transform hover:scale-105 duration-300 z-50">
                            <img 
                                src="/logo.png" 
                                alt="Orbit Events" 
                                className="h-32 w-auto md:h-60 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                            />
                        </Link>
                    </div>

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

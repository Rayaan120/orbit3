import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Starfield from './components/ui/Starfield';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';

// Page imports
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ScrollToTop from './components/ui/ScrollToTop';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
}

function PageTransition({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full flex-grow flex flex-col"
        >
            {children}
        </motion.div>
    );
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="relative min-h-screen bg-deep-space flex flex-col font-sans overflow-x-hidden">
                {/* Background Canvas for Space Effect */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <Canvas camera={{ position: [0, 0, 1] }}>
                        <Suspense fallback={null}>
                            <Starfield />
                        </Suspense>
                    </Canvas>
                </div>

                {/* Foreground Content */}
                <div className="relative z-10 flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow flex flex-col mt-[72px]">
                        <AnimatedRoutes />
                    </main>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;

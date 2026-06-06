import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import HomepageOrbitServicesSection from '../components/home/HomepageOrbitServicesSection';
import StatsSection from '../components/home/StatsSection';
import OrbitTimelineSection from '../components/home/OrbitTimelineSection';
import GallerySection from '../components/home/GallerySection';
import ClientConstellation from '../components/home/ClientConstellation';
import CtaSection from '../components/home/CtaSection';

export default function Home() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Hero />
            <AboutSection />
            <HomepageOrbitServicesSection />
            <OrbitTimelineSection />
            <StatsSection />
            <GallerySection />
            <ClientConstellation />
            <CtaSection />
        </div>
    );
}

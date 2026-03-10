import React from 'react';
import Hero from '../components/home/Hero';
import ServicesOrbit from '../components/home/ServicesOrbit';
import Portfolio from '../components/home/Portfolio';
import UniverseMap from '../components/home/UniverseMap';
import Timeline from '../components/home/Timeline';
import ClientConstellation from '../components/home/ClientConstellation';
import CtaSection from '../components/home/CtaSection';

export default function Home() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Hero />
            <ServicesOrbit />
            <Portfolio />
            <UniverseMap />
            <Timeline />
            <ClientConstellation />
            <CtaSection />
        </div>
    );
}

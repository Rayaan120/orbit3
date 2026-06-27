import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StarBackground from '../components/home/StarBackground';
import CtaSection from '../components/home/CtaSection';
import PortfolioVideoShowcase from '../components/portfolio/PortfolioVideoShowcase';

const filters = [
    'All',
    'Abaya Rally',
    'Kandura Rally',
    'Ajman Government',
    'Da-Bangg Dubai',
    'Da-Bangg Qatar',
];

const abayaRallyImages = [
    '(473).JPG',
    'IMG_4577.jpg',
    'IMG_4631.jpg',
];

const abayaRallyProjects = abayaRallyImages.map((image, index) => ({
    id: `abaya-rally-${index + 1}`,
    category: 'Abaya Rally',
    title: index === 0 ? 'Abaya Rally UAE' : `Abaya Rally Moment ${String(index + 1).padStart(2, '0')}`,
    eyebrow: index === 0 ? 'Women Power Drive' : 'Abaya Rally 2020',
    location: 'Dubai, UAE',
    year: '2020',
    image: `/Abaya Rally 2020/${image}`,
    size: index === 0
        ? 'lg:col-span-2 lg:row-span-2'
        : 'lg:col-span-2',
    objectPosition: 'center',
}));

const kanduraRallyImages = [
    '1-2.jpg',
    '1-3.jpg',
    'DSC_0031.JPG',
    'DSC_0046.JPG',
    'DSC_0050.JPG',
    'DSC_0067.JPG',
    'DSC_0096.JPG',
    'DSC_9429.JPG',
    'DSC_9511.JPG',
    'DSC_9616.JPG',
    'DSC_9956.JPG',
];

const kanduraRallyProjects = kanduraRallyImages.map((image, index) => ({
    id: `kandura-rally-${index + 1}`,
    category: 'Kandura Rally',
    title: index === 0 ? 'Kandura Rally 2026' : `Kandura Rally Moment ${String(index + 1).padStart(2, '0')}`,
    eyebrow: index === 0 ? 'Automotive Community Drive' : 'Kandura Rally 2026',
    location: 'Dubai, UAE',
    year: '2026',
    image: `/Kandura Rally 2026/${image}`,
    size: index === 0
        ? 'lg:col-span-2 lg:row-span-2'
        : [1, 6].includes(index)
            ? 'lg:col-span-2'
            : '',
    objectPosition: 'center',
}));


const ajmanGovernmentImages = [
    'RED00058.JPG',
    'RED00127.JPG',
    'RED00193.JPG',
    'RED00204.JPG',
    'RED09679.JPG',
];

const ajmanGovernmentProjects = ajmanGovernmentImages.map((image, index) => ({
    id: `ajman-government-national-day-${index + 1}`,
    category: 'Ajman Government',
    title: index === 0 ? 'Ajman UAE National Day' : `National Day Moment ${String(index + 1).padStart(2, '0')}`,
    eyebrow: index === 0 ? 'Government Celebration Production' : 'Ajman Government UAE National Day',
    location: 'Ajman, UAE',
    year: 'UAE National Day',
    image: `/Ajman Government - UAE National Day/${image}`,
    size: index === 0
        ? 'lg:col-span-2 lg:row-span-2'
        : 'lg:col-span-2',
    objectPosition: 'center',
}));

const daBanggDubaiImages = [
    '(1252)-5r.jpg',
    'GA0A3324 5r.jpg',
    'GA0A3429 5r.jpg',
    'GA0A3514 5r.jpg',
    'GA0A3683 5r.jpg',
    'GA0A4502 5r.jpg',
];

const daBanggDubaiProjects = daBanggDubaiImages.map((image, index) => ({
    id: `da-bangg-dubai-${index + 1}`,
    category: 'Da-Bangg Dubai',
    title: index === 0 ? 'Da-Bangg The Tour Reloaded in Dubai' : `Da-Bangg Dubai Moment ${String(index + 1).padStart(2, '0')}`,
    eyebrow: index === 0 ? 'Live Entertainment Tour' : 'Da-Bangg The Tour Reloaded 2019',
    location: 'Dubai, UAE',
    year: '2019',
    image: `/Da-Bangg The Tour Reloaded 2019/${image}`,
    size: index === 0
        ? 'lg:col-span-2 lg:row-span-2'
        : [1, 4, 5].includes(index)
            ? 'lg:col-span-2'
            : '',
    objectPosition: 'center',
}));

const daBanggQatarImages = [
    'DSC06779.jpg',
    'DSC07526.jpg',
    'DSC07839.JPG',
    'DSC07894.JPG',
];

const daBanggQatarProjects = daBanggQatarImages.map((image, index) => ({
    id: `da-bangg-qatar-${index + 1}`,
    category: 'Da-Bangg Qatar',
    title: index === 0 ? 'Da-Bangg The Tour Reloaded in Qatar' : `Da-Bangg Qatar Moment ${String(index + 1).padStart(2, '0')}`,
    eyebrow: index === 0 ? 'Live Entertainment Tour' : 'Da-Bangg The Tour Reloaded in Qatar',
    location: 'Qatar',
    year: 'Tour Reloaded',
    image: `/Da-Bangg The Tour Reloaded in Qatar/${image}`,
    size: index === 0
        ? 'lg:col-span-2 lg:row-span-2'
        : [1].includes(index)
            ? 'lg:col-span-2'
            : '',
    objectPosition: 'center',
}));

const projects = [
    ...abayaRallyProjects,
    ...kanduraRallyProjects,
    ...ajmanGovernmentProjects,
    ...daBanggDubaiProjects,
    ...daBanggQatarProjects,
];

function PortfolioGallery() {
    const [activeFilter, setActiveFilter] = useState('All');

    const visibleProjects = useMemo(() => {
        if (activeFilter === 'All') return projects;
        return projects.filter((project) => project.category === activeFilter);
    }, [activeFilter]);

    return (
        <section id="portfolio-gallery" aria-labelledby="portfolio-gallery-heading" className="relative overflow-hidden bg-[#070A12] pb-24 pt-12 md:pb-32 md:pt-16">
            <div className="absolute inset-0 pointer-events-none opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cosmic-blue/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10">
                <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-5 flex items-center gap-3"
                        >
                            <span className="h-px w-12 bg-cosmic-blue/70" />
                            <span className="font-mono text-xs uppercase tracking-[0.35em] text-cosmic-blue">
                                Completed Projects
                            </span>
                        </motion.div>
                        <motion.h2
                            id="portfolio-gallery-heading"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.05 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                        >
                            Portfolio Gallery
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.12 }}
                            className="text-starlight/60 max-w-2xl text-lg font-light leading-relaxed mt-6"
                        >
                            A curated view of rallies, beachfront productions, government programs, and brand experiences delivered with Orbit's production detail.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="flex flex-wrap gap-2 rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl"
                    >
                        {filters.map((filter) => {
                            const isActive = activeFilter === filter;
                            const count = filter === 'All'
                                ? projects.length
                                : projects.filter((project) => project.category === filter).length;

                            return (
                                <button
                                    key={filter}
                                    type="button"
                                    onClick={() => setActiveFilter(filter)}
                                    className={`relative overflow-hidden rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 md:px-5 ${
                                        isActive
                                            ? 'text-deep-space shadow-[0_0_25px_rgba(79,209,255,0.22)]'
                                            : 'text-white/55 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="portfolio-filter-pill"
                                            className="absolute inset-0 rounded-full bg-white"
                                            transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                                        />
                                    )}
                                    <span className="relative z-10">{filter}</span>
                                    <span className={`relative z-10 ml-2 ${isActive ? 'text-deep-space/45' : 'text-white/25'}`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </motion.div>
                </div>

                <motion.div layout className="grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[310px]">
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, index) => (
                            <motion.article
                                layout
                                key={project.id}
                                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                                transition={{ duration: 0.45, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
                                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-2xl ${project.size}`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out ${
                                        project.objectFit === 'contain' ? '' : 'group-hover:scale-110'
                                    }`}
                                    style={{
                                        objectFit: project.objectFit || 'cover',
                                        objectPosition: project.objectPosition,
                                    }}
                                />
                                <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10 transition duration-500 group-hover:ring-cosmic-blue/50" />
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

export default function Portfolio() {
    useEffect(() => {
        const title = 'Event Portfolio Dubai | Orbit Events UAE';
        const description = 'Explore Orbit Events’ Dubai and UAE event portfolio featuring corporate events, brand activations, rallies, festivals, government celebrations, awards nights, and immersive event production.';
        const canonicalUrl = 'https://orbit.events/portfolio';
        const socialImage = 'https://orbit.events/Abaya%20Rally%202020/(431).JPG';
        const previousTitle = document.title;
        const previousDescription = document.head.querySelector('meta[name="description"]');
        const previousDescriptionContent = previousDescription?.getAttribute('content');
        const managedSelectors = [
            'link[rel="canonical"]',
            'meta[property="og:title"]',
            'meta[property="og:description"]',
            'meta[property="og:type"]',
            'meta[property="og:url"]',
            'meta[property="og:image"]',
            'meta[name="twitter:card"]',
            'meta[name="twitter:title"]',
            'meta[name="twitter:description"]',
            'meta[name="twitter:image"]',
            'script[data-portfolio-schema]',
        ];

        const setMeta = (selector, attribute, value, createTag, createAttributes) => {
            let element = document.head.querySelector(selector);
            if (!element) {
                element = document.createElement(createTag);
                Object.entries(createAttributes).forEach(([key, attributeValue]) => {
                    element.setAttribute(key, attributeValue);
                });
                document.head.appendChild(element);
            }
            element.setAttribute(attribute, value);
        };

        document.title = title;
        setMeta('meta[name="description"]', 'content', description, 'meta', { name: 'description' });
        setMeta('link[rel="canonical"]', 'href', canonicalUrl, 'link', { rel: 'canonical' });
        setMeta('meta[property="og:title"]', 'content', title, 'meta', { property: 'og:title' });
        setMeta('meta[property="og:description"]', 'content', description, 'meta', { property: 'og:description' });
        setMeta('meta[property="og:type"]', 'content', 'website', 'meta', { property: 'og:type' });
        setMeta('meta[property="og:url"]', 'content', canonicalUrl, 'meta', { property: 'og:url' });
        setMeta('meta[property="og:image"]', 'content', socialImage, 'meta', { property: 'og:image' });
        setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image', 'meta', { name: 'twitter:card' });
        setMeta('meta[name="twitter:title"]', 'content', title, 'meta', { name: 'twitter:title' });
        setMeta('meta[name="twitter:description"]', 'content', description, 'meta', { name: 'twitter:description' });
        setMeta('meta[name="twitter:image"]', 'content', socialImage, 'meta', { name: 'twitter:image' });

        const schema = document.createElement('script');
        schema.type = 'application/ld+json';
        schema.dataset.portfolioSchema = 'true';
        schema.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Orbit Events Dubai Event Portfolio',
            url: canonicalUrl,
            description,
            isPartOf: {
                '@type': 'WebSite',
                name: 'Orbit Events',
                url: 'https://orbit.events/',
            },
            about: {
                '@type': 'Organization',
                name: 'Orbit Events and Promotions',
                areaServed: ['Dubai', 'United Arab Emirates'],
                knowsAbout: [
                    'Event management',
                    'Event production',
                    'Corporate events',
                    'Brand activations',
                    'Entertainment events',
                ],
            },
            mainEntity: {
                '@type': 'ItemList',
                name: 'Featured Orbit Events Projects',
                itemListElement: filters.slice(1).map((name, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    name,
                })),
            },
        });
        document.head.appendChild(schema);

        return () => {
            document.title = previousTitle;
            const currentDescription = document.head.querySelector('meta[name="description"]');
            if (previousDescription && currentDescription) {
                currentDescription.setAttribute('content', previousDescriptionContent || '');
            } else {
                currentDescription?.remove();
            }
            managedSelectors.forEach((selector) => {
                document.head.querySelector(selector)?.remove();
            });
        };
    }, []);

    return (
        <div className="min-h-screen bg-deep-space pt-24 pb-32">
            <section aria-labelledby="portfolio-hero-heading" className="relative flex h-[52vh] min-h-[430px] items-center justify-center overflow-hidden border-b border-white/5">
                <StarBackground />

                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute h-[800px] w-[800px] rounded-full border border-cosmic-blue/10 blur-[2px]" />
                    <div className="absolute h-[600px] w-[600px] rounded-full border border-white/5" />
                </div>

                <div className="relative z-10 mx-auto -translate-y-6 max-w-6xl px-6 text-center md:-translate-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.55 }}
                        className="flex flex-col items-center"
                    >
                        <p className="mb-5 font-mono text-xs uppercase tracking-[0.34em] text-cosmic-blue md:text-sm">
                            Event Management & Production Portfolio
                        </p>

                        <h1 id="portfolio-hero-heading" className="mb-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                            Event Portfolio
                        </h1>

                        <p className="mx-auto mb-8 max-w-4xl text-lg font-light leading-8 text-starlight/70 md:text-xl">
                            Explore corporate events, brand activations, rallies, festivals, government celebrations,
                            awards nights, and immersive productions delivered by Orbit Events.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <a
                                href="#portfolio-gallery"
                                className="rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-deep-space transition hover:bg-cosmic-blue"
                            >
                                Explore Our Work
                            </a>
                            <Link
                                to="/contact"
                                className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:border-white/50 hover:bg-white/10"
                            >
                                Plan Your Event
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <PortfolioVideoShowcase />
            <PortfolioGallery />
            <CtaSection />
        </div>
    );
}

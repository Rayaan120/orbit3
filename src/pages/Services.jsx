import React, { useEffect } from 'react';
import VirtualUniverseSection from '../components/home/VirtualUniverseSection';
import CtaSection from '../components/home/CtaSection';

const serviceSchemaItems = [
    {
        name: 'Corporate Events',
        description: 'Corporate event planning, conferences, galas, networking events, employee engagement programs, and executive experiences.',
    },
    {
        name: 'Brand Experience',
        description: 'Experiential marketing, brand activations, roadshows, sampling campaigns, product demos, and audience engagement.',
    },
    {
        name: 'Sponsorship Activation',
        description: 'Sponsorship strategy, activation planning, audience alignment, campaign management, and measurable brand exposure.',
    },
    {
        name: 'Entertainment',
        description: 'Live entertainment, artist sourcing, festival concepts, technical production, and entertainment logistics across the Middle East.',
    },
    {
        name: 'Conferences & Summit',
        description: 'Conference and summit planning, speaker coordination, delegate flow, stage production, and technical event delivery.',
    },
    {
        name: 'Exhibitions',
        description: 'Custom exhibition stands, pavilions, trade show displays, fabrication, installation, and on-site project management.',
    },
    {
        name: 'Event Launch',
        description: 'Product launches, brand kick-offs, press reveals, theatrical stage production, laser shows, and immersive reveal experiences.',
    },
    {
        name: 'Awards & Team Building',
        description: 'Awards ceremonies, gala dinners, employee recognition nights, corporate team building events, leadership retreats, and company offsites.',
    },
];

export default function Services() {
    useEffect(() => {
        const title = 'Event Management Services Dubai | Awards, Team Building & Brand Activations';
        const description = 'Explore Orbit Events services in Dubai and the UAE, including awards ceremonies, corporate team building, brand activations, exhibitions, entertainment, launches, conferences, and full event production.';
        const canonicalUrl = 'https://orbit.events/services';
        const socialImage = 'https://orbit.events/bg.png';
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
            'script[data-services-schema]',
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
        schema.dataset.servicesSchema = 'true';
        schema.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'WebPage',
                    '@id': `${canonicalUrl}#webpage`,
                    url: canonicalUrl,
                    name: title,
                    description,
                    isPartOf: {
                        '@type': 'WebSite',
                        name: 'Orbit Events',
                        url: 'https://orbit.events/',
                    },
                    about: {
                        '@id': `${canonicalUrl}#event-management-services`,
                    },
                },
                {
                    '@type': 'Service',
                    '@id': `${canonicalUrl}#event-management-services`,
                    name: 'Event Management Services in Dubai and the UAE',
                    serviceType: 'Corporate event management, awards ceremonies, team building, brand activations, event production, exhibitions, entertainment, launches, conferences, and summits',
                    description,
                    provider: {
                        '@type': 'Organization',
                        name: 'Orbit Events and Promotions',
                        url: 'https://orbit.events/',
                    },
                    areaServed: [
                        {
                            '@type': 'Place',
                            name: 'Dubai',
                        },
                        {
                            '@type': 'Country',
                            name: 'United Arab Emirates',
                        },
                    ],
                    hasOfferCatalog: {
                        '@type': 'OfferCatalog',
                        name: 'Orbit Events Services',
                        itemListElement: serviceSchemaItems.map((service, index) => ({
                            '@type': 'Offer',
                            position: index + 1,
                            itemOffered: {
                                '@type': 'Service',
                                name: service.name,
                                description: service.description,
                            },
                        })),
                    },
                },
            ],
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
        <div className="w-full bg-[#060913]">
            <VirtualUniverseSection />
            <CtaSection />
        </div>
    );
}

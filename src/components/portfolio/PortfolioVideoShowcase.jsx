import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2, Play, X } from 'lucide-react';
import { gsap } from 'gsap';

const reels = [
    {
        id: 'kandura-rally-2026',
        category: 'Kandura Rally',
        title: 'Kandura Rally 2026',
        subtitle: 'The official highlight film from the 2026 Kandura Rally.',
        image: 'https://i.ytimg.com/vi/qol7GItEFxg/maxresdefault.jpg',
        video: 'https://www.youtube.com/embed/qol7GItEFxg?autoplay=1&rel=0',
        videoType: 'youtube',
        position: 'center',
    },
    {
        id: 'sobha-realty-leadership-retreat',
        category: 'Corporate Retreat',
        title: 'Sobha Realty’s Leadership Retreat',
        subtitle: 'A cinematic look at Sobha Realty’s leadership retreat experience.',
        image: 'https://i.ytimg.com/vi/pnuAG9fg-h0/sddefault.jpg',
        video: 'https://www.youtube.com/embed/pnuAG9fg-h0?autoplay=1&rel=0',
        videoType: 'youtube',
        position: 'center',
    },
    {
        id: 'abaya-rally-fifth-edition',
        category: 'Abaya Rally',
        title: 'Abaya Rally 5th edition',
        subtitle: 'Highlights from the fifth edition of Orbit Events’ Abaya Rally.',
        image: 'https://i.ytimg.com/vi/ZJuZCz_x2HM/maxresdefault.jpg',
        video: 'https://www.youtube.com/embed/ZJuZCz_x2HM?autoplay=1&rel=0',
        videoType: 'youtube',
        position: 'center',
    },
    {
        id: 'supermom-awards-night',
        category: 'Awards Night',
        title: "Supermom 12th Year Awards' Night",
        subtitle: 'Celebrating the twelfth year of the Supermom Awards Night.',
        image: 'https://i.ytimg.com/vi/JsHg6csIqM8/maxresdefault.jpg',
        video: 'https://www.youtube.com/embed/JsHg6csIqM8?autoplay=1&rel=0',
        videoType: 'youtube',
        position: 'center',
    },
    {
        id: 'color-beach-party-dubai-2022',
        category: 'Color Beach',
        title: 'Color Beach Party Dubai 2022 Highlight Video',
        subtitle: 'Official highlights from the Color Beach Party Dubai 2022.',
        image: 'https://i.ytimg.com/vi/0arHsWBWGWs/maxresdefault.jpg',
        video: 'https://www.youtube.com/embed/0arHsWBWGWs?autoplay=1&rel=0',
        videoType: 'youtube',
        position: 'center',
    },
];

const particles = Array.from({ length: 26 }, (_, index) => ({
    id: index,
    left: `${(index * 37 + 11) % 100}%`,
    top: `${(index * 53 + 7) % 100}%`,
    size: index % 5 === 0 ? 2 : 1,
    delay: (index % 7) * 0.55,
    duration: 3.5 + (index % 5) * 0.8,
}));

function ReelCard({ reel, dimmed = false, mobile = false, onOpen }) {
    return (
        <button
            type="button"
            onClick={() => onOpen(reel)}
            aria-label={`Play ${reel.title}`}
            className={`group relative block h-full w-full overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#070b15] text-left shadow-[0_34px_80px_rgba(0,0,0,0.65)] outline-none transition-[opacity,filter] duration-500 focus-visible:ring-2 focus-visible:ring-cosmic-blue ${
                dimmed ? 'opacity-35 saturate-50' : 'opacity-100 saturate-100'
            }`}
            style={{ boxShadow: '0 34px 80px rgba(0,0,0,0.65), 0 0 38px rgba(160,195,215,0.08)' }}
        >
            <div
                className={`relative h-full w-full overflow-hidden rounded-[1.55rem] transition-transform duration-700 ease-out [transform-style:preserve-3d] ${
                    mobile ? '' : 'group-hover:[transform:translateZ(70px)_scale(1.035)]'
                }`}
            >
                <img
                    src={reel.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover saturate-[0.78] transition-all duration-[1600ms] ease-out group-hover:scale-[1.08] group-hover:saturate-100"
                    style={{ objectPosition: reel.position }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[#07101d]/25 via-transparent to-[#03050b]/95" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70" />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#8fb8cc]/15 to-transparent opacity-60" />

                <motion.div
                    aria-hidden="true"
                    animate={{ x: ['-180%', '280%'] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}
                    className="absolute -top-1/4 h-[150%] w-20 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-md"
                />

                <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.24em] text-white/75 backdrop-blur-xl">
                        Orbit Reel
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                        Orbit Events
                    </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 scale-90 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white opacity-100 shadow-[0_0_45px_rgba(255,255,255,0.18)] backdrop-blur-xl transition-all duration-500 group-hover:scale-100 group-hover:border-white/50 group-hover:bg-white group-hover:text-[#07101d] md:opacity-0 md:group-hover:opacity-100">
                        <Play size={22} fill="currentColor" className="ml-1" />
                    </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-3 flex items-center gap-2">
                        <span className="h-px w-7 bg-[#a9c8d8]" />
                        <span className="font-mono text-[9px] uppercase tracking-[0.23em] text-[#a9c8d8]">
                            {reel.category}
                        </span>
                    </div>
                    <h3 className="max-w-[13rem] font-display text-2xl font-bold leading-[0.95] text-white">
                        {reel.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 max-w-[15rem] text-xs leading-5 text-white/55">
                        {reel.subtitle}
                    </p>
                </div>

                <div className="absolute inset-0 rounded-[1.55rem] ring-1 ring-inset ring-white/15 transition-all duration-500 group-hover:ring-white/40" />
                <motion.div
                    aria-hidden="true"
                    animate={{ opacity: [0.2, 0.58, 0.2] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-[1.55rem] ring-1 ring-inset"
                    style={{ boxShadow: 'inset 0 0 24px rgba(169,200,216,0.16)', color: '#a9c8d8' }}
                />
            </div>
        </button>
    );
}

function VideoModal({ reel, onClose }) {
    return (
        <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${reel.title} video`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#02040a]/95 p-4 backdrop-blur-2xl md:p-8"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: 'spring', stiffness: 170, damping: 24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/15 bg-[#070b13] shadow-[0_0_120px_rgba(79,209,255,0.18)]"
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close video"
                    className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-xl transition hover:rotate-90 hover:bg-white hover:text-[#07101d]"
                >
                    <X size={20} />
                </button>

                <div className="relative aspect-video overflow-hidden bg-black">
                    {reel.videoType === 'youtube' ? (
                        <iframe
                            key={reel.id}
                            src={reel.video}
                            title={`${reel.title} video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="h-full w-full"
                        />
                    ) : (
                        <video
                            key={reel.id}
                            src={reel.video}
                            poster={reel.image}
                            autoPlay
                            muted
                            controls
                            playsInline
                            className="h-full w-full object-cover"
                        />
                    )}
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>

                <div className="flex flex-col gap-5 p-5 md:flex-row md:items-end md:justify-between md:p-7">
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#a9c8d8]">
                            {reel.category} / Event Reel
                        </p>
                        <h3 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
                            {reel.title}
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">{reel.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                        <Maximize2 size={14} />
                        Cinematic playback
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function PortfolioVideoShowcase() {
    const [hoveredId, setHoveredId] = useState(null);
    const [selectedReel, setSelectedReel] = useState(null);
    const stageRef = useRef(null);
    const cameraRef = useRef(null);
    const cardRefs = useRef(new Map());
    const controllerRef = useRef(null);

    useLayoutEffect(() => {
        const stage = stageRef.current;
        const camera = cameraRef.current;
        if (!stage || !camera || reels.length === 0) return undefined;

        const cards = reels
            .map((reel) => cardRefs.current.get(reel.id))
            .filter(Boolean);
        const count = cards.length;
        const proxy = { value: 0 };
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let handleResize;

        const context = gsap.context(() => {
            const positionCards = () => {
                const width = stage.clientWidth || window.innerWidth;
                const wide = width >= 1120;
                const radius = wide ? Math.min(760, width * 0.46) : Math.min(520, width * 0.58);
                const spacing = wide ? 20.5 : 23;
                const visibleRange = wide ? 4.7 : 3.15;
                const half = count / 2;

                cards.forEach((card, index) => {
                    let relative = ((index - proxy.value + half) % count + count) % count - half;
                    if (count === 2 && relative === -half && index > proxy.value) relative = half;

                    const angle = relative * spacing;
                    const radians = angle * (Math.PI / 180);
                    const distance = Math.abs(relative);
                    const inView = distance <= visibleRange;

                    gsap.set(card, {
                        xPercent: -50,
                        yPercent: -50,
                        x: Math.sin(radians) * radius,
                        y: distance * 8 + Math.sin((relative + proxy.value) * 0.7) * 4,
                        z: (Math.cos(radians) - 1) * radius,
                        rotationY: -angle * 0.82,
                        scale: 1.04 - Math.min(distance, 5) * 0.025,
                        autoAlpha: inView ? 1 : 0,
                        zIndex: Math.round(100 - distance * 10),
                        pointerEvents: inView ? 'auto' : 'none',
                        force3D: true,
                    });
                });
            };

            gsap.set(camera, {
                transformStyle: 'preserve-3d',
                transformPerspective: 1500,
            });
            positionCards();

            const rotationTween = gsap.to(proxy, {
                value: count,
                duration: Math.max(26, count * 4.6),
                repeat: -1,
                ease: 'none',
                paused: reducedMotion,
                onUpdate: positionCards,
            });

            const cameraTween = gsap.to(camera, {
                y: -8,
                rotationX: 1.2,
                duration: 5.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                paused: reducedMotion,
            });

            controllerRef.current = { rotationTween, cameraTween, reducedMotion };
            handleResize = positionCards;
            window.addEventListener('resize', handleResize);
        }, stage);

        return () => {
            if (handleResize) window.removeEventListener('resize', handleResize);
            controllerRef.current = null;
            context.revert();
        };
    }, []);

    useEffect(() => {
        const controller = controllerRef.current;
        if (!controller || controller.reducedMotion) return;

        if (hoveredId) {
            controller.rotationTween.pause();
            controller.cameraTween.pause();
        } else {
            controller.rotationTween.resume();
            controller.cameraTween.resume();
        }
    }, [hoveredId]);

    useEffect(() => {
        if (!selectedReel) return undefined;

        const previousOverflow = document.body.style.overflow;
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setSelectedReel(null);
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedReel]);

    return (
        <section className="relative isolate overflow-hidden bg-[#030711] pb-12 pt-12 md:pb-16 md:pt-16">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(130,165,185,0.10),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(72,95,112,0.08),transparent_30%)]" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cosmic-blue/45 to-transparent" />
                <div className="absolute left-1/2 top-[45%] h-[30rem] w-[75rem] -translate-x-1/2 rounded-[100%] border border-cosmic-blue/10 bg-cosmic-blue/[0.025] blur-3xl" />
                <div className="absolute -left-1/4 top-1/2 h-px w-[150%] -rotate-6 bg-gradient-to-r from-transparent via-cosmic-blue/20 to-transparent blur-[1px]" />
                {particles.map((particle) => (
                    <motion.span
                        key={particle.id}
                        animate={{ opacity: [0.15, 0.75, 0.15], scale: [1, 1.7, 1] }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            width: particle.size,
                            height: particle.size,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 mx-auto max-w-[1700px] px-5 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-5 flex items-center justify-center gap-3"
                    >
                        <span className="h-px w-10 bg-cosmic-blue/70" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.42em] text-cosmic-blue md:text-xs">
                            Event Reels
                        </span>
                        <span className="h-px w-10 bg-cosmic-blue/70" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.06 }}
                        className="font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl md:text-8xl"
                    >
                        Video <span className="text-white/70">Showcase</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.14 }}
                        className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/55 md:text-lg md:leading-8"
                    >
                        Explore a collection of cinematic event highlights, immersive productions, and unforgettable
                        experiences captured across Orbit Events projects.
                    </motion.p>
                </div>

                <div
                    ref={stageRef}
                    className="relative mt-14 hidden h-[650px] w-full md:block lg:h-[720px] [perspective:1500px]"
                >
                    <div
                        ref={cameraRef}
                        className="absolute inset-0 [transform-style:preserve-3d]"
                    >
                        <AnimatePresence>
                            {reels.map((reel) => (
                                <motion.article
                                    key={reel.id}
                                    ref={(node) => {
                                        if (node) cardRefs.current.set(reel.id, node);
                                        else cardRefs.current.delete(reel.id);
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                    onMouseEnter={() => setHoveredId(reel.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className="absolute left-1/2 top-1/2 h-[500px] w-[238px] will-change-transform lg:h-[570px] lg:w-[286px] [transform-style:preserve-3d]"
                                >
                                    <ReelCard
                                        reel={reel}
                                        dimmed={Boolean(hoveredId && hoveredId !== reel.id)}
                                        onOpen={setSelectedReel}
                                    />
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 z-[120] w-1/5 bg-gradient-to-r from-[#030711] via-[#030711]/70 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-[120] w-1/5 bg-gradient-to-l from-[#030711] via-[#030711]/70 to-transparent" />
                    <div className="pointer-events-none absolute inset-x-[12%] bottom-7 z-[110] h-24 rounded-[100%] bg-cosmic-blue/[0.08] blur-3xl" />
                    <div className="pointer-events-none absolute inset-x-[17%] bottom-14 z-[110] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>

                <div className="relative mt-12 md:hidden">
                    <motion.div layout className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <AnimatePresence mode="popLayout">
                            {reels.map((reel) => (
                                <motion.article
                                    layout
                                    key={reel.id}
                                    initial={{ opacity: 0, x: 24, scale: 0.96 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -24, scale: 0.94 }}
                                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                                    className="h-[470px] w-[78vw] max-w-[310px] shrink-0 snap-center"
                                >
                                    <ReelCard reel={reel} mobile onOpen={setSelectedReel} />
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                <div className="mt-2 flex items-center justify-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 md:-mt-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cosmic-blue shadow-[0_0_12px_rgba(79,209,255,0.8)]" />
                    <span className="hidden md:inline">Auto orbit / Hover to pause / Select to play</span>
                    <span className="md:hidden">Swipe to explore / Select to play</span>
                </div>
            </div>

            <AnimatePresence>
                {selectedReel && <VideoModal reel={selectedReel} onClose={() => setSelectedReel(null)} />}
            </AnimatePresence>
        </section>
    );
}

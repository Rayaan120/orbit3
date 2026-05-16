import React, { useRef, useState, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Html, useTexture, Float, Billboard } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { Briefcase, Zap, Layout, Rocket, Users, X, ArrowRight, Loader, Globe } from 'lucide-react';


// ============================================================
// PLANET DATA — Edit service info & orbital params here
// ============================================================
const PLANETS = [
    {
        id: "corporate",
        name: "Earth",
        service: "Corporate Events",
        shortDesc: "Executing your vision with a meticulous eye for detail.",
        fullDesc: "For our corporate events, we know how important it is to not only have a technically flawless event but one that will wow your audience. Our team is specialized to create stress-free, sensational events through imaginative, immersive approaches that are great for your attendees’ experience and for building your community.\n\nMEETINGS | REWARDS & RECOGNITION | CONFERENCES | SUMMITS | NETWORKING EVENTS | GALAS | EMPLOYEE ENGAGEMENT | LEADERSHIP EVENTS | TALK SHOWS | FACILITY INAUGURATION | WORK ANNIVERSARY | OFFSITES | EMPLOYEE DAY | FITNESS PROGRAMS | INCENTIVE TRAVEL",
        icon: Briefcase,
        planetImg: "/planets/earth.png",
        textureUrl: "/textures/planets/earth.jpg",
        normalUrl: "/textures/planets/earth_normal.jpg",
        specularUrl: "/textures/planets/earth_specular.jpg",
        cloudsUrl: "/textures/planets/earth_clouds.png",
        hasClouds: true,
        hasRings: false,
        marsColor: false,
        accentColor: "#4FD1FF",
        radius: 4,
        size: 1.1,
        orbitSpeed: 0.18,
        selfRotation: 0.4,
        tilt: 0,
    },
    {
        id: "brand",
        name: "Mars",
        service: "Brand Experience",
        shortDesc: "Inspiring wonder, establishing connections, and making a transformative impact.",
        fullDesc: "Getting your brand into the consumer's hand has been proven to increase follow-up purchases. We work with our clients to activate their brands through innovative product demos and attention-grabbing sampling campaigns. We vet and match each brand activation with the right people by telling your story. We help build brands that inspire wonder, establish connections and make a transformative impact.\n\nMARKETING CAMPAIGNS | EXPERIENTIAL | ROADSHOWS | COLLATERALS",
        icon: Layout,
        planetImg: "/planets/mars.png",
        textureUrl: "/textures/planets/mars.jpg",
        normalUrl: null,
        specularUrl: null,
        cloudsUrl: null,
        hasClouds: false,
        hasRings: false,
        marsColor: true, // apply reddish tint via material color
        accentColor: "#E57A44",
        radius: 6,
        size: 0.8,
        orbitSpeed: 0.12,
        selfRotation: 0.5,
        tilt: 0,
    },
    {
        id: "sponsorship",
        name: "Jupiter",
        service: "Sponsorship Activation",
        shortDesc: "Making valuable connections that truly align with your audience.",
        fullDesc: "We take sponsorships and “activate” them by making valuable connections through the right kinds of marketing activities that truly align with your desired audience. We aren’t about generating impressions but about creating moments that inspire action and deliver on your brand promise. Our expertise spans the entire spectrum of sponsorship from scoping, evaluating, negotiations, management, optimizing, and activating.",
        icon: Zap,
        planetImg: "/planets/jupiter.png",
        textureUrl: "/textures/planets/jupiter.jpg",
        normalUrl: null,
        specularUrl: null,
        cloudsUrl: null,
        hasClouds: false,
        hasRings: false,
        marsColor: false,
        accentColor: "#D4A96A",
        radius: 9,
        size: 1.8,
        orbitSpeed: 0.07,
        selfRotation: 0.9,
        tilt: 0,
    },
    {
        id: "entertainment",
        name: "Saturn",
        service: "Entertainment",
        shortDesc: "Curating high-profile and quality entertainment across the Middle East.",
        fullDesc: "We take pride in curating high-profile and quality entertainment events across the Middle East. Our team provides consultancy for all your event entertainment needs including sourcing the artists and performers to managing the technical requirements and logistics. We are also passionate about conceptualizing IPs, Festivals, and experiences that are bound to delight you and your audience.",
        icon: Rocket,
        planetImg: "/planets/saturn.png",
        textureUrl: "/textures/planets/saturn.jpg",
        normalUrl: null,
        specularUrl: null,
        cloudsUrl: null,
        hasClouds: false,
        hasRings: true,
        marsColor: false,
        ringTextureUrl: "/textures/planets/saturn_ring.png",
        accentColor: "#C9A84C",
        radius: 12.5,
        size: 1.6,
        orbitSpeed: 0.05,
        selfRotation: 0.7,
        tilt: 0,
    },
    {
        id: "marketing",
        name: "Venus",
        service: "Marketing & Promotions",
        shortDesc: "Engaging directly with customers to make your brand the preferred choice.",
        fullDesc: "We help customize plans to demonstrate the key selling points of your product/service through experiential experiences that engage directly with your customer and make your brand the preferred choice.",
        icon: Users,
        planetImg: "/planets/venus.png",
        textureUrl: "/textures/planets/venus.jpg",
        normalUrl: null,
        specularUrl: null,
        cloudsUrl: null,
        hasClouds: false,
        hasRings: false,
        marsColor: false,
        accentColor: "#E8B866",
        radius: 16.5,
        size: 1.0,
        orbitSpeed: 0.035,
        selfRotation: 0.12,
        tilt: 0,
    }
];


// ============================================================
// CAMERA CONTROLLER
// ============================================================
function CameraController({ targetPosition, isZoomed }) {
    const { camera } = useThree();
    const defaultPos = new THREE.Vector3(0, 15, 35);

    useFrame((state, delta) => {
        if (isZoomed && targetPosition) {
            const dir = new THREE.Vector3().subVectors(targetPosition, new THREE.Vector3(0, 0, 0)).normalize();
            const offset = targetPosition.clone().add(dir.multiplyScalar(3.5)).add(new THREE.Vector3(0, 1.5, 0));
            camera.position.lerp(offset, 3 * delta);
            camera.lookAt(targetPosition);
        } else {
            const targetCamPos = defaultPos.clone().add(new THREE.Vector3(
                state.pointer.x * 2,
                state.pointer.y * 1.5,
                0
            ));
            camera.position.lerp(targetCamPos, 1.5 * delta);
            camera.lookAt(0, 0, 0);
        }
    });
    return null;
}

// ============================================================
// THE SUN
// ============================================================
function Sun() {
    const meshRef = useRef();
    const glowRef = useRef();
    const sunTexture = useTexture("/textures/planets/sun.jpg");

    useFrame((state, delta) => {
        if (meshRef.current) meshRef.current.rotation.y += 0.05 * delta;
        if (glowRef.current) {
            glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.03);
        }
    });

    return (
        <group>
            <mesh ref={meshRef}>
                <sphereGeometry args={[1.8, 64, 64]} />
                <meshBasicMaterial map={sunTexture} />
            </mesh>
            {/* Atmospheric glow layers */}
            <mesh ref={glowRef} scale={1.15}>
                <sphereGeometry args={[1.8, 32, 32]} />
                <meshBasicMaterial color="#FFA500" transparent opacity={0.12} blending={THREE.AdditiveBlending} depthWrite={false} />
            </mesh>
            <mesh scale={1.35}>
                <sphereGeometry args={[1.8, 32, 32]} />
                <meshBasicMaterial color="#FF6600" transparent opacity={0.05} blending={THREE.AdditiveBlending} depthWrite={false} />
            </mesh>
            {/* Core point light - sun as light source */}
            <pointLight color="#FFF5E0" intensity={8} distance={100} decay={1.5} />
        </group>
    );
}



// ============================================================
// SATURN RINGS
// ============================================================
function SaturnRings({ ringTextureUrl }) {
    const ringTexture = useTexture(ringTextureUrl);
    return (
        <mesh rotation={[Math.PI / 2.2, 0, 0.3]}>
            <ringGeometry args={[1.6, 2.8, 128]} />
            <meshBasicMaterial map={ringTexture} side={THREE.DoubleSide} transparent opacity={0.85} depthWrite={false} />
        </mesh>
    );
}

// ============================================================
// EARTH CLOUD LAYER (separate to avoid loading cloud tex for all planets)
// ============================================================
function CloudLayer({ size, shouldDim, selfRotation }) {
    const cloudTex = useTexture("/textures/planets/earth_clouds.png");
    const cloudsRef = useRef();
    useFrame((_, delta) => {
        if (cloudsRef.current) cloudsRef.current.rotation.y += (selfRotation + 0.08) * delta;
    });
    return (
        <mesh ref={cloudsRef} scale={1.015}>
            <sphereGeometry args={[size, 64, 64]} />
            <meshStandardMaterial 
                map={cloudTex} 
                transparent 
                opacity={shouldDim ? 0.02 : 0.35} 
                depthWrite={false} 
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
}


// ============================================================
// PLANET COMPONENT
// ============================================================
function Planet({ data, onSelect, isZoomed, selectedId }) {
    const orbitRef = useRef();
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);

    // We'll use useTexture directly in the Billboard to ensure the correct image is mapped


    // Build orbital path
    const orbitPoints = React.useMemo(() => {
        const pts = [];
        const segments = 256;
        for (let i = 0; i <= segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            pts.push(new THREE.Vector3(Math.cos(angle) * data.radius, 0, Math.sin(angle) * data.radius));
        }
        return pts;
    }, [data.radius]);

    const orbitGeo = React.useMemo(() => {
        const geo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
        return geo;
    }, [orbitPoints]);

    useFrame((state, delta) => {
        if (orbitRef.current) orbitRef.current.rotation.y += data.orbitSpeed * delta;
        // No need for mesh rotation if it's a billboard facing camera
    });


    const isSelected = selectedId === data.id;
    const shouldDim = isZoomed && !isSelected;

    return (
        <group rotation={[data.tilt, 0, 0]}>
            {/* Orbital path ring */}
            <line geometry={orbitGeo}>
                <lineBasicMaterial color={data.accentColor} transparent opacity={shouldDim ? 0.02 : 0.08} />
            </line>

            {/* Orbiting group */}
            <group ref={orbitRef}>
                <group position={[data.radius, 0, 0]}>
                    {/* Planet Sprite (Realistic Image) */}
                    <Billboard
                        follow={true}
                        lockX={false}
                        lockY={false}
                        lockZ={false}
                    >
                        <mesh
                            ref={meshRef}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!isZoomed) {
                                    const worldPos = new THREE.Vector3();
                                    meshRef.current.getWorldPosition(worldPos);
                                    onSelect(data.id, worldPos);
                                }
                            }}
                            onPointerOver={(e) => {
                                e.stopPropagation();
                                setHover(true);
                                document.body.style.cursor = 'pointer';
                            }}
                            onPointerOut={(e) => {
                                e.stopPropagation();
                                setHover(false);
                                document.body.style.cursor = 'auto';
                            }}
                            scale={hovered && !isZoomed ? 1.15 : 1}
                        >
                            <planeGeometry args={[data.size * 2.2, data.size * 2.2]} />
                            <meshBasicMaterial
                                map={useTexture(data.planetImg)}
                                transparent={true}
                                opacity={shouldDim ? 0.2 : 1}
                                depthWrite={false}
                            />
                        </mesh>
                    </Billboard>

                    {/* HTML Tooltip */}
                    {!isZoomed && hovered && (
                        <Html distanceFactor={20} center position={[0, data.size + 1.2, 0]}>
                            <div className="pointer-events-none bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 text-center min-w-[160px] shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                                style={{ borderColor: `${data.accentColor}40`, boxShadow: `0 0 20px ${data.accentColor}20` }}>
                                <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-1.5" style={{ color: data.accentColor }}>{data.name} System</p>
                                <p className="text-white font-display font-bold text-base whitespace-nowrap leading-none">{data.service}</p>

                                <div className="mt-2 w-full h-[1px] bg-white/10" />
                                <p className="text-white/40 text-[9px] mt-2 font-mono uppercase tracking-widest">Click to deploy</p>
                            </div>
                        </Html>
                    )}


                    {/* Earth Cloud Layer — only for Earth */}
                    {data.hasClouds && (
                        <Suspense fallback={null}>
                            <CloudLayer size={data.size} shouldDim={shouldDim} selfRotation={data.selfRotation} />
                        </Suspense>
                    )}

                    {/* Saturn Rings - Removed to use the rings built into the realistic image */}

                </group>
            </group>
        </group>
    );
}

// ============================================================
// LOADING OVERLAY
// ============================================================
function LoadingScreen() {
    return (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#060913]">
            <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full border border-cosmic-blue/30 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-t-2 border-cosmic-blue animate-spin" />
                </div>
                <div className="absolute inset-0 bg-cosmic-blue/10 rounded-full blur-xl animate-pulse" />
            </div>
            <span className="font-display font-black text-2xl text-white tracking-tighter mb-2">ORBIT</span>
            <span className="font-mono text-[10px] text-white/30 tracking-[0.4em] uppercase">Initializing Universe...</span>
        </div>
    );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function VirtualUniverseSection() {
    const [selectedServiceId, setSelectedServiceId] = useState(null);
    const [cameraTarget, setCameraTarget] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const isZoomed = selectedServiceId !== null;
    const selectedService = PLANETS.find(p => p.id === selectedServiceId);

    const handleSelectPlanet = (id, position) => {
        setSelectedServiceId(id);
        setCameraTarget(position);
    };

    const handleClose = () => {
        setSelectedServiceId(null);
        setCameraTarget(null);
    };

    return (
        <div className="relative w-full h-screen bg-[#060913] overflow-hidden">

            {/* Header UI */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-8 left-8 z-10 pointer-events-none"
            >
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-[1px] bg-cosmic-blue/70 shadow-[0_0_8px_#4FD1FF]" />
                    <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-cosmic-blue/80">Virtual Event Universe</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter leading-none">
                    Orbit <span className="italic font-light text-white/40">Galaxy</span>
                </h1>
                <p className="text-white/30 text-sm font-light mt-3 max-w-[260px] leading-relaxed hidden md:block">
                    Explore our universe of services, each designed to deliver powerful, high-impact experiences.
                </p>
            </motion.div>

            {/* Instructions */}
            <AnimatePresence>
                {!isZoomed && isLoaded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-center"
                    >
                        <p className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">
                            Hover to identify &bull; Click to deploy module
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Service Planet Legend */}
            <AnimatePresence>
                {!isZoomed && isLoaded && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute top-1/2 -translate-y-1/2 right-6 z-10 hidden lg:flex flex-col gap-3"
                    >
                        {PLANETS.map((p) => (
                            <div key={p.id} className="flex items-center gap-4 group cursor-pointer" onClick={() => handleSelectPlanet(p.id, null)}>
                                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-300">
                                    <img src={p.planetImg} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-mono text-[9px] tracking-widest uppercase text-white/30 group-hover:text-white/70 transition-colors">{p.name}</span>
                                    <span className="font-display text-[10px] text-white/60 group-hover:text-white transition-colors">{p.service}</span>
                                </div>
                            </div>
                        ))}

                    </motion.div>
                )}
            </AnimatePresence>

            {/* Service Detail Modal */}
            <AnimatePresence>
                {isZoomed && selectedService && (
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 80 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-y-0 right-0 w-full md:w-[460px] bg-black/85 backdrop-blur-3xl border-l border-white/10 z-30 flex flex-col overflow-y-auto custom-scrollbar"
                        style={{ borderColor: `${selectedService.accentColor}20` }}
                    >
                        {/* Close */}
                        <button
                            onClick={handleClose}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all border border-white/10 z-10"
                        >
                            <X size={18} />
                        </button>

                        <div className="flex flex-col h-full p-10 md:p-12 md:pt-24 pt-20 justify-start">
                            {/* Planet indicator */}
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: selectedService.accentColor, boxShadow: `0 0 15px ${selectedService.accentColor}` }} />
                                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30">{selectedService.name} — Orbit Locked</span>
                            </div>

                             {/* Planet Image & Service Label */}
                             <div className="flex items-center gap-6 mb-8">
                                 <div className="relative w-24 h-24 rounded-3xl overflow-hidden border-2 p-1" style={{ borderColor: `${selectedService.accentColor}30` }}>
                                     <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10 pointer-events-none" />
                                     <img 
                                        src={selectedService.planetImg} 
                                        alt={selectedService.name} 
                                        className="w-full h-full object-cover rounded-2xl"
                                     />
                                 </div>
                                 <div>
                                     <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase block mb-1">Module // {selectedService.id}</span>
                                     <span className="font-mono text-xs font-bold uppercase tracking-widest" style={{ color: selectedService.accentColor }}>System Active</span>
                                 </div>
                             </div>


                            {/* Title */}
                            <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter leading-[0.95] mb-4 pt-2">
                                {selectedService.service}
                            </h2>
                            <p className="text-lg font-display font-light italic mb-8" style={{ color: selectedService.accentColor }}>
                                {selectedService.shortDesc}
                            </p>

                            {/* Divider line */}
                            <div className="w-full h-[1px] bg-white/5 mb-8 relative overflow-hidden">
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '100%' }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                    className="absolute inset-y-0 w-1/3"
                                    style={{ background: `linear-gradient(to right, transparent, ${selectedService.accentColor}, transparent)` }}
                                />
                            </div>

                            <p className="text-white/50 leading-relaxed font-light text-base mb-12">
                                {selectedService.fullDesc}
                            </p>

                            {/* Status bars */}
                            <div className="space-y-4 mb-12">
                                {["Strategic Planning", "Creative Execution", "Impact Delivery"].map((label, i) => (
                                    <div key={label}>
                                        <div className="flex justify-between mb-1.5">
                                            <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">{label}</span>
                                            <span className="font-mono text-[10px]" style={{ color: selectedService.accentColor }}>{[98, 95, 100][i]}%</span>
                                        </div>
                                        <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${[98, 95, 100][i]}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 + i * 0.15 }}
                                                className="h-full rounded-full"
                                                style={{ backgroundColor: selectedService.accentColor, boxShadow: `0 0 8px ${selectedService.accentColor}` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-black group transition-all duration-300 hover:scale-[1.02] shadow-xl"
                                style={{ backgroundColor: selectedService.accentColor, boxShadow: `0 0 30px ${selectedService.accentColor}40` }}>
                                Deploy Protocol
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 3D Canvas */}
            <Canvas
                camera={{ position: [0, 15, 35], fov: 52 }}
                gl={{ antialias: true, alpha: false }}
                onCreated={() => setTimeout(() => setIsLoaded(true), 1200)}
            >
                <color attach="background" args={['#060913']} />
                <fog attach="fog" args={['#060913', 25, 80]} />

                {/* Starfield */}
                <Stars radius={100} depth={60} count={6000} factor={4} saturation={0} fade speed={0.5} />

                {/* Ambient fill so dark side isn't fully black */}
                <ambientLight intensity={0.08} />

                <Suspense fallback={null}>
                    <group rotation={[0.2, 0, 0]}>
                        <Sun />
                        {PLANETS.map((data) => (
                            <Planet
                                key={data.id}
                                data={data}
                                onSelect={handleSelectPlanet}
                                isZoomed={isZoomed}
                                selectedId={selectedServiceId}
                            />
                        ))}
                    </group>
                </Suspense>

                <CameraController targetPosition={cameraTarget} isZoomed={isZoomed} />
            </Canvas>

            {/* Loading screen (fades out once scene is ready) */}
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 z-50"
                    >
                        <LoadingScreen />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

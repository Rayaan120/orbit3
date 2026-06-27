import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Earth from './Earth';

export default function EarthCanvas() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const earthPosition = isMobile ? [0, 0, -2] : [-2.8, -0.5, -1];
    const earthScale = isMobile ? [0.95, 0.95, 0.95] : [1.3, 1.3, 1.3];

    return (
        <div className="w-full h-full absolute inset-0 z-0 pointer-events-none md:pointer-events-auto">
            <Canvas
                camera={{ position: [0, 0, 7.5], fov: 45 }}
                gl={{ preserveDrawingBuffer: true, antialias: true }}
                style={{ touchAction: 'auto', pointerEvents: isMobile ? 'none' : 'auto' }}
                className="w-full h-full"
            >
                <Suspense fallback={null}>
                    {/* Lighting */}
                    <ambientLight intensity={0.02} />
                    <directionalLight position={[-8, 3, 5]} intensity={1.5} color="#ffffff" />
                    
                    {/* Intense point light for the very bright sun flare effect on the left horizon */}
                    <pointLight position={[-4, 2, -1]} intensity={500} distance={20} color="#00aaff" />
                    
                    {/* The Stars Background */}
                    <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade speed={1} />
                    
                    {/* The Earth shifted left and scaled up */}
                    <group position={earthPosition} scale={earthScale}>
                        <Earth />
                    </group>
                    
                    {/* Controls (allow user to rotate Earth on desktop only) */}
                    {!isMobile && (
                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            target={earthPosition}
                            maxPolarAngle={Math.PI / 2 + 0.15}
                            minPolarAngle={Math.PI / 2 - 0.15}
                        />
                    )}
                </Suspense>
            </Canvas>
        </div>
    );
}

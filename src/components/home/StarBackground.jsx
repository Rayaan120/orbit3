import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function MovingStars() {
    const starsRef = useRef();
    
    // Smoothly rotate the entire starfield for a constant sense of motion
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        if (starsRef.current) {
            starsRef.current.rotation.y = elapsedTime * 0.015;
            starsRef.current.rotation.x = elapsedTime * 0.01;
        }
    });

    return (
        <group ref={starsRef}>
            <Stars 
                radius={100} 
                depth={60} 
                count={6000} 
                factor={4} 
                saturation={0} 
                fade 
                speed={1.5} /* Keep Drei's internal twinkle speed too */
            />
        </group>
    );
}

export default function StarBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
            <Canvas camera={{ position: [0, 0, 1] }} gl={{ antialias: false }}>
                <Suspense fallback={null}>
                    <MovingStars />
                </Suspense>
            </Canvas>
            {/* Dark gradient for section transition */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep-space to-transparent pointer-events-none" />
        </div>
    );
}

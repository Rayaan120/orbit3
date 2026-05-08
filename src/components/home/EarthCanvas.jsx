import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Earth from './Earth';

export default function EarthCanvas() {
    return (
        <Canvas
            camera={{ position: [0, 0, 7.5], fov: 45 }}
            gl={{ preserveDrawingBuffer: true, antialias: true }}
            className="w-full h-full absolute inset-0 z-0 pointer-events-auto"
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
                <group position={[-2.8, -0.5, -1]} scale={[1.3, 1.3, 1.3]}>
                    <Earth />
                </group>
                
                {/* Controls (allow user to rotate Earth) */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    target={[-2.8, -0.5, -1]}
                    maxPolarAngle={Math.PI / 2 + 0.15}
                    minPolarAngle={Math.PI / 2 - 0.15}
                />
            </Suspense>
        </Canvas>
    );
}

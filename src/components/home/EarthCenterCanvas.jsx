import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import Earth from './Earth';

export default function EarthCenterCanvas() {
    return (
        <Canvas
            camera={{ position: [0, 0, 10], fov: 40 }}
            gl={{ antialias: true, alpha: true }}
            onCreated={({ gl }) => {
                gl.setClearColor(0x000000, 0);
            }}
            className="absolute inset-0 z-20 pointer-events-auto bg-transparent rounded-full overflow-hidden"
        >
            <Suspense fallback={null}>
                {/* Lighting for the centered Earth */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ffffff" />
                <pointLight position={[-5, 2, 2]} intensity={200} distance={50} color="#00aaff" />
                
                <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
                    <group scale={[1.6, 1.6, 1.6]}>
                        <Earth />
                    </group>
                </Float>
                
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false} 
                    autoRotate 
                    autoRotateSpeed={0.8} 
                />
            </Suspense>
        </Canvas>
    );
}

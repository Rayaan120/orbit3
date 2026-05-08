import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import Sun from './Sun';

export default function SunCanvas() {
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
                {/* Lighting to make the sun look integrated */}
                <ambientLight intensity={0.6} />
                <pointLight position={[0, 0, 0]} intensity={150} distance={50} color="#ffcc33" />
                
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Sun />
                </Float>
                
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false} 
                    autoRotate 
                    autoRotateSpeed={0.5} 
                />
            </Suspense>
        </Canvas>
    );
}

import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';
import sunTextureMap from '../../assets/sun-texture.png';

export default function Sun() {
    const sunRef = useRef();
    const atmosphereRef = useRef();
    const glowRef = useRef();

    const [sunTexture] = useLoader(TextureLoader, [sunTextureMap]);

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        if (sunRef.current) {
            // Slower rotation for massive feeling
            sunRef.current.rotation.y = elapsedTime / 25;
            // Extremely subtle organic breathing
            const breathe = 1 + Math.sin(elapsedTime * 0.4) * 0.01;
            sunRef.current.scale.setScalar(breathe);
        }
        if (atmosphereRef.current) {
            atmosphereRef.current.rotation.z = -elapsedTime / 20;
        }
        if (glowRef.current) {
            // Pulsing the outer corona
            const pulse = 1.35 + Math.sin(elapsedTime * 0.6) * 0.04;
            glowRef.current.scale.setScalar(pulse);
        }
    });

    return (
        <group>
            {/* Core Solar Body - Uses high-res texture and emissive map */}
            <mesh ref={sunRef}>
                <sphereGeometry args={[2.5, 128, 128]} />
                <meshStandardMaterial
                    map={sunTexture}
                    emissiveMap={sunTexture}
                    emissive="#ff7700"
                    emissiveIntensity={5} // Blinding heat
                    color="#ffcc66"
                    roughness={0.5}
                    metalness={0.2}
                />
            </mesh>

            {/* Chromosphere Layer - Adds depth to the surface */}
            <mesh ref={atmosphereRef}>
                <sphereGeometry args={[2.53, 64, 64]} />
                <meshBasicMaterial
                    color="#ff9900"
                    transparent
                    opacity={0.35}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Inner Photospheric Glow */}
            <mesh>
                <sphereGeometry args={[2.56, 64, 64]} />
                <meshBasicMaterial
                    color="#ffcc00"
                    transparent
                    opacity={0.25}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Dynamic Solar Core Light */}
            <pointLight intensity={300} distance={60} color="#ffcc33" shadow-mapSize={1024} />
        </group>
    );
}

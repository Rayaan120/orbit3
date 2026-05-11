import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';

import earthColorMap from '../../assets/earth-night.jpg';
import earthBumpMap from '../../assets/earth-topology.png';
import earthWaterMap from '../../assets/earth-water.png';
import earthCloudsMap from '../../assets/earth-clouds.png';

export default function Earth() {
    const earthRef = useRef();
    const cloudsRef = useRef();

    const [colorMap, bumpMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
        earthColorMap,
        earthBumpMap,
        earthWaterMap,
        earthCloudsMap
    ]);

    // Continual rotation
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        if (earthRef.current) {
            earthRef.current.rotation.y = elapsedTime / 10;
        }
        if (cloudsRef.current) {
            cloudsRef.current.rotation.y = elapsedTime / 12; // Clouds rotate slightly slower
        }
    });

    return (
        <group>
            <mesh ref={earthRef} position={[0, 0, 0]}>
                {/* Radius, segments width, segments height */}
                <sphereGeometry args={[2.5, 64, 64]} />
                <meshPhongMaterial
                    map={colorMap}
                    bumpMap={bumpMap}
                    bumpScale={0.02}
                    specularMap={specularMap}
                    specular={new THREE.Color('#2266cc')}
                    shininess={30}
                    emissive={new THREE.Color('#ffcc44')} /* Golden city lights */
                    emissiveMap={colorMap}
                    emissiveIntensity={1.8}
                />
            </mesh>
            <mesh ref={cloudsRef} position={[0, 0, 0]}>
                <sphereGeometry args={[2.515, 64, 64]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    transparent={true}
                    opacity={0.3}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
        </group>
    );
}

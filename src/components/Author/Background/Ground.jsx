import React from 'react';

import { TextureLoader } from 'three';

import { MeshReflectorMaterial } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';

export function Ground() {
  // thanks to https://polyhaven.com/a/rough_plasterbrick_05 !
  const [roughness, normal] = useLoader(TextureLoader, [
    process.env.PUBLIC_URL + "assets/textures/terrain-roughness.jpg",
    process.env.PUBLIC_URL + "assets/textures/terrain-normal.jpg",
  ]);

  // useEffect(() => {
  //   [normal, roughness].forEach((t) => {
  //     t.wrapS = RepeatWrapping;
  //     t.wrapT = RepeatWrapping;
  //     t.repeat.set(5, 5);
  //     t.offset.set(0, 0);
  //   });

  //   normal.encoding = LinearEncoding;
  // }, [normal, roughness]);

  // useFrame((state, delta) => {
  //   let t = -state.clock.getElapsedTime() * 0.128;
  //   roughness.offset.set(0, t % 1);
  //   normal.offset.set(0, t % 1);
  // });

  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[15, 15]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalMap={normal}
        normalScale={[0.15, 0.15]}
        roughnessMap={roughness}
        dithering={true}
        color={[0.015, 0.015, 0.015]}
        roughness={0.6}
        blur={[1000, 1000]} 
        mixBlur={10} 
        mixStrength={50} 
        mixContrast={1} 
        resolution={1024} 
        mirror={0.5} 
        depthScale={0.01} 
        minDepthThreshold={0.9} 
        maxDepthThreshold={1} 
        debug={0}
        reflectorOffset={0.2} 
      />
    </mesh>
  );
}

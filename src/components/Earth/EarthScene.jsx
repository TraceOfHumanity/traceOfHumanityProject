import React from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import styles from "./earth.module.scss";
import { useFrame, useLoader } from "@react-three/fiber";

import EarthDayMap from "./textures/8k_earth_daymap.jpg";
import EarthNormalMap from "./textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "./textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "./textures/8k_earth_clouds.jpg";
import MoonMap from "./textures/moon.jpg";
import { TextureLoader } from "three";

export const EarthScene = (props) => {
  const [dayMap, normalMap, specularMap, cloudsMap, moonMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap, MoonMap]
  );

  const earthRef = React.useRef();
  const cloudsRef = React.useRef();
  const sunRef = React.useRef();
  const moonRef = React.useRef();
  const starsRef = React.useRef();
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 60 + 4.7;
    cloudsRef.current.rotation.y = elapsedTime / 70;

    sunRef.current.position.x = Math.cos(elapsedTime / 50) * 20;
    sunRef.current.position.z = Math.sin(elapsedTime / 50) * 20;
    sunRef.current.position.y = Math.sin(elapsedTime / -50) * 10;

    moonRef.current.position.x = Math.cos(elapsedTime / 50) * 3;
    moonRef.current.position.z = Math.sin(elapsedTime / 50) * 1;

    moonRef.current.rotation.y = elapsedTime / 50;

    starsRef.current.rotation.y = elapsedTime / 150;
  });

  function Intro() {
    const [vec] = React.useState(() => new THREE.Vector3());
    return useFrame((state) => {
      state.camera.position.lerp(
        vec.set(state.mouse.x * 0.2, state.mouse.y * 0.1, 4),
        0.05
      );
      state.camera.lookAt(0, 0, 0);
    });
  }

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      {/* <pointLight position={[-2, 1, 2.7]} intensity={20} /> */}
      <Stars
        radius={300}
        depth={60}
        count={10000}
        factor={3}
        saturation={0}
        fade={true}
        ref={starsRef}
      />
      <mesh ref={cloudsRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.006, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          transparent={true}
          depthWrite={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 0]} rotation={[0, 0, -0.2]}>
        <sphereGeometry args={[1, 100, 100]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={dayMap}
          normalMap={normalMap}
          metalness={0.1}
          roughness={1}
        />
        {/* <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={7}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> */}
      </mesh>
      <mesh position={[3, 0, 1]} rotation={[0, 0, 0]} ref={moonRef}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshPhongMaterial map={moonMap} />
        <pointLight intensity={0.01} />
      </mesh>
      <mesh position={[10, 0, -10]} ref={sunRef} rotation={[0, 0, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshPhongMaterial emissive="yellow" />
        <pointLight intensity={2000} />
      </mesh>
      <Intro />
    </>
  );
};

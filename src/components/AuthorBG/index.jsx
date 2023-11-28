import { Canvas, useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import * as THREE from "three";
import { Avatar } from "./Avatar";
import styles from "./authorBG.module.scss";
import { OfficeChair } from "./OfficeChair";
import {
  CameraControls,
  CameraShake,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Desk } from "./Desk";
import { Monitor } from "./Monitor";
import { Keyboard } from "./Keyboard";
import { Ground } from "./Ground";

export const AuthorBG = () => {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/assets/code.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });
  const [video2] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/assets/spaceShuttle.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  // useFrame(({ clock }) => {
  //   const elapsedTime = clock.getElapsedTime();

  //   // cameraRef.current.position.x = Math.cos(clock.getElapsedTime() / 30) * 2;
  //   // cameraRef.current.position.z = Math.sin(clock.getElapsedTime() / 30) * 2;
  //   // cameraRef.current.position.y = Math.sin(clock.getElapsedTime() / -30) * 2;
  // });
  return (
    <div className={styles.authorBG}>
      <Canvas>
        <CameraControls
          autoRotate
          // enableZoom={false}
          // enablePan={false}
          // enableDamping
          dampingFactor={0.5}
          rotateSpeed={0.5}
          minPolarAngle={1.1}
          maxPolarAngle={0}
          minDistance={4}
          maxDistance={6}
          target={[0, 2, 0]}
          position={[0, 2, 0]}
        />
        {/* <mesh ref={cameraRef} position={[0, 0, 0]}> */}
        <PerspectiveCamera makeDefault position={[-3, 2, 3]} fov={50} />
        {/* </mesh> */}
        <mesh
          rotation={[0, 0, 0]}
          position={[0.73, 1.17, -0.9]}
          scale={[0.37, 0.34, 0.5]}
        >
          <planeGeometry args={[3.2, 1.9]} />
          <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
            <videoTexture attach="map" args={[video]} />
            <videoTexture attach="emissiveMap" args={[video]} />
          </meshStandardMaterial>
        </mesh>
        <mesh
          rotation={[0, 0, 0]}
          position={[-0.52, 1.17, -0.9]}
          scale={[0.4, 0.35, 0.3]}
        >
          <planeGeometry args={[3.2, 1.9]} />
          <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
            <videoTexture attach="map" args={[video2]} />
            <videoTexture attach="emissiveMap" args={[video2]} />
          </meshStandardMaterial>
        </mesh>
        <OrbitControls />
        <pointLight position={[-1, 2, 1]} intensity={3} />
        {/* <spotLight
          color="#FE0101"
          intensity={50}
          angle={1}
          penumbra={0.5}
          position={[4, 3, 1]}
          castShadow
          shadow-bias={-0.0001}
        />
        <spotLight
          color="#038CAF"
          intensity={50}
          angle={0.6}
          penumbra={0.5}
          position={[-5, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        /> */}
        <pointLight
          color="#038CAF"
          intensity={70}
          position={[0, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />
        <pointLight
          color="#FE0101"
          intensity={50}
          position={[5, 3, 4]}
          castShadow
          shadow-bias={-0.0001}
        />

        {/* <ambientLight intensity={5} /> */}
        <Avatar />
        <OfficeChair />
        <Desk />
        <Monitor />
        <Keyboard />
        <Ground />
        <mesh
          rotation={[-0.8, 0, 0]}
          position={[0, 0, 0]}
          scale={[0.6, 0.6, 0.6]}
        >
          <torusGeometry args={[3.35, 0.05, 16, 100]} />
          <meshStandardMaterial emissive={[2, 2, 2]} color={[0, 0, 0]} />
        </mesh>
        <mesh
          rotation={[-1, 0, 0]}
          position={[0, 0, 0]}
          scale={[0.6, 0.55, 0.55]}
        >
          <torusGeometry args={[3.35, 0.05, 16, 100]} />
          <meshStandardMaterial emissive={[2, 2, 2]} color={[0, 0, 0]} />
        </mesh>
        <mesh
          rotation={[-1.2, 0, 0]}
          position={[0, 0, 0]}
          scale={[0.6, 0.5, 0.5]}
        >
          <torusGeometry args={[3.35, 0.05, 16, 100]} />
          <meshStandardMaterial emissive={[2, 2, 2]} color={[0, 0, 0]} />
        </mesh>
      </Canvas>
    </div>
  );
};

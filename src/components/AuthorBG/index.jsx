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
import { Camera } from "./Camera";

// const creettingText = "Hello everyone! My name is Alexander, and I sincerely want to make our world a better place. This task requires a lot of effort, but I am sure that modern technology gives us incredible opportunities that our ancestors could not even imagine. Therefore, we must use these opportunities to become more productive and solve the complex issues before us.
// Programming and technology are becoming an integral part of life for an increasing number of people. This allows us to automate many areas of our daily activities, which used to take a lot of time and effort.Programming and technology are becoming an integral part of life for an increasing number of people. This allows us to automate many areas of our daily activities, which used to take a lot of time and effort.Neural networks, data analytics and process automation give us the opportunity to find effective solutions and implement them.
// Thanks to programming, I can confidently say that there are no problems that cannot be solved, everything can be solved. The only question is how long it will take.
// Learning to program is becoming more and more accessible, thanks to open access to educational resources, online courses and programming communities. This means that anyone who has the desire can learn to code and make their own contribution to creating a better future.I believe that cooperation will help us solve even the most difficult problems. Together we can make this world a better place for all of us and future generations.
// "

export const AuthorBG = () => {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/assets/code2.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });
  const [video2] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/assets/code.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <div className={styles.authorBG}>
      <Canvas>
        {/* <CameraControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.5}
          rotateSpeed={0.5}
          minPolarAngle={1.1}
          maxPolarAngle={0}
          minDistance={4}
          maxDistance={6}
          target={[0, 2, 0]}
          position={[0, 2, 0]}
        /> */}
        {/* <mesh ref={cameraRef} position={[0, 0, 0]}> */}
        <Camera />
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
        {/* <OrbitControls /> */}
        <pointLight position={[-1, 2, 1]} intensity={3} />
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

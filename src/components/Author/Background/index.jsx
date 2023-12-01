import React, { useState } from "react";

import * as THREE from "three";

import { Canvas } from "@react-three/fiber";

import styles from "./authorBG.module.scss";
import { Avatar } from "./Avatar";
import { Camera } from "./Camera";
import { Desk } from "./Desk";
import { Ground } from "./Ground";
import { Keyboard } from "./Keyboard";
import { Monitor } from "./Monitor";
import { OfficeChair } from "./OfficeChair";

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
      <Canvas
      // camera={{ fov: 75, position: [0, 0, 0] }}
      >
        <Camera />
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
        {/* <pointLight position={[-1, 2, 1]} intensity={3} /> */}
        <pointLight
          color="#038CAF"
          intensity={90}
          position={[0, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />
        <pointLight
          color="#FE0101"
          intensity={70}
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
          rotation={[-0.7, 0, 0]}
          position={[0, 0, 0]}
          scale={[0.6, 0.6, 0.6]}
        >
          <torusGeometry args={[3.35, 0.05, 16, 100]} />
          <meshStandardMaterial emissive={[2, 2, 2]} color={[0, 0, 0]} />
        </mesh>
        <mesh
          rotation={[-0.9, 0, 0]}
          position={[0, 0, 0]}
          scale={[0.6, 0.55, 0.55]}
        >
          <torusGeometry args={[3.35, 0.05, 16, 100]} />
          <meshStandardMaterial emissive={[2, 2, 2]} color={[0, 0, 0]} />
        </mesh>
        <mesh
          rotation={[-1.1, 0, 0]}
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

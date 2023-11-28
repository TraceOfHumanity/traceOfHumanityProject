import { Canvas } from "@react-three/fiber";
import React from "react";
import { Avatar } from "./Avatar";
import styles from "./authorBG.module.scss";
import { OfficeChair } from "./OfficeChair";
import { OrbitControls } from "@react-three/drei";
import { Desk } from "./Desk";
import { Monitor } from "./Monitor";
import { Keyboard } from "./Keyboard";
import { Ground } from "./Ground";

export const AuthorBG = () => {
  return (
    <div className={styles.authorBG}>
      <Canvas>
        <OrbitControls />
        <pointLight position={[0, 2, 0]} intensity={0.5} />
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
      </Canvas>
    </div>
  );
};

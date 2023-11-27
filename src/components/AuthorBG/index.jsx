import { Canvas } from "@react-three/fiber";
import React from "react";
import { Avatar } from "./Avatar";
import styles from "./authorBG.module.scss";
import { OfficeChair } from "./OfficeChair";
import { OrbitControls } from "@react-three/drei";
import { Desk } from "./Desk";

export const AuthorBG = () => {
  return (
    <div className={styles.authorBG}>
      <Canvas>
        <OrbitControls />
        <pointLight position={[2, 2, 2]} intensity={50} />
        {/* <ambientLight intensity={5} /> */}
        <Avatar />
        <OfficeChair />
        <Desk />
      </Canvas>
    </div>
  );
};

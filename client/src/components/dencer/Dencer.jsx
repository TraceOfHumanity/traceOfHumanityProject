import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Experience from "./Experience";
import styles from "./Dencer.module.scss";
import { Preload } from "@react-three/drei";

const Dencer = () => {
  return (
    <div className={styles.dencer}>
      <Canvas shadows>
        <Suspense fallback={null}>
          <Experience />
          <Preload />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Dencer;

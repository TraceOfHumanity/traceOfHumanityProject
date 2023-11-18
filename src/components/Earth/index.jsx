import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { EarthScene } from "./EarthScene";
import styles from "./earth.module.scss";

export const Earth = () => {
  return (
    <div className={styles.earthScene}>
      <Canvas>
        <Suspense fallback={null}>
          <EarthScene />
        </Suspense>
      </Canvas>
    </div>
  );
};

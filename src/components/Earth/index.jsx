import React, { Suspense, useState } from "react";

import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import styles from "./earth.module.scss";
import { EarthScene } from "./EarthScene";

export const Earth = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.earthScene}>
      <Canvas>
        <Suspense fallback={null}>
          <Suspense fallback={null}>
            <EarthScene />
          </Suspense>
        </Suspense>
      </Canvas>
      {/* <div className={styles.plyer}>
        <audio src="/sounds/Ava.mp3" loop autoPlay controls></audio>
      </div> */}
      <Loader />
    </div>
  );
};

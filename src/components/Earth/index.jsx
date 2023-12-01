import React, { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";

import styles from "./earth.module.scss";
import { EarthScene } from "./EarthScene";

export const Earth = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.earthScene}>
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas>
          <Suspense fallback={null}>
            <EarthScene />
          </Suspense>
        </Canvas>
        {/* <div className={styles.plyer}>
        <audio src="/sounds/Ava.mp3" loop autoPlay controls></audio>
      </div> */}
      </Suspense>
    </div>
  );
};

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { EarthScene } from "./EarthScene";
import styles from "./earth.module.scss";

export const Earth = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.earthScene}>
      <Canvas>
        <Suspense fallback={null}>
          <EarthScene />
        </Suspense>
      </Canvas>
      {/* <div className={styles.plyer}>
        <audio src="/sounds/Ava.mp3" loop autoPlay controls></audio>
      </div> */}
    </div>
  );
};

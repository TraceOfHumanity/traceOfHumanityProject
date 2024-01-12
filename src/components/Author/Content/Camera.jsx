import React, { useRef } from "react";

import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Camera = () => {
  const cameraRef = useRef();

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    const radius = 30;

    const x = Math.sin(elapsedTime / -10) * radius;
    const z = Math.cos(elapsedTime / -10) * radius;
    // const y = Math.sin(elapsedTime / 10) * radius - 1;

    cameraRef.current.position.set(x, 0, z);
    cameraRef.current.lookAt(0, 0, 0);
  });
  return <PerspectiveCamera makeDefault fov={100} ref={cameraRef} />;
};

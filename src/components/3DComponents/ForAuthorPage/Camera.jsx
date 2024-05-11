import React, { useRef } from "react";

import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Camera = () => {
  const cameraRef = useRef();

  useFrame((state, delta) => {
    const elapsedTime = state.clock.getElapsedTime();
    const radius = 5;

    // const x = Math.sin(elapsedTime / -5) * radius;
    const z = Math.cos(elapsedTime / 10) * radius / 3;

    cameraRef.current.position.set(5, 1.5, z);
    cameraRef.current.lookAt(0, 0, 0);
  });
  return <PerspectiveCamera makeDefault fov={50} ref={cameraRef} />;
};

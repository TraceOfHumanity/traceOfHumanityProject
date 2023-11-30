import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export const Camera = () => {
  const cameraRef = useRef();

  useFrame((state, delta) => {
    const elapsedTime = state.clock.getElapsedTime();
    const radius = 5; // Adjust the radius of the camera's orbit

    // Calculate the new position of the camera
    const x = Math.sin(elapsedTime / -10) * radius;
    const z = Math.cos(elapsedTime / -10) * radius;

    // Set the position and lookAt of the camera
    cameraRef.current.position.set(x, 2, z);
    cameraRef.current.lookAt(0, 0, 0);
  });
  return (
    <PerspectiveCamera
      makeDefault
      // position={[-3, 2, 3]}
      fov={50}
      ref={cameraRef}
    />
  );
};

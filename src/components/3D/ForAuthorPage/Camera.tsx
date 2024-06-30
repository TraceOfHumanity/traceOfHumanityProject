import {PerspectiveCamera} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import React, {useRef} from "react";

export const Camera = () => {
  const cameraRef = useRef<any>();

  useFrame((state, delta) => {
    cameraRef.current.position.set(3, 3, 4);
    cameraRef.current.lookAt(-0.5, 0.5, 0);
  });
  return <PerspectiveCamera makeDefault fov={50} ref={cameraRef} />;
};

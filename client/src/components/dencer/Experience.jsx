import React from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Ground } from "./Ground";
import Avatar from "./Avatar";

const Experience = () => {
  return (
    <>
      <ScrollControls pages={5} damping={0.1}>
        {/* <OrbitControls maxPolarAngle={Math.PI / 2.1} minPolarAngle={-10} /> */}
        <color args={[0, 0, 0]} attach="background" />
        {/* <ambientLight /> */}
        {/* <directionalLight
        position={[-10, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      /> */}
        <spotLight
          color={[0.14, 0.5, 1]}
          intensity={3}
          angle={0.6}
          penumbra={0.5}
          position={[0, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />
        <spotLight
          color={[1, 0.25, 0.7]}
          intensity={3}
          angle={0.6}
          penumbra={0.5}
          position={[5, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />

        <group position={[0, -1, 0]}>
          <Avatar />
          <Ground />
        </group>
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeBufferGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </ScrollControls>
    </>
  );
};

export default Experience;

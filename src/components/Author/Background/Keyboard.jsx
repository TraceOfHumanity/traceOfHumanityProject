/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 Keyboard.gltf 
*/

import React from "react";

import { useGLTF } from "@react-three/drei";

export function Keyboard(props) {
  const { nodes, materials } = useGLTF("/models/Keyboard.gltf");
  return (
    <group
      {...props}
      dispose={null}
      scale={[0.35, 0.35, 0.35]}
      position={[0, 0.64, -0.65]}
      rotation={[0, Math.PI, 0]}
    >
      <group position={[0, 0.248, 0]} scale={[0.952, 0.035, 0.392]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials.Key} />
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={nodes.Cube003_1.material}
        />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials.Laser} />
        <mesh
          geometry={nodes.Cube003_3.geometry}
          material={materials.LobangCas}
        />
        <mesh geometry={nodes.Cube003_4.geometry} material={materials.Hjau} />
        <mesh
          geometry={nodes.Cube003_5.geometry}
          material={materials.TextKey}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Keyboard.gltf");

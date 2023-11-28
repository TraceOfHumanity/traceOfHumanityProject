/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 Monitor.gltf 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Monitor(props) {
  const { nodes, materials } = useGLTF("/models/Monitor.gltf");
  return (
    <group
      {...props}
      dispose={null}
      position={[-0.1, 0.7, -0.9]}
      scale={[1.5, 1, 1]}
    >
      <mesh
        geometry={nodes.circle.geometry}
        material={materials.Mat}
        position={[0.12, -0.028, 0.015]}
        rotation={[1.55, 0, -3.141]}
        scale={0.018}
      />
      <group
        position={[0.116, 0.475, -0.027]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={[0.027, 0.018, 0.018]}
      >
        <mesh geometry={nodes.Mesh026.geometry} material={materials.Mat} />
        <mesh
          geometry={nodes.Mesh026_1.geometry}
          material={materials["Mat.1"]}
        />
        <mesh
          geometry={nodes.Mesh026_2.geometry}
          material={materials["Mat.2"]}
        />
      </group>
      <mesh
        geometry={nodes.stick.geometry}
        material={materials.Mat}
        position={[0.118, 0.118, -0.132]}
        rotation={[0.24, 0, -3.142]}
        scale={0.018}
      />
      <mesh
        geometry={nodes.base.geometry}
        material={materials.Mat}
        position={[0.12, -0.032, 0.013]}
        rotation={[1.55, 0, -3.141]}
        scale={0.018}
      />
    </group>
  );
}

useGLTF.preload("/models/Monitor.gltf");

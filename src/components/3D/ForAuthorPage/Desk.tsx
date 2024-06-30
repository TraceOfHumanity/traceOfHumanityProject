import {useGLTF} from "@react-three/drei";
import React from "react";

import * as THREE from "three";

export function Desk(props: any) {
  const {nodes, materials} = useGLTF("/models/Desk.gltf");
  return (
    <group
      {...props}
      dispose={null}
      scale={[1.5, 1.5, 1.5]}
      position={[0, 0, -0.65]}
    >
      <mesh
        geometry={(nodes.Cube001_Cube002 as THREE.Mesh).geometry}
        material={materials.Desk}
        position={[0, 0.15, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={(nodes.Cube002_Cube003 as THREE.Mesh).geometry}
        material={materials.Desk}
        position={[0, 0.15, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={(nodes.Cube_Cube001 as THREE.Mesh).geometry}
        material={materials.Desk}
        position={[0, 0.15, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/Desk.gltf");

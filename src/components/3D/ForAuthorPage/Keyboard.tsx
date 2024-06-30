import {useGLTF} from "@react-three/drei";
import React from "react";

import * as THREE from "three";

export function Keyboard(props: any) {
  const {nodes, materials} = useGLTF("/models/Keyboard.gltf");
  return (
    <group
      {...props}
      dispose={null}
      scale={[0.35, 0.35, 0.35]}
      position={[0, 0.64, -0.55]}
      rotation={[0, Math.PI, 0]}
    >
      <group position={[0, 0.248, 0]} scale={[0.952, 0.035, 0.392]}>
        <mesh
          geometry={(nodes.Cube003 as THREE.Mesh).geometry}
          material={materials.Key}
        />
        <mesh
          geometry={(nodes.Cube003_1 as THREE.Mesh).geometry}
          material={materials.Key}
        />
        <mesh
          geometry={(nodes.Cube003_2 as THREE.Mesh).geometry}
          material={materials.Laser}
        />
        <mesh
          geometry={(nodes.Cube003_3 as THREE.Mesh).geometry}
          material={materials.LobangCas}
        />
        <mesh
          geometry={(nodes.Cube003_4 as THREE.Mesh).geometry}
          material={materials.Hjau}
        />
        <mesh
          geometry={(nodes.Cube003_5 as THREE.Mesh).geometry}
          material={materials.TextKey}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Keyboard.gltf");

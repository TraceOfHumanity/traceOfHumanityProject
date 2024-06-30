import {useGLTF} from "@react-three/drei";
import React from "react";
import * as THREE from "three";
export function OfficeChair(props: any) {
  const {nodes, materials} = useGLTF("/models/officeChair.gltf");
  return (
    <group
      {...props}
      dispose={null}
      scale={[0.3, 0.3, 0.3]}
      rotation={[0, Math.PI * 1.5, 0]}
      position={[0, 0, -0.1]}
    >
      <mesh
        geometry={(nodes.Chair as THREE.Mesh).geometry}
        material={materials.Chair}
        position={[0, 1.243, 0]}
        scale={[0.75, 0.152, 0.75]}
      >
        <mesh
          geometry={(nodes.BezierCurve001 as THREE.Mesh).geometry}
          material={materials.Metal}
          position={[0, -1.453, -0.231]}
          rotation={[0, 1.544, 0]}
          scale={[0.85, 4.204, 0.85]}
        />
        <mesh
          geometry={(nodes.Cube069 as THREE.Mesh).geometry}
          material={materials.Chair}
          position={[1.147, 4.909, 0]}
          scale={[0.169, 5.262, 0.914]}
        />
        <group position={[0, -1.021, 0]} scale={[0.234, 0.752, 0.234]}>
          <mesh
            geometry={(nodes.Cylinder000 as THREE.Mesh).geometry}
            material={materials["Steel Black Polished"]}
          />
          <mesh
            geometry={(nodes.Cylinder000_1 as THREE.Mesh).geometry}
            material={materials["Steel White"]}
          />
        </group>
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/officeChair.gltf");

import {useAnimations, useGLTF} from "@react-three/drei";
import React, {useEffect, useRef} from "react";

import * as THREE from "three";

export function Avatar(props: any) {
  const group = useRef<THREE.Group>();
  const {nodes, materials, animations} = useGLTF("/models/Avatar.glb");
  const {actions, names} = useAnimations(animations, group);

  useEffect(() => {
    if (names && names.length > 0 && actions) {
      actions[names[0]]?.play();
    }
  }, []);

  return (
    <group ref={group} {...props} dispose={null} rotation={[0, Math.PI, 0]}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Wolf3D_Body001"
            geometry={(nodes.Wolf3D_Body001 as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Body.001"]}
            skeleton={(nodes.Wolf3D_Body001 as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair001"
            geometry={(nodes.Wolf3D_Hair001 as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Hair.001"]}
            skeleton={(nodes.Wolf3D_Hair001 as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom001"
            geometry={
              (nodes.Wolf3D_Outfit_Bottom001 as THREE.SkinnedMesh).geometry
            }
            material={materials["Wolf3D_Outfit_Bottom.001"]}
            skeleton={
              (nodes.Wolf3D_Outfit_Bottom001 as THREE.SkinnedMesh).skeleton
            }
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear001"
            geometry={
              (nodes.Wolf3D_Outfit_Footwear001 as THREE.SkinnedMesh).geometry
            }
            material={materials["Wolf3D_Outfit_Footwear.001"]}
            skeleton={
              (nodes.Wolf3D_Outfit_Footwear001 as THREE.SkinnedMesh).skeleton
            }
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top001"
            geometry={
              (nodes.Wolf3D_Outfit_Top001 as THREE.SkinnedMesh).geometry
            }
            material={materials["Wolf3D_Outfit_Top.001"]}
            skeleton={
              (nodes.Wolf3D_Outfit_Top001 as THREE.SkinnedMesh).skeleton
            }
          />
          <skinnedMesh
            name="EyeLeft001"
            geometry={(nodes.EyeLeft001 as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={(nodes.EyeLeft001 as THREE.SkinnedMesh).skeleton}
            morphTargetDictionary={
              (nodes.EyeLeft001 as THREE.SkinnedMesh).morphTargetDictionary
            }
            morphTargetInfluences={
              (nodes.EyeLeft001 as THREE.SkinnedMesh).morphTargetInfluences
            }
          />
          <skinnedMesh
            name="EyeRight001"
            geometry={(nodes.EyeRight001 as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={(nodes.EyeRight001 as THREE.SkinnedMesh).skeleton}
            morphTargetDictionary={
              (nodes.EyeRight001 as THREE.SkinnedMesh).morphTargetDictionary
            }
            morphTargetInfluences={
              (nodes.EyeRight001 as THREE.SkinnedMesh).morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Wolf3D_Beard001"
            geometry={(nodes.Wolf3D_Beard001 as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Beard.001"]}
            skeleton={(nodes.Wolf3D_Beard001 as THREE.SkinnedMesh).skeleton}
            morphTargetDictionary={
              (nodes.Wolf3D_Beard001 as THREE.SkinnedMesh).morphTargetDictionary
            }
            morphTargetInfluences={
              (nodes.Wolf3D_Beard001 as THREE.SkinnedMesh).morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Wolf3D_Head001"
            geometry={(nodes.Wolf3D_Head001 as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Skin.001"]}
            skeleton={(nodes.Wolf3D_Head001 as THREE.SkinnedMesh).skeleton}
            morphTargetDictionary={
              (nodes.Wolf3D_Head001 as THREE.SkinnedMesh).morphTargetDictionary
            }
            morphTargetInfluences={
              (nodes.Wolf3D_Head001 as THREE.SkinnedMesh).morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Wolf3D_Teeth001"
            geometry={(nodes.Wolf3D_Teeth001 as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Teeth.002"]}
            skeleton={(nodes.Wolf3D_Teeth001 as THREE.SkinnedMesh).skeleton}
            morphTargetDictionary={
              (nodes.Wolf3D_Teeth001 as THREE.SkinnedMesh).morphTargetDictionary
            }
            morphTargetInfluences={
              (nodes.Wolf3D_Teeth001 as THREE.SkinnedMesh).morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Avatar.glb");

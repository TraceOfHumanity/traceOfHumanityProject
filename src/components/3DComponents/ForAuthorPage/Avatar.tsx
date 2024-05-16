/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 Avatar.gltf 
*/
import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";


export function Avatar(props: any) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF("/models/Avatar.gltf");
  // const { actions, names } = useAnimations(animations, group);
  const { actions, names } = useAnimations(animations, group);

  // useEffect(() => {
  //   actions[names[0]].play();
  // }, []);
  useEffect(() => {
    if (names && names.length > 0 && actions) {
      actions[names[0]]?.play(); // Додайте знак "?" для уникнення помилки, якщо actions[names[0]] є "null"
    }
  }, []);

  return (
    <group ref={group} {...props} dispose={null} rotation={[0, Math.PI, 0]}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="Wolf3D_Body"
            // geometry={nodes.Wolf3D_Body.geometry}
            geometry={(nodes.Wolf3D_Body as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Body.001"]}
            // skeleton={nodes.Wolf3D_Body.skeleton}
            skeleton={(nodes.Wolf3D_Body as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Glasses"
            // geometry={nodes.Wolf3D_Glasses.geometry}
            geometry={(nodes.Wolf3D_Glasses as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Glasses.001"]}
            // skeleton={nodes.Wolf3D_Glasses.skeleton}
            skeleton={(nodes.Wolf3D_Glasses as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            // geometry={nodes.Wolf3D_Hair.geometry}
            geometry={(nodes.Wolf3D_Hair as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Hair.001"]}
            // skeleton={nodes.Wolf3D_Hair.skeleton}
            skeleton={(nodes.Wolf3D_Hair as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            // geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            geometry={(nodes.Wolf3D_Outfit_Bottom as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Outfit_Bottom.001"]}
            // skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            skeleton={(nodes.Wolf3D_Outfit_Bottom as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            // geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            geometry={(nodes.Wolf3D_Outfit_Footwear as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Outfit_Footwear.001"]}
            // skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            skeleton={(nodes.Wolf3D_Outfit_Footwear as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            // geometry={nodes.Wolf3D_Outfit_Top.geometry}
            geometry={(nodes.Wolf3D_Outfit_Top as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Outfit_Top.001"]}
            // skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            skeleton={(nodes.Wolf3D_Outfit_Top as THREE.SkinnedMesh).skeleton}
          />
          {/* <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeLeft.skeleton}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeRight.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Beard"
            geometry={nodes.Wolf3D_Beard.geometry}
            material={materials["Wolf3D_Beard.001"]}
            skeleton={nodes.Wolf3D_Beard.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials["Wolf3D_Skin.001"]}
            skeleton={nodes.Wolf3D_Head.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
          /> */}
          <skinnedMesh
            name="EyeLeft"
            // geometry={nodes.EyeLeft.geometry}
            geometry={(nodes.EyeLeft as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Eye.001"]}
            // skeleton={nodes.EyeLeft.skeleton}
            skeleton={(nodes.EyeLeft as THREE.SkinnedMesh).skeleton}
            // morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            // morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            // geometry={nodes.EyeRight.geometry}
            geometry={(nodes.EyeRight as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Eye.001"]}
            // skeleton={nodes.EyeRight.skeleton}
            skeleton={(nodes.EyeRight as THREE.SkinnedMesh).skeleton}
            // morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetDictionary={(nodes.EyeLeft as THREE.SkinnedMesh).morphTargetDictionary}
            // morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            morphTargetInfluences={(nodes.EyeLeft as THREE.SkinnedMesh).morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Beard"
            // geometry={nodes.Wolf3D_Beard.geometry}
            geometry={(nodes.Wolf3D_Beard as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Beard.001"]}
            // skeleton={nodes.Wolf3D_Beard.skeleton}
            skeleton={(nodes.Wolf3D_Beard as THREE.SkinnedMesh).skeleton}
            // morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
            // morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
            morphTargetDictionary={(nodes.Wolf3D_Beard as THREE.SkinnedMesh).morphTargetDictionary}
            morphTargetInfluences={(nodes.Wolf3D_Beard as THREE.SkinnedMesh).morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            // geometry={nodes.Wolf3D_Head.geometry}
            geometry={(nodes.Wolf3D_Head as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Skin.001"]}
            // skeleton={nodes.Wolf3D_Head.skeleton}
            skeleton={(nodes.Wolf3D_Head as THREE.SkinnedMesh).skeleton}
            // morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            
            // morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            morphTargetDictionary={(nodes.Wolf3D_Head as THREE.SkinnedMesh).morphTargetDictionary}
            morphTargetInfluences={(nodes.Wolf3D_Head as THREE.SkinnedMesh).morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            // geometry={nodes.Wolf3D_Teeth.geometry}
            geometry={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).geometry}
            material={materials["Wolf3D_Teeth.001"]}
            // skeleton={nodes.Wolf3D_Teeth.skeleton}
            skeleton={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).skeleton}
            // morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            // morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            morphTargetDictionary={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).morphTargetDictionary}
            morphTargetInfluences={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Avatar.gltf");

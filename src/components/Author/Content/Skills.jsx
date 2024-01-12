import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";

import * as THREE from "three";

import { Billboard, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import { Camera } from "./Camera";

const skillsList = [
  "HTML",
  "CSS/SCSS",
  "TailwindCSS",
  "Material UI",
  "Vanilla JS",
  "React.JS",
  "React Native",
  "Next.JS",
  "Redux Toolkit",
  "Three.JS",
  "React Three Fiber",
  "React Three Drei",
  "Astro",
  "Node.JS",
  "Nest.JS",
  "MongoDB",
  "PostgreSQL",
  "Express",
  "Firebase",
  "C",
  "C++",
  "Arduino",
  "Figma",
  "Blender",
  "English (Beginner)",
  "Ukrainian (Native)",
];

const generate = () => {
  const index = Math.floor(Math.random() * skillsList.length);
  return skillsList[index];
};

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover¨
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "white"),
      0.1
    );
  });
  return (
    <Billboard {...props}>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log("clicked")}
        {...fontProps}
        children={children}
      />
    </Billboard>
  );
}

function Cloud({ count = skillsList.length, radius = 40 }) {
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          generate(),
        ]);
    return temp;
  }, [count, radius]);

  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}
export const Skills = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={["#202025", 0, 30]} />
        {/* <OrbitControls enablePan={true} enableZoom={false} /> */}
        <Suspense fallback={null}>
          <group rotation={[9.4, 9.2, 9.3]}>
            <Cloud count={8} radius={20} />
          </group>
          <Camera />
        </Suspense>
        {/* <TrackballControls
          enablePan={true}
          enableZoom={false}
          enableDamping={false}
          dampingFactor={0.2}
          rotateSpeed={0.5}
        /> */}
      </Canvas>
    </div>
  );
};

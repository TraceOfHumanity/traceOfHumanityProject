import React, { useRef, useEffect } from "react";
import styles from "./EarthScene.module.scss";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import SpaceTexture from "./textures/space.svg";
import EarthMap from "./textures/5.jpg";
import EarthNormalMap from "./textures/555.png";
import MoonMap from "./textures/moon.jpg";
import MeteoriteMap from "./textures/meteorite.jpg";

const EarthScene = () => {
  const canvasWrapper = useRef();
  const canvas = useRef();

  useEffect(() => {
    const textureLoading = new THREE.TextureLoader();
    const normalTexture = textureLoading.load(EarthNormalMap);
    const texture = textureLoading.load(EarthMap);
    const space = textureLoading.load(SpaceTexture);
    const moonMap = textureLoading.load(MoonMap);
    const meteoriteMap = textureLoading.load(MeteoriteMap);

    const scene = new THREE.Scene();
    const geometry = new THREE.SphereGeometry(0.5, 64, 64);
    const geometry2 = new THREE.SphereGeometry(1.5, 70, 70);
    const moonGeometry = new THREE.SphereGeometry(0.04, 32, 32);
    const meteorGeometry = new THREE.DodecahedronGeometry(0.005, 0);

    // Materials

    const material1 = new THREE.MeshStandardMaterial();
    material1.normalMap = normalTexture;
    material1.lightMapIntensity = 5;
    material1.map = texture;
    material1.roughness = 0.5;

    const material2 = new THREE.MeshStandardMaterial({
      transparent: true,
      opacity: 1,
    });
    material2.map = space;
    material2.side = THREE.DoubleSide;
    material2.map.wrapS = THREE.RepeatWrapping;
    material2.map.wrapT = THREE.RepeatWrapping;
    material2.map.repeat.set(5, 5);
    material1.lightMapIntensity = 50;
    // material2.castShadow = false;

    const moonMaterial = new THREE.MeshStandardMaterial();
    moonMaterial.map = moonMap;
    moonMaterial.roughness = 0.5;

    const materilMeteorite = new THREE.MeshStandardMaterial();
    materilMeteorite.map = meteoriteMap;

    // Mesh
    const sphere = new THREE.Mesh(geometry, material1);
    const sphere2 = new THREE.Mesh(geometry2, material2);
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    const meteor = new THREE.Mesh(meteorGeometry, materilMeteorite);
    moon.position.set(0, 0, 0); // Налаштуйте позицію місяця
    scene.add(sphere, sphere2, moon, meteor);

    // Lights

    const pointLight2 = new THREE.PointLight();
    pointLight2.position.set(-1, 1, 1);
    pointLight2.intensity = 0.6;
    scene.add(pointLight2);

    const sizes = {
      width: canvasWrapper.current.clientWidth,
      height: canvasWrapper.current.clientHeight,
    };

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 1.5;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas.current,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Resize handler
    // const handleResize = () => {
    //   // Оновити розміри канвасу при зміні розмірів вікна
    //   sizes.width = window.innerWidth;
    //   sizes.height = window.innerHeight;

    //   camera.aspect = sizes.width / sizes.height;
    //   camera.updateProjectionMatrix();

    //   renderer.setSize(sizes.width, sizes.height);
    // };
    const handleResize = () => {
      // Оновити розміри канвасу при зміні розмірів батьківського елементу
      sizes.width = canvasWrapper.current.clientWidth;
      sizes.height = canvasWrapper.current.clientHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
    };

    window.addEventListener("resize", handleResize);

    /**
     * Animate
     */
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      sphere.rotation.y = 0.01 * elapsedTime + Math.PI / 1.2;
      sphere2.rotation.y = 0.005 * elapsedTime + Math.PI / 5;

      const radius = 1;
      const rotationSpeedMoon = 0.01;
      const rotationSpeedMeteor = 0.02;

      moon.position.set(
        radius * 1.2 * Math.cos(rotationSpeedMoon * elapsedTime),
        // radius * 0.1 * Math.sin(rotationSpeed * elapsedTime),
        0.1,
        radius * Math.sin(rotationSpeedMoon * elapsedTime)
      );
      meteor.position.set(
        radius * -0.6 * Math.cos(rotationSpeedMeteor * elapsedTime),
        radius * -0.3 * Math.sin(rotationSpeedMeteor * elapsedTime),
        // -0.1,
        radius * Math.sin(rotationSpeedMeteor * elapsedTime)
      );

      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };

    const clock = new THREE.Clock();
    tick();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={canvasWrapper} className={styles.space}>
      <canvas ref={canvas} style={{ width: "100%" }} className="webgl" />
    </div>
  );
};

export default EarthScene;

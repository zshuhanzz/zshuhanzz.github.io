"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function SpinningKnot({ color }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
}

export default function Background3D() {
  const { theme } = useContext(ThemeContext);
  const wireColor = theme === "dark" ? "#8b5cf6" : "#6cb4d9";

  return (
    <Canvas
      camera={{ position: [0, 0, 30], fov: 75 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <SpinningKnot color={wireColor} />
    </Canvas>
  );
}

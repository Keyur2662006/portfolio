import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Text, Sphere, Box, Torus, Cone } from '@react-three/drei';
import * as THREE from 'three';

const SkillNode = ({ position, text, color, shape }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t / 2) * 0.5;
      meshRef.current.rotation.x = Math.cos(t / 2) * 0.5;
    }
  });

  const material = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: color,
    metalness: 0.2,
    roughness: 0.1,
    transmission: 0.9,
    thickness: 1.5,
    envMapIntensity: 2,
    clearcoat: 1,
    clearcoatRoughness: 0.1
  }), [color]);

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={position}>
      <group ref={meshRef}>
        {shape === 'sphere' && <Sphere args={[0.8, 64, 64]} material={material} />}
        {shape === 'box' && <Box args={[1.2, 1.2, 1.2]} material={material} radius={0.1} />}
        {shape === 'torus' && <Torus args={[0.7, 0.3, 32, 64]} material={material} />}
        {shape === 'cone' && <Cone args={[0.8, 1.5, 32]} material={material} />}
        
        <Text
          position={[0, 0, 1]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor={color}
        >
          {text}
        </Text>
      </group>
    </Float>
  );
};

const OrbitingNodes = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.z = Math.sin(t * 0.05) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <SkillNode position={[4, 1, -2]} text="React" color="#61dafb" shape="sphere" />
      <SkillNode position={[-4, -1, 1]} text="JS" color="#f7df1e" shape="box" />
      <SkillNode position={[0, 3, 2]} text="CSS" color="#264de4" shape="torus" />
      <SkillNode position={[2, -3, -1]} text="HTML" color="#e34f26" shape="cone" />
      <SkillNode position={[-3, 2, -3]} text="Lovable AI" color="#ff4b4b" shape="sphere" />
      <SkillNode position={[3, -2, 3]} text="Antigravity" color="#8b5cf6" shape="box" />
      <SkillNode position={[-2, -3, -2]} text="GitHub" color="#ffffff" shape="torus" />
      <SkillNode position={[1, 4, -4]} text="Git" color="#f34f29" shape="cone" />
    </group>
  );
};

const Hero3DScene = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 8], fov: 50 }} 
      dpr={[1, 1.5]} 
      gl={{ powerPreference: "high-performance", antialias: false, stencil: false, depth: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#8b5cf6" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#06b6d4" />
      <Environment preset="city" />
      <OrbitingNodes />
    </Canvas>
  );
};

export default Hero3DScene;

import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Stars, OrbitControls, useTexture, Float } from '@react-three/drei';
import { useInView } from 'framer-motion';
import * as THREE from 'three';

import html5Url from '../assets/tech/html5.svg';
import css3Url from '../assets/tech/css3.svg';
import jsUrl from '../assets/tech/javascript.svg';
import gitUrl from '../assets/tech/git.svg';
import githubUrl from '../assets/tech/github.svg';
import antigravityUrl from '../assets/tech/antigravity.svg';
import lovableUrl from '../assets/tech/lovable.svg';
import supabaseUrl from '../assets/tech/supabase.svg';

const Planet = ({ position, text, url, index, total }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Load texture inside a suspense boundary
  const texture = useTexture(url);

  // Orbital mechanics
  const radius = useMemo(() => 3 + (index % 3) * 1.5, [index]);
  const speed = useMemo(() => 0.15 + (Math.random() * 0.2), []);
  const angleOffset = useMemo(() => (index / total) * Math.PI * 2, [index, total]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      if (!hovered) {
        meshRef.current.position.x = Math.cos(t * speed + angleOffset) * radius;
        meshRef.current.position.z = Math.sin(t * speed + angleOffset) * radius;
        meshRef.current.position.y = Math.sin(t * speed * 2 + angleOffset) * 1.5;
      }
    }
  });

  document.body.style.cursor = hovered ? 'pointer' : 'auto';

  return (
    <group ref={meshRef} position={position}>
      <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
        <sprite 
          scale={hovered ? [1.8, 1.8, 1] : [1.2, 1.2, 1]}
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
          onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
        >
          <spriteMaterial map={texture} depthTest={false} transparent opacity={hovered ? 1 : 0.8} />
        </sprite>
      </Float>
      
      {/* Tooltip purely on hover - Zero performance cost when not hovering */}
      {hovered && (
        <Html center position={[0, -1.2, 0]} zIndexRange={[100, 0]}>
          <div className="tech-logo-tooltip" style={{ opacity: 1, transform: 'translateY(0)' }}>
            {text}
          </div>
        </Html>
      )}
    </group>
  );
};

const Constellation = () => {
  const skills = [
    { text: "HTML5", url: html5Url },
    { text: "CSS3", url: css3Url },
    { text: "JavaScript", url: jsUrl },
    { text: "Git", url: gitUrl },
    { text: "GitHub", url: githubUrl },
    { text: "Antigravity", url: antigravityUrl }, 
    { text: "Lovable AI", url: lovableUrl },
    { text: "Supabase", url: supabaseUrl }
  ];

  return (
    <group>
      {/* Central Sun / Core */}
      <Html center>
        <div className="tech-logo-core">
          <div className="core-glow"></div>
        </div>
      </Html>
      
      {skills.map((skill, index) => (
        <Suspense fallback={null} key={index}>
          <Planet 
            index={index}
            total={skills.length}
            text={skill.text}
            url={skill.url}
            position={[0, 0, 0]} 
          />
        </Suspense>
      ))}
    </group>
  );
};

const SkillsScene = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <Canvas 
        frameloop={isInView ? "always" : "demand"}
        camera={{ position: [0, 4, 10], fov: 60 }} 
        dpr={[1, 1.5]} 
        gl={{ powerPreference: "high-performance", antialias: false, stencil: false, depth: true }}
      >
        <ambientLight intensity={0.2} />
        <Stars radius={100} depth={50} count={1500} factor={4} saturation={0} fade speed={1} />
        <Constellation />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.5}
        />
      </Canvas>
    </div>
  );
};

export default SkillsScene;

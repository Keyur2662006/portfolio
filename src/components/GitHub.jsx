import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, Edges } from '@react-three/drei';
import { Github } from 'lucide-react';
import './GitHub.css';

const AbstractCube = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.5;
      meshRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshPhysicalMaterial 
          color="#0d1117" 
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
        />
        <Edges scale={1} threshold={15} color="#8b5cf6" />
      </mesh>
    </Float>
  );
};

const GitHub = () => {
  // Generate random mock contribution data
  const weeks = Array.from({ length: 52 }, () => 
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 4))
  );

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  return (
    <section className="github-section" id="github" ref={containerRef}>
      <div className="container github-container">
        
        <div className="github-content">
          <motion.div 
            className="github-text glass"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="github-icon-wrapper">
              <Github size={40} className="gh-icon" />
            </div>
            <h2 className="github-title">Open Source & code</h2>
            <p className="github-desc">
              I actively contribute to open source and build public projects. Check out my GitHub for more code and experiments.
            </p>
            <a 
              href="https://github.com/Keyur2662006" 
              target="_blank" 
              rel="noreferrer"
              className="github-btn magnetic"
            >
              View My Code
            </a>
          </motion.div>

          <motion.div 
            className="github-grid-container glass"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="contribution-grid">
              {weeks.map((week, i) => (
                <div key={i} className="grid-col">
                  {week.map((level, j) => (
                    <div 
                      key={j} 
                      className={`grid-cell level-${level}`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>

      <div className="github-3d-bg">
        <Canvas 
          frameloop={isInView ? "always" : "demand"}
          camera={{ position: [0, 0, 8], fov: 40 }} 
          dpr={[1, 1.5]} 
          gl={{ powerPreference: "high-performance", antialias: false, stencil: false, depth: true }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
          <AbstractCube />
        </Canvas>
      </div>

    </section>
  );
};

export default GitHub;

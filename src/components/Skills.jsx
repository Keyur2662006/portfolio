import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import SkillsScene from './SkillsScene';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          My <span className="accent">Tech Galaxy</span>
        </motion.h2>
        <p className="skills-subtitle">
          An interactive constellation of the technologies I use to build modern web experiences.
          Hover over the planets to explore.
        </p>
      </div>
      
      <div className="skills-3d-wrapper">
        <Suspense fallback={<div className="canvas-loader">Loading Galaxy...</div>}>
          <SkillsScene />
        </Suspense>
      </div>
    </section>
  );
};

export default Skills;

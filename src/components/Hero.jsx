import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-glow"></div>
      
      <div className="hero-content">
        <motion.div
          className="hero-badge glass magnetic"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="live-dot"></span>
          Available for Freelance Work
        </motion.div>

        <motion.div
          className="hero-text-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="hero-title">
            <span className="hero-title-line">Keyur Parmar</span>
          </h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            A creative web developer.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a href="#contact" className="hero-btn secondary magnetic">
              <Sparkles size={20} /> Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="mouse">
          <motion.div 
            className="wheel"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
        <span className="scroll-text">Scroll down</span>
      </motion.div>
    </section>
  );
};

export default Hero;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section className="about-section" id="about" ref={containerRef}>
      <motion.div className="about-container container" style={{ opacity }}>
        <div className="about-content">
          <motion.h2 
            className="section-title"
            style={{ y: y1 }}
          >
            Creative Developer <br />
            <span className="accent">Based in the Future</span>
          </motion.h2>
          
          <motion.div className="about-text-wrapper" style={{ y: y2 }}>
            <p className="about-text main-text">
              I am a creative web developer focused on building modern interactive websites and digital experiences. I specialize in visually engaging websites, smooth animations, and brand-focused design.
            </p>
            
            <div className="about-services-grid">
              <div className="service-card glass">
                <h3>For Businesses</h3>
                <ul>
                  <li>Professional websites</li>
                  <li>Modern brand presence</li>
                  <li>High-quality digital experiences</li>
                </ul>
              </div>
              <div className="service-card glass">
                <h3>Freelance Approach</h3>
                <ul>
                  <li>Local businesses</li>
                  <li>Startups</li>
                  <li>Personal brands</li>
                </ul>
              </div>
            </div>
            <p className="about-text sub-text">
              Helping you build your <strong>online presence and branding</strong> through custom, deeply engaging websites.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'glass-nav' : ''}`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="nav-content">
        <div className="logo magnetic">K.</div>
        <div className="nav-links">
          <a href="#about" className="magnetic">About</a>
          <a href="#skills" className="magnetic">Skills</a>
          <a href="#work" className="magnetic">Work</a>
          <a href="#contact" className="contact-btn magnetic">Let's Talk</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

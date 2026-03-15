import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Freelancing from './components/Freelancing';
import GitHub from './components/GitHub';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preloader timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div 
            className="global-loader"
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: '#030308',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              color: '#fff'
            }}
          >
            <motion.div 
              className="loader-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '4rem',
                fontWeight: 800,
                letterSpacing: '-2px',
                marginBottom: '20px'
              }}
            >
              Keyur.
            </motion.div>
            <motion.div 
              style={{
                width: '200px',
                height: '2px',
                background: 'rgba(255,255,255,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                style={{
                  width: '100%',
                  height: '100%',
                  background: '#8b5cf6',
                  position: 'absolute'
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Freelancing />
        <GitHub />
        <Contact />
      </main>
    </>
  );
}

export default App;

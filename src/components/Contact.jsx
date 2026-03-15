import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "keyur26062006@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-container">
        
        <div className="contact-info">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's build something <span className="accent">extraordinary</span>.
          </motion.h2>
          <motion.p 
            className="contact-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I'm currently available for freelance work and open to exploring new engineering opportunities.
          </motion.p>

          <motion.div 
            className="email-block glass magnetic"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="email-icon">
              <Mail size={24} />
            </div>
            <div className="email-text">
              <span className="label">Drop me a line</span>
              <span className="email-address">{email}</span>
            </div>
            <button className="copy-btn" onClick={handleCopy} aria-label="Copy Email">
              {copied ? <Check size={20} color="#06b6d4" /> : <Copy size={20} />}
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="contact-form-container glass"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input type="text" id="name" required />
              <label htmlFor="name">Your Name</label>
              <div className="input-line"></div>
            </div>
            
            <div className="input-group">
              <input type="email" id="email" required />
              <label htmlFor="email">Email Address</label>
              <div className="input-line"></div>
            </div>

            <div className="input-group textarea-group">
              <textarea id="message" rows="4" required></textarea>
              <label htmlFor="message">Message</label>
              <div className="input-line"></div>
            </div>

            <button type="submit" className="submit-btn magnetic">
              Send Message
              <span className="btn-glow"></span>
            </button>
          </form>
        </motion.div>
        
      </div>
      
      <footer className="footer-section">
        <p>&copy; {new Date().getFullYear()} Keyur Parmar. Built with React & Three.js.</p>
        <div className="footer-links">
          <a href="https://github.com/Keyur2662006" target="_blank" rel="noreferrer" className="magnetic">GitHub</a>
          <a href="https://www.linkedin.com/in/keyurparmar26/" target="_blank" rel="noreferrer" className="magnetic">LinkedIn</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

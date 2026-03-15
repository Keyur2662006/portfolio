import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Globe, Zap, Users } from 'lucide-react';
import './Freelancing.css';

const services = [
  {
    icon: <Globe size={32} />,
    title: "Brand Website Creation",
    desc: "Crafting digital identities that resonate with your audience and elevate your market presence."
  },
  {
    icon: <Zap size={32} />,
    title: "Website Development",
    desc: "High-performance, scalable web applications built with the latest technologies."
  },
  {
    icon: <Users size={32} />,
    title: "Local Business Setup",
    desc: "Helping local businesses establish a commanding online presence to attract more clients."
  },
  {
    icon: <Briefcase size={32} />,
    title: "Digital Presence Building",
    desc: "Comprehensive strategies integrating SEO, performance, and engaging UI/UX design."
  }
];

const Freelancing = () => {
  return (
    <section className="freelance-section" id="freelancing">
      <div className="container">
        <div className="freelance-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Digital <span className="accent">Services</span>
          </motion.h2>
          <motion.p 
            className="freelance-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I partner with local markets, startups, and personal brands to build custom websites that convert visitors into clients.
          </motion.p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              className="service-box glass"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Freelancing;

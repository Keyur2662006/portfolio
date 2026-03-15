import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectsData = [
  {
    title: "Awwwards e-Commerce",
    description: "A super premium, highly animated 3D e-commerce platform built with React and Three.js.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop",
    tags: ["React", "Three.js", "GSAP"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Luxury Gym Website",
    description: "Immersive dark-themed fitness platform featuring 3D hero sections and smooth scroll animations.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop",
    tags: ["Next.js", "React Three Fiber", "Lenis"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "AI Fintech Dashboard",
    description: "Futuristic financial dashboard with glassmorphism UI, real-time charts, and AI predictive models.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Motion Studio Portfolio",
    description: "Award-winning portfolio featuring webgl transitions, magnetic cursor, and dynamic typography.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    tags: ["WebGL", "Vanilla JS", "GLSL"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="work">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">
            Featured <span className="accent">Work</span>
          </h2>
          <p className="projects-subtitle">
            A selection of my recent interactive web experiences and premium interfaces.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

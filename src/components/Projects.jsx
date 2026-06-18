import React, { useRef, useState } from 'react';
import projectsData from '../data/projects.json';
import { ArrowRight } from 'lucide-react';
import './Projects.css';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'none'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.5s ease-out'
    });
  };

  return (
    <div 
      className="project-card-wrapper"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <div className="project-card">
        <div className="project-content">
          <span className="project-category">{project.category}</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <a href={project.link} className="project-link" aria-label={`View ${project.title}`}>
            View Case Study <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section app-container">
      {/* Background SVG Shapes */}
      <div className="projects-bg-shape shape-left">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="149" stroke="rgba(255,255,255,0.03)" strokeWidth="2" strokeDasharray="5 15"/>
          <circle cx="150" cy="150" r="100" stroke="rgba(255,255,255,0.02)" strokeWidth="1"/>
        </svg>
      </div>
      <div className="projects-bg-shape shape-right">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 200 Q 200 0 400 200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
          <path d="M 0 220 Q 200 20 400 220" stroke="rgba(255,255,255,0.02)" strokeWidth="1" fill="none" />
          <path d="M 0 240 Q 200 40 400 240" stroke="rgba(255,255,255,0.01)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import experiencesData from '../data/experience.json';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section app-container">
      <h2 className="section-title">Work Experience</h2>
      
      <div className="timeline">
        {experiencesData.map((exp) => (
          <div key={exp.id} className="timeline-item glass-panel">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <span className="period">{exp.period}</span>
              </div>
              <h4 className="company">{exp.company}</h4>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

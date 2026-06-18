import React from 'react';
import skillsData from '../data/skills.json';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section app-container">
      <h2 className="section-title">My Skills</h2>
      
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-card glass-panel">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

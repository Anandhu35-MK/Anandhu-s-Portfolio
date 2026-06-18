import React from 'react';
import pic2 from '../assets/pic 2.png';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section app-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-layout">
        <div className="about-image-wrapper">
          <div className="about-image-container">
            <img src={pic2} alt="Anandhu - About" className="about-image" />
            <div className="about-image-backdrop"></div>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>The Journey</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          {/* <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;

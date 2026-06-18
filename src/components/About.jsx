import React from 'react';
// import pic2 from '../assets/pic 2.png';
import pic2 from '../assets/pic2.jpg';
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
            <h3>Professional Overview</h3>
            <p>
              I am a passionate <strong>Medical and Psychiatric Social Worker</strong> and social development professional committed to empowering individuals and communities through education, public health, and capacity-building initiatives. With a Master's degree in Social Work specializing in Medical and Psychiatric Social Work from the University of Kerala, I have developed expertise in programme management, community engagement, research, and stakeholder coordination.
            </p>
            
            <p>
              As a <strong>Program Coordinator at Viswasanthi Development Foundation</strong>, I played a key role in implementing educational and skill development initiatives across Kerala. I coordinated the <strong>Viswasanthi–TATA Elxsi Scholarship Programme</strong> for economically disadvantaged Polytechnic students, facilitating financial support, mentorship, and career development opportunities.
            </p>
            <p>
              I also coordinated large-scale <strong>soft skills and employability development programmes in collaboration with EY (Ernst & Young)</strong>, benefiting more than <strong>25,000 students</strong> by enhancing their communication, leadership, and workplace readiness skills.
            </p>
            <p>
              My professional background includes working as a <strong>Field Investigator</strong> for the ICMR-funded COPD research project (SWAAS Trial), where I contributed to community-based health research through systematic data collection and field coordination.
            </p>
                        <p>
              I believe in creating meaningful social impact through collaborative partnerships, evidence-based practice, and inclusive development approaches. Driven by empathy, leadership, and a commitment to social justice, I strive to contribute to initiatives that improve lives, strengthen communities, and promote equitable access to opportunities for all.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;

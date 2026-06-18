import React from 'react';
import { ArrowRight, Mail, FileText } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import pic1 from '../assets/pic1.jpg';
// import pic1 from '../assets/pic1.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section app-container animate-fade-in">
      <div className="hero-layout">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Anandhu Mahadev MK</span>.<br />
            Professional Social Worker
          </h1>
          <p className="hero-subtitle">
Medical and Psychiatric Social Worker with experience in healthcare, research, education, and social development, creating meaningful impact through people-centered solutions.       </p>
          
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              Get in touch <ArrowRight size={18} />
            </a>
            <a href="https://canva.link/y9dtgqj1a4eifxr" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              View my resume <FileText size={18} />
            </a>
            <div className="social-links">
              <a href="https://www.instagram.com/4nandhu_m/" className="social-icon" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="https://www.linkedin.com/in/anandhu-mahadev-m-k-b509952b3/" className="social-icon" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
              {/* <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter size={20} /></a> */}
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img src={pic1} alt="Anandhu - Client" className="hero-image" />
            <div className="hero-image-backdrop"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

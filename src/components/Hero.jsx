import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import pic1 from '../assets/pic1.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section app-container animate-fade-in">
      <div className="hero-layout">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Anandhu Mahadev MK</span>.<br />
            Lorem ipsum dolor.
          </h1>
          <p className="hero-subtitle">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quam tempora nemo, placeat minima vero facilis mollitia sapiente doloribus fuga a quia velit, corrupti et, nam eius sunt expedita id!          </p>
          
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              Get in touch <ArrowRight size={18} />
            </a>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
              <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter size={20} /></a>
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

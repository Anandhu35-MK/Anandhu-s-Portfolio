import React, { useEffect, useRef } from 'react';
import './BackgroundParallax.css';

const BackgroundParallax = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let animationFrameId;
    
    // Target position (where the mouse is)
    let targetRelX = 0;
    let targetRelY = 0;
    let targetRawX = window.innerWidth / 2;
    let targetRawY = window.innerHeight / 2;

    // Current position (interpolating towards target)
    let currentRelX = 0;
    let currentRelY = 0;
    let currentRawX = window.innerWidth / 2;
    let currentRawY = window.innerHeight / 2;

    const handleMouseMove = (e) => {
      // Relative values between -1 and 1
      targetRelX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetRelY = (e.clientY / window.innerHeight - 0.5) * 2;

      // Raw pixel values for the spotlight
      targetRawX = e.clientX;
      targetRawY = e.clientY;
    };

    const handleMouseLeave = () => {
      // Smoothly return to center when mouse leaves the window
      targetRelX = 0;
      targetRelY = 0;
      targetRawX = window.innerWidth / 2;
      targetRawY = window.innerHeight / 2;
    };

    const animate = () => {
      // Linear interpolation (lerp) for smooth easing physics
      currentRelX += (targetRelX - currentRelX) * 0.06;
      currentRelY += (targetRelY - currentRelY) * 0.06;
      currentRawX += (targetRawX - currentRawX) * 0.06;
      currentRawY += (targetRawY - currentRawY) * 0.06;

      if (containerRef.current) {
        containerRef.current.style.setProperty('--mouse-x', currentRelX.toFixed(4));
        containerRef.current.style.setProperty('--mouse-y', currentRelY.toFixed(4));
        containerRef.current.style.setProperty('--raw-mouse-x', `${currentRawX.toFixed(1)}px`);
        containerRef.current.style.setProperty('--raw-mouse-y', `${currentRawY.toFixed(1)}px`);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="parallax-container" aria-hidden="true">
      {/* Dynamic Cursor Spotlight Overlay */}
      <div className="mouse-spotlight"></div>

      {/* Layer 1: Cosmic Orbit & Ring System (Top Right) */}
      <div className="parallax-layer layer-orbit">
        <div className="spin-slow-cw">
          <svg width="650" height="650" viewBox="0 0 650 650" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.08)" />
                <stop offset="50%" stopColor="rgba(99, 102, 241, 0.02)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
              </linearGradient>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.15)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
              </radialGradient>
            </defs>
            
            {/* Outer Orbit with Dashed Lines */}
            <circle cx="325" cy="325" r="300" stroke="url(#orbitGrad)" strokeWidth="1" strokeDasharray="3 12" />
            <circle cx="325" cy="325" r="290" stroke="rgba(255, 255, 255, 0.01)" strokeWidth="1" />
            
            {/* Mid Orbits (Tilted Ellipses) */}
            <ellipse cx="325" cy="325" rx="250" ry="120" stroke="url(#orbitGrad)" strokeWidth="1.2" transform="rotate(-25 325 325)" />
            <ellipse cx="325" cy="325" rx="200" ry="80" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" strokeDasharray="6 6" transform="rotate(35 325 325)" />
            
            {/* Inner Ring with Orbiting Nodes */}
            <circle cx="325" cy="325" r="140" stroke="rgba(99, 102, 241, 0.06)" strokeWidth="1" />
            <circle cx="325" cy="325" r="137" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5" />
            
            {/* Core Center Glow */}
            <circle cx="325" cy="325" r="30" fill="url(#centerGlow)" />
            <circle cx="325" cy="325" r="4" fill="rgba(255, 255, 255, 0.8)" style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))' }} />
            
            {/* Orbital Satellite Points */}
            <circle cx="325" cy="25" r="3.5" fill="rgba(255, 255, 255, 0.4)" />
            <circle cx="215" cy="195" r="2" fill="rgba(99, 102, 241, 0.6)" />
            <circle cx="495" cy="420" r="3" fill="rgba(168, 85, 247, 0.5)" />
          </svg>
        </div>
      </div>

      {/* Layer 2: Wavy Cyber Ribbon (Bottom Left) */}
      <div className="parallax-layer layer-ribbon">
        <div className="float-subtle">
          <svg width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ribbonGradPrimary" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0.2)" />
                <stop offset="50%" stopColor="rgba(168, 85, 247, 0.1)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
              </linearGradient>
              <linearGradient id="ribbonGradSecondary" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
                <stop offset="40%" stopColor="rgba(59, 130, 246, 0.08)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
              </linearGradient>
            </defs>

            {/* Ribbon Wave 1 */}
            <path 
              d="M 50,220 C 180,100 280,320 450,220 C 620,120 680,270 780,180" 
              stroke="url(#ribbonGradPrimary)" 
              strokeWidth="1.5" 
              fill="none" 
            />
            
            {/* Ribbon Wave 2 (Offset and dotted) */}
            <path 
              d="M 50,250 C 200,130 250,350 450,250 C 650,150 630,220 780,210" 
              stroke="url(#ribbonGradSecondary)" 
              strokeWidth="1" 
              strokeDasharray="4 8"
              fill="none" 
            />

            {/* Ribbon Wave 3 (Thin Accent) */}
            <path 
              d="M 50,190 C 150,70 320,290 450,190 C 580,90 700,320 780,150" 
              stroke="rgba(255, 255, 255, 0.03)" 
              strokeWidth="1" 
              fill="none" 
            />
            
            {/* Coordinate Connection Nodes */}
            <circle cx="215" cy="208" r="3" fill="rgba(168, 85, 247, 0.3)" />
            <line x1="215" y1="208" x2="215" y2="250" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1" strokeDasharray="2 2" />
            
            <circle cx="535" cy="170" r="3" fill="rgba(99, 102, 241, 0.3)" />
            <line x1="535" y1="170" x2="535" y2="120" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
        </div>
      </div>

      {/* Layer 3: Cyber Technical Grid & Coordinates (Middle Left) */}
      <div className="parallax-layer layer-tech">
        <svg width="450" height="350" viewBox="0 0 450 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle Dot Matrix Pattern */}
          <defs>
            <pattern id="techDotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="0.75" fill="rgba(255, 255, 255, 0.03)" />
            </pattern>
          </defs>
          <rect width="450" height="300" fill="url(#techDotGrid)" />

          {/* Technical Target Crosshair */}
          <circle cx="225" cy="150" r="40" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
          <circle cx="225" cy="150" r="15" stroke="rgba(99, 102, 241, 0.08)" strokeWidth="1" strokeDasharray="2 4" />
          
          <line x1="225" y1="80" x2="225" y2="220" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
          <line x1="155" y1="150" x2="295" y2="150" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
          
          {/* Micro Corner Ticks */}
          <path d="M 10,20 L 10,10 L 20,10" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
          <path d="M 440,20 L 440,10 L 430,10" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
          <path d="M 10,280 L 10,290 L 20,290" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
          <path d="M 440,280 L 440,290 L 430,290" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />

          {/* Blueprint-style Technical Text HUD */}
          <text x="30" y="40" fill="rgba(255, 255, 255, 0.15)" fontSize="9" fontFamily="monospace" letterSpacing="1">[SYS_STATUS: ACTIVE]</text>
          <text x="30" y="55" fill="rgba(255, 255, 255, 0.06)" fontSize="8" fontFamily="monospace" letterSpacing="0.5">LOC_COORDS: 9.9312° N, 76.2673° E</text>
          
          <text x="320" y="270" fill="rgba(99, 102, 241, 0.2)" fontSize="9" fontFamily="monospace" letterSpacing="1">[CORE_v2.0]</text>
          <text x="320" y="282" fill="rgba(255, 255, 255, 0.04)" fontSize="7" fontFamily="monospace">REF: GRID_ALIGN_OK</text>
          
          {/* Small Plus Marks */}
          <path d="M 100,80 M 96,80 L 104,80 M 100,76 L 100,84" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />
          <path d="M 350,180 M 346,180 L 354,180 M 350,176 L 350,184" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />
        </svg>
      </div>

      {/* Ambient Backdrop Color Glows */}
      <div className="glow-container">
        <div className="glow glow-cyan"></div>
        <div className="glow glow-indigo"></div>
        <div className="glow glow-violet"></div>
      </div>
    </div>
  );
};

export default BackgroundParallax;

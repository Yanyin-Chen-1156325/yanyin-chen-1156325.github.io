import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Yan-Yin Chen</span>
        </h1>
        <h2 className="hero-subtitle">Software Developer</h2>
        <p className="hero-description">
          Passionate about solving real-world problems through code, 
          with experience in full-stack development and cloud technologies.
          Currently pursuing Master's in Applied Computing and seeking 
          software development opportunities.
        </p>
        <div className="hero-buttons">
          <Link to="/projects">
            <Button variant="secondary">
              View My Work
            </Button>
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <div className="profile-placeholder">
          <img 
            src="/Ann.png" 
            alt="Yan-Yin Chen" 
            className="profile-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
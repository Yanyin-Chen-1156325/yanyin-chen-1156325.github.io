import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Carousel from '../ui/Carousel';

interface ProjectCardProps {
  title: string;
  badge: string;
  description: string;
  technologies: string[];
  features?: string[];
  personalContributions?: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
  isReversed?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  badge,
  description,
  technologies,
  features,
  personalContributions,
  githubUrl,
  liveUrl,
  images,
  isReversed = false
}) => {
  return (
    <div className={`project ${isReversed ? 'project-right' : 'project-left'}`}>
      <div className="project-grid">
        <div className={`project-info ${isReversed ? 'project-info-right' : 'project-info-left'}`}>
          <div className="project-badge">{badge}</div>
          <h3>{title}</h3>
          <div className="project-description">
            <p>{description}</p>
          </div>
          {features && features.length > 0 && (
            <div className="project-features">
              <h4>Key Features</h4>
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="project-tech">
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
          <div className="project-links">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code on GitHub"
              >
                <Github size={22} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live demo"
              >
                <ExternalLink size={22} />
              </a>
            )}
          </div>
        </div>
        <div className="project-image">
          <Carousel 
            images={images} 
            alt={`${title} Screenshot`}
            isReversed={isReversed}
          />
        </div>
      </div>

      {personalContributions && personalContributions.length > 0 && (
        <div className="project-contributions-full">
          <h4>My Personal Contributions</h4>
          <ul>
            {personalContributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
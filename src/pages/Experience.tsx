import React from 'react';
import WorkExperience from '../components/sections/WorkExperience';
import Education from '../components/sections/Education';
import Certifications from '../components/sections/Certifications';

const Experience: React.FC = () => {
  return (
    <div className="experience-page-fullwidth">
      <WorkExperience />
      <Education />
      <Certifications />
    </div>
  );
};

export default Experience;
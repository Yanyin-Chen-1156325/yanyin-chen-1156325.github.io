import React from 'react';
import Hero from '../components/sections/Hero';
import Overview from '../components/sections/Overview';
import Skills from '../components/sections/Skills';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <Overview />
      <Skills />
    </div>
  );
};

export default Home;
import React from 'react';

const Overview: React.FC = () => {
  const overviewItems = [
    {
      icon: "⚙️",
      title: "System Engineer",
      description: "5 years of experience in system engineering, focused on automation of manufacturing processes and operational efficiency improvements."
    },
    {
      icon: "💻",
      title: "Full-Stack Development", 
      description: "Building comprehensive web applications with modern technologies like Python and C#."
    },
    {
      icon: "☁️",
      title: "Cloud Technologies",
      description: "Experienced with Azure cloud services and currently expanding my cloud expertise."
    }
  ];

  return (
    <section className="overview">
      <div className="container">
        <h2>What I Do</h2>
        <div className="overview-grid">
          {overviewItems.map((item, index) => (
            <div key={index} className="overview-card">
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
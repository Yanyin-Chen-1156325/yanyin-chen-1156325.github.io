import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const WorkExperience: React.FC = () => {
  const achievements = [
    {
      icon: "🔧",
      text: "Managed daily system maintenance and troubleshooting for Manufacturing Execution Systems (MES) within a Computer-Integrated Manufacturing (CIM) environment, ensuring high system uptime and operational continuity."
    },
    {
      icon: "🔍",
      text: "Conducted in-depth system analysis and developed custom software solutions to enhance manufacturing operations, directly addressing critical production needs."
    },
    {
      icon: "🤝",
      text: "Collaborated effectively with cross-functional teams to gather and refine requirements, playing a key role in the design and successful implementation of complex IT solutions."
    },
    {
      icon: "⚡",
      text: "Automated a critical manual process through custom software development, significantly reducing on-site labour and enhancing overall operational efficiency."
    },
    {
      icon: "💻",
      text: "Developed batch programs to streamline daily system maintenance tasks, improving system reliability and reducing manual effort."
    },
    {
      icon: "📚",
      text: "Authored comprehensive Standard Operating Procedures (SOP) documentation, facilitating smooth system handover and ensuring long-term maintainability for future teams."
    }
  ];

  const technologies = ["C#", "SQL Server", "Manufacturing Systems", "Automation"];

  return (
    <section className="work-experience-section">
      <div className="container">
        <SectionHeader 
          title="Work Experience" 
          icon={<Briefcase size={32} />}
        />

        <div className="work-card">
          <div className="work-header">
            <div className="work-period">
              <span className="period-badge">June 2018 - June 2023</span>
            </div>
            <div className="work-title">
              <h3>IT Engineer</h3>
              <h4>Siliconware Precision Industries Co., Ltd.</h4>
            </div>
          </div>
          
          <div className="work-content">            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <p>{achievement.text}</p>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
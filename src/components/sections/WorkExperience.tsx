import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const WorkExperience: React.FC = () => {
  const achievements = [
    {
      icon: "🔧",
      text: "Performed daily system maintenance and troubleshooting for Manufacturing Execution Systems (MES) within a Computer-Integrated Manufacturing (CIM) environment"
    },
    {
      icon: "💻",
      text: "Conducted system analysis and software development to support manufacturing operations and collaborated with cross-functional teams to implement IT solutions"
    },
    {
      icon: "⚡",
      text: "Automated previously manual processes through custom software development, significantly reducing on-site labor and improving operational efficiency"
    },
    {
      icon: "📚",
      text: "Developed batch programs to streamline daily maintenance tasks and created detailed SOP documentation to ensure system continuity"
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
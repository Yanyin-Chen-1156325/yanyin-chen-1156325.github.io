import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const Skills: React.FC = () => {
  // const technicalSkills = [
  //   {
  //     category: "Programming Languages",
  //     skills: ["Python", "C#", "JavaScript", "TypeScript", "HTML/CSS", "SQL"]
  //   },
  //   {
  //     category: "Frameworks & Libraries", 
  //     skills: ["React", ".NET", "ASP.NET Core", "Entity Framework", "Flask", "Bootstrap"]
  //   },
  //   {
  //     category: "Tools & Technologies",
  //     skills: ["Azure", "Docker", "Git", "Visual Studio", "SQL Server", "REST APIs"]
  //   }
  // ];

  const softSkills = [
    {
      icon: "🧠",
      title: "Problem Solving",
      description: "Strong analytical thinking with experience in troubleshooting complex manufacturing processes and developing efficient software solutions."
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Proven ability to work effectively in cross-functional teams, from manufacturing floors to development environments."
    },
    {
      icon: "📚",
      title: "Continuous Learning", 
      description: "Passionate about staying current with technology trends and continuously expanding skill set through formal education and self-directed learning."
    },
    {
      icon: "⚡",
      title: "Process Improvement",
      description: "5+ years of experience identifying inefficiencies and implementing solutions that enhance productivity and quality."
    }
  ];

  return (
    <>
      {/* Technical Skills Section */}
      {/* <section className="skills-section-fullwidth">
        <div className="container">
          <SectionHeader title="Technical Skills" />
          
          <div className="skills-grid">
            {technicalSkills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h3>{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Soft Skills Section */}
      <section className="soft-skills-section-fullwidth">
        <div className="container">
          <SectionHeader title="Core Competencies" />
          
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
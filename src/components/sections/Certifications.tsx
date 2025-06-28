import React from 'react';
import { Award } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const Certifications: React.FC = () => {
  const certifications = [
    {
      icon: "🏆",
      title: "Microsoft Certified: Azure Fundamentals",
      provider: "Microsoft",
      date: "June 2025",
      credentialId: "144958F2B6A13528",
      description: "Demonstrates foundational knowledge of cloud services and how those services are provided with Microsoft Azure."
    },
    {
      icon: "🎨",
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      date: "April 2025",
      credentialId: "annc-rwd",
      description: "Completed comprehensive training in HTML, CSS, and responsive web design principles."
    },
    {
      icon: "📚",
      title: "GitHub Foundations",
      provider: "DataCamp",
      date: "April 2025",
      credentialId: "614202",
      description: "Mastered version control, collaboration workflows, and Git/GitHub best practices."
    },
    {
      icon: "⚙️",
      title: "Foundational C# with Microsoft",
      provider: "freeCodeCamp",
      date: "September 2024",
      credentialId: "annc-fcswm",
      description: "Comprehensive introduction to C# programming language and .NET development fundamentals."
    }
  ];

  return (
    <section className="certifications-section">
      <div className="container">
        <SectionHeader 
          title="Certifications & Achievements" 
          icon={<Award size={32} />}
        />
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-header">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-date">{cert.date}</div>
              </div>
              <h4>{cert.title}</h4>
              <p className="cert-provider">{cert.provider}</p>
              <div className="cert-id">Credential ID: {cert.credentialId}</div>
              <p className="cert-description">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
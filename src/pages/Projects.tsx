import React from "react";
import SectionHeader from '../components/ui/SectionHeader';
import ProjectCard from '../components/sections/ProjectCard';

const Projects: React.FC = () => {
  // Project data - could be moved to constants later
  const projectsData = [
    {
      title: "Speaking Test",
      badge: "Featured Project - Solo Project",
      description: "A cloud-based web application that evaluates users' spoken English proficiency using Azure Speech Service, aligned with CEFR levels. The app dynamically assigns prompts, records user audio, and returns real-time fluency feedback.",
      features: [
        "Dynamically generates practice texts by Azure Open AI",
        "Speech-to-text and fluency analysis powered by Azure Speech Service",
        "RESTful API integration between React frontend and C# Web API backend",
        "CI/CD pipeline using GitHub Actions and deployment to Azure"
      ],
      technologies: [
        "React", "TypeScript", "C#", ".NET Web API", "Azure Speech Service", "Azure Open AI",
        "Azure Static Web Apps", "Azure App Service", "GitHub Actions"
      ],
      liveUrl: "https://speaking-test-bay.vercel.app/",
      images: [
        "/SpeakingTest/image1.png",
        "/SpeakingTest/image2.png",
        "/SpeakingTest/image3.png"
      ]
    },
    {
      title: "Online Travel Journal",
      badge: "Featured Project - Group Assignment",
      description: "A comprehensive web application that enables travelers to document journeys and events. Features include premium subscriptions, gamification with badges, community departure board, edit logs, and helpdesk support to create a vibrant travel community platform.",
      features: [
        "Role-Based Access Control (RBAC) system managing different user permissions",
        "Multi-level user roles: Travellers, Administrators, Editors and Support Technicians",
        "Secure access control for sensitive operations and data",
        "Automated testing with Playwright for comprehensive quality assurance"
      ],
      personalContributions: [
        "Journey Management System: Complete CRUD operations for travel journeys",
        "Staff Journey Management: Administrative tools for hiding, moderating, and managing user-generated journeys",
        "Premium Subscription Service: Integrated payment processing and subscription management system",
        "Gamification System: Badge achievement system with progress tracking and user engagement features",
        "Edit Log Functionality: Comprehensive audit trail system tracking all administrative changes",
        "Notification System: Real-time alerts and updates for user activities and system events",
        "Code Modularization: Developed reusable utility functions and shared modules for improved code maintainability",
        "Quality Assurance: Extensive bug fixing and system optimization across the entire web application"
      ],
      technologies: ["Python", "Flask", "HTML", "CSS3", "JavaScript", "Bootstrap", "MySQL", "RBAC", "Playwright"],
      liveUrl: "https://comp639prj2rar.pythonanywhere.com/",
      images: [
        "/OnlineTravelJournal/image1.png",
        "/OnlineTravelJournal/image2.png",
        "/OnlineTravelJournal/image3.png",
        "/OnlineTravelJournal/image4.png",
        "/OnlineTravelJournal/image5.png",
      ]
    },
    {
      title: "Fresh Veggies Store",
      badge: "Featured Project - Individual Assignment",
      description: "A comprehensive e-commerce web application for selling fresh vegetables, designed with both customers and staff in mind. The platform includes user authentication, product and inventory management, a shopping cart system, and checkout process.",
      features: [
        "Three-tier Architecture separating presentation, business logic, and data layers",
        "Clean separation of concerns for optimal maintainability and scalability",
        "Structured design facilitating future enhancements and maintenance"
      ],
      technologies: ["Python", "Flask", "HTML", "CSS3", "JavaScript", "Bootstrap", "MySQL", "SQLAlchemy", "Three-tier Architecture", "pytest"],
      githubUrl: "https://github.com/Yanyin-Chen-1156325/veggie_store.git",
      liveUrl: "https://annchen1156325.pythonanywhere.com/",
      images: [
        "/VeggieStore/image1.png",
        "/VeggieStore/image2.png",
        "/VeggieStore/image3.png",
        "/VeggieStore/image4.png",
        "/VeggieStore/image5.png",
      ]
    }
  ];

  return (
    <div className="projects-page">
      <div className="container">
        <section className="projects-section">
          <div className="section-content">
            <SectionHeader title="My Projects" />

            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                badge={project.badge}
                description={project.description}
                features={project.features}
                personalContributions={project.personalContributions}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                images={project.images}
                isReversed={index % 2 === 1}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
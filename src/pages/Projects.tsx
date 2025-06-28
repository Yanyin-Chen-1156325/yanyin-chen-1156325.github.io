import React from "react";
import SectionHeader from '../components/ui/SectionHeader';
import ProjectCard from '../components/sections/ProjectCard';

const Projects: React.FC = () => {
  // Project data - could be moved to constants later
  const projectsData = [
    {
      title: "Online Travel Journal",
      badge: "Featured Project - Group Assignment",
      description: "RAR Online Travel Journal is a comprehensive web application that enables travelers to document detailed journeys and events. Additional key features include a premium subscription model, gamification system with badges, a departure board displaying community travel updates, edit logs for tracking administrative changes, and integrated helpdesk support. Through these innovative features, RAR creates a sustainable and vibrant travel community platform.",
      features: [
        "Role-Based Access Control (RBAC) system managing different user permissions",
        "Multi-level user roles: Travellers, Administrators, Editors and Support Technicians",
        "Secure access control for sensitive operations and data"
      ],
      technologies: ["Python", "Flask", "HTML", "CSS3", "JavaScript", "Bootstrap", "MySQL", "RBAC"],
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
      technologies: ["Python", "Flask", "HTML", "CSS3", "JavaScript", "Bootstrap", "MySQL", "SQLAlchemy", "Three-tier Architecture"],
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
import React from 'react';
import { GraduationCap } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const Education: React.FC = () => {
  const courses = [
    { name: "Software Development", grade: "A" },
    { name: "Studio Project", grade: "A" },
    { name: "Advanced Programming", grade: "A+" },
    { name: "Advanced Database Management", grade: "A+" }
  ];

  return (
    <section className="education-section">
      <div className="container">
        <SectionHeader 
          title="Education" 
          icon={<GraduationCap size={32} />}
        />
        
        <div className="education-card">
          <div className="education-header">
            <div className="education-period">
              <span className="period-badge current">July 2024 - Expected November 2025</span>
            </div>
            <div className="education-title">
              <h3>Master of Applied Computing</h3>
              <h4>Lincoln University</h4>
              <p className="location">Christchurch, New Zealand</p>
            </div>
          </div>
          
          <div className="education-content">
            <div className="courses-section">
              <h5>Relevant Courses & Grades</h5>
              <div className="courses-grid">
                {courses.map((course, index) => (
                  <div key={index} className="course-item">
                    <span className="course-name">{course.name}</span>
                    <span className={`grade grade-${course.grade.toLowerCase().replace('+', '-plus')}`}>
                      {course.grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
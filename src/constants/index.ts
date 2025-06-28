import { PersonalInfo, TechnicalSkill, SoftSkill, WorkExperience, Education, Certification, Project, Language, NavItem } from '../types';

// Personal Information
export const PERSONAL_INFO: PersonalInfo = {
  name: "Yan-Yin Chen",
  title: "Software Developer",
  email: "yyc24nn@gmail.com",
  phone: "027-488-9301",
  address: "133 Waimairi Road, Ilam, Christchurch",
  bio: "Seeking a software development role where I can apply my technical expertise, IT engineering experience, and passion for continuous learning to drive operational efficiency and contribute to innovative, impactful projects."
};

// Technical Skills
export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  {
    category: "Programming Languages",
    skills: ["C#", "Python", "JavaScript", "TypeScript", "HTML/CSS"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Bootstrap", "Flask", "SQLAlchemy"]
  },
  {
    category: "Databases",
    skills: ["SQL Server", "Oracle", "MySQL"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["Azure", "Git", "GitHub"]
  },
  {
    category: "Project Management",
    skills: ["Agile", "Scrum", "Jira"]
  }
];

// Soft Skills
export const SOFT_SKILLS: SoftSkill[] = [
  {
    skill: "Problem Solving",
    description: "Able to identify root causes and develop effective solutions under pressure"
  },
  {
    skill: "Adaptability",
    description: "Comfortable learning new technologies and adjusting to dynamic work environments"
  },
  {
    skill: "Collaboration",
    description: "Experienced in collaborating across teams while also taking initiative and working autonomously"
  },
  {
    skill: "Quality Assurance",
    description: "Ensures quality and accuracy in both code and documentation"
  }
];

// Work Experience
export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "spil-2018-2023",
    company: "Siliconware Precision Industries Co., Ltd.",
    position: "IT Engineer",
    startDate: "2018-06",
    endDate: "2023-06",
    location: "Taiwan",
    description: "Part of a 100-person IT team supporting large-scale manufacturing operations in a global semiconductor packaging and testing company with around 25,000 employees and annual revenue of approximately NZD 5.9 billion.",
    achievements: [
      "Performed daily system maintenance and troubleshooting for Manufacturing Execution Systems (MES) within a Computer-Integrated Manufacturing (CIM) environment",
      "Conducted system analysis and software development to support manufacturing operations",
      "Collaborated with cross-functional teams to gather and refine requirements, contributing to the design and implementation of IT solutions",
      "Automated a previously manual process through custom software development, significantly reducing on-site labor and improving operational efficiency",
      "Developed batch programs to streamline daily system maintenance tasks, increasing reliability and reducing manual effort",
      "Created detailed SOP (Standard Operating Procedures) documentation to support system handover and ensure continuity for future maintenance"
    ],
    technologies: ["C#", "SQL Server", "Manufacturing Systems", "Automation"]
  }
];

// Education
export const EDUCATION: Education[] = [
  {
    id: "lincoln-master",
    institution: "Lincoln University",
    degree: "Master of Applied Computing",
    major: "Applied Computing",
    startDate: "2024-07",
    endDate: "2025-11",
    location: "Christchurch, New Zealand",
    courses: ["Software Development (A)", "Advanced Programming (A+)"]
  },
  {
    id: "ncyu-master",
    institution: "National Chiayi University",
    degree: "Master's Degree",
    major: "E-learning Design and Management",
    startDate: "2008-09",
    endDate: "2011-07",
    gpa: "8.6",
    location: "Taiwan"
  },
  {
    id: "ncyu-bachelor",
    institution: "National Chiayi University",
    degree: "Bachelor's Degree",
    major: "Education",
    startDate: "2004-09",
    endDate: "2008-07",
    gpa: "8.46",
    location: "Taiwan"
  }
];

// Certifications
export const CERTIFICATIONS: Certification[] = [
  {
    id: "azure-fundamentals",
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    credentialId: "144958F2B6A13528",
    issueDate: "2025-06"
  },
  {
    id: "responsive-web-design",
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    credentialId: "annc-rwd",
    issueDate: "2025-04"
  },
  {
    id: "github-foundations",
    name: "GitHub Foundations",
    issuer: "DataCamp",
    credentialId: "614202",
    issueDate: "2025-04"
  },
  {
    id: "foundational-csharp",
    name: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp",
    credentialId: "annc-fcswm",
    issueDate: "2024-09"
  }
];

// Projects
export const PROJECTS: Project[] = [
  {
    id: "fresh-veggies-store",
    title: "Fresh Veggies Store",
    description: "A comprehensive e-commerce web application for selling fresh vegetables, designed with both customers and staff in mind. The platform includes user authentication, product and inventory management, a shopping cart system, and checkout process.",
    shortDescription: "E-commerce platform for fresh vegetables with full inventory management",
    technologies: ["HTML", "Bootstrap", "JavaScript", "Python", "Flask", "SQLAlchemy", "MySQL"],
    features: [
      "User registration and login system",
      "Product browsing and search functionality",
      "Inventory management dashboard",
      "Shopping cart with real-time updates",
      "Order processing system",
      "Admin panel for staff management"
    ],
    githubUrl: "https://github.com/Yanyin-Chen-1156325/veggie_store",
    images: [],
    category: "web",
    startDate: "2024-01",
    endDate: "2024-05",
    status: "completed"
  }
];

// Languages
export const LANGUAGES: Language[] = [
  {
    name: "Chinese (Mandarin)",
    level: "native"
  },
  {
    name: "English",
    level: "fluent"
  }
];

// Navigation Items
export const NAV_ITEMS: NavItem[] = [
  {
    id: "home",
    labelKey: "nav.home",
    path: "/",
    icon: "Home"
  },
  {
    id: "about",
    labelKey: "nav.about",
    path: "/about",
    icon: "User"
  },
  {
    id: "projects",
    labelKey: "nav.projects",
    path: "/projects",
    icon: "Code"
  },
  {
    id: "experience",
    labelKey: "nav.experience",
    path: "/experience",
    icon: "Briefcase"
  },
  {
    id: "contact",
    labelKey: "nav.contact",
    path: "/contact",
    icon: "Mail"
  }
];

// Theme Configuration
export const THEME_CONFIG = {
  STORAGE_KEY: 'portfolio-theme',
  DEFAULT_THEME: 'light' as const
};

// Language Configuration
export const LANGUAGE_CONFIG = {
  STORAGE_KEY: 'portfolio-language',
  DEFAULT_LANGUAGE: 'en' as const,
  SUPPORTED_LANGUAGES: ['en', 'zh'] as const
};

// Animation Configurations
export const ANIMATIONS = {
  PAGE_TRANSITION: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  FADE_IN: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  },
  SLIDE_UP: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 }
  },
  STAGGER_CONTAINER: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

// Contact Information
export const CONTACT_INFO = {
  email: PERSONAL_INFO.email,
  phone: PERSONAL_INFO.phone,
  location: "Christchurch, New Zealand",
  social: {
    github: "https://github.com/yanyin-chen-1156325",
    linkedin: "", // Add your LinkedIn URL
  }
};

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: "Yan-Yin Chen - Software Developer",
  titleTemplate: "%s | Yan-Yin Chen",
  defaultDescription: "Software Developer with experience in C#, Python, JavaScript, and cloud technologies. Passionate about solving real-world problems through code.",
  siteUrl: "https://yanyin-chen-1156325.github.io",
  defaultImage: "/images/profile.jpg" // Add your profile image
};
// Personal Information Types
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  profileImage?: string;
  bio: string;
}

// Skills Types
export interface TechnicalSkill {
  category: string;
  skills: string[];
}

export interface SoftSkill {
  skill: string;
  description: string;
}

// Work Experience Types
export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

// Education Types
export interface Education {
  id: string;
  institution: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  courses?: string[];
  location: string;
}

// Certification Types
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  credentialId?: string;
  issueDate: string;
  expiryDate?: string;
  url?: string;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
  category: ProjectCategory;
  startDate: string;
  endDate?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export type ProjectCategory = 'web' | 'mobile' | 'desktop' | 'automation' | 'cloud' | 'other';

// Language Types
export interface Language {
  name: string;
  level: 'native' | 'fluent' | 'intermediate' | 'basic';
}

// Theme Types
export type Theme = 'light' | 'dark';

// Language Types for i18n
export type SupportedLanguage = 'en' | 'zh';

// Navigation Types
export interface NavItem {
  id: string;
  labelKey: string;
  path: string;
  icon?: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  id?: string;
  title?: string;
}

// Animation Types
export interface AnimationConfig {
  initial: object;
  animate: object;
  transition: object;
}

// SEO Types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}
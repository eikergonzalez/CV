// Define types for the portfolio
export type Language = 'en' | 'es';

export interface LanguageContent {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    cta: string;
    downloadCvEn: string;
    downloadCvEs: string;
  };
  about: {
    title: string;
    content: string[];
  };
  skills: {
    title: string;
    description: string;
  };
  projects: {
    title: string;
    description: string;
    viewProject: string;
    sourceCode: string;
  };
  experience: {
    title: string;
    education: string;
    work: string;
  };
  contact: {
    title: string;
    description: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    phone: string;
    location: string;
    connect: string;
  };
  footer: {
    rights: string;
  };
  info: {
    email: string;
    phone: string;
    location: string;
  },
  others? : {
    other1?: string;
    other2?: string;
    other3?: string;
    other4?: string;
    other5?: string;
    other6?: string;
  }
}

export interface Skill {
  name: string;
  level: number;
  color: string;
  icon?: React.ReactNode;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  icon?: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string[];
  type: 'education' | 'work';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}
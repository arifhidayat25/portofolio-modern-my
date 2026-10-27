export type Language = 'id' | 'en';

export interface PersonalInfo {
  name: string;
  brandName?: string;
  badge: string;
  headlineRole: string;
  bioShort: string;
  bioLong: string[];
  contactEmail: string;
  phone: string;
  location: string;
  availableForHire: boolean;
  stats: {
    experienceYears: string;
    experienceYearsLabel: string;
    completedProjects: string;
    completedProjectsLabel: string;
    happyClients: string;
    happyClientsLabel: string;
    technologiesMastered: string;
    technologiesMasteredLabel: string;
  };
  cvUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  achievements?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface ServiceCardItem {
  id: string;
  projectsCount: string;
  title: string;
  description: string;
  icon: string;
  isFeatured?: boolean;
}

export interface SkillItem {
  name: string;
  category: string;
  proficiency: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface UILabels {
  nav: {
    home: string;
    about: string;
    education: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    letsTalk: string;
  };
  hero: {
    viewPortfolio: string;
    contactMe: string;
    downloadCv?: string;
    scrollDown: string;
    toExplore: string;
    badgeLeft: string;
    badgeRight: string;
  };
  about: {
    tag: string;
    title: string;
    lead: string;
    contactTitle: string;
    contactPrompt: string;
    hireMe: string;
    downloadCv: string;
    highlights?: {
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  education: {
    tag: string;
    title: string;
    desc: string;
  };
  experience: {
    tag: string;
    title: string;
    desc: string;
  };
  skills: {
    tag: string;
    title: string;
    desc: string;
    techMasteryTag: string;
    techMasteryTitle: string;
    categories: string[];
  };
  projects: {
    tag: string;
    title: string;
    desc: string;
    allCategory: string;
    viewDetails: string;
    techUsed: string;
    visitDemo: string;
    viewSource: string;
  };
  contact: {
    ctaTag: string;
    ctaHeadline: string;
    ctaSubtext: string;
    ctaBtn: string;
    tag: string;
    title: string;
    desc: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationVal: string;
    socialTitle: string;
    formTitle: string;
    formSub: string;
    nameLabel: string;
    emailInputLabel: string;
    subjectLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successAlert: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    backToTop: string;
  };
}

export interface PortfolioContent {
  personalInfo: PersonalInfo;
  educationData: EducationItem[];
  experienceData: ExperienceItem[];
  serviceCardsData: ServiceCardItem[];
  skillsData: SkillItem[];
  projectsData: ProjectItem[];
  socialLinks: SocialLink[];
  ui: UILabels;
}

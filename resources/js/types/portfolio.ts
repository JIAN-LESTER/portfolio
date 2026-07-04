export interface PersonalInfo {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    location: string;
    availability?: string;
    email: string;
    github?: string;
    linkedin?: string;
    website?: string;
    image?: string;
    resumeUrl?: string;
}

export interface EducationItem {
    school: string;
    degree: string;
    field: string;
    start: string;
    end: string;
    honor?: string;
    description?: string;
}

export interface ExperienceItem {
    company: string;
    role: string;
    start: string;
    end: string;
    location?: string;
    highlights: string[];
}

export interface ProjectItem {
    title: string;
    tag: string;
    summary: string;
    description: string;
    stack: string[];
    github?: string;
    live?: string;
}

export interface ServiceItem {
    code: string;
    title: string;
    paragraphs: string[];
}

export interface SkillItem {
    name: string;
    /** A lucide-vue-next icon name, kebab-case (e.g. "git-branch"). */
    logo?: string;
}

export interface SkillGroup {
    title: string;
    items: SkillItem[];
}

export interface PortfolioData {
    personal: PersonalInfo;
    education: EducationItem;
    experience: ExperienceItem;
    projects: ProjectItem[];
    services: ServiceItem[];
    skills: SkillGroup[];
}
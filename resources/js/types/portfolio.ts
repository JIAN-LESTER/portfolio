export interface PersonalInfo {
  name: string
  role: string
  tagline: string
  bio: string
  email: string
  phone?: string
  location: string
  github?: string
  linkedin?: string
  resumeUrl?: string
  image?: string
}

export interface EducationItem {
  school: string
  degree: string
  field: string
  start: string
  end: string
  description?: string
}

export interface SkillGroup {
  title: string
  items: SkillItem[]
}

export interface SkillItem {
  name: string
  logo?: string
}

export interface ProjectItem {
  title: string
  description: string
  stack: string[]
  github?: string
  live?: string
  image?: string
}

export interface PortfolioData {
  personal: PersonalInfo
  education: EducationItem[]
  skills: SkillGroup[]
  projects: ProjectItem[]
}

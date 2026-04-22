import type { PortfolioData } from '@/types/portfolio'

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Jian Lester Tabarno',
    role: 'Full Stack Developer',
    tagline: 'I build clean, responsive, and user-friendly web applications.',
    bio: 'I am a developer passionate about creating modern web applications using Vue, Laravel, TypeScript, and Tailwind CSS.',
    email: 'jianlestertabarno2014@gmail.com',
    phone: '09072894778',
    location: 'Kibawe, Bukidnon, Philippines',
    github: 'https://github.com/JIAN-LESTER',
    linkedin: 'www.linkedin.com/in/jian-lester-tabarno-074139333',
    resumeUrl: '/resume.pdf',
    image: '/images/profile.jpg',
  },

  education: [
    {
      school: 'Central Mindanao University ',
      degree: 'Bachelor of Science',
      field: 'Information Technology',
      start: '2022',
      end: '2026',
      description: 'Focused on software development, web development, and mobile development.',
    },
  ],

  skills: [
    {
      title: 'Frontend',
      items: ['Vue 3', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      items: ['Laravel', 'PHP', 'Node.js', 'REST API'],
    },
    {
      title: 'Database & Tools',
      items: ['MySQL', 'Git', 'GitHub', 'Vite', 'Postman'],
    },
  ],

  projects: [
    {
      title: 'Personal Portfolio',
      description: 'A responsive personal portfolio website built with Vue 3 and Tailwind CSS.',
      stack: ['Vue 3', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://your-portfolio-site.com',
    },
    {
      title: 'Task Manager App',
      description: 'A task management application with authentication, CRUD operations, and filtering.',
      stack: ['Laravel', 'Vue', 'MySQL'],
      github: 'https://github.com/yourusername/task-manager',
    },
    {
      title: 'E-commerce Dashboard',
      description: 'An admin dashboard for managing products, users, and reports.',
      stack: ['Vue', 'Laravel', 'Chart.js'],
      github: 'https://github.com/yourusername/ecommerce-dashboard',
    },
  ],
}
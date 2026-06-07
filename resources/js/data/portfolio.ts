import type { PortfolioData } from '@/types/portfolio'

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Jian Lester Tabarno',
    role: 'IT Student | Software Developer',
    tagline: 'I build web and mobile applications with a focus on software development, testing, UI/UX, and AI-powered data retrieval.',
    bio: 'I am an IT student and software developer with experience in web and mobile development, software testing, UI/UX design, and AI-powered systems using RAG, Gemini, Pinecone, and NLP.',
    email: 'jianlestertabarno2014@gmail.com',
    phone: '09072894778',
    location: 'Kibawe, Bukidnon, Philippines',
    github: 'https://github.com/JIAN-LESTER',
    linkedin: 'https://www.linkedin.com/in/jian-lester-tabarno-074139333/',
    resumeUrl: '/resume.pdf',
    image: '/images/profile.jpg',
  },

  education: [
    {
      school: 'Central Mindanao University',
      degree: 'BS',
      field: 'Information Technology',
      start: '2022',
      end: '2026',
      description: 'Cum Laude. Track: Software Development. GWA: 1.551.',
    },
  ],

  skills: [
    {
      title: 'Programming Languages',
      items: ['PHP', 'Dart', 'TypeScript', 'SQL'],
    },
    {
      title: 'Frameworks',
      items: ['Laravel', 'Flutter', 'React', 'Next.js'],
    },
    {
      title: 'Database/Cloud',
      items: ['MySQL', 'Firebase', 'Firestore'],
    },
    {
      title: 'AI/Tools',
      items: ['RAG', 'Pinecone', 'Gemini', 'NLP'],
    },
  ],

  projects: [
    {
      title: 'OASP Assist: An Inquiry Assistant Application for CMU-OASP Using AI-Powered Data Retrieval',
      description: 'Developed a cross-platform application for CMU-OASP using AI-driven retrieval to answer student inquiries with generative AI, embeddings, and real-time data access for fast, accurate responses across platforms.',
      stack: ['RAG', 'Gemini', 'Pinecone', 'NLP'],
    },
    {
      title: 'Gym Management System With QR Scanner Integration for EZ Fitness Gym in Valencia, Bukidnon',
      description: 'Developed a gym management system with inventory and POS integration, featuring QR-based member authentication and attendance tracking for EZ Fitness Gym.',
      stack: ['Laravel', 'PHP', 'MySQL'],
    },
    {
      title: 'BukCast: A System Integration of Real-Time Weather Monitoring in Bukidnon',
      description: 'Developed a web application that collects, processes, and displays real-time weather data on a map and dashboard for Bukidnon.',
      stack: ['Web Application', 'Real-Time Data', 'Dashboard'],
    },
  ],
}

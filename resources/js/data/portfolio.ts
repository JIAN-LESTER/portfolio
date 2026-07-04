import type { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Jian Lester Tabarno',
        role: 'Full-Stack Web & Mobile Developer',
        tagline:
            'I build the systems behind the answer — retrieval pipelines, real-time dashboards, and cross-platform apps that hold up once real people start using them.',
        bio: 'BS Information Technology graduate (Cum Laude) specializing in full-stack web and mobile development. I work across Laravel, React, Flutter, Firebase, and AI-assisted retrieval — building authentication, dashboards, real-time data, APIs, and database layers that fit together as one system rather than a pile of features. Currently relocating to Singapore and looking for a team that ships.',
        location: 'Philippines → Relocating to Singapore, Aug 2026',
        availability: 'Available August · open to remote work in July',
        email: 'tabarno.jian@gmail.com',
        github: 'https://github.com/JIAN-LESTER',
        linkedin: 'https://www.linkedin.com/in/jian-lester-tabarno/',
        website: 'https://jianlester.dev',
        image: '/images/profile.jpg',
        resumeUrl: '/images/Jian_Tabarno_Resume.pdf',
    },

    education: {
        school: 'Central Mindanao University',
        degree: 'Bachelor of Science',
        field: 'Information Technology',
        start: '2022',
        end: '2026',
        honor: 'Cum Laude',
        description:
            'Graduated with a GWA of 1.551 (1.00 is highest) — coursework and thesis work centered on applied software systems rather than theory alone.',
    },

    experience: {
        company: 'Engagis Incorporated',
        role: 'IT Intern / Software Tester',
        start: 'Feb 2026',
        end: 'May 2026',
        highlights: [
            'Tested internal web and mobile applications, documented issues, verified fixes, and supported QA workflows across development cycles.',
            'Debugged web modules and shipped front-end improvements that resolved reported usability issues.',
            'Implemented and tested mobile app features — user-facing workflows, validation, and functionality checks — before release.',
        ],
    },

    projects: [
        {
            title: 'OASP Assist',
            tag: 'AI · RAG',
            summary:
                'An inquiry assistant for CMU\u2019s Office of Admissions, Scholarships & Placement.',
            description:
                'Cross-platform Flutter app that answers student inquiries using retrieval-augmented generation. Pinecone handles vector search over admissions data, Gemini generates the response, and Firebase Cloud Functions (TypeScript) tie retrieval, embeddings, and real-time data together so answers stay fast and grounded instead of generic.',
            stack: ['Flutter', 'Firebase', 'Pinecone', 'Gemini', 'RAG', 'TypeScript'],
        },
        {
            title: 'Gym Management System',
            tag: 'Web · Systems',
            summary:
                'QR-based membership and operations platform for EZ Fitness Gym, Valencia, Bukidnon.',
            description:
                'Laravel system covering inventory, point-of-sale, and day-to-day gym operations, built around QR-code member authentication and attendance tracking — replacing manual sign-in sheets with something the front desk actually wants to use.',
            stack: ['Laravel', 'PHP', 'Blade', 'JavaScript', 'MySQL'],
        },
        {
            title: 'BukCast',
            tag: 'Web · Real-time data',
            summary: 'Real-time weather monitoring for the province of Bukidnon.',
            description:
                'A system that collects, processes, and displays live weather data on a map and dashboard, giving a province-wide view of conditions as they change rather than a single-station snapshot.',
            stack: ['Laravel', 'PHP', 'Blade', 'JavaScript', 'MySQL'],
        },
        {
            title: 'JobTrackr',
            tag: 'Web Â· Productivity',
            summary:
                'A personal job application tracker with a companion browser extension.',
            description:
                'A focused tracking system for managing job applications, company details, statuses, notes, and follow-ups. Its browser extension can capture job details directly from job websites and add them to JobTrackr, reducing manual entry and keeping the search pipeline organized.',
            stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Browser Extension'],
        },
    ],

    services: [
        {
            code: 'WEB',
            title: 'Web Application Development',
            paragraphs: [
                'I build full-stack web applications with clean user interfaces, reliable backend logic, and database-driven features. This includes developing responsive dashboards, management systems, tracking platforms, admin panels, and business tools that are easy to use and organized.',
                'I focus on both functionality and design, making sure the system is not only working properly but also user-friendly, responsive, and visually clean across different screen sizes.',
            ],
        },
        {
            code: 'MOBILE',
            title: 'Mobile Application Development',
            paragraphs: [
                'I develop cross-platform and native mobile applications with practical features, smooth navigation, and clean UI design. I build mobile apps that can include authentication, real-time databases, file uploads, notifications, forms, dashboards, offline-ready features, and API integrations.',
                'My mobile development focuses on creating functional, responsive, and user-friendly applications for Android and iOS, suitable for businesses, organizations, student systems, tracking systems, and internal tools.',
            ],
        },
        {
            code: 'AI',
            title: 'AI Development',
            paragraphs: [
                'I develop AI-powered features using generative AI and retrieval-augmented generation, also known as RAG. These features can help applications provide automated responses, analyze documents, answer user inquiries, generate content, and improve user support.',
                'This service is suitable for AI chatbots, inquiry assistants, document-based search systems, resume analyzers, automated FAQ systems, and smart application features.',
            ],
        },
        {
            code: 'DESIGN',
            title: 'Web Design',
            paragraphs: [
                'I design clean, modern, and user-friendly interfaces for websites and web applications. This includes creating wireframes, prototypes, page layouts, dashboard designs, and responsive UI designs that guide the development process.',
                'My goal is to create designs that are visually organized, easy to navigate, and aligned with the purpose of the system before development begins.',
            ],
        },
        {
            code: 'DATA',
            title: 'Database Design',
            paragraphs: [
                'I design structured and efficient databases for web, mobile, and full-stack applications. This includes planning tables, collections, relationships, user data, system records, and data flow to support the features of the application.',
                'I focus on creating database structures that are organized, scalable, and easy to maintain for systems such as dashboards, management platforms, tracking systems, and business applications.',
            ],
        },
        {
            code: 'SYS',
            title: 'System Design',
            paragraphs: [
                'I design the overall structure and flow of software systems before development. This includes planning system modules, user roles, features, workflows, data flow, architecture, and how different parts of the application will work together.',
                'This helps ensure that the system is clear, organized, scalable, and easier to develop, test, and maintain.',
            ],
        },
    ],

    // `logo` holds a lucide-vue-next icon name (kebab-case), rendered dynamically
    // in SkillsSection.vue. A few are thematic stand-ins rather than brand marks,
    // since lucide is a generic icon set, not a brand-logo set — e.g. `coffee`
    // for Java, `wind` for Tailwind, `flame` for Firebase, `atom` for React
    // (which is, fittingly, React's actual logo shape).
    skills: [
        {
            title: 'Backend',
            items: [
                { name: 'PHP', logo: 'braces' },
                { name: 'Laravel', logo: 'layers' },
                { name: 'REST APIs', logo: 'network' },
                { name: 'Firebase Functions', logo: 'firebase' },
                { name: 'Prisma', logo: 'database' },
                { name: 'Python', logo: 'terminal' },
                { name: 'Java', logo: 'coffee' },
            ],
        },
        {
            title: 'Frontend',
            items: [
                { name: 'JavaScript', logo: 'code' },
                { name: 'TypeScript', logo: 'file-type' },
                { name: 'React', logo: 'atom' },
                { name: 'Next.js', logo: 'server' },
                { name: 'Blade', logo: 'layout-template' },
                { name: 'Tailwind CSS', logo: 'wind' },
            ],
        },
        {
            title: 'Mobile',
            items: [
                { name: 'Dart', logo: 'target' },
                { name: 'Flutter', logo: 'smartphone' },
            ],
        },
        {
            title: 'Databases & Cloud',
            items: [
                { name: 'MySQL', logo: 'database' },
                { name: 'PostgreSQL', logo: 'database' },
                { name: 'Firestore', logo: 'cloud' },
                { name: 'Firebase Storage', logo: 'folder-open' },
                { name: 'SQL', logo: 'table-2' },
                { name: 'NoSQL', logo: 'blocks' },
            ],
        },
        {
            title: 'AI & Retrieval',
            items: [
                { name: 'RAG', logo: 'brain' },
                { name: 'Pinecone', logo: 'search' },
                { name: 'Gemini', logo: 'sparkles' },
                { name: 'Embeddings', logo: 'scan-search' },
                { name: 'NLP', logo: 'message-square-text' },
            ],
        },
        {
            title: 'Design & UX',
            items: [
                { name: 'Figma', logo: 'pen-tool' },
                { name: 'Wireframing', logo: 'drafting-compass' },
                { name: 'Prototyping', logo: 'panel-top' },
                { name: 'UI Design', logo: 'palette' },
            ],
        },
        {
            title: 'Tools & Deployment',
            items: [
                { name: 'Git', logo: 'git-branch' },
                { name: 'GitHub', logo: 'github' },
                { name: 'Docker', logo: 'container' },
                { name: 'Vercel', logo: 'triangle' },
                { name: 'Postman', logo: 'send' },
                { name: 'Firebase', logo: 'flame' },
            ],
        },
    ],
};

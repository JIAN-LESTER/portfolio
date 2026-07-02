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
        github: 'https://github.com/jianlester',
        linkedin: 'https://linkedin.com/in/jianlestertabarno',
        website: 'https://jianlester.dev',
        image: '/images/profile.jpg',
        resumeUrl: '/resume/Jian_Tabarno_Resume.pdf',
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
            stack: [
                'Flutter',
                'Firebase',
                'Pinecone',
                'Gemini',
                'RAG',
                'TypeScript',
            ],
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
            summary:
                'Real-time weather monitoring for the province of Bukidnon.',
            description:
                'A system that collects, processes, and displays live weather data on a map and dashboard, giving a province-wide view of conditions as they change rather than a single-station snapshot.',
            stack: ['Laravel', 'PHP', 'Blade', 'JavaScript', 'MySQL'],
        },
    ],

    services: [
        {
            code: 'WEB',
            title: 'Web Application Development',
            description:
                'End-to-end web apps built on Laravel and React/Next.js — from schema to shipped UI.',
            deliverables: [
                'REST APIs',
                'Authentication & dashboards',
                'Responsive, production-ready front ends',
            ],
        },
        {
            code: 'MOB',
            title: 'Mobile App Development',
            description:
                'Cross-platform apps in Flutter that share logic across iOS and Android without feeling like a compromise.',
            deliverables: [
                'Flutter / Dart builds',
                'Firebase-backed sync',
                'Real-device QA before release',
            ],
        },
        {
            code: 'AI',
            title: 'AI-Powered Features & RAG',
            description:
                'Retrieval-augmented features that ground generative answers in your own data instead of guessing.',
            deliverables: [
                'Pinecone vector search',
                'Gemini integration',
                'Embeddings & prompt tuning',
            ],
        },
        {
            code: 'SYS',
            title: 'Systems & Database Design',
            description:
                'The unglamorous part done right — schemas, real-time data pipelines, and integrations that hold up under load.',
            deliverables: [
                'MySQL / PostgreSQL / Firestore',
                'Real-time dashboards',
                'QR & hardware-adjacent integrations',
            ],
        },
    ],

    skills: [
        {
            title: 'Backend',
            items: [
                { name: 'PHP', logo: 'php' },
                { name: 'Laravel', logo: 'laravel' },
                { name: 'REST APIs', logo: 'api' },
                { name: 'Firebase Functions', logo: 'firebase' },
                { name: 'Prisma', logo: 'database' },
                { name: 'Python', logo: 'python' },
                { name: 'Java', logo: 'coffee' },
            ],
        },
        {
            title: 'Frontend',
            items: [
                { name: 'JavaScript', logo: 'javascript' },
                { name: 'TypeScript', logo: 'typescript' },
                { name: 'React', logo: 'react' },
                { name: 'Next.js', logo: 'nextjs' },
                { name: 'Blade', logo: 'layout-template' },
                { name: 'Tailwind CSS', logo: 'wind' },
            ],
        },
        {
            title: 'Mobile',
            items: [
                { name: 'Dart', logo: 'dart' },
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

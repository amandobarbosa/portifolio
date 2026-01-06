import type { Translations } from "./pt";

export const en: Translations = {
    header: {
        role: "Developer",
        nav: {
            about: "ABOUT ME",
            resume: "RESUME",
            projects: "PROJECTS",
            contact: "CONTACT",
        },
    },

    hero: {
        greeting: "Hello",
        subtitle: "My profile and my projects",
        role: "Developer",
        resumeButton: "RESUME",
        projectsButton: "PROJECTS",
        description1: "Developer focused on creating efficient and scalable digital experiences. Specialized in bridging functional design with solid software architecture.",
        description2: "Always seeking technical challenges that require innovative solutions. Let's",
        descriptionLink: "connect",
        descriptionEnd: "and build something meaningful?",
    },

    about: {
        title: "About",
        titleHighlight: "Me",
        description1: "I'm a",
        role: "Fullstack Developer",
        description1End: "with experience in transforming complex requirements into high-performance digital products. Focused on delivering clean code and solutions that generate real value.",
        description2: "My journey began in 2022 as a",
        freelancer: "freelancer",
        description2Middle: ", developing end-to-end projects. Currently at",
        company: "Code 4 Performance",
        description2End: ", focusing on high-level interface development.",
        description3: "I constantly seek technical evolution to apply best software engineering practices in every delivery.",
        languages: {
            portuguese: "Portuguese",
            english: "English",
            native: "Native",
            advanced: "Advanced",
        },
        cards: {
            performance: {
                title: "High Performance",
                description: "Optimized code for maximum speed and efficiency.",
            },
            design: {
                title: "Modern Design",
                description: "Elegant interfaces following UX best practices.",
            },
            accessibility: {
                title: "Accessibility",
                description: "Inclusive experiences for all users.",
            },
            responsive: {
                title: "Responsive",
                description: "Perfect on any device and screen size.",
            },
        },
    },

    skills: {
        title: "My",
        titleHighlight: "Skills",
        subtitle: "Technologies and tools I use to transform ideas into reality",
        categories: {
            frontend: "Frontend",
            backend: "Backend",
            tools: "Tools",
        },
    },

    experience: {
        title: "My",
        titleHighlight: "Experience",
        subtitle: "Professional journey built with dedication and challenging projects",
        jobs: {
            developer: {
                title: "Fullstack Software Developer",
                company: "Code 4 Performance",
                period: "Mar 2024 - Present",
                description: "Fullstack development with Python (FastAPI), Node.js, and React. Responsible for architecting scalable APIs and high-performance interfaces, ensuring technical excellence and user focus.",
            },
            freelancer: {
                title: "Fullstack Freelance Developer",
                company: "Self-employed",
                period: "2022 - Present",
                description: "Development of complete web projects, from conception to deployment. Remote work with diverse clients, delivering customized and high-quality solutions.",
            },
        },
        achievements: {
            performance: {
                title: "Optimized Performance",
                description: "25% improvement in load time on production project.",
                badge: "+25% faster",
            },
            satisfaction: {
                title: "Client Satisfaction",
                description: "100% positive reviews on freelance projects.",
                badge: "100% approval",
            },
            learning: {
                title: "Continuous Learning",
                description: "Always exploring new technologies and development methodologies.",
                badge: "Evolving",
            },
        },
    },

    projects: {
        title: "My",
        titleHighlight: "Projects",
        subtitle: "Some of the projects I built with dedication and creativity",
        viewMore: "See More on GitHub",
        featured: "Featured",
        viewDemo: "View Demo",
        viewCode: "View Code",
        items: {
            eduarda: {
                type: "Landing Page & CMS",
                title: "Eduarda Lima Beauty",
                description: "Sophisticated platform for a professional makeup artist, focusing on brides and black skin. Includes an administrative panel for managing services, portfolio, and appointments.",
            },
            abds: {
                type: "Institutional Website",
                title: "ABDS Solutions",
                description: "The official website of ABDS Solutions, a technology company specialized in custom software development. Focused on delivering excellence with quality, scalability, and security to transform businesses.",
            },
            netsuite: {
                type: "ERP Integration",
                title: "NetSuite Data Management",
                description: "Private project developed for Code 4 Performance. High-performance intermediate platform for NetSuite ERP, with operational dashboards and large data volume synchronization.",
            },
            organs: {
                type: "Main Project",
                title: "Organ Donation System",
                description: "Private project developed for Code 4 Performance. Web platform for a laboratory specialized in organ donation, focusing on accessibility and user-centered UX.",
            },
            portfolio: {
                type: "Open Source",
                title: "Personal Portfolio",
                description: "This website! A high-performance portfolio built with Next.js, React 19, and Framer Motion. Fully responsive, accessible, and open source.",
            },
        },
    },

    education: {
        title: "Academic",
        titleHighlight: "Background",
        subtitle: "Continuous education to always stay updated",
        degree: {
            institution: "Estácio",
            course: "Bachelor's in Computer Science",
            period: "Feb 2022 - Jul 2026",
            endDate: "2026-07-31",
            progress: "Course Progress",
            status: "In progress",
            completedStatus: "Completed",
        },
        certifications: {
            title: "Courses & Certifications",
            items: {
                react: { title: "Advanced React", provider: "Alura / Udemy" },
                typescript: { title: "Complete TypeScript", provider: "Rocketseat" },
                node: { title: "Node.js Fundamentals", provider: "Origamid" },
                azure: { title: "Azure Fundamentals", provider: "Microsoft Learn" },
            },
        },
    },

    contact: {
        title: "Let's",
        titleHighlight: "Talk?",
        subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's create something amazing together!",
        methods: {
            email: "Email",
            linkedin: "LinkedIn",
            github: "GitHub",
        },
        additionalInfo: {
            title: "Additional Information",
            availability: {
                label: "Availability",
                value: "Freelance & Full-time",
            },
            responseTime: {
                label: "Response Time",
                value: "Usually within 24h",
            },
        },
        form: {
            name: "Name",
            namePlaceholder: "Your full name",
            email: "Email",
            emailPlaceholder: "your@email.com",
            subject: "Subject",
            subjectPlaceholder: "What's the subject?",
            message: "Message",
            messagePlaceholder: "Tell me more about your project...",
            submit: "Send Message",
            submitting: "Sending...",
            success: "Message sent successfully! I'll get back to you soon.",
            error: "Oops! Something went wrong while sending the message. Please try again.",
            connectionError: "Connection error. Check your internet and try again.",
        },
    },

    footer: {
        nav: {
            about: "About",
            skills: "Skills",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact",
        },
        availableStatus: "Available for new projects",
        copyright: "All rights reserved.",
    },
} as const;

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
        description1: "I transform lines of code into digital experiences that delight and solve problems. With a keen eye for detail and a passion for clarity, I seek the perfect balance between aesthetics and functionality in every project I develop.",
        description2: "Driven by curiosity to understand how things work, I'm always ready for the next technical challenge. Let's",
        descriptionLink: "share this journey",
        descriptionEnd: "and build something memorable?",
    },

    about: {
        title: "About",
        titleHighlight: "Me",
        description1: "I'm a",
        role: "Developer",
        description1End: "passionate about transforming ideas into impactful digital experiences. With over 3 years of experience, I combine technical expertise with product vision to deliver solutions that truly make a difference.",
        description2: "My journey began in 2022 as a",
        freelancer: "freelancer",
        description2Middle: ", where I developed diverse projects that allowed me to master both frontend and backend. Currently, I work at",
        company: "Code 4 Performance",
        description2End: ", creating responsive and intuitive interfaces.",
        description3: "My natural curiosity drives me to constantly explore new technologies and methodologies to deliver the best possible result.",
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
                title: "Software Developer",
                company: "Code 4 Performance",
                period: "Mar 2024 - Present",
                description: "Creating responsive and intuitive interfaces using React, TypeScript, HTML, CSS, and JavaScript. Developing modern web solutions focused on performance and user experience.",
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
            period: "Feb 2022 - Dec 2025",
            progress: "Course Progress",
            status: "In progress",
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

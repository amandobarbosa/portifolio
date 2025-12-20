"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/hooks/useTranslation";


export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();


  const projects = [
    {
      featured: false,
      type: t.projects.items.netsuite.type,
      title: t.projects.items.netsuite.title,
      description: t.projects.items.netsuite.description,
      tech: ["React", "TypeScript", "Redux", "Tailwind CSS", "DevExtreme", "Zod"],
      image: "☁️",
      demoUrl: "",
      githubUrl: "",
    },
    {
      featured: false,
      type: t.projects.items.organs.type,
      title: t.projects.items.organs.title,
      description: t.projects.items.organs.description,
      tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Azure"],
      image: "🏥",
      demoUrl: "",
      githubUrl: "",
    },
    {
      featured: true,
      type: t.projects.items.portfolio.type,
      title: t.projects.items.portfolio.title,
      description: t.projects.items.portfolio.description,
      tech: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "🚀",
      demoUrl: "",
      githubUrl: "https://github.com/amandobarbosa/portifolio",
    },
  ];

  return (
    <section id="projetos" className="section relative bg-[var(--bg-secondary)] border-b border-[var(--border-color)] overflow-hidden" ref={ref}>
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[var(--text-primary)] mb-4">
            {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-[600px] mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col"
              variants={staggerItem}
            >
              <div className={`relative h-[240px] flex items-center justify-center bg-[var(--bg-sidebar)] text-[4rem] overflow-hidden group/image border-b border-[var(--border-color)]`}>
                {project.image}
                
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      className="w-11 h-11 flex items-center justify-center bg-white rounded-full text-[var(--text-primary)] hover:scale-110 transition-transform duration-250"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.9 }}
                      title={t.projects.viewDemo}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </motion.a>
                  )}
                  
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      className="w-11 h-11 flex items-center justify-center bg-white rounded-full text-[var(--text-primary)] hover:scale-110 transition-transform duration-250"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.9 }}
                      title={t.projects.viewCode}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                {project.featured && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--accent-primary)] text-white rounded-[var(--radius-sm)] text-[0.65rem] font-bold uppercase tracking-wider mb-4 w-fit">⭐ {t.projects.featured}</span>
                )}
                
                <span className="text-[0.7rem] font-bold text-[var(--accent-primary)] uppercase tracking-wider mb-2">{project.type}</span>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{project.title}</h3>
                
                <p className="text-[0.85rem] text-[var(--text-secondary)] leading-[1.6] mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-[0.7rem] px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-[var(--radius-sm)] text-[var(--text-secondary)]">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.projects.viewMore}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

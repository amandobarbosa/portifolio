"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { siteConfig } from "@/config/site";
import { Github, ExternalLink, ArrowRight, Star, Cloud, Stethoscope } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";


export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();


  const projects = [
    {
      featured: true,
      type: t.projects.items.eduarda.type,
      title: t.projects.items.eduarda.title,
      description: t.projects.items.eduarda.description,
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "React Query"],
      image: "/projects/eduarda-beauty.png",
      demoUrl: "https://eduarda-carmo-beauty.vercel.app/",
      githubUrl: "",
    },
    {
      featured: false,
      type: t.projects.items.abds.type,
      title: t.projects.items.abds.title,
      description: t.projects.items.abds.description,
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/projects/abds-solutions.png",
      demoUrl: "https://abds-solutions.vercel.app/",
      githubUrl: "",
    },
    {
      featured: false,
      type: t.projects.items.netsuite.type,
      title: t.projects.items.netsuite.title,
      description: t.projects.items.netsuite.description,
      tech: ["React", "TypeScript", "Redux", "Tailwind CSS", "DevExtreme", "Zod"],
      icon: <Cloud size={64} className="text-[var(--accent-primary)] opacity-20" />,
      demoUrl: "",
      githubUrl: "",
    },
    {
      featured: false,
      type: t.projects.items.organs.type,
      title: t.projects.items.organs.title,
      description: t.projects.items.organs.description,
      tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Azure"],
      icon: <Stethoscope size={64} className="text-[var(--accent-primary)] opacity-20" />,
      demoUrl: "",
      githubUrl: "",
    },
    {
      featured: false,
      type: t.projects.items.portfolio.type,
      title: t.projects.items.portfolio.title,
      description: t.projects.items.portfolio.description,
      tech: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/projects/personal-portfolio.png",
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
              <div className={`relative h-[240px] flex items-center justify-center bg-[var(--bg-sidebar)] overflow-hidden group/image border-b border-[var(--border-color)]`}>
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/image:scale-110"
                  />
                ) : (
                  project.icon
                )}
                
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
                      <ExternalLink size={20} />
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
                      <Github size={20} />
                    </motion.a>
                  )}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                {project.featured && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--accent-primary)] text-white rounded-[var(--radius-sm)] text-[0.65rem] font-bold uppercase tracking-wider mb-4 w-fit">
                    <Star size={10} fill="currentColor" /> {t.projects.featured}
                  </span>
                )}
                
                <span className="text-[0.7rem] font-bold text-[var(--accent-primary)] uppercase tracking-wider mb-2">{project.type}</span>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{project.title}</h3>
                
                <p className="text-[0.85rem] text-[var(--text-secondary)] leading-[1.6] mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-[0.7rem] px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-[var(--radius-sm)] text-[var(--text-secondary)]">{tech}</span>
                  ))}
                </div>

                {/* Mobile-only CTA buttons */}
                <div className="flex gap-4 mt-auto md:hidden pt-4 border-t border-[var(--border-color)/10]">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--accent-primary)] text-white text-[0.75rem] font-bold uppercase tracking-wider rounded-lg transition-colors active:bg-[var(--accent-secondary)]"
                    >
                      <ExternalLink size={14} />
                      {t.projects.viewDemo}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--bg-sidebar)] border border-[var(--border-color)] text-[var(--text-primary)] text-[0.75rem] font-bold uppercase tracking-wider rounded-lg transition-colors active:bg-[var(--bg-secondary)]"
                    >
                      <Github size={14} />
                      {t.projects.viewCode}
                    </a>
                  )}
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
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

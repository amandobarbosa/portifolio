"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useTranslation } from "@/hooks/useTranslation";


export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();


  const experiences = [
    {
      title: t.experience.jobs.developer.title,
      company: t.experience.jobs.developer.company,
      period: t.experience.jobs.developer.period,
      description: t.experience.jobs.developer.description,
      tags: ["React", "TypeScript", "HTML/CSS", "JavaScript"]
    },
    {
      title: t.experience.jobs.freelancer.title,
      company: t.experience.jobs.freelancer.company,
      period: t.experience.jobs.freelancer.period,
      description: t.experience.jobs.freelancer.description,
      tags: ["React", "Node.js", "TypeScript", "APIs REST"]
    },
  ];


  const achievements = [
    {
      icon: "🚀",
      title: t.experience.achievements.performance.title,
      description: t.experience.achievements.performance.description,
      badge: t.experience.achievements.performance.badge
    },
    {
      icon: "👥",
      title: t.experience.achievements.satisfaction.title,
      description: t.experience.achievements.satisfaction.description,
      badge: t.experience.achievements.satisfaction.badge
    },
    {
      icon: "📚",
      title: t.experience.achievements.learning.title,
      description: t.experience.achievements.learning.description,
      badge: t.experience.achievements.learning.badge
    },
  ];

  return (
    <section id="experiencia" className="section relative bg-[var(--bg-secondary)] border-b border-[var(--border-color)] overflow-hidden" ref={ref}>
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[var(--text-primary)] mb-4">
            {t.experience.title} <span className="gradient-text">{t.experience.titleHighlight}</span>
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-[600px] mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 items-start">
          
          <motion.div
            className="relative flex flex-col gap-8 pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[var(--border-color)]"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {experiences.map((exp) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                className="relative"
                variants={staggerItem}
              >
                <div className="absolute -left-8 top-1.5 w-6 h-6 flex items-center justify-center bg-[var(--bg-secondary)]">
                  <div className="w-3 h-3 bg-[var(--accent-primary)] rounded-full shadow-[0_0_0_4px_var(--bg-secondary)]"></div>
                </div>
                
                <motion.div 
                  className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-5 sm:p-6 transition-all duration-250 hover:shadow-sm md:hover:translate-x-[5px]"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">{exp.title}</h3>
                      <span className="text-[var(--accent-primary)] font-medium text-sm">{exp.company}</span>
                    </div>
                    <span className="text-[0.75rem] text-[var(--text-muted)] font-medium uppercase tracking-wider">{exp.period}</span>
                  </div>
                  
                  <p className="text-[0.9rem] text-[var(--text-secondary)] leading-[1.6] mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-[0.7rem] font-medium rounded-full border border-[var(--border-color)]">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-4 flex gap-4 transition-all duration-200 hover:-translate-y-[3px]"
                variants={staggerItem}
                whileHover={{ y: -3 }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[var(--bg-sidebar)] rounded-[var(--radius-md)] text-xl flex-shrink-0">{achievement.icon}</div>
                <div className="flex flex-col">
                  <h4 className="text-[0.9rem] font-bold text-[var(--text-primary)] mb-1">{achievement.title}</h4>
                  <p className="text-[0.8rem] text-[var(--text-secondary)] leading-[1.5] mb-2">{achievement.description}</p>
                  <span className="inline-flex items-center text-[0.7rem] font-bold text-[var(--accent-primary)] bg-[var(--bg-sidebar)] px-2 py-0.5 rounded w-fit">✓ {achievement.badge}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

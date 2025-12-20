"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useTranslation } from "@/hooks/useTranslation";

const techMarquee = [
  "Next.js", "Tailwind CSS", "React", "TypeScript", "Node.js", "Express", "JavaScript", "HTML5", "CSS3",
  "Git", "Azure", "REST APIs", "Styled Components", "VS Code",
  "Next.js", "Tailwind CSS", "React", "TypeScript", "Node.js", "Express", "JavaScript", "HTML5", "CSS3",
  "Git", "Azure", "REST APIs", "Styled Components", "VS Code",
];


export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();


  const skillCategories = [
    {
      icon: "🎨",
      title: t.skills.categories.frontend,
      skills: [
        { name: "Next.js", icon: "▲" },
        { name: "React", icon: "⚛️" },
        { name: "Tailwind CSS", icon: "🌊" },
        { name: "TypeScript", icon: "📘" },
        { name: "JavaScript", icon: "🟨" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "Styled Components", icon: "💅" },
      ]
    },
    {
      icon: "⚙️",
      title: t.skills.categories.backend,
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚂" },
        { name: "REST APIs", icon: "🔗" },
        { name: "SQL", icon: "🗃️" },
      ]
    },
    {
      icon: "🛠️",
      title: t.skills.categories.tools,
      skills: [
        { name: "Git", icon: "📦" },
        { name: "VS Code", icon: "💻" },
        { name: "Azure", icon: "☁️" },
        { name: "NPM/Yarn", icon: "📦" },
        { name: "Figma", icon: "🎯" },
      ]
    },
  ];

  return (
    <section id="skills" className="section relative bg-[var(--bg-primary)] border-b border-[var(--border-color)] overflow-hidden" ref={ref}>
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[var(--text-primary)] mb-4">
            {t.skills.title} <span className="gradient-text">{t.skills.titleHighlight}</span>
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-[600px] mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-8 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-md"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-[0.85rem] font-medium rounded-full transition-colors duration-250 cursor-default"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm">{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative w-full max-w-4xl mx-auto overflow-hidden py-4 select-none before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:bg-gradient-to-r before:from-[var(--bg-primary)] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 after:bg-gradient-to-l after:from-[var(--bg-primary)] after:to-transparent after:z-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {techMarquee.map((tech, index) => (
              <span key={index} className="inline-flex items-center text-sm font-semibold text-[var(--text-muted)] tracking-wider px-8 uppercase">
                ✦ {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

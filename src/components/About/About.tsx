"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInLeft, staggerContainer, staggerItem } from "@/lib/animations";
import { useTranslation } from "@/hooks/useTranslation";


export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();


  const aboutCards = [
    {
      icon: "🚀",
      title: t.about.cards.performance.title,
      description: t.about.cards.performance.description
    },
    {
      icon: "🎨",
      title: t.about.cards.design.title,
      description: t.about.cards.design.description
    },
    {
      icon: "♿",
      title: t.about.cards.accessibility.title,
      description: t.about.cards.accessibility.description
    },
    {
      icon: "📱",
      title: t.about.cards.responsive.title,
      description: t.about.cards.responsive.description
    },
  ];


  const languages = [
    { flag: "🇧🇷", name: t.about.languages.portuguese, level: t.about.languages.native },
    { flag: "🇺🇸", name: t.about.languages.english, level: t.about.languages.advanced },
  ];

  return (
    <section id="sobre" className="section relative bg-[var(--bg-primary)] border-b border-[var(--border-color)] overflow-hidden" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <motion.div
            className="flex flex-col"
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[var(--text-primary)] mb-6">
              {t.about.title} <span className="gradient-text">{t.about.titleHighlight}</span>
            </h2>
            
            <p className="text-base text-[var(--text-secondary)] leading-[1.8] mb-4">
              {t.about.description1} <span className="text-[var(--accent-primary)] font-medium">{t.about.role}</span> {t.about.description1End}
            </p>
            
            <p className="text-base text-[var(--text-secondary)] leading-[1.8] mb-4">
              {t.about.description2} <span className="text-[var(--accent-primary)] font-medium">{t.about.freelancer}</span>
              {t.about.description2Middle} <span className="text-[var(--accent-primary)] font-medium">{t.about.company}</span>
              {t.about.description2End}
            </p>
            
            <p className="text-base text-[var(--text-secondary)] leading-[1.8] mb-4">
              {t.about.description3}
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-8"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-sidebar)] rounded-full"
                  variants={staggerItem}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <div>
                    <div className="text-[0.85rem] font-medium text-[var(--text-primary)]">{lang.name}</div>
                    <div className="text-[0.75rem] text-[var(--text-muted)]">{lang.level}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {aboutCards.map((card) => (
              <motion.div
                key={card.title}
                className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-5 lg:p-6 transition-all duration-250 hover:shadow-md"
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[var(--bg-sidebar)] rounded-[var(--radius-md)] mb-2 text-xl">{card.icon}</div>
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">{card.title}</h3>
                <p className="text-[0.85rem] text-[var(--text-secondary)] leading-[1.5]">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

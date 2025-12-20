"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";
import { useTranslation } from "@/hooks/useTranslation";

const socialLinks = [
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/amando-barbosa/", 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  { 
    name: "GitHub", 
    href: "https://github.com/amandobarbosa", 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    )
  },
];


export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="min-h-screen flex items-stretch relative pt-[60px] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] w-full max-w-none">
        
        <motion.div
          className="relative flex items-center justify-center min-h-[500px] lg:min-h-[calc(100vh-60px)] px-4 py-12 lg:p-0"
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 bg-[var(--bg-sidebar)]"></div>
          
          <motion.div 
            className="relative z-10 bg-[var(--bg-card)] p-8 lg:p-16 rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] flex flex-col items-center w-full max-w-[280px] lg:max-w-xs"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="w-[140px] h-[140px] rounded-full overflow-hidden bg-[var(--bg-sidebar)] flex items-center justify-center border-4 border-[#b8c5d4] relative">
                <Image 
                  src="/Photo.jpeg" 
                  alt="Amando Barbosa"
                  width={140}
                  height={140}
                  className="rounded-full"
                  priority
                />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-[var(--text-primary)] text-center mb-4">Amando Barbosa</h2>
            
            <div className="w-[50px] h-[0.5px] bg-[var(--accent-primary)] mb-4"></div>
            
            <p className="text-[0.7rem] font-semibold text-[var(--text-muted)] tracking-[3px] uppercase mb-8 text-center">{t.hero.role}</p>
            
            <motion.div 
              className="flex justify-center gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-250"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  variants={staggerItem}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-[18px] h-[18px]">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-[var(--bg-primary)] flex flex-col justify-center p-6 sm:p-12 lg:p-24 lg:pl-24 text-center lg:text-left"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-[clamp(3rem,8vw,5rem)] font-extrabold text-[var(--text-primary)] mb-4 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t.hero.greeting}
          </motion.h1>

          <motion.p 
            className="text-lg lg:text-xl text-[var(--text-secondary)] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a href="#experiencia" className="inline-flex items-center justify-center px-6 py-3 text-[0.75rem] font-bold uppercase tracking-wider bg-[var(--accent-primary)] text-white rounded-full hover:bg-[var(--accent-secondary)] transition-all duration-250">
              {t.hero.resumeButton}
            </a>
            <a href="#projetos" className="inline-flex items-center justify-center px-6 py-3 text-[0.75rem] font-bold uppercase tracking-wider bg-white text-[var(--text-primary)] border border-[var(--border-color)] rounded-full hover:border-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-all duration-250">
              {t.hero.projectsButton}
            </a>
          </motion.div>

          <motion.div 
            className="max-w-full lg:max-w-[500px] mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-[0.95rem] text-[var(--text-secondary)] leading-[1.8] mb-4">
              {t.hero.description1}
            </p>
            <p className="text-[0.95rem] text-[var(--text-secondary)] leading-[1.8]">
              {t.hero.description2}
              <a href="#contato" className="text-[var(--accent-orange)] underline underline-offset-[3px]"> {t.hero.descriptionLink} </a>
              {t.hero.descriptionEnd}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

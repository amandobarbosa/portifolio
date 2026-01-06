"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";
import { Linkedin, Github } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const socialLinks = [
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/amando-barbosa/", 
    icon: <Linkedin size={18} />
  },
  { 
    name: "GitHub", 
    href: "https://github.com/amandobarbosa", 
    icon: <Github size={18} />
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

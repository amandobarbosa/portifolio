"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();


  const navLinks = [
    { label: t.footer.nav.about, href: "#sobre" },
    { label: t.footer.nav.skills, href: "#skills" },
    { label: t.footer.nav.experience, href: "#experiencia" },
    { label: t.footer.nav.projects, href: "#projetos" },
    { label: t.footer.nav.contact, href: "#contato" },
  ];

  const socialLinks = [
    { 
      name: "GitHub", 
      href: siteConfig.links.github,
      icon: <Github size={16} />
    },
    { 
      name: "LinkedIn", 
      href: siteConfig.links.linkedin,
      icon: <Linkedin size={16} />
    },
    { 
      name: "Email", 
      href: `mailto:${siteConfig.email}`,
      icon: <Mail size={16} />
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)] py-12 pb-6">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          
          <a href="#" className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-[var(--accent-primary)] rounded-[2px]"></div>
            <span className="text-base font-bold text-[var(--text-primary)]">Amando Barbosa</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-sm:flex-col max-sm:items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.85rem] text-[var(--text-secondary)] transition-colors duration-250 hover:text-[var(--accent-primary)]"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-sidebar)] border border-[var(--border-color)] rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[0.75rem] font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                {t.footer.availableStatus}
              </span>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 flex items-center justify-center bg-[var(--bg-sidebar)] rounded-full text-[var(--text-secondary)] transition-all duration-250 hover:bg-[var(--accent-primary)] hover:text-white"
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                title={social.name}
                whileHover={{ y: -2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

          <div className="w-24 h-px bg-[var(--border-color)]"></div>

          <div className="text-center">
            <p className="text-[0.8rem] text-[var(--text-muted)] mb-2">
              © {currentYear} Amando Barbosa. {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

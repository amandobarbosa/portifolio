"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
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
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
      href: siteConfig.links.linkedin,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: "Email", 
      href: `mailto:${siteConfig.email}`,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
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

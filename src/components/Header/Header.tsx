"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useTranslation();


  const navItems = [
    { label: t.header.nav.about, href: "#sobre" },
    { label: t.header.nav.resume, href: "#experiencia" },
    { label: t.header.nav.projects, href: "#projetos" },
    { label: t.header.nav.contact, href: "#contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[1000] py-4 transition-all duration-250 bg-[var(--bg-primary)] ${
          isScrolled ? "shadow-sm border-b border-[var(--border-color)]" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between max-w-[1200px] mx-auto px-6">
          <a href="#" className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[var(--accent-primary)] rounded-[2px]"></div>
            <span className="text-[1rem] font-bold text-[var(--text-primary)]">Amando Barbosa</span>
            <span className="hidden md:block text-[0.7rem] color-[var(--text-muted)] ml-2 pl-2 border-l border-[var(--border-color)] uppercase tracking-wider">{t.header.role}</span>
          </a>

          <nav className="flex items-center gap-4 md:gap-8">
            <ul className="hidden md:flex items-center gap-6 list-none">
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <a
                    href={item.href}
                    className="text-[0.75rem] font-medium text-[var(--text-secondary)] uppercase tracking-wider hover:text-[var(--accent-primary)] transition-colors duration-250 py-1"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Language Toggle Button */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[var(--bg-sidebar)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all duration-250 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={language === "pt" ? "Switch to English" : "Mudar para Português"}
              aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
            >
              <span className="text-base">{language === "pt" ? "🇧🇷" : "🇺🇸"}</span>
            </motion.button>

            <button
              className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-[2px] bg-[var(--text-primary)] rounded-[2px] transition-all duration-250 ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}></span>
              <span className={`w-6 h-[2px] bg-[var(--text-primary)] rounded-[2px] transition-all duration-250 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-6 h-[2px] bg-[var(--text-primary)] rounded-[2px] transition-all duration-250 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="fixed top-[60px] left-0 right-0 bg-[var(--bg-primary)] p-8 border-b border-[var(--border-color)] shadow-md z-[999] md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-6 list-none">
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <a
                    href={item.href}
                    className="block text-[0.875rem] font-medium text-[var(--text-secondary)] py-2 border-b border-[var(--border-color)] hover:text-[var(--accent-primary)] transition-colors duration-250 uppercase tracking-wider"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

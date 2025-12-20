"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";
import { toast } from "sonner";
import { useTranslation } from "@/hooks/useTranslation";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";


export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();


  const contactMethods = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: t.contact.methods.email,
      value: "amandodeveloper@gmail.com",
      href: "mailto:amandodeveloper@gmail.com"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: t.contact.methods.linkedin,
      value: "/in/amando-barbosa",
      href: "https://www.linkedin.com/in/amando-barbosa/"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      title: t.contact.methods.github,
      value: "github.com/amandobarbosa",
      href: "https://github.com/amandobarbosa"
    },
  ];


  const extraContactInfo = [
    { label: t.contact.additionalInfo.availability.label, value: t.contact.additionalInfo.availability.value, icon: "⚡" },
    { label: t.contact.additionalInfo.responseTime.label, value: t.contact.additionalInfo.responseTime.value, icon: "🕒" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success(t.contact.form.success);
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(t.contact.form.error);
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error(t.contact.form.connectionError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="section relative bg-[var(--bg-secondary)] border-b border-[var(--border-color)] overflow-hidden" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            className="flex flex-col max-lg:items-center max-lg:text-center"
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[var(--text-primary)] mb-4">
              {t.contact.title} <span className="gradient-text">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-[1.8] mb-12">
              {t.contact.subtitle}
            </p>

            <motion.div
              className="flex flex-col gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {contactMethods.map((method) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-6 p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] transition-all duration-250 hover:shadow-sm md:hover:translate-x-2"
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-11 h-11 flex items-center justify-center bg-[var(--bg-sidebar)] rounded-[var(--radius-md)] flex-shrink-0 text-[var(--text-primary)]">
                    {method.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[0.9rem] font-bold text-[var(--text-primary)] mb-0.5">{method.title}</h4>
                    <p className="text-[0.8rem] text-[var(--text-secondary)]">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <div className="mt-12 pt-12 border-t border-[var(--border-color)] flex flex-col max-lg:items-center">
              <h4 className="text-[0.9rem] font-bold text-[var(--text-secondary)] mb-6 uppercase tracking-wider">{t.contact.additionalInfo.title}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {extraContactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-3">
                    <span className="text-lg bg-[var(--bg-sidebar)] w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">{info.icon}</span>
                    <div className="flex flex-col">
                      <span className="text-[0.65rem] font-bold text-[var(--accent-primary)] uppercase tracking-tight">{info.label}</span>
                      <span className="text-[0.85rem] text-[var(--text-secondary)]">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-8 lg:p-12"
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-[0.85rem] font-medium text-[var(--text-secondary)] mb-2">{t.contact.form.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-[var(--radius-md)] font-inherit text-[0.95rem] text-[var(--text-primary)] transition-all duration-250 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-3 focus:ring-blue-500/10 placeholder:text-[var(--text-muted)]"
                placeholder={t.contact.form.namePlaceholder}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-[0.85rem] font-medium text-[var(--text-secondary)] mb-2">{t.contact.form.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-[var(--radius-md)] font-inherit text-[0.95rem] text-[var(--text-primary)] transition-all duration-250 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-3 focus:ring-blue-500/10 placeholder:text-[var(--text-muted)]"
                placeholder={t.contact.form.emailPlaceholder}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-[0.85rem] font-medium text-[var(--text-secondary)] mb-2">{t.contact.form.subject}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-[var(--radius-md)] font-inherit text-[0.95rem] text-[var(--text-primary)] transition-all duration-250 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-3 focus:ring-blue-500/10 placeholder:text-[var(--text-muted)]"
                placeholder={t.contact.form.subjectPlaceholder}
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-[0.85rem] font-medium text-[var(--text-secondary)] mb-2">{t.contact.form.message}</label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-[var(--radius-md)] font-inherit text-[0.95rem] text-[var(--text-primary)] transition-all duration-250 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-3 focus:ring-blue-500/10 min-h-[120px] resize-vertical placeholder:text-[var(--text-muted)]"
                placeholder={t.contact.form.messagePlaceholder}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-3 bg-[var(--accent-primary)] text-white text-[0.875rem] font-bold uppercase tracking-wider border-none rounded-full cursor-pointer transition-all duration-250 flex items-center justify-center gap-2 hover:bg-[var(--accent-secondary)] disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <span>{t.contact.form.submitting}</span>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    ⏳
                  </motion.span>
                </>
              ) : (
                <>
                  {t.contact.form.submit}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

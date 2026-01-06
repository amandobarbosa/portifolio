"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";
import { toast } from "sonner";
import { Send, Mail, Linkedin, Github, Zap, Clock, Loader2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";


export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();


  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: t.contact.methods.email,
      value: "amandodeveloper@gmail.com",
      href: "mailto:amandodeveloper@gmail.com"
    },
    {
      icon: <Linkedin size={24} />,
      title: t.contact.methods.linkedin,
      value: "/in/amando-barbosa",
      href: "https://www.linkedin.com/in/amando-barbosa/"
    },
    {
      icon: <Github size={24} />,
      title: t.contact.methods.github,
      value: "github.com/amandobarbosa",
      href: "https://github.com/amandobarbosa"
    },
  ];


  const extraContactInfo = [
    { label: t.contact.additionalInfo.availability.label, value: t.contact.additionalInfo.availability.value, icon: <Zap size={18} className="text-[var(--accent-primary)]" /> },
    { label: t.contact.additionalInfo.responseTime.label, value: t.contact.additionalInfo.responseTime.value, icon: <Clock size={18} className="text-[var(--accent-primary)]" /> },
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
                  <Loader2 size={18} className="animate-spin" />
                </>
              ) : (
                <>
                  {t.contact.form.submit}
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

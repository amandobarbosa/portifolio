"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInLeft } from "@/lib/animations";
import { GraduationCap } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";


export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();


  const graduation = t.education.degree;
  const startDate = new Date(2022, 1); // Feb 2022
  const endDate = new Date(graduation.endDate);
  const currentDate = new Date();
  
  const totalDuration = endDate.getTime() - startDate.getTime();
  const elapsed = currentDate.getTime() - startDate.getTime();
  const progress = Math.min(Math.round((elapsed / totalDuration) * 100), 100);
  
  const isCompleted = currentDate >= endDate;
  const currentStatus = isCompleted ? graduation.completedStatus : graduation.status;

  return (
    <section id="educacao" className="section relative bg-[var(--bg-primary)] border-b border-[var(--border-color)] overflow-hidden" ref={ref}>
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[var(--text-primary)] mb-4">
            {t.education.title} <span className="gradient-text">{t.education.titleHighlight}</span>
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-[600px] mx-auto">
            {t.education.subtitle}
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-8 transition-all duration-250 hover:shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-[var(--bg-sidebar)] rounded-[var(--radius-md)] text-[var(--accent-primary)] flex-shrink-0">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-[1.125rem] font-bold text-[var(--text-primary)] mb-1">{t.education.degree.institution}</h3>
                  <p className="text-[0.9rem] text-[var(--accent-primary)] font-medium mb-1">{t.education.degree.course}</p>
                  <p className="text-[0.8rem] text-[var(--text-muted)]">{t.education.degree.period}</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between mb-2 text-[0.85rem] text-[var(--text-secondary)]">
                  <span>{t.education.degree.progress}</span>
                  <span className="gradient-text font-semibold">{progress}%</span>
                </div>
                <div className="h-1.5 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[var(--accent-primary)] rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${progress}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                  />
                </div>
              </div>

              <div className={`inline-flex items-center gap-1.5 px-2 py-1 ${isCompleted ? 'bg-green-500/10 border-green-500 text-green-500' : 'bg-[#2563eb1a] border-[var(--accent-primary)] text-[var(--accent-primary)]'} border rounded-full text-[0.75rem] font-semibold mt-6`}>
                {!isCompleted && <span className="w-1.5 h-1.5 bg-[var(--accent-primary)] rounded-full animate-pulse"></span>}
                {currentStatus}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

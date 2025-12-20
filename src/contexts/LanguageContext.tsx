/**
 * LanguageContext - React Context for managing the application's language state.
 * 
 * This context provides:
 * - Current language state ('pt' or 'en')
 * - Function to toggle between languages
 * - Current translations object
 * 
 * The selected language is persisted in localStorage to maintain user preference
 * across sessions.
 */
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { pt, type Translations } from "@/locales/pt";
import { en } from "@/locales/en";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio-language";

interface LanguageProviderProps {
  children: ReactNode;
}

/**
 * LanguageProvider - Wrapper component that provides language context to the app.
 * 
 * Features:
 * - Initializes language from localStorage if available
 * - Falls back to Portuguese if no preference is saved
 * - Persists language changes to localStorage
 * - Avoids hydration mismatch by using useEffect for initial load
 */
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("pt");
  const [isHydrated, setIsHydrated] = useState(false);

  // Load saved language preference on client-side only
  useEffect(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
    setIsHydrated(true);
  }, []);

  // Persist language changes to localStorage
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEY, language);
    }
  }, [language, isHydrated]);

  /**
   * Toggle between Portuguese and English languages.
   */
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  // Get the current translations based on selected language
  const t = language === "pt" ? pt : en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * useLanguage - Custom hook to access the language context.
 * 
 * @returns The language context containing:
 *  - language: Current language code ('pt' or 'en')
 *  - toggleLanguage: Function to switch between languages
 *  - t: Current translations object
 * 
 * @throws Error if used outside of LanguageProvider
 */
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language, PortfolioContent } from '../types';
import { portfolioContent } from '../data/portfolioData';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  content: PortfolioContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return saved === 'en' ? 'en' : 'id';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const content = portfolioContent[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

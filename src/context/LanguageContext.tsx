import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, LanguageContent } from '../types';
import { getLanguageContent } from '../constants/languages';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: LanguageContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [content, setContent] = useState<LanguageContent>(getLanguageContent('en'));

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
      setContent(getLanguageContent(savedLanguage));
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    setContent(getLanguageContent(lang));
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        content,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
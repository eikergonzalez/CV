import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { content } = useLanguage();
  const [typed, setTyped] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = content.hero.title;

  useEffect(() => {
    setTyped('');
    setCurrentIndex(0);
  }, [content]);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTyped(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center z-10">
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2 animate-fade-in">
          {content.hero.greeting}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white animate-slide-up">
          {content.hero.name}
        </h1>
        
        <div className="h-12 md:h-16 mb-6 flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-blue-600 dark:text-blue-400 relative">
            {typed}
            <span className="absolute right-[-8px] top-0 animate-blink">|</span>
          </h2>
        </div>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-delayed">
          {content.hero.description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delayed-2">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {content.hero.cta}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300"
          >
            {content.contact.title}
          </a>
        </div>
      </div>
      
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};
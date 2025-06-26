import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Language } from '../types';
import { languageOptions } from '../constants/languages';

export const Header: React.FC = () => {
  const { content, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const toggleLanguageMenu = () => setShowLanguageMenu(!showLanguageMenu);
  
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setShowLanguageMenu(false);
    closeMenu();
  };

  const navItems = [
    { id: 'home', label: content.nav.home },
    { id: 'about', label: content.nav.about },
    { id: 'skills', label: content.nav.skills },
    { id: 'projects', label: content.nav.projects },
    { id: 'experience', label: content.nav.experience },
    { id: 'contact', label: content.nav.contact },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            EG<span className="text-purple-600 dark:text-purple-400">.</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={toggleLanguageMenu}
              aria-label="Change language"
            >
              <Globe size={20} />
              <span className="text-sm uppercase">{language}</span>
            </button>
            
            {showLanguageMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      language === option.code
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => handleLanguageChange(option.code as Language)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-200"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 py-2 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between">
                <div className="flex flex-col space-y-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Language</span>
                  <div className="flex flex-wrap gap-2">
                    {languageOptions.map((option) => (
                      <button
                        key={option.code}
                        className={`px-3 py-1 text-sm rounded-md ${
                          language === option.code
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                        }`}
                        onClick={() => handleLanguageChange(option.code as Language)}
                      >
                        {option.code.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  onClick={toggleTheme}
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
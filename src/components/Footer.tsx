import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { socialLinks } from '../data/social';
import { Code } from 'lucide-react';

export const Footer: React.FC = () => {
  const { content } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-3xl font-bold text-blue-400">
              EG<span className="text-purple-400">.</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              {content.hero.description}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              {content.info.email} | {content.info.phone}
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
              {content.nav.home}
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
              {content.nav.about}
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
              {content.nav.skills}
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
              {content.nav.projects}
            </a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-200">
              {content.nav.experience}
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
              {content.nav.contact}
            </a>
          </div> */}
          <div className="flex items-center text-gray-500 text-sm">
            <Code size={14} className="mr-2" />
            <p>
              &copy; {currentYear} Eiker González. {content.footer.rights}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
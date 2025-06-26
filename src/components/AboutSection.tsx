import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { socialLinks } from '../data/social';

import perfil from '@/assets/images/perfil.png';

import cvEn from '@/assets/cv/CV_Eiker_Gonzalez.en.pdf';
import cvEs from '@/assets/cv/CV_Eiker_Gonzalez.es.pdf';

export const AboutSection: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white relative">
            {content.about.title}
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-80"></div>
                <img 
                  src={perfil} 
                  alt="Eiker González" 
                  className="object-cover w-full h-full mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 p-2 rounded-full text-gray-800 hover:text-blue-600 hover:scale-110 transform transition-all duration-300"
                        aria-label={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              {content.about.content.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-shadow duration-300">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-shadow duration-300">
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">20+</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Projects</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-shadow duration-300">
                  <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">12+</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Languages</p>
                </div>
                {/* <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-shadow duration-300">
                  <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">5</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Human Languages</p>
                </div> */}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delayed-2">
                <a
                  className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  href={cvEn} target='_blank' rel='noopener noreferrer'
                >
                  {content.hero.downloadCvEn}
                </a>
                <a
                  className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300"
                  href= {cvEs} target='_blank' rel='noopener noreferrer'
                >
                  {content.hero.downloadCvEs}
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
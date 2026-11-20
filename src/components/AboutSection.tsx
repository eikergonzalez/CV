import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { socialLinks } from '../data/social';
import perfil from '@/assets/images/perfil.png';
import cvEn from '@/assets/cv/CV_Eiker_Gonzalez.en.pdf';
import cvEs from '@/assets/cv/CV_Eiker_Gonzalez.es.pdf';

export const AboutSection: React.FC = () => {
  const { content, language } = useLanguage();
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white relative">
            {content.about.title}
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 shadow-xl">
                <img src={perfil} alt="Eiker González" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="md:col-span-2 space-y-5">
              {content.about.content.map((paragraph, i) => <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed">{paragraph}</p>)}
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="rounded-xl bg-blue-50 dark:bg-blue-900/20 px-4 py-3 text-blue-800 dark:text-blue-300 font-medium">15+ {language === 'es' ? 'años de experiencia' : 'years of experience'}</span>
                <span className="rounded-xl bg-purple-50 dark:bg-purple-900/20 px-4 py-3 text-purple-800 dark:text-purple-300 font-medium">{language === 'es' ? 'Backend-focused' : 'Backend-focused'}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <a className="px-6 py-3 bg-blue-600 text-white rounded-full text-center hover:bg-blue-700 transition-colors" href={cvEn} target="_blank" rel="noopener noreferrer">{content.hero.downloadCvEn}</a>
                <a className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500 rounded-full text-center hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors" href={cvEs} target="_blank" rel="noopener noreferrer">{content.hero.downloadCvEs}</a>
              </div>
              <div className="flex gap-3 pt-1">
                {socialLinks.map(link => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">{link.icon}</a>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

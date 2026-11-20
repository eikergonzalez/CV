import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const categories = [
  { en: "Backend", es: "Backend", skills: ["PHP", "Laravel", "Node.js", "NestJS", "Symfony", "REST APIs", "WebSockets"] },
  { en: "Frontend", es: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Nuxt", "Angular", "HTML", "CSS"] },
  { en: "Mobile", es: "Móvil", skills: ["React Native", "Expo", "Flutter", "Dart"] },
  { en: "Databases", es: "Bases de datos", skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Oracle"] },
  { en: "Infrastructure & Tools", es: "Infraestructura y herramientas", skills: ["Docker", "Git", "GitHub Actions", "AWS (basic)", "Linux", "WebRTC", "Jitsi", "Stripe", "Transbank"] },
  { en: "Other", es: "Otros", skills: ["Python (services)", "C#", "Visual Basic", "Crystal Reports", "Agile", "Scrum"] },
];

export const SkillsSection: React.FC = () => {
  const { content, language } = useLanguage();
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">{content.skills.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">{content.skills.description}</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map(category => (
            <div key={category.en} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">{language === 'es' ? category.es : category.en}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useRef, useEffect, useState } from 'react';
import { Code, Braces, Database, GlobeLock, Pickaxe, Pill, Dices } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';
import { SkillCategory } from '../types';

export const SkillsSection: React.FC = () => {
  const { content } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  const colorPalette = [
    '#F7DF1E', // amarillo
    '#3178C6', // azul
    '#777BB4', // violeta
    '#DC382D', // rojo
    '#61DAFB', // celeste
    '#239120', // verde
    '#00ADD8', // azul claro
    '#3776AB', // azul oscuro
    '#42B883', // verde claro
    '#339933', // verde oscuro
    '#DD0031', // rojo fuerte
    '#E34F26', // naranja
    '#336791', // azul medio
    '#47A248', // verde medio
    '#4479A1', // azul acero
    '#7F52FF', // violeta claro
    '#02569B', // azul petróleo
    '#0A84FF', // azul iOS
    '#30B0C7', // celeste claro
    '#F05032', // naranja git
  ];

  const assignUniqueColors = (skills: { name: string; level: number }[]) => {
    return skills.map((skill, idx) => ({
      ...skill,
      color: colorPalette[idx % colorPalette.length],
    }));
  };

  const skillCategories: SkillCategory[] = [
    {
      name: 'Languages',
      skills: assignUniqueColors([
        { name: 'JavaScript', level: 100 },
        { name: 'TypeScript', level: 100 },
        { name: 'PHP', level: 100 },
        { name: 'SQL', level: 100 },
        { name: 'C#', level: 100 },
        { name: 'Java', level: 100 },
        { name: 'Dart', level: 100 },
        { name: 'Python', level: 100 },
      ]),
      icon: <Code size={24} />,
    },
    {
      name: 'Frameworks/Libraries',
      skills: assignUniqueColors([
        { name: 'React', level: 100 },
        { name: 'React Native', level: 100 },
        { name: 'Redux Toolkit', level: 100 },
        { name: 'Laravel', level: 100 },
        { name: 'Symfony', level: 100 },
        { name: 'NestJs', level: 100 },
        { name: 'NextJs', level: 100 },
        { name: 'Vue.js', level: 100 },
        { name: 'Node.js', level: 100 },
        { name: 'Angular', level: 100 },
        { name: 'Nuxt.js', level: 100 },
      ]),
      icon: <Braces size={24} />,
    },
    {
      name: 'Databases',
      skills: assignUniqueColors([
        { name: 'PostgreSQL', level: 100 },
        { name: 'MongoDB', level: 100 },
        { name: 'MySQL', level: 100 },
        { name: 'SQL Server', level: 100 },
      ]),
      icon: <Database size={24} />,
    },
    {
      name: 'Other Technologies',
      skills: assignUniqueColors([
        { name: 'WebSockets', level: 100 },
        { name: 'WebRTC', level: 100 },
        { name: 'Jitsi Meet', level: 100 },
        { name: 'Flutter', level: 100 },
        { name: 'Expo', level: 100 },
        { name: 'Stripe', level: 100 },
        { name: 'Transbank SDK', level: 100 },
        { name: 'Docker', level: 100 },
      ]),
      icon: <GlobeLock size={24} />,
    },
    {
      name: 'Tools',
      skills: assignUniqueColors([
        { name: 'Git', level: 100 },
        { name: 'Docker', level: 100 },
        { name: 'Vite', level: 100 },
        { name: 'Highcharts', level: 100 },
        { name: 'Crystal Reports', level: 100 },
      ]),
      icon: <Pickaxe size={24} />,
    },
    {
      name: 'Methodologies',
      skills: assignUniqueColors([
        { name: 'Agile', level: 100 },
        { name: 'Scrum', level: 100 },
      ]),
      icon: <Pill size={24} />,
    },
    {
      name: 'Others',
      skills: assignUniqueColors([
        { name: content.others?.other1 || '', level: 100 },
      ]),
      icon: <Dices size={24} />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.parentElement) {
            const skillBar = entry.target.querySelector('.skill-bar') as HTMLElement;
            if (skillBar) {
              const level = skillBar.getAttribute('data-level') || '0';
              skillBar.style.width = `${level}%`;
              skillBar.style.opacity = '1';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [activeCategory]);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {content.skills.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            {content.skills.description}
          </p>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-wrap md:flex-nowrap">
              <div className="w-full md:w-1/4 border-r border-gray-200 dark:border-gray-700">
                <div className="sticky top-20">
                  <ul className="py-4">
                    {skillCategories.map((category, index) => (
                      <li key={category.name}>
                        <button
                          className={`flex items-center w-full px-6 py-4 text-left transition-colors duration-200 ${
                            activeCategory === index
                              ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                          onClick={() => setActiveCategory(index)}
                        >
                          <span className="mr-3">{category.icon}</span>
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-3/4 p-6 md:p-8">
                <div className="space-y-4">
                  {skillCategories[activeCategory].skills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      ref={(el) => (skillRefs.current[index] = el)}
                      className="mb-6"
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        {/* <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span> */}
                      </div>
                      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="skill-bar h-full rounded-full opacity-0 transition-all duration-1000 ease-out"
                          style={{
                            backgroundColor: skill.color,
                            width: '0%',
                          }}
                          data-level={skill.level}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
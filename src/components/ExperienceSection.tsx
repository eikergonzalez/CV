import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { timelineItemsEn, timelineItemsEs } from '../data/timeline';
import { Briefcase, GraduationCap } from 'lucide-react';
import { TimelineItem } from '../types';

const ExperienceSection: React.FC = () => {
  const { content, language } = useLanguage();
  const [workData, setWorkData] = React.useState<TimelineItem[]>([] as TimelineItem[]);
  const [educationData, setEducationData] = React.useState<TimelineItem[]>([] as TimelineItem[]);

  useEffect(() => {
    if(language === 'en') {
      setDataEn();
    }
    if(language === 'es') {
      setDataEs();
    }
  }, [language]);

  const setDataEn = () => {
    const workItems = timelineItemsEn.filter(item => item.type === 'work').sort((a, b) => {
      const yearA = parseInt(a.period.split(' - ')[0]);
      const yearB = parseInt(b.period.split(' - ')[0]);
      return yearB - yearA;
    });
    
    const educationItems = timelineItemsEn.filter(item => item.type === 'education').sort((a, b) => {
      const yearA = parseInt(a.period.split(' - ')[0]);
      const yearB = parseInt(b.period.split(' - ')[0]);
      return yearB - yearA;
    });

    setWorkData(workItems);
    setEducationData(educationItems);
  }

  const setDataEs = () => {
    const workItems = timelineItemsEs.filter(item => item.type === 'work').sort((a, b) => {
      const yearA = parseInt(a.period.split(' - ')[0]);
      const yearB = parseInt(b.period.split(' - ')[0]);
      return yearB - yearA;
    });
    
    const educationItems = timelineItemsEs.filter(item => item.type === 'education').sort((a, b) => {
      const yearA = parseInt(a.period.split(' - ')[0]);
      const yearB = parseInt(b.period.split(' - ')[0]);
      return yearB - yearA;
    });

    setWorkData(workItems);
    setEducationData(educationItems);
  }


  

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white relative">
          {content.experience.title}
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{content.experience.work}</h3>
            </div>
            <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:h-full before:w-[2px] before:bg-blue-200 dark:before:bg-blue-900/50 before:left-[7px]">
              {workData.map(item => (
                <div key={item.id} className="relative group">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full left-[-30px] top-1.5 z-10 group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="p-5 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600 dark:border-blue-500">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 mb-2">{item.organization}</p>
                    {
                      item.description.map((desc, index) => (
                        <p key={index} className="text-gray-600 dark:text-gray-400 my-6">{desc}</p>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="mr-3 text-purple-600 dark:text-purple-400" size={24} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{content.experience.education}</h3>
            </div>
            <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:h-full before:w-[2px] before:bg-purple-200 dark:before:bg-purple-900/50 before:left-[7px]">
              {educationData.map(item => (
                <div key={item.id} className="relative group">
                  <div className="absolute w-4 h-4 bg-purple-600 rounded-full left-[-30px] top-1.5 z-10 group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="p-5 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-600 dark:border-purple-500">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <span className="text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 mb-2">{item.organization}</p>
                    {
                      item.description.map((desc, index) => (
                        <p key={index} className="text-gray-600 dark:text-gray-400 my-6">{desc}</p>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
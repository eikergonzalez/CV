import React from 'react';
import { useLanguage } from '../context/LanguageContext';
//import { projects } from '../data/projects';
//import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const { content } = useLanguage();
  //const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {content.projects.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          {content.projects.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Creo una seccion en contruccion par que no quede vacio */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {content.projects.title} - {content.projects.description}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {content.others?.other2 || 'Esta sección está en construcción. ¡Pronto podrás ver mis proyectos destacados!'}
            </p>
          </div>
          {/* {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full relative"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex space-x-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-sm flex items-center space-x-1 transition-colors duration-200"
                      >
                        <ExternalLink size={14} />
                        <span>{content.projects.viewProject}</span>
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white px-3 py-1.5 rounded-full text-sm flex items-center space-x-1 transition-colors duration-200"
                      >
                        <Github size={14} />
                        <span>{content.projects.sourceCode}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>


              <div
                className={`absolute inset-0 bg-gradient-to-r from-blue-600/95 to-purple-600/95 p-6 flex flex-col justify-center transform transition-all duration-300 ${
                  activeProject === project.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 pointer-events-none'
                } md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-0`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/90 mb-4">{project.description}</p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-white/20 text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-3 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span>{content.projects.viewProject}</span>
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent border border-white text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span>{content.projects.sourceCode}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
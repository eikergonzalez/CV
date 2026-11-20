import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import { ExternalLink, Code2 } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const { content, language } = useLanguage();
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">{content.projects.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">{content.projects.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article key={project.id} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5 flex-grow">
                {language === 'es' ? projectDescriptionsEs[project.id] ?? project.description : project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">{tech}</span>)}
              </div>
              {project.liveUrl && project.liveUrl !== '#' && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 text-blue-600 dark:text-blue-400 font-medium">{content.projects.viewProject}<ExternalLink size={15}/></a>}
            </article>
          ))}
        </div>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-8">{language === 'es' ? 'Algunos proyectos se describen de forma general para proteger información confidencial de clientes y empleadores.' : 'Some projects are described at a high level to respect client and employer confidentiality.'}</p>
      </div>
    </section>
  );
};

const projectDescriptionsEs: Record<string, string> = {
  telemedicine: "Solución de telemedicina web y móvil con videoconsultas y comunicación en tiempo real para organizaciones.",
  "health-offline": "Flujo móvil para registrar encuestas de salud sin conexión y sincronizar los datos al recuperar conectividad, además de importaciones masivas desde Excel.",
  "tourism-booking": "Sistema de gestión de turnos desarrollado para la Secretaría de Turismo de Gualeguaychú.",
  "hr-modernization": "Participación en una plataforma de gestión de recursos humanos, incluyendo la modernización de una aplicación Laravel heredada hacia interfaces React y APIs.",
  "crm-donhuesillo": "Proyecto CRM para una distribuidora, orientado a flujos de negocio y operaciones de clientes.",
  "mobile-orders": "Aplicación para solicitudes de ventas y pedidos, diseñada para apoyar las operaciones de distribuidoras.",
};
export default ProjectsSection;

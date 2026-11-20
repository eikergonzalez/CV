import { Language, LanguageContent } from "../types";

export const en: LanguageContent = {
  nav: { home: "Home", about: "About", skills: "Skills", projects: "Projects", experience: "Experience", contact: "Contact" },
  hero: {
    greeting: "Hello, I'm",
    name: "Eiker González",
    title: "Senior Full Stack Developer",
    description: "Backend-focused software engineer building web, mobile, APIs and real-time applications with PHP, Laravel, Node.js, NestJS and React.",
    cta: "Explore my work",
    downloadCvEn: "Download CV (EN)",
    downloadCvEs: "Download CV (ES)",
  },
  about: {
    title: "About Me",
    content: [
      "Software developer with 15+ years of professional experience, focused on backend development and full-stack delivery. I work with PHP and Laravel, Node.js and NestJS, React and Next.js, SQL databases, APIs, real-time communication and mobile applications.",
      "I have contributed to products in healthcare, ecommerce, government, education, fitness and business operations, collaborating with distributed teams across Latin America and the United States. I value maintainable code, practical solutions and clear communication.",
    ],
  },
  skills: { title: "Technical Skills", description: "Technologies and tools I have used across professional projects, grouped by area." },
  projects: {
    title: "Selected Projects",
    description: "Examples of products and systems I have contributed to throughout my career.",
    viewProject: "View Project",
    sourceCode: "Source Code",
  },
  experience: { title: "Experience & Education", education: "Education", work: "Work Experience" },
  contact: {
    title: "Contact",
    description: "Have a project or opportunity in mind? I'd be glad to hear from you.",
    formName: "Name", formEmail: "Email", formMessage: "Message", formSubmit: "Send Message",
    formSuccess: "Your message was sent successfully!", phone: "Phone", location: "Location", connect: "Connect with me",
  },
  footer: { rights: "All rights reserved" },
  info: { email: "support@eikergonzalez.com", phone: "+58 (412) 574-6623", location: "Miranda, Venezuela" },
  others: { other1: "Linux server administration, web servers and mail servers." },
};

export const es: LanguageContent = {
  nav: { home: "Inicio", about: "Sobre mí", skills: "Habilidades", projects: "Proyectos", experience: "Experiencia", contact: "Contacto" },
  hero: {
    greeting: "Hola, soy",
    name: "Eiker González",
    title: "Senior Full Stack Developer",
    description: "Desarrollador enfocado en backend, creando aplicaciones web, móviles, APIs y soluciones en tiempo real con PHP, Laravel, Node.js, NestJS y React.",
    cta: "Explorar mi trabajo",
    downloadCvEn: "Descargar CV (EN)",
    downloadCvEs: "Descargar CV (ES)",
  },
  about: {
    title: "Sobre mí",
    content: [
      "Desarrollador de software con más de 15 años de experiencia profesional, enfocado en backend y desarrollo full stack. Trabajo con PHP y Laravel, Node.js y NestJS, React y Next.js, bases de datos SQL, APIs, comunicación en tiempo real y aplicaciones móviles.",
      "He participado en productos de salud, comercio electrónico, gobierno, educación, fitness y gestión empresarial, colaborando con equipos distribuidos en Latinoamérica y Estados Unidos. Me enfoco en código mantenible, soluciones prácticas y comunicación clara.",
    ],
  },
  skills: { title: "Habilidades Técnicas", description: "Tecnologías y herramientas utilizadas en proyectos profesionales, agrupadas por área." },
  projects: {
    title: "Proyectos Seleccionados",
    description: "Ejemplos de productos y sistemas en los que he participado a lo largo de mi carrera.",
    viewProject: "Ver Proyecto",
    sourceCode: "Código Fuente",
  },
  experience: { title: "Experiencia y Educación", education: "Educación", work: "Experiencia Laboral" },
  contact: {
    title: "Contacto",
    description: "¿Tienes un proyecto u oportunidad en mente? Me encantaría conversar.",
    formName: "Nombre", formEmail: "Correo", formMessage: "Mensaje", formSubmit: "Enviar Mensaje",
    formSuccess: "¡Tu mensaje fue enviado correctamente!", phone: "Teléfono", location: "Ubicación", connect: "Conéctate conmigo",
  },
  footer: { rights: "Todos los derechos reservados" },
  info: { email: "support@eikergonzalez.com", phone: "+58 (412) 574-6623", location: "Miranda, Venezuela" },
  others: { other1: "Administración de servidores Linux, web y correo." },
};

export const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
] as const;

export type LanguageCode = typeof languageOptions[number]['code'];

export const getLanguageContent = (code: Language): LanguageContent => code === 'es' ? es : en;

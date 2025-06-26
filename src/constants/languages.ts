import { Language, LanguageContent } from "../types";

// English content
export const en: LanguageContent = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Eiker González",
    title: "Full Stack Developer",
    description: "I build exceptional digital experiences with clean, efficient code across multiple programming languages",
    cta: "View My Work",
    downloadCvEn: "Download CV (EN)",
    downloadCvEs: "Download CV (ES)",
  },
  about: {
    title: "About Me",
    content: [
      "Full Stack Developer with over 12 years of experience building highly scalable web, mobile, and desktop solutions. Specialized in React, React Native, Laravel, NestJS, WebSockets, and SQL/NoSQL databases. Extensive track record in critical projects across sectors such as healthcare, banking, government, education, and e-commerce in Latin America and the United States.",
    ],
  },
  skills: {
    title: "Skills & Technologies",
    description: "My technical toolkit spans multiple domains, allowing me to tackle diverse challenges.",
  },
  projects: {
    title: "Featured Projects",
    description: "A selection of my recent work across different platforms and technologies.",
    viewProject: "View Project",
    sourceCode: "Source Code",
  },
  experience: {
    title: "Experience & Education",
    education: "Education",
    work: "Work Experience",
  },
  contact: {
    title: "Get In Touch",
    description: "Interested in working together? Feel free to reach out.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send Message",
    formSuccess: "Message sent successfully!",
    phone: "Phone",
    location: "Location",
    connect: "Connect with me",
  },
  footer: {
    rights: "All rights reserved",
  },
  info: {
    email: "support@eikergonzalez.com",
    phone: "+58 (412) 574-6623",
    location: "Miranda, Venezuela",
  },
  others: {
    other1: "Configuration of Linux servers, mail servers, web.",
    other2: "Under construction",
  }
};

// Spanish content
export const es: LanguageContent = {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto",
  },
  hero: {
    greeting: "Hola, soy",
    name: "Eiker González",
    title: "Full Stack Developer",
    description: "Construyo experiencias digitales excepcionales con código limpio y eficiente en múltiples lenguajes de programación.",
    cta: "Ver mi trabajo",
    downloadCvEn: "Descargar CV (EN)",
    downloadCvEs: "Descargar CV (ES)",
  },
  about: {
    title: "Sobre Mí",
    content: [
      "Desarrollador Full Stack con más de 12 años de experiencia creando soluciones web, móviles y de escritorio altamente escalables. Especializado en React, React Native, Laravel, NestJS, WebSockets y bases de datos SQL/NoSQL. Con amplia trayectoria en proyectos críticos en sectores como salud, banca, gobierno, educación y comercio electrónico en Latinoamérica y Estados Unidos.",
    ],
  },
  skills: {
    title: "Habilidades y Tecnologías",
    description: "Mi conjunto de herramientas técnicas abarca múltiples dominios, lo que me permite abordar diversos desafíos.",
  },
  projects: {
    title: "Proyectos Destacados",
    description: "Una selección de mi trabajo reciente en diferentes plataformas y tecnologías.",
    viewProject: "Ver Proyecto",
    sourceCode: "Código Fuente",
  },
  experience: {
    title: "Experiencia y Educación",
    education: "Educación",
    work: "Experiencia Laboral",
  },
  contact: {
    title: "Contactar",
    description: "¿Interesado en trabajar juntos? No dudes en contactarme.",
    formName: "Nombre",
    formEmail: "Correo",
    formMessage: "Mensaje",
    formSubmit: "Enviar Mensaje",
    formSuccess: "¡Mensaje enviado con éxito!",
    phone: "Teléfono",
    location: "Ubicación",
    connect: "Conéctate conmigo",
  },
  footer: {
    rights: "Todos los derechos reservados",
  },
  info: {
    email: "support@eikergonzalez.com",
    phone: "+58 (412) 574-6623",
    location: "Miranda, Venezuela",
  },
  others: {
    other1: "Configuración de servidores Linux, servidores de correo, web.",
    other2: "En construcción",
  }
};

export const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
] as const;

export type LanguageCode = typeof languageOptions[number]['code'];

export const getLanguageContent = (code: Language): LanguageContent => {
  switch (code) {
    case 'en':
      return en;
    case 'es':
      return es;
    default:
      return en;
  }
};
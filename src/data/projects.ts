import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "telemedicine",
    title: "Telemedicine & Video Consultation Platform",
    description: "A web and mobile telemedicine solution with video consultations and real-time communication for organizations.",
    image: "",
    technologies: ["React", "React Native", "NestJS", "WebSockets", "Jitsi Meet", "Docker"],
  },
  {
    id: "health-offline",
    title: "Offline Health Data Collection",
    description: "A mobile workflow for collecting health survey data offline and synchronizing it when connectivity is available, plus bulk Excel imports.",
    image: "",
    technologies: ["Flutter", "Dart", "PHP", "MySQL"],
  },
  {
    id: "tourism-booking",
    title: "Tourism Appointment Scheduling",
    description: "An appointment scheduling system developed for the tourism department of Gualeguaychú.",
    image: "",
    technologies: ["React", "Laravel", "NestJS", "MySQL"],
  },
  {
    id: "hr-modernization",
    title: "Human Resources Platform Modernization",
    description: "Work on a human resources management platform, including modernization from a legacy Laravel application toward React-based interfaces and APIs.",
    image: "",
    technologies: ["Laravel", "React", "Next.js", "MySQL"],
  },
  {
    id: "crm-donhuesillo",
    title: "Distributor CRM & Operations",
    description: "A CRM project for a distributor, supporting business workflows and customer operations.",
    image: "",
    technologies: ["Laravel", "React", "Next.js", "TypeORM"],
  },
  {
    id: "mobile-orders",
    title: "Food Distributor Order App",
    description: "An application for sales and order requests, designed to support distributor operations.",
    image: "",
    technologies: ["Laravel", "MySQL", "Flutter"],
  },
];

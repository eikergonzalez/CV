import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/eikergonzalez',
    icon: <Github size={20} />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/eiker-gonzalez/',
    icon: <Linkedin size={20} />,
  },
  {
    name: 'Email',
    url: 'mailto:support@eikergonzalez.com',
    icon: <Mail size={20} />,
  },
  {
    name: 'Website',
    url: 'https://eikergonzalez.com',
    icon: <ExternalLink size={20} />,
  },
];
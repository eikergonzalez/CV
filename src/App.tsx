import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
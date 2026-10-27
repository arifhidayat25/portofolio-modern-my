import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';

const PortfolioContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    let ticking = false;
    const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Navigation Header with Language Toggle */}
      <Navbar activeSection={activeSection} />

      {/* 1. HOMEPAGE */}
      <Hero />

      {/* 2. ABOUT ME */}
      <About />

      {/* 3. EDUCATION */}
      <Education />

      {/* 4. EXPERIENCE */}
      <Experience />

      {/* 5. SKILLS & SERVICES */}
      <Skills />

      {/* 6. PROJECT LIST */}
      <Projects />

      {/* 7. CLOSING AND CONTACT SOCIAL MEDIA */}
      <Contact />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
};

export default App;

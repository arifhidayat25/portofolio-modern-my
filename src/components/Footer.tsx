import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const { content } = useLanguage();
  const { personalInfo, ui } = content;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: ui.nav.home, href: '#home' },
    { name: ui.nav.about, href: '#about' },
    { name: ui.nav.education, href: '#education' },
    { name: ui.nav.experience, href: '#experience' },
    { name: ui.nav.skills, href: '#skills' },
    { name: ui.nav.projects, href: '#projects' },
    { name: ui.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="section-container" style={{ paddingBottom: 0 }}>
        <div className="footer-top-row">
          <div className="footer-brand">
            <div>
              <div className="footer-brand-title">{personalInfo.name}</div>
              <div className="footer-tagline">{ui.footer.tagline}</div>
            </div>
          </div>

          <nav>
            <ul className="footer-links-nav" style={{ listStyle: 'none' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name}. {ui.footer.copyright}
          </p>

          <button
            type="button"
            className="btn-back-to-top"
            onClick={scrollToTop}
            aria-label={ui.footer.backToTop}
            title={ui.footer.backToTop}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

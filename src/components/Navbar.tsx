import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: content.ui.nav.home, href: '#home', id: 'home' },
    { name: content.ui.nav.about, href: '#about', id: 'about' },
    { name: content.ui.nav.education, href: '#education', id: 'education' },
    { name: content.ui.nav.experience, href: '#experience', id: 'experience' },
    { name: content.ui.nav.skills, href: '#skills', id: 'skills' },
    { name: content.ui.nav.projects, href: '#projects', id: 'projects' },
    { name: content.ui.nav.contact, href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Brand Logo */}
          <a href="#home" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
            <span className="brand-text">
              {content.personalInfo.brandName || 'Arif'}
              <span className="brand-dot">.</span>
            </span>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="desktop-nav">
            <ul className="nav-menu-desktop">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions (Language Switcher + Socials + Contact CTA) */}
          <div className="nav-actions">
            {/* Language Switcher Pill */}
            <div className="lang-switcher-pill" aria-label="Language selector">
              <button
                type="button"
                className={`lang-btn ${language === 'id' ? 'active' : ''}`}
                onClick={() => setLanguage('id')}
                title="Bahasa Indonesia"
              >
                ID
              </button>
              <button
                type="button"
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Desktop Socials */}
            <div className="nav-socials">
              <a
                href={content.socialLinks.find((s) => s.icon === 'Github')?.url || 'https://github.com/arifhidayat25'}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-btn"
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={content.socialLinks.find((s) => s.icon === 'Linkedin')?.url || 'https://linkedin.com/in/arifhidayat25'}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-btn"
                title="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={content.socialLinks.find((s) => s.icon === 'Instagram')?.url || 'https://instagram.com/arifhidayat.25'}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-btn"
                title="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
            </div>

            {/* Desktop CTA Button */}
            <a href="#contact" className="btn-nav-talk desktop-only-btn">
              {content.ui.nav.letsTalk}
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-Out Drawer */}
      <aside className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="nav-brand">
            <span className="brand-text">
              {content.personalInfo.brandName || 'Arif'}
              <span className="brand-dot">.</span>
            </span>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="drawer-nav-list">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className="drawer-nav-item">
                <a
                  href={link.href}
                  className={`drawer-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="drawer-footer">
          <div className="drawer-socials">
            <a
              href={content.socialLinks.find((s) => s.icon === 'Github')?.url || 'https://github.com/arifhidayat25'}
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle-btn"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={content.socialLinks.find((s) => s.icon === 'Linkedin')?.url || 'https://linkedin.com/in/arifhidayat25'}
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle-btn"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={content.socialLinks.find((s) => s.icon === 'Instagram')?.url || 'https://instagram.com/arifhidayat.25'}
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle-btn"
              title="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
          </div>

          <a
            href="#contact"
            className="btn-primary drawer-talk-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            {content.ui.nav.letsTalk}
          </a>
        </div>
      </aside>
    </>
  );
};

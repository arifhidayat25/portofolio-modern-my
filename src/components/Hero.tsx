import React from 'react';
import { Terminal, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export const Hero: React.FC = () => {
  const { content } = useLanguage();
  const { personalInfo, ui } = content;

  return (
    <section id="home" className="hero-section">
      {/* Background SVG Geometric Decorations */}
      <div className="hero-decorations" aria-hidden="true">
        {/* Hexagon 1 */}
        <svg className="decor-hexagon decor-hex-1" viewBox="0 0 100 115" fill="none">
          <polygon
            points="50 0, 100 28.8, 100 86.6, 50 115.4, 0 86.6, 0 28.8"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {/* Hexagon 2 */}
        <svg className="decor-hexagon decor-hex-2" viewBox="0 0 100 115" fill="none">
          <polygon
            points="50 0, 100 28.8, 100 86.6, 50 115.4, 0 86.6, 0 28.8"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="rgba(0, 210, 106, 0.05)"
          />
        </svg>

        {/* Hexagon 3 */}
        <svg className="decor-hexagon decor-hex-3" viewBox="0 0 100 115" fill="none">
          <polygon
            points="50 0, 100 28.8, 100 86.6, 50 115.4, 0 86.6, 0 28.8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Dot Matrix 1 */}
        <svg className="decor-dots decor-dots-1" viewBox="0 0 100 60" fill="#00b359">
          <circle cx="10" cy="10" r="2.5" />
          <circle cx="30" cy="10" r="2.5" />
          <circle cx="50" cy="10" r="2.5" />
          <circle cx="70" cy="10" r="2.5" />
          <circle cx="90" cy="10" r="2.5" />
          <circle cx="10" cy="30" r="2.5" />
          <circle cx="30" cy="30" r="2.5" />
          <circle cx="50" cy="30" r="2.5" />
          <circle cx="70" cy="30" r="2.5" />
          <circle cx="90" cy="30" r="2.5" />
          <circle cx="10" cy="50" r="2.5" />
          <circle cx="30" cy="50" r="2.5" />
          <circle cx="50" cy="50" r="2.5" />
          <circle cx="70" cy="50" r="2.5" />
          <circle cx="90" cy="50" r="2.5" />
        </svg>

        {/* Dot Matrix 2 */}
        <svg className="decor-dots decor-dots-2" viewBox="0 0 80 60" fill="#00b359">
          <circle cx="10" cy="10" r="2.5" />
          <circle cx="30" cy="10" r="2.5" />
          <circle cx="50" cy="10" r="2.5" />
          <circle cx="70" cy="10" r="2.5" />
          <circle cx="10" cy="30" r="2.5" />
          <circle cx="30" cy="30" r="2.5" />
          <circle cx="50" cy="30" r="2.5" />
          <circle cx="70" cy="30" r="2.5" />
        </svg>

        {/* Circles */}
        <div className="decor-circle decor-circle-1" />
        <div className="decor-circle decor-circle-2" />
      </div>

      <div className="section-container hero-grid">
        {/* Left Column: Headlines & CTA */}
        <div className="hero-text-col">
          <span className="hero-greeting">{personalInfo.badge}</span>
          <h1 className="hero-title">
            {personalInfo.name}
            <span className="hero-title-highlight">{personalInfo.headlineRole}</span>
          </h1>

          <p className="hero-subtitle">{personalInfo.bioShort}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              {ui.hero.viewPortfolio}
            </a>
            <a
              href={personalInfo.cvUrl || '/cv-achmad-arif.pdf'}
              download="CV-Achmad-Arif-Hidayat.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Download size={16} style={{ marginRight: '0.4rem' }} />
              {ui.hero.downloadCv || ui.hero.contactMe || 'Unduh CV'}
            </a>
          </div>

          <a href="#about" className="hero-scroll-prompt">
            <div className="scroll-line-box" />
            <span className="scroll-text">
              {ui.hero.scrollDown}
              <br />
              {ui.hero.toExplore}
            </span>
          </a>
        </div>

        {/* Right Column: User Portrait */}
        <div className="hero-image-col">
          <div className="hero-image-wrapper">
            <div className="hero-photo-backdrop" />

            {/* Floating Badges */}
            <div className="floating-hero-badge badge-left">
              <span className="badge-pulse-indicator" />
              <span>{ui.hero.badgeLeft}</span>
            </div>

            <div className="floating-hero-badge badge-right">
              <Terminal size={16} color="#00d26a" />
              <span>{ui.hero.badgeRight}</span>
            </div>

            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/kacamata1-mobile.webp"
                type="image/webp"
              />
              <source srcSet="/kacamata1.webp" type="image/webp" />
              <img
                src="/kacamata1.png"
                alt={personalInfo.name}
                className="hero-photo"
                width={853}
                height={1280}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </div>

      {/* Smooth Organic Wave Divider to About Me */}
      <div className="hero-bottom-wave">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32L80,48C160,64,320,96,480,96C640,96,800,64,960,48C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

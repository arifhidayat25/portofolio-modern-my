import React from 'react';
import { Send, Monitor, Server, Globe, Database } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

export const About: React.FC = () => {
  const { content } = useLanguage();
  const { personalInfo, ui } = content;

  const renderHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor size={20} />;
      case 'Server':
        return <Server size={20} />;
      case 'Globe':
        return <Globe size={20} />;
      case 'Database':
        return <Database size={20} />;
      default:
        return <Monitor size={20} />;
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="section-container about-grid">
        {/* Left Column: Portrait with Floating Stats */}
        <div className="about-image-col">
          <div className="about-image-wrapper">
            <div className="about-photo-blob" />

            <div className="about-photo-frame">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/kacamata2-mobile.webp"
                  type="image/webp"
                />
                <source srcSet="/kacamata2.webp" type="image/webp" />
                <img
                  src="/kacamata2.png"
                  alt={personalInfo.name}
                  className="about-photo"
                  width={1198}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            {/* Floating Metric 1 */}
            <div className="floating-stat-pill stat-pill-top-right">
              <div className="stat-number-row">
                <span className="stat-val">{personalInfo.stats.experienceYears}</span>
              </div>
              <span className="stat-label">{personalInfo.stats.experienceYearsLabel}</span>
            </div>

            {/* Floating Metric 2 */}
            <div className="floating-stat-pill stat-pill-mid-left">
              <div className="stat-number-row">
                <span className="stat-val">{personalInfo.stats.completedProjects}</span>
              </div>
              <span className="stat-label">{personalInfo.stats.completedProjectsLabel}</span>
            </div>

            {/* Floating Metric 3 */}
            <div className="floating-stat-pill stat-pill-bottom-right">
              <div className="stat-number-row">
                <span className="stat-val">{personalInfo.stats.happyClients}</span>
              </div>
              <span className="stat-label">{personalInfo.stats.happyClientsLabel}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Details */}
        <div className="about-text-col">
          <span className="section-tag">{ui.about.tag}</span>
          <h2 className="section-title">{ui.about.title}</h2>
          <h3 className="about-lead">{ui.about.lead}</h3>

          <div className="about-paragraphs">
            {personalInfo.bioLong.map((paragraph, index) => (
              <p key={index} className="about-p">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Interactive Core Competency Highlights */}
          {ui.about.highlights && ui.about.highlights.length > 0 && (
            <div className="about-highlights-grid">
              {ui.about.highlights.map((item, idx) => (
                <div key={idx} className="about-highlight-card">
                  <div className="about-highlight-icon">
                    {renderHighlightIcon(item.icon)}
                  </div>
                  <div className="about-highlight-info">
                    <h4 className="about-highlight-title">{item.title}</h4>
                    <p className="about-highlight-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Inline Contact Prompt */}
          <div className="about-contact-inline">
            <span className="contact-prompt-text">{ui.about.contactPrompt}</span>{' '}
            <a href={`mailto:${personalInfo.contactEmail}`} className="contact-email-link">
              {personalInfo.contactEmail}
            </a>
          </div>

          <div className="about-actions">
            <a href="#contact" className="btn-primary">
              <Send size={16} />
              {ui.about.hireMe}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

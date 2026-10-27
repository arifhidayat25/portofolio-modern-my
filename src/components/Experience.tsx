import React from 'react';
import { MapPin, Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

export const Experience: React.FC = () => {
  const { content } = useLanguage();
  const { experienceData, ui } = content;

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          <span className="section-tag">{ui.experience.tag}</span>
          <h2 className="section-title">{ui.experience.title}</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            {ui.experience.desc}
          </p>
        </div>

        <div className={`experience-timeline ${experienceData.length === 1 ? 'single-item' : ''}`}>
          {experienceData.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot" />

              <div className="timeline-card">
                <div className="exp-header">
                  <div className="exp-role-wrap">
                    <div className="exp-briefcase-icon">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <div className="exp-company-row">
                        <span className="exp-company">{exp.company}</span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <MapPin size={14} color="#10b981" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="exp-period">
                    <Calendar size={13} style={{ marginRight: '0.35rem', verticalAlign: '-1px' }} />
                    {exp.period}
                  </span>
                </div>

                <ul className="exp-bullets">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="exp-bullet-item">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="exp-tech-tags">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="exp-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

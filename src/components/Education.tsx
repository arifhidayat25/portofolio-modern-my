import React from 'react';
import { GraduationCap, BookOpen, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Education.css';

export const Education: React.FC = () => {
  const { content } = useLanguage();
  const { educationData, ui } = content;

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap size={24} />;
      case 1:
        return <BookOpen size={24} />;
      default:
        return <ShieldCheck size={24} />;
    }
  };

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          <span className="section-tag">{ui.education.tag}</span>
          <h2 className="section-title">{ui.education.title}</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            {ui.education.desc}
          </p>
        </div>

        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <div key={edu.id} className="education-card">
              <div className="edu-top-row">
                <div className="edu-icon-badge">{getIcon(idx)}</div>
                <span className="edu-period-badge">{edu.period}</span>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-desc">{edu.description}</p>

              {edu.achievements && edu.achievements.length > 0 && (
                <ul className="edu-achievements-list">
                  {edu.achievements.map((ach, i) => (
                    <li key={i} className="edu-achievement-item">
                      <CheckCircle2 size={16} className="edu-check-icon" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

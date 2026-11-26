import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Laptop, 
  Network, 
  Server, 
  Layers 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { SkillItem } from '../types';
import './Skills.css';

export const Skills: React.FC = () => {
  const { content } = useLanguage();
  const { serviceCardsData, skillsData, ui } = content;
  const categories = ui.skills.categories;
  const allCategoryName = categories[0];

  const [selectedCategory, setSelectedCategory] = useState<string>(allCategoryName);

  // Sync selectedCategory when language changes
  useEffect(() => {
    setSelectedCategory(allCategoryName);
  }, [allCategoryName]);

  // If the language switches, ensure selectedCategory aligns with allCategory if needed
  const isAll = selectedCategory === allCategoryName || selectedCategory === 'All' || selectedCategory === 'Semua';

  const filteredSkills = isAll
    ? skillsData
    : skillsData.filter((skill) => skill.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={28} />;
      case 'Laptop':
        return <Laptop size={28} />;
      case 'Network':
        return <Network size={28} />;
      case 'Server':
        return <Server size={28} />;
      default:
        return <Layers size={28} />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="skills-header-center">
          <span className="section-tag">{ui.skills.tag}</span>
          <h2 className="section-title">{ui.skills.title}</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            {ui.skills.desc}
          </p>
        </div>

        {/* 4 Service Cards */}
        <div className="services-cards-grid">
          {serviceCardsData.map((service) => (
            <div
              key={service.id}
              className={`service-card ${service.isFeatured ? 'card-featured' : 'card-white'}`}
            >
              <div className="service-icon-box">{getServiceIcon(service.icon)}</div>
              <span className="service-count">{service.projectsCount}</span>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Technical Proficiency Deep Dive */}
        <div className="tech-stack-container">
          <div className="tech-stack-header">
            <div>
              <span className="section-tag" style={{ marginBottom: '0.2rem' }}>
                {ui.skills.techMasteryTag}
              </span>
              <h3 className="tech-stack-title">{ui.skills.techMasteryTitle}</h3>
            </div>

            {/* Filter Tabs */}
            <div className="tech-filter-tabs">
              {categories.map((cat, idx) => {
                const isActive = (idx === 0 && isAll) || selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(idx === 0 ? allCategoryName : cat)}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills Progress Bar Grid */}
          <div className="skills-progress-grid">
            {filteredSkills.map((skill: SkillItem) => (
              <div key={skill.name} className="skill-bar-card">
                <div className="skill-info-row">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-pct">{skill.proficiency}%</span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

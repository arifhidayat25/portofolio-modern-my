import React, { useState } from 'react';
import { ExternalLink, X, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import type { ProjectItem } from '../types';
import './Projects.css';

export const Projects: React.FC = () => {
  const { content } = useLanguage();
  const { projectsData, ui } = content;

  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const availableCategories = Array.from(new Set(projectsData.map((item) => item.category)));
  const filterOptions = [ui.projects.allCategory, ...availableCategories];

  const isAll = activeFilter === 'All' || activeFilter === 'Semua' || activeFilter === ui.projects.allCategory;

  const filteredProjects = isAll
    ? projectsData
    : projectsData.filter((item) => item.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          <span className="section-tag">{ui.projects.tag}</span>
          <h2 className="section-title">{ui.projects.title}</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            {ui.projects.desc}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-bar">
          {filterOptions.map((filter, idx) => {
            const isActive = (idx === 0 && isAll) || activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                className={`filter-pill ${isActive ? 'active' : ''}`}
                onClick={() => setActiveFilter(idx === 0 ? 'All' : filter)}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project-card"
              onClick={() => setActiveModalProject(project)}
            >
              <div className="project-img-wrapper">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-img"
                  width={400}
                  height={225}
                  loading="lazy"
                  decoding="async"
                />
                <span className="project-category-badge">{project.category}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="proj-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-footer-actions" onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    className="proj-link-btn"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <Eye size={16} />
                    {ui.projects.viewDetails}
                  </button>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {project.githubUrl && project.githubUrl.trim() !== '' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-icon-btn"
                        title="GitHub Repository"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl.trim() !== '' && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-icon-btn"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeModalProject && (
          <div className="modal-overlay" onClick={() => setActiveModalProject(null)}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <img
                src={activeModalProject.imageUrl}
                alt={activeModalProject.title}
                className="modal-img"
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
              />

              <div className="modal-body">
                <span className="section-tag">{activeModalProject.category}</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.8rem' }}>
                  {activeModalProject.title}
                </h3>

                <div
                  className="modal-long-desc"
                  dangerouslySetInnerHTML={{
                    __html: activeModalProject.longDescription || activeModalProject.description,
                  }}
                />

                <div style={{ marginBottom: '1.8rem' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.6rem' }}>
                    {ui.projects.techUsed}
                  </h4>
                  <div className="project-tags">
                    {activeModalProject.tags.map((tag, idx) => (
                      <span key={idx} className="proj-tag" style={{ background: '#e6fcf1', color: '#059669', borderColor: 'rgba(0, 210, 106, 0.3)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {activeModalProject.demoUrl && activeModalProject.demoUrl.trim() !== '' && activeModalProject.demoUrl !== '#' && (
                    <a
                      href={activeModalProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <ExternalLink size={16} />
                      {ui.projects.visitDemo}
                    </a>
                  )}
                  {activeModalProject.githubUrl && activeModalProject.githubUrl.trim() !== '' && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      <GithubIcon size={16} />
                      {ui.projects.viewSource}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const currentYear = new Date().getFullYear();

export const Contact: React.FC = () => {
  const { content } = useLanguage();
  const { personalInfo, socialLinks, ui } = content;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon size={18} />;
      case 'Linkedin':
        return <LinkedinIcon size={18} />;
      case 'Instagram':
        return <InstagramIcon size={18} />;
      case 'MessageCircle':
      case 'Whatsapp':
        return <WhatsappIcon size={18} />;
      default:
        return <Mail size={18} />;
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        {/* Closing CTA Banner */}
        <div className="closing-cta-card">
          <div className="cta-text-side">
            <span className="cta-tag">{ui.contact.ctaTag}</span>
            <h2 className="cta-headline">{ui.contact.ctaHeadline}</h2>
            <p className="cta-subtext">{ui.contact.ctaSubtext}</p>
          </div>

          <a href="#contact-form-anchor" className="btn-cta-white">
            {ui.contact.ctaBtn}{' '}
            <ArrowRight size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '6px' }} />
          </a>
        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
          <span className="section-tag">{ui.contact.tag}</span>
          <h2 className="section-title">{ui.contact.title}</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            {ui.contact.desc}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid" id="contact-form-anchor">
          {/* Left Column: Direct Info Cards & Social Links */}
          <div className="contact-info-col">
            <div className="contact-cards-list">
              <a href={`mailto:${personalInfo.contactEmail}`} className="contact-card-item">
                <div className="contact-icon-box">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="contact-meta-label">{ui.contact.emailLabel}</div>
                  <div className="contact-meta-val">{personalInfo.contactEmail}</div>
                </div>
              </a>

              <a 
                href={socialLinks.find((s) => s.icon === 'Whatsapp')?.url || `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-card-item"
              >
                <div className="contact-icon-box">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="contact-meta-label">{ui.contact.phoneLabel}</div>
                  <div className="contact-meta-val">{personalInfo.phone}</div>
                </div>
              </a>

              <div className="contact-card-item">
                <div className="contact-icon-box">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="contact-meta-label">{ui.contact.locationLabel}</div>
                  <div className="contact-meta-val">{ui.contact.locationVal}</div>
                </div>
              </div>
            </div>

            {/* Social Media Pills List */}
            <div className="social-media-wrapper">
              <h3 className="social-title">{ui.contact.socialTitle}</h3>
              <div className="social-icons-row">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-pill"
                  >
                    {getSocialIcon(social.icon)}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-form-col">
            <h3 className="contact-form-title">{ui.contact.formTitle}</h3>
            <p className="contact-form-sub">{ui.contact.formSub}</p>

            {submitted && (
              <div className="alert-success">
                <CheckCircle size={20} />
                <span>{ui.contact.successAlert}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  {ui.contact.nameLabel}
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder={ui.contact.namePlaceholder}
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  {ui.contact.emailInputLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder={ui.contact.emailPlaceholder}
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">
                  {ui.contact.subjectLabel}
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  placeholder={ui.contact.subjectPlaceholder}
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  {ui.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder={ui.contact.messagePlaceholder}
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="form-submit-btn"
              >
                <Send size={18} />
                {isSubmitting ? ui.contact.submittingBtn : ui.contact.submitBtn}
              </button>
            </form>
          </div>
        </div>

        {/* Minimal Bottom Credit */}
        <div className="contact-bottom-credit">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

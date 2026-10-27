import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './ScrollToTop.css';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={`floating-scroll-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label={content.ui.footer.backToTop}
      title={content.ui.footer.backToTop}
    >
      <ArrowUp size={22} />
    </button>
  );
};

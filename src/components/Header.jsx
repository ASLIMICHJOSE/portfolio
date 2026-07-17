import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      let currentSection = 'home';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 150) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-md h-16">
        <a className="font-headline-sm text-headline-sm font-bold text-primary" href="#home" onClick={(e) => handleNavClick(e, 'home')}>
          Asli Mich Jose J
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-lg items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`nav-link font-label-md text-label-md transition-colors duration-200 ${
                activeSection === link.id
                  ? 'active text-primary font-bold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interact ml-4 px-md py-2 bg-primary text-on-primary font-label-md text-label-md rounded hover:opacity-90 transition-all duration-200"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant/30 px-md py-md space-y-md shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`block py-2 font-label-md text-label-md ${
                activeSection === link.id
                  ? 'text-primary font-bold border-l-2 border-primary pl-2'
                  : 'text-on-surface-variant pl-2'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-sm border-t border-outline-variant/30 flex justify-center">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interact w-full text-center py-2 bg-primary text-on-primary font-label-md text-label-md rounded hover:opacity-90 transition-all duration-200"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

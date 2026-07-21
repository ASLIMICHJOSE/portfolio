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
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-colors duration-300">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-md h-16">
        <a className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight flex items-center gap-sm group" href="#home" onClick={(e) => handleNavClick(e, 'home')}>
          <img 
            src={`${import.meta.env.BASE_URL}favicon.jpeg`} 
            alt="Asli Mich Jose Logo" 
            className="w-9 h-9 rounded-full object-cover border-2 border-primary/40 group-hover:border-primary shadow-sm transition-all group-hover:scale-105"
          />
          <span>Asli Mich Jose J</span>
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
            className="btn-interact ml-2 px-md py-2 bg-primary text-on-primary font-label-md text-label-md rounded hover:opacity-90 transition-all duration-200 font-semibold"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden text-primary focus:outline-none p-1"
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
        <div className="md:hidden bg-surface border-b border-outline-variant/30 px-md py-md space-y-md shadow-xl transition-all duration-300">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`block py-2.5 font-label-md text-label-md rounded-lg px-3 transition-colors ${
                activeSection === link.id
                  ? 'text-primary font-bold bg-primary/10 border-l-4 border-primary'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-sm border-t border-outline-variant/30 flex flex-col gap-sm">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interact w-full text-center py-2.5 bg-primary text-on-primary font-label-md text-label-md rounded font-semibold hover:opacity-90 transition-all duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

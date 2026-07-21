import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-xl mt-xl bg-surface dark:bg-surface-container border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-md gap-md">
        <div>
          <a className="font-headline-sm text-headline-sm font-bold text-primary flex items-center gap-sm" href="#home">
            <img 
              src={`${import.meta.env.BASE_URL}favicon.jpeg`} 
              alt="Asli Mich Jose Logo" 
              className="w-7 h-7 rounded-full object-cover border border-primary/40 shadow-sm"
            />
            <span>Asli Mich Jose J</span>
          </a>
          <p className="font-label-sm text-label-sm text-on-surface-variant mt-sm">
            © {currentYear} Asli Mich Jose J. Full-Stack Developer.
          </p>
        </div>
        <div className="flex gap-lg items-center">
          <a 
            className="nav-link text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-sm text-label-sm" 
            href="https://github.com/ASLIMICHJOSE" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a 
            className="nav-link text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-sm text-label-sm" 
            href="https://www.linkedin.com/in/asli-mich-jose-844916296/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            className="nav-link text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-sm text-label-sm flex items-center gap-xs" 
            href="mailto:aslimich22@gmail.com" 
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

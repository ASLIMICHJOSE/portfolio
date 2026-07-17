import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-xl mt-xl bg-surface dark:bg-surface-container border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-md gap-md">
        <div>
          <a className="font-headline-sm text-headline-sm font-bold text-primary" href="#home">
            Asli Mich Jose J
          </a>
          <p className="font-label-sm text-label-sm text-on-surface-variant mt-sm">
            © {currentYear} Asli Mich Jose J. Built with precision.
          </p>
        </div>
        <div className="flex gap-lg">
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
            href="https://linkedin.com/in/aslimichjose" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            className="nav-link text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-sm text-label-sm" 
            href="https://twitter.com/aslimichjose" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

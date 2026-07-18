import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        className="group relative p-3.5 rounded-full border border-outline-variant/40 bg-surface/80 backdrop-blur-md text-primary shadow-2xl hover:scale-110 hover:border-primary transition-all duration-300 flex items-center justify-center cursor-pointer"
      >
        <span className="material-symbols-outlined text-2xl transition-transform duration-500 group-hover:rotate-45">
          {theme === 'dark' ? 'light_mode' : 'dark_mode'}
        </span>
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1 bg-surface-container-high text-on-surface text-label-sm font-label-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md border border-outline-variant/30">
          {theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </span>
      </button>
    </div>
  );
}

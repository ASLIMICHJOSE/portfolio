import React from 'react';

export default function About() {
  const focusAreas = [
    {
      icon: 'code',
      title: 'Frontend Web Development',
      description: 'Crafting responsive, accessible, and high-performance user interfaces using React, modern JavaScript (ES6+), and Tailwind CSS.'
    },
    {
      icon: 'web',
      title: 'Web Application Architecture',
      description: 'Building scalable web applications with modular component architecture, API integration, and clean state management.'
    },
    {
      icon: 'devices',
      title: 'Responsive & Mobile-First Design',
      description: 'Engineering seamless, adaptive layouts optimized for all device screen sizes, cross-browser compatibility, and user experiences.'
    },
    {
      icon: 'speed',
      title: 'Web Performance & Optimization',
      description: 'Optimizing load times, reducing bundle footprint, auditing Core Web Vitals, and implementing best SEO practices.'
    }
  ];

  return (
    <section className="py-xl px-md max-w-container-max mx-auto reveal" id="about">
      <h2 className="font-headline-md text-headline-md mb-xl border-l-4 border-primary pl-md">
        Core Focus Areas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {focusAreas.map((focus, idx) => (
          <div 
            key={idx} 
            className="hover-lift p-md bg-surface-container-low border border-outline-variant/30 rounded-xl hover:shadow-xl transition-all cursor-default"
          >
            <span className="material-symbols-outlined text-4xl text-primary mb-md">
              {focus.icon}
            </span>
            <h3 className="font-headline-sm text-headline-sm mb-sm text-primary font-bold">
              {focus.title}
            </h3>
            <p className="font-body-md text-on-surface-variant">
              {focus.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

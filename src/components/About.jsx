import React from 'react';

export default function About() {
  const focusAreas = [
    {
      icon: 'layers',
      title: 'UI/UX Development',
      description: 'Creating pixel-perfect, highly responsive React templates with clean and structured CSS layouts.'
    },
    {
      icon: 'widgets',
      title: 'Component Architecture',
      description: 'Designing modular, reusable, and testable React component libraries that scale across web applications.'
    },
    {
      icon: 'account_tree',
      title: 'State Management',
      description: 'Handling complex user interactions and local/global application states with React Hooks and Context APIs.'
    },
    {
      icon: 'speed',
      title: 'Web Performance',
      description: 'Optimizing rendering cycles, minimizing bundle footprint, and auditing for high Lighthouse core vitals.'
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

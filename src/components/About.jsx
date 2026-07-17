import React from 'react';

export default function About() {
  const focusAreas = [
    {
      icon: 'layers',
      title: 'UI/UX Development',
      description: 'Creating pixel-perfect, highly responsive React templates with clean and structured CSS layouts.'
    },
    {
      icon: 'visibility',
      title: 'Computer Vision',
      description: 'Integrating object detection (YOLOv8) models with web interfaces to measure real-time distance.'
    },
    {
      icon: 'speed',
      title: 'Performance Focus',
      description: 'Striving for minimal bundle footprint, optimized rendering lifecycles, and standard accessibility rules.'
    },
    {
      icon: 'cloud',
      title: 'Cloud & Database',
      description: 'Deploying secure serverless architectures and managing databases (Supabase, PostgreSQL) with Microsoft Azure.'
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

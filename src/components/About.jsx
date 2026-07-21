import React from 'react';

export default function About() {
  const focusAreas = [
    {
      icon: 'layers',
      title: 'Full-Stack Web Development',
      description: 'Building end-to-end web applications with React on the frontend, Node.js/Express on the backend, and seamless data synchronization.'
    },
    {
      icon: 'dns',
      title: 'Backend & RESTful APIs',
      description: 'Architecting modular backend microservices, RESTful API endpoints, database schemas (PostgreSQL, MongoDB, Supabase), and authentication.'
    },
    {
      icon: 'code',
      title: 'Frontend & Responsive UI',
      description: 'Crafting pixel-perfect, accessible, and interactive user interfaces using React, modern JavaScript/TypeScript, and Tailwind CSS.'
    },
    {
      icon: 'cloud_sync',
      title: 'Cloud & System Performance',
      description: 'Optimizing database query execution, client-server payload sizes, Core Web Vitals, and deploying to cloud environments like Azure.'
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

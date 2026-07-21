import React, { useState } from 'react';

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All');

  const certs = [
    {
      title: 'Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft Certified',
      category: 'Cloud & Azure',
      icon: 'verified',
      pdfUrl: `${import.meta.env.BASE_URL}certificate/Microsoft_Certified_Azure_Fundamentals.pdf`
    },
    {
      title: 'Career Essentials in Software Development',
      issuer: 'Microsoft & LinkedIn',
      category: 'Software Development',
      icon: 'developer_mode',
      pdfUrl: `${import.meta.env.BASE_URL}certificate/CertificateOfCompletion_Career Essentials in Software Development by Microsoft and LinkedIn.pdf`
    },
    {
      title: 'Introduction to Career Skills in Software Development',
      issuer: 'Microsoft & LinkedIn',
      category: 'Software Development',
      icon: 'badge',
      pdfUrl: `${import.meta.env.BASE_URL}certificate/CertificateOfCompletion_Introduction to Career Skills in Software Development (1).pdf`
    },
    {
      title: 'Introduction to Data Science',
      issuer: 'Cognitive Class / IBM',
      category: 'Data & Analytics',
      icon: 'database',
      pdfUrl: `${import.meta.env.BASE_URL}certificate/CertificateOfCompletion_Introduction to Data Science.pdf`
    },
    {
      title: 'Data Cleaning in Python',
      issuer: 'LinkedIn Learning',
      category: 'Data & Analytics',
      icon: 'terminal',
      pdfUrl: `${import.meta.env.BASE_URL}certificate/CertificateOfCompletion_Data Cleaning in Python Essential Training.pdf`
    },
    {
      title: 'Learning Data Analytics Foundations',
      issuer: 'LinkedIn Learning',
      category: 'Data & Analytics',
      icon: 'analytics',
      pdfUrl: `${import.meta.env.BASE_URL}certificate/CertificateOfCompletion_Learning Data Analytics 1 Foundations.pdf`
    }
  ];

  const categories = ['All', 'Cloud & Azure', 'Software Development', 'Data & Analytics'];

  const filteredCerts = activeCategory === 'All' 
    ? certs 
    : certs.filter(cert => cert.category === activeCategory);

  return (
    <section className="py-xl px-md max-w-container-max mx-auto reveal" id="certifications">
      <div className="text-center mb-lg">
        <h2 className="font-headline-md text-headline-md font-bold mb-xs">
          Certifications & Credentials
        </h2>
        <p className="text-on-surface-variant font-body-md max-w-md mx-auto">
          Verified certifications in Cloud, Software Development, Data Science, and Analytics.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-xs sm:gap-sm mb-xl">
        {categories.map((cat) => {
          const count = cat === 'All' ? certs.length : certs.filter(c => c.category === cat).length;
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-md py-2 rounded-full font-label-md text-label-md transition-all duration-300 flex items-center gap-xs cursor-pointer ${
                isActive
                  ? 'bg-primary text-on-primary shadow-md font-bold scale-105'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container border border-outline-variant/40 hover:text-primary'
              }`}
            >
              <span>{cat}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                isActive ? 'bg-on-primary/20 text-on-primary' : 'bg-surface-container-high text-on-surface-variant'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {filteredCerts.map((cert, idx) => (
          <a
            key={idx}
            href={cert.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift group p-md border border-outline-variant/30 rounded-xl bg-surface hover:bg-surface-container-lowest hover:border-primary/50 transition-all flex flex-col items-center text-center cursor-pointer shadow-sm hover:shadow-md animate-fadeIn"
          >
            <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-md group-hover:rotate-12 transition-transform duration-300">
              <span className="material-symbols-outlined text-on-primary-container text-3xl">
                {cert.icon}
              </span>
            </div>
            <span className="px-sm py-0.5 bg-secondary-container text-on-secondary-container rounded-full text-[11px] font-semibold mb-xs">
              {cert.category}
            </span>
            <h5 className="font-label-md text-label-md font-bold mb-xs text-primary group-hover:text-primary/80 transition-colors">
              {cert.title}
            </h5>
            <p className="text-label-sm font-label-sm text-on-surface-variant mb-md">
              {cert.issuer}
            </p>
            <span className="mt-auto inline-flex items-center gap-xs font-label-sm text-label-sm text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              View Certificate <span className="material-symbols-outlined text-sm">open_in_new</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

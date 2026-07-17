import React from 'react';

export default function Certifications() {
  const certs = [
    {
      title: 'Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft Certified',
      icon: 'verified',
      pdfUrl: '/certificate/Microsoft_Certified_Azure_Fundamentals.pdf'
    },
    {
      title: 'Career Essentials in Software Development',
      issuer: 'Microsoft & LinkedIn',
      icon: 'developer_mode',
      pdfUrl: '/certificate/CertificateOfCompletion_Career Essentials in Software Development by Microsoft and LinkedIn.pdf'
    },
    {
      title: 'Introduction to Career Skills in Software Development',
      issuer: 'Microsoft & LinkedIn',
      icon: 'badge',
      pdfUrl: '/certificate/CertificateOfCompletion_Introduction to Career Skills in Software Development (1).pdf'
    },
    {
      title: 'Introduction to Data Science',
      issuer: 'Cognitive Class / IBM',
      icon: 'database',
      pdfUrl: '/certificate/CertificateOfCompletion_Introduction to Data Science.pdf'
    },
    {
      title: 'Data Cleaning in Python',
      issuer: 'LinkedIn Learning',
      icon: 'terminal',
      pdfUrl: '/certificate/CertificateOfCompletion_Data Cleaning in Python Essential Training.pdf'
    },
    {
      title: 'Learning Data Analytics Foundations',
      issuer: 'LinkedIn Learning',
      icon: 'analytics',
      pdfUrl: '/certificate/CertificateOfCompletion_Learning Data Analytics 1 Foundations.pdf'
    }
  ];

  return (
    <section className="py-xl px-md max-w-container-max mx-auto reveal">
      <h2 className="font-headline-md text-headline-md mb-xl text-center font-bold">
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {certs.map((cert, idx) => (
          <a
            key={idx}
            href={cert.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift group p-md border border-outline-variant/30 rounded-xl bg-surface hover:bg-surface-container-lowest hover:border-primary/50 transition-all flex flex-col items-center text-center cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-md group-hover:rotate-12 transition-transform duration-300">
              <span className="material-symbols-outlined text-on-primary-container text-3xl">
                {cert.icon}
              </span>
            </div>
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

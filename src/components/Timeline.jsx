import React from 'react';

export default function Timeline() {
  const experiences = [
    {
      period: 'July 2025 - Present',
      title: 'Full-Stack Software Engineering Intern',
      company: 'Iniram Square Pvt. Ltd.',
      bullets: [
        'Engineering end-to-end web applications, admin consoles, and real-time business diagnostic tools using React, Node.js, and Tailwind CSS.',
        'Architecting REST API endpoints and data pipelines, achieving seamless data synchronization and a 35% improvement in load speeds.',
        'Connecting computer vision and NLP machine learning backend services to intuitive client dashboard interfaces.',
        'Participating in automated code review, backend API integration testing, and quality control workflows.'
      ]
    },
    {
      period: '2024 - 2025',
      title: 'Full-Stack Project Developer',
      company: 'Self-Employed',
      bullets: [
        'Building and shipping independent full-stack applications with modern tech stacks, focusing on scalable system architecture and database design.',
        'Implementing real-time computer vision detection microservices and medical e-commerce backend systems with Supabase & Node.js.'
      ]
    }
  ];

  const education = [
    {
      period: '2023 - 2027',
      title: 'B.E. in Computer Science & Engineering',
      institution: "Stella Mary's College of Engineering",
      bullets: [
        'Focusing on software architectures, database management, and neural network algorithms.',
        'Actively leading open-source college projects and hackathon presentations.',
        'Current Academic Performance: CGPA 8.6/10'
      ]
    },
    {
      period: '2021 - 2023',
      title: 'Higher Secondary Certificate (HSC) — Maths & Biology',
      institution: 'Carmel Boys Higher Secondary School',
      bullets: [
        'Core Coursework: Physics, Chemistry, Biology, and Mathematics.',
        'Academic Performance Score: 77%'
      ]
    }
  ];

  return (
    <section className="py-xl px-md bg-surface-container-low reveal">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl">
        
        {/* Experience Timeline */}
        <div>
          <h2 className="font-headline-md text-headline-md mb-xl flex items-center gap-md font-bold">
            <span className="material-symbols-outlined text-primary">work</span> Experience
          </h2>
          <div className="relative border-l-2 border-outline-variant ml-2 md:ml-4 pl-6 md:pl-8 space-y-xl">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[33px] md:-left-[41px] top-0.5 w-4 h-4 bg-primary rounded-full border-4 border-surface group-hover:scale-125 transition-transform duration-300"></div>
                <span className="font-label-sm text-label-sm text-secondary mb-base block">
                  {exp.period}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {exp.title}
                </h4>
                <p className="font-label-md text-label-md text-on-surface-variant font-semibold">
                  {exp.company}
                </p>
                <ul className="list-disc list-inside mt-sm font-body-md text-on-surface-variant space-y-xs">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h2 className="font-headline-md text-headline-md mb-xl flex items-center gap-md font-bold">
            <span className="material-symbols-outlined text-primary">school</span> Education
          </h2>
          <div className="relative border-l-2 border-outline-variant ml-2 md:ml-4 pl-6 md:pl-8 space-y-xl">
            {education.map((edu, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[33px] md:-left-[41px] top-0.5 w-4 h-4 bg-primary rounded-full border-4 border-surface group-hover:scale-125 transition-transform duration-300"></div>
                <span className="font-label-sm text-label-sm text-secondary mb-base block">
                  {edu.period}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {edu.title}
                </h4>
                <p className="font-label-md text-label-md text-on-surface-variant font-semibold">
                  {edu.institution}
                </p>
                <ul className="list-disc list-inside mt-sm font-body-md text-on-surface-variant space-y-xs">
                  {edu.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

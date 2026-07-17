import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Zyraa — Fashion E-Commerce',
      tags: ['Front-End', 'React', 'Tailwind CSS'],
      description: 'Modern fashion e-commerce platform featuring a pixel-perfect responsive UI, clean component architecture, and focus on clean typography and rich aesthetics.',
      features: [
        'Minimalist, glassmorphism UI & micro-animations',
        'Fully responsive item catalog grids',
        'Interactive state-managed shopping bag slide-over'
      ],
      image: `${import.meta.env.BASE_URL}assets/images/zyraa.png`,
      demoUrl: 'https://github.com/ASLIMICHJOSE/Zyraa',
      githubUrl: 'https://github.com/ASLIMICHJOSE/Zyraa'
    },
    {
      title: 'SeroFast — Medical E-Commerce & Platform',
      tags: ['Full-Stack Web App', 'React', 'Supabase'],
      description: 'Full-stack medical e-commerce marketplace & clinical predictor. Features geolocation APIs, autocomplete catalog search, dynamic delivery estimates, and vendor dashboards.',
      features: [
        'AI Clinical Symptom Predictor API',
        'Supabase dynamic backend and authentication',
        'Real-time shipping estimates and geolocation integration'
      ],
      image: `${import.meta.env.BASE_URL}assets/images/serofast.png`,
      demoUrl: 'https://github.com/ASLIMICHJOSE/SeroFast',
      githubUrl: 'https://github.com/ASLIMICHJOSE/SeroFast'
    },
    {
      title: 'AI Career Guidance System',
      tags: ['AI Web App', 'TensorFlow', 'JavaScript'],
      description: 'Smart career advisor featuring automatic skill-gap analysis, personalized learning paths, and AI-driven job profile recommendations.',
      features: [
        'TensorFlow-driven client-side recommendations',
        'Interactive skill trees and progress meters',
        'Automated job-role requirement mapping engine'
      ],
      image: `${import.meta.env.BASE_URL}assets/images/career_guidance.png`,
      demoUrl: 'https://github.com/ASLIMICHJOSE/AI-Career-Guidance-System',
      githubUrl: 'https://github.com/ASLIMICHJOSE/AI-Career-Guidance-System'
    },
    {
      title: 'Fitness Trainer Website',
      tags: ['Front-End', 'HTML & CSS', 'JavaScript'],
      description: 'A clean fitness platform incorporating personal trainer profiles, interactive booking schedules, and client contact systems.',
      features: [
        'Integrated training session scheduling calendar',
        'Onboarding client sign-up registration forms',
        'Responsive layout optimized for multiple device sizes'
      ],
      image: `${import.meta.env.BASE_URL}assets/images/fitness_trainer.png`,
      demoUrl: 'https://github.com/ASLIMICHJOSE/Fitness-Trainer-Website',
      githubUrl: 'https://github.com/ASLIMICHJOSE/Fitness-Trainer-Website'
    },
    {
      title: 'AI Object Detection & Distance Measurement',
      tags: ['Computer Vision', 'Python', 'YOLOv8'],
      description: 'Real-time AI model that detects objects and measures the distance between the camera and detected targets using computer vision geometry.',
      features: [
        'YOLOv8 Object Detection and Classification',
        'Focal length camera calibration algorithm',
        'Real-time distance calculation in meters'
      ],
      image: `${import.meta.env.BASE_URL}assets/images/object_detection.png`,
      demoUrl: 'https://github.com/ASLIMICHJOSE/AI-Object-Detection-Distance-Measurement',
      githubUrl: 'https://github.com/ASLIMICHJOSE/AI-Object-Detection-Distance-Measurement'
    }
  ];

  return (
    <section className="py-xl px-md max-w-container-max mx-auto reveal" id="projects">
      <div className="flex justify-between items-end mb-xl">
        <div>
          <h2 className="font-headline-md text-headline-md mb-base font-bold">
            Featured Projects
          </h2>
          <p className="text-on-surface-variant font-body-md">
            Real-world applications and creative explorations.
          </p>
        </div>
        <a 
          className="nav-link text-primary font-label-md hidden md:block" 
          href="https://github.com/ASLIMICHJOSE" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          See All Works →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="hover-lift group bg-surface border border-outline-variant/20 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="relative overflow-hidden h-48">
              <img 
                alt={`${project.title} Preview`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={project.image}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-md">
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface p-base rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
                  aria-label="Live Demo Link"
                >
                  <span className="material-symbols-outlined text-primary">link</span>
                </a>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface p-base rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
                  aria-label="GitHub Code Link"
                >
                  <span className="material-symbols-outlined text-primary">code</span>
                </a>
              </div>
            </div>

            <div className="p-md flex-1 flex flex-col">
              <div className="flex flex-wrap gap-xs mb-sm">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-sm py-0.5 bg-secondary-container text-on-secondary-container text-[11px] font-semibold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-label-md text-label-md text-primary mb-xs font-bold leading-tight line-clamp-1">
                {project.title}
              </h3>
              <p className="text-on-surface-variant text-label-sm mb-md line-clamp-3">
                {project.description}
              </p>
              <ul className="space-y-xs mb-md text-on-surface-variant text-[12px] list-disc list-inside flex-1">
                {project.features.map((feat, fIdx) => (
                  <li key={fIdx} className="line-clamp-1">{feat}</li>
                ))}
              </ul>
              <div className="flex gap-sm mt-auto">
                <a 
                  className="btn-interact flex-1 text-center py-1.5 bg-primary text-on-primary rounded text-label-sm font-semibold hover:opacity-90 transition-all flex items-center justify-center" 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a 
                  className="btn-interact flex-1 text-center py-1.5 border border-outline-variant rounded text-label-sm font-semibold hover:bg-surface-container transition-colors flex items-center justify-center gap-xs" 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

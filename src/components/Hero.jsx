import React, { useState, useEffect } from 'react';

export default function Hero() {
  const roles = [
    "Building interactive, pixel-perfect user interfaces.",
    "Creating modern web applications with React & Tailwind.",
    "Optimizing client-side rendering & load performance."
  ];

  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
      }, 20);
    } else {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
      }, 50);
    }

    if (!isDeleting && text === currentRole) {
      // Pause when the full string is typed
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  const handleViewProjectsClick = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const badges = [
    { text: 'React Developer', color: 'bg-[#e0f2fe] text-[#0369a1]' },
    { text: 'Frontend Specialist', color: 'bg-[#faf5ff] text-[#7e22ce]' },
    { text: 'Tailwind Expert', color: 'bg-[#ecfdf5] text-[#047857]' },
    { text: 'UI/UX Builder', color: 'bg-[#fff7ed] text-[#c2410c]' }
  ];

  return (
    <section 
      className="pt-32 pb-xl px-md max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-lg reveal" 
      id="home"
    >
      <div className="space-y-md">
        <div className="flex flex-wrap gap-sm mb-xs">
          {badges.map((badge, idx) => (
            <span 
              key={idx} 
              className={`px-sm py-1 rounded-full text-label-sm font-label-sm border border-transparent hover:border-current transition-colors duration-300 ${badge.color}`}
            >
              {badge.text}
            </span>
          ))}
        </div>
        <p className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">
          Front-End Developer
        </p>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
          Hello, I'm <span className="text-primary font-bold">Asli Mich Jose J</span>.
        </h1>
        
        {/* Typing Subtitle */}
        <div className="h-12 md:h-14 flex items-center">
          <p className="font-headline-sm text-headline-sm text-secondary font-medium leading-normal">
            {text}
            <span className="inline-block w-0.5 h-5 bg-secondary ml-1 animate-pulse" />
          </p>
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
          I build responsive, robust, and beautifully engineered user interfaces. Passionate about creating seamless user experiences through clean code.
        </p>
        <div className="flex flex-wrap gap-md pt-base">
          <a 
            className="btn-interact px-lg py-4 bg-primary text-on-primary font-label-md text-label-md rounded hover:opacity-90 transition-all flex items-center justify-center" 
            href="#projects"
            onClick={handleViewProjectsClick}
          >
            View Projects
          </a>
          <a 
            href="/resume.pdf"
            download="resume.pdf"
            className="btn-interact px-lg py-4 bg-surface text-primary border border-outline-variant font-label-md text-label-md rounded hover:bg-surface-container-low transition-all text-center flex items-center justify-center"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-4 bg-surface-container rounded-xl -z-10 transition-transform group-hover:scale-105 duration-500"></div>
        <img 
          alt="Asli Mich Jose J Professional Portrait" 
          className="w-full h-auto rounded-xl shadow-lg border border-outline-variant/30 object-cover aspect-[4/5] max-h-[500px]" 
          src="/assets/images/portrait.jpg"
        />
      </div>
    </section>
  );
}

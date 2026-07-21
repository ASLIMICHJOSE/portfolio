import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Ecosystem',
      icon: 'desktop_windows',
      skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3', 'Redux / Context API', 'Responsive UI/UX', 'Vite & Webpack']
    },
    {
      title: 'Backend Engineering',
      icon: 'dns',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Python', 'Microservices', 'JWT & OAuth', 'Serverless Functions', 'Middleware Architecture']
    },
    {
      title: 'Databases & Storage',
      icon: 'database',
      skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'SQL', 'Firebase', 'Mongoose / Prisma', 'Redis Cache', 'Data Modeling']
    },
    {
      title: 'Cloud, DevOps & Tools',
      icon: 'cloud',
      skills: ['Microsoft Azure (AZ-900)', 'Git & GitHub', 'Docker', 'Postman', 'CI/CD Pipelines', 'Linux Shell', 'npm / yarn', 'VS Code']
    }
  ];

  const levelingUp = ['Next.js (App Router & SSR)', 'Microservices Architecture', 'GraphQL & WebSockets', 'PostgreSQL Query Tuning'];

  return (
    <section className="py-xl px-md bg-surface-container-lowest reveal" id="skills">
      <div className="max-w-container-max mx-auto space-y-xl">
        <div>
          <div className="text-center mb-xl">
            <h2 className="font-headline-md text-headline-md font-bold mb-xs">
              Technical Arsenal
            </h2>
            <p className="text-on-surface-variant font-body-md max-w-md mx-auto">
              A balanced full-stack toolkit for building modern, high-performance web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="p-md bg-surface border border-outline-variant/30 rounded-xl hover:border-primary/40 hover:shadow-md transition-all space-y-md"
              >
                <div className="flex items-center gap-sm border-b border-outline-variant/40 pb-sm">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {category.icon}
                  </span>
                  <h4 className="font-label-md text-label-md text-primary uppercase font-bold tracking-wider">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-xs">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-sm py-1 bg-surface-container-low border border-outline-variant/60 rounded-full text-label-sm font-label-sm text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leveling Up Banner */}
        <div className="border border-outline-variant/30 rounded-xl p-md bg-surface-container-low flex flex-col sm:flex-row items-center gap-md justify-between shadow-sm">
          <div className="flex items-center gap-md text-center sm:text-left">
            <span className="material-symbols-outlined text-4xl text-primary animate-pulse">trending_up</span>
            <div>
              <h5 className="font-label-md text-label-md font-bold text-primary">Currently Leveling Up</h5>
              <p className="text-label-sm font-label-sm text-on-surface-variant">Actively mastering advanced full-stack & cloud architecture patterns</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-base justify-center">
            {levelingUp.map((skill, idx) => (
              <span 
                key={idx} 
                className="px-sm py-1 bg-primary text-on-primary rounded text-label-sm font-label-sm font-semibold select-none shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

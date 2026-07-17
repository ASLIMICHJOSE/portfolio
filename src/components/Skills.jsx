import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Core Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Advanced Web Tech',
      skills: ['TypeScript', 'Vite', 'React Native', 'Sass/SCSS', 'CSS Grid & Flexbox', 'Web Performance']
    },
    {
      title: 'Libraries & State',
      skills: ['React Hooks', 'Context API', 'Axios', 'REST API Integration', 'Form Validation']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Microsoft Azure', 'GitHub Pages', 'npm', 'VS Code']
    }
  ];

  const levelingUp = ['Next.js (Server Components)', 'TypeScript Deep Dive', 'Advanced State Managers', 'Web Accessibility (a11y)'];

  return (
    <section className="py-xl px-md bg-surface-container-lowest reveal" id="skills">
      <div className="max-w-container-max mx-auto space-y-xl">
        <div>
          <h2 className="font-headline-md text-headline-md mb-xl text-center font-bold">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-md">
                <h4 className="font-label-md text-label-md text-primary uppercase border-b border-outline-variant/50 pb-base font-bold">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-base">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-sm py-1 bg-surface border border-outline-variant rounded-full text-label-sm font-label-sm text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-default"
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
        <div className="border border-outline-variant/30 rounded-xl p-md bg-surface-container-low flex flex-col sm:flex-row items-center gap-md justify-between">
          <div className="flex items-center gap-md text-center sm:text-left">
            <span className="material-symbols-outlined text-4xl text-primary animate-pulse">trending_up</span>
            <div>
              <h5 className="font-label-md text-label-md font-bold text-primary">Currently Leveling Up</h5>
              <p className="text-label-sm font-label-sm text-on-surface-variant">Actively expanding my knowledge in these frontend fields</p>
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

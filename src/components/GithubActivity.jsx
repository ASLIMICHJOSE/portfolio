import React from 'react';

export default function GithubActivity() {
  const metrics = [
    {
      stat: '98+',
      label: 'Lighthouse Performance',
      description: 'Consistently achieving high performance scores with optimized assets & code splitting.',
      icon: 'speed'
    },
    {
      stat: '120+',
      label: 'Reusable Components',
      description: 'Built modular, fully-typed, and accessible React UI components across projects.',
      icon: 'widgets'
    },
    {
      stat: '100%',
      label: 'Mobile-First & Responsive',
      description: 'Flawless layout behavior across mobile, tablet, desktop, and ultra-wide displays.',
      icon: 'devices'
    },
    {
      stat: '100%',
      label: 'Clean Code Standards',
      description: 'Adhering to strict linting rules, semantic HTML, and clean component architecture.',
      icon: 'verified_user'
    }
  ];

  const milestones = [
    {
      icon: 'bolt',
      title: 'Fast Loading & Execution',
      desc: 'Optimized initial bundle size and asset loading for under 1.2s First Contentful Paint (FCP).'
    },
    {
      icon: 'account_tree',
      title: 'Modular State Flow',
      desc: 'Structured state management using React Hooks and Context APIs for seamless user interactions.'
    },
    {
      icon: 'palette',
      title: 'Modern UI & Design Systems',
      desc: 'Crafting pixel-perfect designs with custom color tokens, smooth dark modes, and micro-animations.'
    },
    {
      icon: 'sync_alt',
      title: 'API Integration & Data Flow',
      desc: 'Connecting front-end applications to REST APIs with error handling and smooth loading states.'
    }
  ];

  return (
    <section className="py-xl px-md bg-surface reveal" id="metrics">
      <div className="max-w-container-max mx-auto space-y-xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-xs">
          <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
            Engineering Excellence
          </span>
          <h2 className="font-headline-md text-headline-md font-bold">
            Development Impact & Key Metrics
          </h2>
          <p className="font-body-md text-on-surface-variant">
            A snapshot of quantitative standards, design consistency, and performance goals driving every project built.
          </p>
        </div>

        {/* Top 4 Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {metrics.map((item, idx) => (
            <div 
              key={idx}
              className="p-lg bg-surface-container-lowest border border-outline-variant/30 rounded-xl hover:shadow-xl transition-all duration-300 group hover-lift flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-md">
                <span className="material-symbols-outlined text-3xl text-primary p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="font-display-lg text-3xl font-extrabold text-primary">
                  {item.stat}
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-xs">
                  {item.label}
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Pillars Banner */}
        <div className="border border-outline-variant/30 rounded-xl p-lg bg-surface-container-low">
          <h3 className="font-headline-sm text-xl font-bold text-on-surface mb-lg text-center md:text-left">
            Core Development Pillars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-md items-start">
                <div className="p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/20 shrink-0 text-primary">
                  <span className="material-symbols-outlined text-2xl">{milestone.icon}</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-base font-bold text-on-surface mb-1">
                    {milestone.title}
                  </h4>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

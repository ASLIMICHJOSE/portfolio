import React, { useMemo } from 'react';

export default function GithubActivity() {
  // Generate random data once using useMemo to avoid rerendering grid patterns on every frame
  const contributionGrid = useMemo(() => {
    const weeks = 40; // columns
    const days = 7;   // rows
    const grid = [];

    for (let w = 0; w < weeks; w++) {
      const week = [];
      for (let d = 0; d < days; d++) {
        // Random level from 0 to 4
        // Bias towards 0 and 1 for realism
        const rand = Math.random();
        let level = 0;
        if (rand > 0.8) level = 4;
        else if (rand > 0.6) level = 3;
        else if (rand > 0.4) level = 2;
        else if (rand > 0.15) level = 1;
        week.push(level);
      }
      grid.push(week);
    }
    return grid;
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case 1: return 'bg-secondary-fixed-dim/40';
      case 2: return 'bg-secondary-fixed-dim/70';
      case 3: return 'bg-secondary-fixed/90';
      case 4: return 'bg-primary-container';
      default: return 'bg-outline-variant/20';
    }
  };

  return (
    <section className="py-xl px-md bg-surface reveal">
      <div className="max-w-container-max mx-auto border border-outline-variant/30 rounded-xl p-xl bg-surface-container-lowest flex flex-col md:flex-row items-center gap-xl hover:shadow-lg transition-shadow duration-500">
        
        <div className="flex-1 space-y-md">
          <h2 className="font-headline-md text-headline-md font-bold">
            Open Source Activity
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Consistently pushing code and contributing to the community. Passionate about maintaining clean version histories.
          </p>
          <div className="flex gap-lg">
            <div className="text-center group cursor-default">
              <span className="block font-headline-sm text-headline-sm font-bold text-primary group-hover:scale-110 transition-transform">
                50+
              </span>
              <span className="text-label-sm font-label-sm text-on-surface-variant">
                Repositories
              </span>
            </div>
            <div className="text-center group cursor-default">
              <span className="block font-headline-sm text-headline-sm font-bold text-primary group-hover:scale-110 transition-transform">
                1.2k
              </span>
              <span className="text-label-sm font-label-sm text-on-surface-variant">
                Contributions
              </span>
            </div>
          </div>
        </div>

        {/* Contribution Graph Visual */}
        <div className="w-full md:w-1/2 bg-surface-container-low p-md rounded-xl border border-outline-variant/20 relative overflow-hidden flex flex-col items-center">
          <div className="flex gap-[3px] overflow-x-auto w-full max-w-full custom-scrollbar pb-2 justify-center">
            {contributionGrid.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[3px] shrink-0">
                {week.map((level, dIdx) => (
                  <div
                    key={dIdx}
                    className={`w-[10px] h-[10px] rounded-[2px] transition-colors duration-300 hover:ring-1 hover:ring-primary ${getLevelColor(level)}`}
                    title={`${level === 0 ? 'No' : level * 2} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center w-full max-w-[420px] mt-sm text-[10px] text-on-surface-variant px-1 select-none">
            <span>Less</span>
            <div className="flex gap-[3px] items-center">
              <div className="w-[10px] h-[10px] rounded-[2px] bg-outline-variant/20" />
              <div className="w-[10px] h-[10px] rounded-[2px] bg-secondary-fixed-dim/40" />
              <div className="w-[10px] h-[10px] rounded-[2px] bg-secondary-fixed-dim/70" />
              <div className="w-[10px] h-[10px] rounded-[2px] bg-secondary-fixed/90" />
              <div className="w-[10px] h-[10px] rounded-[2px] bg-primary-container" />
            </div>
            <span>More</span>
          </div>
        </div>

      </div>
    </section>
  );
}

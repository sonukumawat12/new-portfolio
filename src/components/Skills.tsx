import { Database, Server, Wrench, Monitor, Layers } from 'lucide-react';
import { useMemo, useState, useCallback } from 'react';
import { portfolioData } from '../data/portfolioData';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const SkillCard = ({ skill }: { skill: Skill }) => {
  const level = Math.max(0, Math.min(100, skill.level));
  const dots = Math.max(1, Math.min(5, Math.round(level / 20)));
  const levelLabel = level >= 90 ? 'Expert' : level >= 75 ? 'Advanced' : level >= 60 ? 'Proficient' : level >= 40 ? 'Intermediate' : 'Beginner';
  return (
    <div className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-0.5 will-change-transform">
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(59,130,246,0.08), transparent 40%)' }} />

      <div className="flex items-center gap-4">
        {/* Icon block */}
        <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/5 border border-white/10 text-2xl">
          {skill.icon}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-white text-sm sm:text-base font-semibold truncate">{skill.name}</h4>
            <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 text-blue-300">
              {levelLabel}
            </span>
          </div>
          {/* Confidence dots (1-5) instead of % */}
          <div className="mt-2 flex items-center gap-1.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${i < dots ? 'bg-gradient-to-r ' + skill.color : 'bg-white/10'} block`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// (Removed unused CategorySection to avoid lint warnings)

const Skills = () => {
  const { skills } = portfolioData;

  const tabs = useMemo(() => ([
    { key: 'Frontend', icon: Monitor, color: 'from-cyan-400 to-blue-500', data: skills.frontend },
    { key: 'Backend', icon: Server, color: 'from-green-400 to-emerald-500', data: skills.backend },
    { key: 'Database', icon: Database, color: 'from-purple-400 to-pink-500', data: skills.database },
    { key: 'Tools', icon: Wrench, color: 'from-orange-400 to-red-500', data: skills.tools },
  ]), [skills]);

  const [active, setActive] = useState<'Frontend' | 'Backend' | 'Database' | 'Tools'>('Frontend');

  const ActiveIcon = useMemo(() => tabs.find(t => t.key === active)?.icon || Monitor, [tabs, active]);
  const activeData = useMemo(() => tabs.find(t => t.key === active)!, [tabs, active]);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty('--x', `${x}%`);
    target.style.setProperty('--y', `${y}%`);
  }, []);

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-gray-900"></div>
      {/* soft orbs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300">
            <Layers size={16} />
            <span className="text-xs sm:text-sm font-semibold tracking-wider">TECH STACK</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            My Technology Arsenal
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-3xl mx-auto">
            A curated set of tools and technologies I actively use to craft performant, scalable products.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key as any)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm transition-all duration-200 ${
                active === t.key
                  ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-400/40 text-white shadow-[0_0_0_1px_rgba(96,165,250,0.25)]'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:border-blue-400/30 hover:text-white'
              }`}
            >
              <span className="inline-flex items-center gap-2"><t.icon size={14} />{t.key}</span>
            </button>
          ))}
        </div>

        {/* Active Panel */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6" onMouseMove={handleMove}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-xl bg-gradient-to-r ${activeData.color}`}>
              <ActiveIcon size={18} className="text-white" />
            </div>
            <h3 className="text-white font-semibold">{active}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
            {activeData.data.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
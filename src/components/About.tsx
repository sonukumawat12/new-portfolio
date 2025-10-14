import { useEffect, useState } from "react";
import { User, Heart, Code, Award } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const StatCard = ({ icon, label, value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value; // e.g. 5 (years experience)
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        start = end;
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="elegant-card p-6 hover-lift text-center group transition-all duration-300">
      <div className="w-14 h-14 gradient-button rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 will-change-transform transition-transform">
        {icon}
      </div>

      {/* Animated Number */}
      <div className="text-3xl font-bold text-white mb-1">
        {count}
        {label.toLowerCase().includes("year") && "+"}
      </div>

      <p className="text-slate-400 font-medium text-sm leading-tight group-hover:text-slate-200 transition-colors duration-300">
        {label}
      </p>
    </div>
  );
};

const About = () => {
  const { personal, stats } = portfolioData;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.06),transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-400/20 rounded-full mb-6">
            <User size={18} className="text-blue-400" />
            <span className="text-blue-400 font-semibold tracking-wider">
              ABOUT ME
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-teal-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences with modern
            technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Bio */}
          <div className="animate-fade-in-left">
            <div className="elegant-card p-8 hover-lift rounded-2xl bg-slate-900/40 border border-slate-700/40">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 gradient-button rounded-xl flex items-center justify-center">
                  <Heart size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">About Me</h3>
              </div>

              <p className="text-slate-400 leading-relaxed mb-6">
                {personal.bio}
              </p>

              <div className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-400/15 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-xl">💭</span> My Philosophy
                </h4>
                <p className="text-slate-300 leading-relaxed italic">
                  {personal.philosophy}
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-right grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const icons = [
                <Code key="c" size={22} className="text-white" />,
                <Award key="a" size={22} className="text-white" />,
                <User key="u" size={22} className="text-white" />,
                <span key="s" className="text-white text-xl">⚡</span>,
              ];
              return (
                <StatCard
                  key={i}
                  icon={icons[i]}
                  label={stat.label}
                  value={stat.value}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

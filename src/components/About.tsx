import { useState, useEffect } from 'react';
import { User, Heart, Code, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const CounterAnimation = ({ end, suffix = '', duration = 1   }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration]);

  return (
    <div className="text-center will-change-transform">
      <div className="text-4xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
    </div>
  );
};

const About = () => {
  const { personal, stats } = portfolioData;

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.06),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.04),transparent_70%)]"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 w-24 h-24 border border-blue-500/10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-teal-500/10 rounded-lg rotate-45"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-400/20 rounded-full mb-8">
            <User size={18} className="text-blue-400" />
            <span className="text-blue-400 font-medium tracking-wider">ABOUT ME</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-teal-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Bio Section */}
          <div className="animate-fade-in-left">
            <div className="elegant-card p-8 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 gradient-button rounded-xl flex items-center justify-center">
                  <Heart size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">About Me</h3>
              </div>
              
              <p className="text-slate-400 leading-relaxed mb-6">
                {personal.bio}
              </p>
              
              {/* Philosophy Section */}
              <div className="bg-gradient-to-r from-blue-500/8 to-teal-500/8 border border-blue-400/15 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-xl">💭</span>
                  My Philosophy
                </h4>
                <p className="text-slate-300 leading-relaxed italic">
                  {personal.philosophy}
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="animate-fade-in-right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="elegant-card p-6 hover-lift text-center group">
                  {/* Stat icon */}
                  <div className="w-14 h-14 gradient-button rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 will-change-transform">
                    {index === 0 && <Code size={22} className="text-white" />}
                    {index === 1 && <Award size={22} className="text-white" />}
                    {index === 2 && <User size={22} className="text-white" />}
                    {index === 3 && <span className="text-white text-xl">⚡</span>}
                  </div>
                  
                  <div>
                    <CounterAnimation 
                      end={stat.value} 
                      suffix={stat.suffix}
                    />
                    <p className="text-slate-400 font-medium mt-2 text-sm leading-tight group-hover:text-slate-300 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { useState, useEffect, useRef } from 'react';
import { User, Heart, Code, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const CounterAnimation = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCount(prev => {
          const increment = Math.ceil(end / (duration / 50));
          const nextValue = prev + increment;
          
          if (nextValue >= end) {
            clearInterval(timer);
            return end;
          }
          
          return nextValue;
        });
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-4xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
    </div>
  );
};

const About = () => {
  const { personal, stats } = portfolioData;

  return (
    <section id="about" className="py-12 md:py-20 relative overflow-hidden scroll-snap-align-start">
      {/* Enhanced layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 md:top-20 left-4 md:left-20 w-16 h-16 md:w-32 md:h-32 border border-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 md:bottom-20 right-4 md:right-20 w-12 h-12 md:w-24 md:h-24 border border-purple-500/20 rounded-lg animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-4 md:h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-full mb-6 md:mb-8">
            <User size={16} className="text-blue-400 md:w-5 md:h-5" />
            <span className="text-blue-400 font-medium tracking-wider text-sm md:text-base">GET TO KNOW ME</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
              Me
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
            </span>
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start max-w-none">
          {/* Enhanced Bio Section */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-blue-500/10 hover:border-white/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center">
                  <Heart size={20} className="text-white md:w-6 md:h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  About Me
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-4 md:mb-6 font-light">
                {personal.bio}
              </p>
              
              {/* Philosophy Section */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl md:rounded-2xl p-4 md:p-6 mb-4 md:mb-6 hover:from-blue-500/15 hover:to-purple-500/15 transition-all duration-300">
                <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3 flex items-center gap-2">
                  <span className="text-xl md:text-2xl">💭</span>
                  My Philosophy
                </h4>
                <p className="text-gray-300 leading-relaxed italic text-sm md:text-base font-light">
                  {personal.philosophy}
                </p>
              </div>
              
             
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="space-y-4 md:space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 relative overflow-hidden hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                  {/* Stat icon */}
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    {index === 0 && <Code size={20} className="text-white md:w-6 md:h-6" />}
                    {index === 1 && <Award size={20} className="text-white md:w-6 md:h-6" />}
                    {index === 2 && <User size={20} className="text-white md:w-6 md:h-6" />}
                    {index === 3 && <span className="text-white text-lg md:text-xl">⚡</span>}
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <CounterAnimation 
                      end={stat.value} 
                      suffix={stat.suffix}
                    />
                    <p className="text-gray-400 font-medium mt-1 md:mt-2 group-hover:text-gray-300 transition-colors duration-300 text-xs md:text-sm leading-tight">{stat.label}</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2 md:top-3 md:right-3 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-lg group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
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
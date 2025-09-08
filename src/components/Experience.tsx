import { memo } from 'react';
import { MapPin, TrendingUp, Building2, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  icon: string;
}

const ExperienceCard = memo(({ experience }: { experience: Experience }) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '50px',
  });

  return (
    <div 
      ref={elementRef}
      className={`flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-500 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Timeline Node */}
      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg mt-1">
        <span className="text-xs sm:text-sm">{experience.icon}</span>
      </div>
      
      {/* Content Card */}
      <div className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 sm:p-4 hover:bg-gray-800/70 transition-colors duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{experience.title}</h3>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <Building2 size={12} className="sm:w-3.5 sm:h-3.5" />
              <span>{experience.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full self-start">
            <Calendar size={10} className="text-blue-400 sm:w-3 sm:h-3" />
            <span className="text-blue-300 text-xs font-medium whitespace-nowrap">{experience.duration}</span>
          </div>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{experience.description}</p>
      </div>
    </div>
  );
});

const Experience = memo(() => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 relative">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-gray-900"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full mb-4 sm:mb-6">
            <TrendingUp size={14} className="text-blue-400 sm:w-4 sm:h-4" />
            <span className="text-blue-300 font-medium text-xs sm:text-sm">Professional Journey</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            My Career{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Journey from curiosity to expertise
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>
          
          {/* Experience Items */}
          <div className="space-y-4 sm:space-y-6">
            {experience.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full mb-3 sm:mb-4">
            <MapPin size={12} className="text-purple-400 sm:w-3.5 sm:h-3.5" />
            <span className="text-purple-300 text-xs sm:text-sm">Based in Jaipur, India</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 px-4">Ready for the Next Chapter</h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto px-4">
            Let's build something extraordinary together.
          </p>
        </div>
      </div>
    </section>
  );
});

ExperienceCard.displayName = 'ExperienceCard';
Experience.displayName = 'Experience';

export default Experience;
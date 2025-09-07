import { MapPin, TrendingUp, Building2, Calendar, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  icon: string;
}

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative">
      {/* Timeline Connector */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30"></div>
      
      {/* Timeline Node */}
      <div className="absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 shadow-lg z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse opacity-75"></div>
      </div>
      
      {/* Experience Card */}
      <div className={`relative ${isEven ? 'pr-8 lg:pr-16' : 'pl-8 lg:pl-16'} ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
        <div className={`group relative max-w-lg ${isEven ? 'ml-auto lg:mr-8' : 'mr-auto lg:ml-8'} hover:scale-105 transition-all duration-500`}>
          
          {/* Main Card Container */}
          <div className="relative bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden">
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-bl from-blue-500 to-purple-600 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-xl"></div>
            </div>
            
            {/* Floating Icon */}
            <div className={`absolute ${isEven ? '-left-4' : '-right-4'} top-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300 z-10`}>
              <span className="text-lg">{experience.icon}</span>
            </div>
            
            {/* Content */}
            <div className="relative z-10 pt-2">
              {/* Duration Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full mb-3 ${isEven ? 'lg:ml-auto' : ''}`}>
                <Calendar size={12} className="text-blue-400" />
                <span className="text-blue-300 font-medium text-xs tracking-wide">
                  {experience.duration}
                </span>
              </div>
              
              {/* Company */}
              <div className={`flex items-center gap-2 mb-2 ${isEven ? 'lg:justify-end' : 'justify-start'}`}>
                <Building2 size={16} className="text-gray-400" />
                <span className="text-gray-300 font-semibold text-sm">
                  {experience.company}
                </span>
              </div>
              
              {/* Role Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                {experience.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                {experience.description}
              </p>
              
              {/* Achievement Badge */}
              <div className={`inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full ${isEven ? 'lg:ml-auto' : ''}`}>
                <Star size={10} className="text-yellow-400" />
                <span className="text-yellow-300 font-medium text-xs">Key Achievement</span>
              </div>
            </div>
            
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Connection Arrow */}
          <div className={`absolute top-8 ${isEven ? '-right-2 lg:-right-4' : '-left-2 lg:-left-4'} w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rotate-45 border-2 border-gray-900`}></div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(147,51,234,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.08),transparent_70%)]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-pulse delay-500"></div>
      </div>
      
      {/* Mesh Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 border border-blue-400/30 rounded-full mb-8 backdrop-blur-xl shadow-2xl">
            <TrendingUp size={20} className="text-blue-400" />
            <span className="text-blue-300 font-bold tracking-wider text-sm uppercase">Professional Journey</span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            My Career{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
              Timeline
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
            </span>
          </h2>
          
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Tracing the path from curiosity to expertise - each milestone marking growth, learning, and innovation
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-full shadow-lg"></div>
          
          {/* Experience Timeline */}
          <div className="space-y-16">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
        
        {/* Enhanced Bottom Section */}
        <div className="text-center mt-24 pt-12 border-t border-gradient-to-r from-transparent via-white/10 to-transparent">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/15 to-pink-500/15 border border-purple-400/30 rounded-full mb-6 backdrop-blur-xl">
            <MapPin size={18} className="text-purple-400" />
            <span className="text-purple-300 font-semibold text-sm">Based in Jaipur, India</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Ready for the Next Chapter</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and driving technological advancement. 
            Let's build something extraordinary together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
import { ArrowDown, Download, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const { personal } = portfolioData;

  const handleWhatsAppClick = () => {
    const phoneNumber = '+91 63754 26292';
    const message = 'Hi! I would like to discuss a project with you.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Modern elegant background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(20,184,166,0.06),transparent_50%)]"></div>
      
      {/* Subtle geometric elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-blue-500/10 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-teal-500/10 rounded-lg rotate-45"></div>
      </div>

      <ParticleBackground />
      
      {/* Minimal grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Professional Left Content */}
          <div className="text-white space-y-8 text-center lg:text-left animate-fade-in-up">
            {/* Status Badge */}
            {personal.availableForWork && (
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 border border-emerald-400/25 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 font-medium text-sm tracking-wide">AVAILABLE FOR WORK</span>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                  <span className="block text-slate-200 mb-2">
                    Hi, I'm
                  </span>
                  <span className="block bg-gradient-to-r from-blue-400 via-indigo-500 to-teal-500 bg-clip-text text-transparent">
                    {personal.name}
                  </span>
                </h1>
              </div>
              
              <h2 className="text-2xl sm:text-3xl text-slate-300 font-light">
                {personal.title}
              </h2>
              
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {personal.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="gradient-button px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 text-white">
                <Download size={20} />
                <span>Download CV</span>
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="gradient-button-teal px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 text-white"
              >
                <MessageCircle size={20} />
                <span>Let's Talk</span>
              </button>
            </div>
          </div>

          {/* Clean Profile Card */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0 animate-fade-in-right">
            <div className="relative hover-lift">
              <div className="elegant-card p-8 max-w-sm">
                <div className="relative">
                  <img
                    src={personal.image}
                    alt={personal.name}
                    className="w-80 h-80 object-cover rounded-2xl shadow-xl"
                  />
                </div>
                
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{personal.name}</h3>
                  <p className="text-blue-400 font-medium">{personal.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center gap-3 group">
          <span className="text-slate-400 text-sm font-medium group-hover:text-blue-400 transition-colors duration-300">Scroll to explore</span>
          <div className="p-3 border border-slate-600 rounded-full group-hover:border-blue-400 transition-all duration-300 animate-bounce">
            <ArrowDown size={18} className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
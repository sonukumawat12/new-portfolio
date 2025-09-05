import { ArrowDown, Download, MessageCircle, Sparkles } from 'lucide-react';
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
    <section id="home" className="min-h-screen relative overflow-hidden scroll-snap-align-start">
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/30 to-purple-950/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.15),transparent_50%)]"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-24 h-24 border border-blue-500/20 rounded-full animate-spin"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 border border-purple-500/20 rounded-lg transform rotate-45 animate-pulse"></div>
      </div>

      <ParticleBackground />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Enhanced Left Content */}
          <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left animate-fade-in mt-16 sm:mt-0">
            {/* Enhanced Header with Badge */}
            {personal.availableForWork && (
              <div className="flex justify-center lg:justify-start mb-4 sm:mb-6 animate-slide-down">
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full backdrop-blur-sm shadow-lg shadow-green-500/10 cursor-pointer transition-all duration-300 hover:border-green-400/50 hover:shadow-green-500/20 hover:scale-105 hover:-translate-y-0.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/60 animate-pulse"></div>
                  <span className="text-green-400 font-semibold tracking-wider text-xs sm:text-sm whitespace-nowrap">AVAILABLE FOR WORK</span>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div className="animate-slide-up">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-gray-200 animate-slide-right">
                    Hi, I'm
                  </span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative animate-slide-right">
                    {personal.name}
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
                  </span>
                </h1>
              </div>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light flex items-center justify-center lg:justify-start gap-3 animate-slide-up">
                <Sparkles className="text-yellow-400" size={32} />
                {personal.title}
              </h2>
              
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mx-auto lg:mx-0 animate-slide-up">
                {personal.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold flex items-center justify-center gap-3 overflow-hidden transform-gpu will-change-transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download size={20} className="relative z-10" />
                <span className="relative z-10">Download CV</span>
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="group relative px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold overflow-hidden transform-gpu will-change-transform flex items-center justify-center gap-3 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageCircle size={20} className="relative z-10 group-hover:text-white transition-colors duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Let's Talk</span>
              </button>
            </div>
          </div>

          {/* Enhanced Right Content */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0 animate-fade-in">
            <div className="relative group transform-gpu will-change-transform hover:scale-105 hover:-translate-y-2 transition-all duration-600">
              {/* Enhanced glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-2xl blur-xl opacity-40 group-hover:opacity-80 transition-all duration-300"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="relative hover:scale-105 transition-transform duration-400">
                  <img
                    src={personal.image}
                    alt={personal.name}
                    className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-spin">
                    <Sparkles size={16} className="text-white" />
                  </div>
                </div>
                
                <div className="mt-6 text-center animate-slide-up">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{personal.name}</h3>
                  <p className="text-blue-400 font-semibold text-base sm:text-lg">{personal.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-fade-in"
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center gap-2 group animate-bounce">
          <span className="text-white/60 text-sm font-medium group-hover:text-white transition-colors duration-300">Scroll to explore</span>
          <div className="p-3 border-2 border-white/30 rounded-full group-hover:border-blue-400 transition-colors duration-300">
            <ArrowDown size={20} className="text-white/60 group-hover:text-blue-400 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
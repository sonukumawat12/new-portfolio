import { Heart, Code, Coffee, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const socialIcons = {
    Github,
    Linkedin, 
    Twitter,
    Mail
  };

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-blue-950/10 to-purple-950/10 border-t border-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              {portfolioData.personal.name}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Crafting digital experiences with passion and precision
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
              <span>Made with</span>
              <div>
                <Heart size={16} className="text-red-400" />
              </div>
              <span>and</span>
              <Coffee size={16} className="text-amber-400" />
              <Code size={16} className="text-green-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold text-white mb-6">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              {portfolioData.social.map((social) => {
                const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="p-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-blue-400/50 transition-colors duration-300"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-500 text-sm">
              {portfolioData.personal.email}
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            {new Date().getFullYear()} {portfolioData.personal.name}. Designed & Built with React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
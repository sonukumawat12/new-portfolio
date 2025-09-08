import { useState, useCallback, memo, useMemo } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useThrottledScroll } from '../hooks/useScrollAnimation';

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback((scrollY: number) => {
    setScrolled(scrollY > 50);
  }, []);

  useThrottledScroll(handleScroll);

  const navItems = useMemo(() => [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ], []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slide-down ${
        scrolled 
          ? 'bg-gray-950/90 backdrop-blur-xl border-b border-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 shadow-2xl' 
          : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer hover:scale-102 transition-transform duration-200 will-change-transform">
            <Sparkles size={24} className="text-blue-400" />
            SONU KUMAWAT
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-300 hover:text-white hover:scale-102 hover:bg-blue-600/10 active:scale-98 transition-all duration-200 relative group rounded-lg animate-fade-in will-change-transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-3/4 transition-all duration-200 rounded-full will-change-auto"></span>
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href="#contact"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-500 hover:to-purple-500 hover:scale-102 hover:shadow-[0_8px_20px_rgba(59,130,246,0.25)] active:scale-98 transition-all duration-200 will-change-transform"
            >
              Let's Talk
            </a>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-white hover:border-blue-400/50 hover:scale-105 active:scale-95 transition-all duration-200 will-change-transform"
          >
            <div
              className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'} will-change-transform`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border border-white/10 rounded-2xl mt-4 p-6 mb-4 animate-slide-down">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 relative group animate-slide-right will-change-auto opacity-0"
                  style={{ 
                    animationDelay: `${index * 0.08}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-auto"></div>
                </a>
              ))}
              
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium text-center hover:from-blue-500 hover:to-purple-500 transition-all duration-300 animate-slide-right will-change-auto opacity-0"
                style={{ 
                  animationDelay: `${navItems.length * 0.08}s`,
                  animationFillMode: 'forwards'
                }}
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;